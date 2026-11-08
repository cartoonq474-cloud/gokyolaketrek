#!/usr/bin/env node
/**
 * Fails the build if an em-dash (U+2014) is committed anywhere in the project.
 *
 * House style: this site uses no em-dashes. Use a comma for an appositive, a
 * colon before an explanation or a list, a full stop for a new sentence, and
 * a pipe in title tags. En-dashes (U+2013) are still allowed in numeric
 * ranges such as "3–4 days" and "8–10 h".
 *
 * Usage: node scripts/check-no-emdash.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", ".vercel", "dist", "build"]);
const CHECK_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".md", ".css", ".json", ".html", ".txt", ".yaml", ".yml"]);

// Built from char codes so this file never contains the literal it bans.
const EM = String.fromCharCode(0x2014);
const AMP = String.fromCharCode(38);
const BANNED = [
  { char: EM, name: `em-dash (${EM})` },
  { char: `${AMP}mdash;`, name: `${AMP}mdash; entity` },
  { char: `${AMP}#8212;`, name: `${AMP}#8212; entity` },
  { char: `${AMP}#x2014;`, name: `${AMP}#x2014; entity` },
];

const offences = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    if (!CHECK_EXT.has(extname(entry))) continue;
    const lines = readFileSync(full, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const { char, name } of BANNED) {
        if (line.includes(char)) {
          offences.push({ file: relative(ROOT, full), line: i + 1, name, text: line.trim().slice(0, 120) });
          break;
        }
      }
    });
  }
}

walk(ROOT);

if (offences.length === 0) {
  console.log("✓ no em-dashes found");
  process.exit(0);
}

console.error(`✗ ${offences.length} em-dash${offences.length === 1 ? "" : "es"} found. This project uses no em-dashes.\n`);
for (const o of offences) {
  console.error(`  ${o.file}:${o.line}  ${o.name}`);
  console.error(`    ${o.text}`);
}
console.error(`\n  Replace with: comma (appositive), colon (explanation or list),`);
console.error(`  full stop (new sentence), or a pipe "|" in title tags.`);
process.exit(1);
