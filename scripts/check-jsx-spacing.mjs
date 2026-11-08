#!/usr/bin/env node
/**
 * Fails the build when a JSX element and its neighbouring text would render
 * glued together with no space, e.g. "theguided 14-day" instead of
 * "the guided 14-day".
 *
 * Why this exists: JSX drops the whitespace between a text node and a sibling
 * element when that whitespace contains a newline. So this
 *
 *   Booked direct with us, the
 *   <strong>guided 14-day Circuit</strong>
 *
 * renders as "Booked direct with us, theguided 14-day Circuit". A bulk reformat
 * that moves inline tags onto their own lines silently breaks every sentence it
 * touches, and nothing in tsc or the React build complains.
 *
 * The fix is to keep the inline tag on the same line as the text around it, or
 * to add an explicit {" "} between them.
 *
 * This script parses each file with the TypeScript compiler, reproduces Babel's
 * JSX text-trimming rules, then compares the last rendered character of each
 * child with the first rendered character of the next one.
 *
 * Usage: node scripts/check-jsx-spacing.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", ".vercel", "dist", "build"]);
const CHECK_EXT = new Set([".tsx", ".jsx"]);

// Elements that flow inside a line of prose. Anything not listed here starts a
// new block box, so a missing space between it and its neighbour is invisible.
const INLINE_TAGS = new Set([
  "a", "abbr", "b", "bdi", "bdo", "big", "cite", "code", "data", "del", "dfn",
  "em", "i", "ins", "kbd", "label", "mark", "q", "s", "samp", "small", "span",
  "strong", "sub", "sup", "time", "u", "var", "wbr",
  "Link", "Anchor",
]);

// Void or replaced elements: they render nothing textual, so adjacency to them
// tells us nothing. Treated as a hard break in the adjacency scan.
const OPAQUE_TAGS = new Set(["br", "hr", "img", "input", "svg", "use", "path", "Image", "Icon"]);

// mdash is built from its code point so this file never contains the
// character that scripts/check-no-emdash.mjs bans.
const ENTITIES = {
  nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
  pound: "£", deg: "°", times: "×", minus: "−", hellip: "…",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
  ndash: "–", mdash: String.fromCharCode(0x2014), eacute: "é",
};

function decodeEntities(str) {
  return str.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (whole, body) => {
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X"
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : whole;
    }
    return Object.prototype.hasOwnProperty.call(ENTITIES, body) ? ENTITIES[body] : whole;
  });
}

/**
 * Babel's cleanJSXElementLiteralChild, which is what actually decides whether a
 * space survives. Lines are trimmed, blank lines are dropped, and surviving
 * lines are joined with a single space.
 */
function renderJsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  let lastNonEmpty = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/[^ \t]/.test(lines[i])) lastNonEmpty = i;
  }
  let out = "";
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].replace(/\t/g, " ");
    if (i !== 0) line = line.replace(/^ +/, "");
    if (i !== lines.length - 1) line = line.replace(/ +$/, "");
    if (line) {
      if (i !== lastNonEmpty) line += " ";
      out += line;
    }
  }
  return decodeEntities(out);
}

function tagNameOf(node) {
  const opening = ts.isJsxElement(node) ? node.openingElement : node;
  return opening.tagName.getText();
}

/**
 * Reduce a child to what matters for the adjacency test:
 *   { text }   rendered text, may be ""
 *   { opaque } unknown or non-textual, breaks the scan
 *   { block }  block-level element, no space needed across it
 */
function classify(node) {
  if (ts.isJsxText(node)) return { text: renderJsxText(node.text) };

  if (ts.isJsxExpression(node)) {
    const e = node.expression;
    if (!e) return { opaque: true };
    if (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) return { text: e.text };
    return { opaque: true };
  }

  if (ts.isJsxSelfClosingElement(node)) {
    const tag = tagNameOf(node);
    if (OPAQUE_TAGS.has(tag)) return { opaque: true };
    return INLINE_TAGS.has(tag) ? { opaque: true } : { block: true };
  }

  if (ts.isJsxElement(node)) {
    const tag = tagNameOf(node);
    if (OPAQUE_TAGS.has(tag)) return { opaque: true };
    if (!INLINE_TAGS.has(tag) && !/^[a-z]/.test(tag)) return { block: true };
    if (!INLINE_TAGS.has(tag)) return { block: true };
    // Inline element: its rendered text is the concatenation of its children.
    let text = "";
    let sawOpaque = false;
    for (const child of node.children) {
      const c = classify(child);
      if (c.opaque || c.block) { sawOpaque = true; continue; }
      text += c.text;
    }
    if (!text) return { opaque: true };
    return { text, partial: sawOpaque };
  }

  if (ts.isJsxFragment(node)) {
    let text = "";
    for (const child of node.children) {
      const c = classify(child);
      if (c.opaque || c.block) return { opaque: true };
      text += c.text;
    }
    return text ? { text } : { opaque: true };
  }

  return { opaque: true };
}

// A space is needed unless one side already supplies whitespace, the following
// character is punctuation that attaches to the word before it, or the
// preceding character is an opener the next word attaches to.
const CLOSERS = new Set([",", ".", ";", ":", "!", "?", ")", "]", "}", "%", "’", "”", '"', "'", "/", "-", "–"]);
const OPENERS = new Set(["(", "[", "{", "£", "$", "€", "‘", "“", '"', "'", "/", "-", "–", "#", "~", "+", "@"]);

function needsSpace(prevChar, nextChar) {
  if (/\s/.test(prevChar) || /\s/.test(nextChar)) return false;
  if (CLOSERS.has(nextChar)) return false;
  if (OPENERS.has(prevChar)) return false;
  return true;
}

const offences = [];

// Punctuation that must never be preceded by a space, nor open a block of prose.
const TIGHT_PUNCT = /[,;:!?]|\.(?!\.)/;

function scanFile(full) {
  const src = readFileSync(full, "utf8");
  const sf = ts.createSourceFile(full, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  const at = (node) => sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1;

  /**
   * A newline inside a single text node collapses to a space, so punctuation
   * left at the start of a continuation line renders as "here yet . Full".
   */
  function checkStrandedPunctuation(children) {
    for (const child of children) {
      if (!ts.isJsxText(child)) continue;
      const rendered = renderJsxText(child.text);
      const m = rendered.match(new RegExp(` (${TIGHT_PUNCT.source})`));
      if (!m) continue;
      const i = m.index;
      offences.push({
        kind: "space before punctuation",
        file: relative(ROOT, full),
        line: at(child),
        detail: `renders "${rendered.slice(Math.max(0, i - 30), i)} ${rendered.slice(i + 1, i + 30)}"`,
        hint: `move the "${m[1]}" up to the end of the previous line`,
      });
    }
  }

  /** A paragraph or component body must not open with a comma or full stop. */
  function checkOrphanOpening(parent, children) {
    for (const child of children) {
      const c = classify(child);
      if (c.block || c.opaque) return;
      if (!c.text) continue;
      // Only real prose counts. A lone glyph like the "?" in a callout badge is
      // decoration, so require the punctuation to be followed by a word.
      if (new RegExp(`^(${TIGHT_PUNCT.source}) \\S`).test(c.text)) {
        offences.push({
          kind: "block opens with punctuation",
          file: relative(ROOT, full),
          line: at(child),
          detail: `<${tagNameOf(parent)}> content starts "${c.text.slice(0, 60)}"`,
          hint: "the sentence this punctuation belonged to is missing",
        });
      }
      return; // only the first rendered child matters
    }
  }

  function checkChildren(children) {
    let prev = null; // { char, context, isText }
    for (const child of children) {
      const c = classify(child);
      if (c.block) { prev = null; continue; }
      if (c.opaque) { prev = null; continue; }
      if (c.text === "") continue; // whitespace-only: renders nothing, keeps prev
      const isText = ts.isJsxText(child);
      const first = c.text[0];
      // Only prose is checked: a text node next to an element. Two elements in
      // a row with nothing between them is a deliberate layout list (payment
      // badges, nav links, button pairs), where the gap comes from CSS.
      if (prev && (isText || prev.isText) && needsSpace(prev.char, first)) {
        offences.push({
          kind: "glued words",
          file: relative(ROOT, full),
          line: at(child),
          detail: `renders "${prev.char}${first}" with no space`,
          hint: `...${prev.context} <-- MISSING SPACE --> ${c.text.slice(0, 40)}...`,
        });
      }
      prev = { char: c.text[c.text.length - 1], context: c.text.slice(-40), isText };
    }
  }

  function visit(node) {
    if (ts.isJsxElement(node) || ts.isJsxFragment(node)) {
      checkChildren(node.children);
      checkStrandedPunctuation(node.children);
      if (ts.isJsxElement(node)) checkOrphanOpening(node, node.children);
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) { walk(full); continue; }
    if (!CHECK_EXT.has(extname(entry))) continue;
    scanFile(full);
  }
}

walk(ROOT);

if (offences.length === 0) {
  console.log("✓ JSX renders with correct spacing");
  process.exit(0);
}

console.error(`✗ ${offences.length} JSX spacing problem${offences.length === 1 ? "" : "s"}.\n`);
for (const o of offences) {
  console.error(`  ${o.file}:${o.line}  [${o.kind}] ${o.detail}`);
  console.error(`    ${o.hint}`);
}
console.error(`\n  Fix: keep inline tags and their punctuation on the same line as the`);
console.error(`  text around them, or put an explicit {" "} between them.`);
process.exit(1);
