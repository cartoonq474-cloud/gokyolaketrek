"use client";
import type { NavItem } from "../data/types";
import { useEffect, useRef, useState } from "react";

// If a click's target section never settles under the bar (a short last
// section, an interrupted smooth scroll), give up waiting and hand control
// back to the scroll spy.
const CLICK_LOCK_TIMEOUT = 1200;

export function Subnav({
  items,
  cta,
}: {
  items: NavItem[];
  cta?: { label: string; href: string };
}) {
  const [activeHash, setActiveHash] = useState("");
  const navRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  // Set on click, cleared once the page has actually arrived. Smooth scrolling
  // sweeps the trip line past every section in between, and without this the
  // highlight would strobe through all of them on the way down.
  const lockedHash = useRef<string | null>(null);

  // Scroll spy. The trip line is the bar's own bottom edge, so it stays
  // correct whatever the header above it is doing: a section is "current"
  // from the moment its top slides under the bar until the next one does.
  useEffect(() => {
    const sections = items
      .filter((item) => item.href.startsWith("#"))
      .map((item) => ({
        href: item.href,
        el: document.getElementById(decodeURIComponent(item.href.slice(1))),
      }))
      .filter((s): s is { href: string; el: HTMLElement } => s.el !== null);

    if (!sections.length) return;

    let frame = 0;
    let lockExpires = 0;

    const measure = () => {
      frame = 0;

      const line = navRef.current?.getBoundingClientRect().bottom ?? 0;
      const doc = document.documentElement;
      // The last section is often shorter than the viewport, so its top never
      // reaches the line. Bottom of the page always means the last item.
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 2;

      let current = sections[0].href;
      if (atBottom) {
        current = sections[sections.length - 1].href;
      } else {
        for (const section of sections) {
          if (section.el.getBoundingClientRect().top - line <= 1) {
            current = section.href;
          }
        }
      }

      if (lockedHash.current) {
        const arrived = current === lockedHash.current;
        if (!arrived && Date.now() < lockExpires) return;
        lockedHash.current = null;
      }

      setActiveHash(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      lockedHash.current = hash;
      lockExpires = Date.now() + CLICK_LOCK_TIMEOUT;
      setActiveHash(hash);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  // On a narrow screen the bar scrolls sideways, so the highlighted item can
  // end up off-screen. Drag it back into view whenever it changes.
  //
  // This scrolls the <ul> and nothing else. It used to call scrollIntoView on
  // the link, which walks every scrollable ancestor including the document: the
  // scroll spy sets an active item on mount, the bar sits below a full-height
  // hero, so `block: "nearest"` scrolled the whole page down by ~380px before
  // the visitor had touched anything and the hero was never seen. Only the
  // horizontal position was ever wanted.
  useEffect(() => {
    const list = listRef.current;
    if (!activeHash || !list) return;
    const link = list.querySelector<HTMLElement>(`a[href="${activeHash}"]`);
    if (!link) return;
    list.scrollTo({
      left: link.offsetLeft - (list.clientWidth - link.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [activeHash]);

  return (
    <nav
      ref={navRef}
      className="sticky top-22 z-22  bg-[var(--brand-navy)]/95 border-b border-white/10 backdrop-blur-xl"
      aria-label="On this page"
    >
      <div className=" flex items-center justify-center  gap-4 ">
        <ul
          ref={listRef}
          className="flex flex-nowrap items-center gap-4 overflow-x-auto pr-4  uppercase  text-white/70"
        >
          {items.map((item) => {
            const isActive = item.href === activeHash;
            return (
              <li key={item.href} className="flex-none">
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "inline-flex  px-3.5 py-4 text-sm md:text-base transition " +
                    (isActive
                      ? "text-white border-b-2 border-b-[var(--brand-on-dark)]"
                      : "text-white/70 hover:bg-white/10 hover:text-white")
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {cta ? (
          <a
            className="inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.11em] text-white transition hover:bg-[var(--brand-hover)]"
            href={cta.href}
          >
            <span>{cta.label}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        ) : null}
      </div>
    </nav>
  );
}
