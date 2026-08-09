"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";
import type { TrekConfig } from "../data/types";
import { Menu } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

// A nav item can override where its "All ..." footer link points and what it is
// called. Both are optional: the footer link falls back to the item's own href
// and label.
type NavItem = TrekConfig["nav"][number] & {
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function TopBar({ config }: { config: TrekConfig }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  const nav = config.nav as NavItem[];

  const toggleSub = (label: string) =>
    setSubOpen((current) => (current === label ? null : label));

  // Escape has to close the drawer as well as the desktop dropdown. Leaving it
  // out meant a keyboard user who opened the drawer had no way back out of it
  // except by finding the close button, which is WCAG 2.1.2.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSubOpen(null);
      setMenuOpen(false);
      setMobileSubOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /**
   * Focus management for the drawer, which is a modal dialog: focus moves into
   * it on open, cycles inside it while it is up, and returns to the burger on
   * close. Without the trap, Tab walks straight out of the "modal" and into the
   * page behind it, which `aria-modal` has just told the screen reader is inert.
   */
  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = () =>
      Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);

    focusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !drawer.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    drawer.addEventListener("keydown", onKeyDown);
    return () => {
      drawer.removeEventListener("keydown", onKeyDown);
      // Send focus back to the control that opened it, not to the top of the
      // document. Guarded on the button still being on screen (it is hidden
      // above `lg`, where the drawer cannot be open anyway).
      burgerRef.current?.focus();
    };
  }, [menuOpen]);

  // Click-to-open menus need a click-outside to close them again: without it
  // the panel would stay up until you hit Escape or picked a link.
  useEffect(() => {
    if (!subOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setSubOpen(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [subOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setSubOpen(null);
    setMobileSubOpen(null);
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href);

  // Header is fully transparent at the top with nothing hovered. As soon as
  // the pointer enters the nav (or a dropdown is open), the WHOLE header
  // gets a background color, not just the individual link. Once scrolled,
  // it's solid white regardless of hover.
  const headerClass = scrolled
    ? "bg-white   border-b border-slate-200/70"
    : navHover || !!subOpen || menuOpen
      ? "bg-[var(--brand-navy)]/95 border-b border-white/10"
      : "bg-transparent border-b-0";

  // Text starts white on the transparent header. As soon as you're
  // hovering anywhere in the nav (or a dropdown is open), every link dims
  // to a washed-out blue, except the one link your cursor is actually on
  // (or the current page), which pops to a bright blue. Moving the cursor
  // to a different link swaps which one is bright.
  //
  // Once scrolled the header is solid white, so the links go black. No
  // dimming there: grey on white read as disabled rather than as "not the
  // one you're on".
  const linkClass = (href: string, label: string) => {
    const active = isActive(href) || subOpen === label;

    if (scrolled) {
      return [
        "relative inline-flex items-center  px-3 py-1.5 text-lg  uppercase  transition-colors duration-200 ",
        active ? "text-[var(--brand-ink)]" : "text-black",
        "hover:text-[var(--brand-ink)]",
      ].join(" ");
    }
    // Dark ground here, so the lifted blue rather than --brand: the full-strength
    // brand blue on a darkened photograph is close to unreadable.
    const dimmed = navHover || !!subOpen ? "text-white/55" : "text-white";
    return [
      "relative inline-flex items-center  px-3 py-1.5  text-lg uppercase  transition-colors duration-200 ",
      active ? "text-[var(--brand-on-dark)]" : dimmed,
      "hover:text-[var(--brand-on-dark)]",
    ].join(" ");
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors  duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4  py-5 px-4">
          <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-3"
            >
              {/*
                The bar is transparent over the hero photo until it scrolls, then
                turns white. The dark lockup is unreadable in the first state and
                the light one is unreadable in the second, so it swaps with the
                same `scrolled` flag the nav links use.
              */}
              {config.logo || config.logoLight ? (
                <img
                  src={
                    scrolled
                      ? (config.logo ?? config.logoLight)
                      : (config.logoLight ?? config.logo)
                  }
                  alt={`${config.brand}, home`}
                  width={859}
                  height={240}
                  className="h-12 w-auto sm:h-12"
                />
              ) : (
                <span
                  className={`text-[1.35rem] font-bold leading-none tracking-tight transition-colors duration-200 ${
                    scrolled ? "text-[var(--ink)]" : "text-white"
                  }`}
                >
                  {config.brand}
                </span>
              )}
            </Link>
          </div>

          <nav
            ref={navRef}
            aria-label="Main"
            onMouseEnter={() => setNavHover(true)}
            onMouseLeave={() => setNavHover(false)}
            className="hidden lg:flex lg:items-center lg:gap-10"
          >
            {nav.map((item) =>
              item.children?.length ? (
                <div key={item.label} className="relative">
                  {/* Tap-to-open, not hover-to-open: the parent is a button
                      rather than a link, so one click reveals the children
                      instead of navigating away from them. */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={subOpen === item.label}
                    onClick={() => toggleSub(item.label)}
                    className={linkClass(item.href, item.label)}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                        subOpen === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Compact dropdown, anchored under its trigger rather than
                      spanning the header. It carries the same dark navy as the
                      header's own hover state, so the panel reads as an
                      extension of the bar and not as a white card floating
                      over it once the page has scrolled. */}
                  <div
                    className={[
                      "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3",
                      "transition duration-150 ease-out",
                      subOpen === item.label
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    ].join(" ")}
                  >
                    <div className="relative w-[19rem] rounded-xl border border-slate-800/70 bg-[var(--brand-navy)]/95 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                      {/* The five itinerary variants are a browse surface, not
                          the next click, and prefetching all of them on every
                          page view is 100 KB+ of RSC payload on mobile data. */}
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href as Route}
                          prefetch={false}
                          onClick={closeAll}
                          className="group/item block rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-white/10"
                        >
                          <span className="block text-[0.95rem] font-semibold leading-tight text-white transition-colors duration-150 group-hover/item:text-[var(--brand-on-dark)]">
                            {child.label}
                          </span>
                          {child.note && (
                            <span className="mt-1 block text-[0.8rem] normal-case leading-tight text-white/55">
                              {child.note}
                            </span>
                          )}
                        </Link>
                      ))}

                      {/* <Link
                        href={(item.viewAllHref ?? item.href) as Route}
                        onClick={closeAll}
                        className="mt-1.5 flex items-center justify-between gap-2 rounded-lg border-t border-[var(--line-2)] px-3 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-ink)] transition-colors duration-150 hover:bg-[var(--tint)]"
                      >
                        <span>All {item.viewAllLabel ?? item.label}</span>
                        <span aria-hidden="true">→</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href as Route}
                  onClick={closeAll}
                  className={linkClass(item.href, item.label)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-3 py-2   leading-none text-white shadow-md shadow-emerald-900/20 transition hover:bg-green-600"
            >
              <BsWhatsapp />
              <span>Chat</span>
            </a>
          </div>
          <button
            ref={burgerRef}
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={`inline-flex items-center justify-center rounded-full p-2 transition lg:hidden ${
              scrolled
                ? "text-black hover:text-[var(--brand-ink)]"
                : "text-slate-200 hover:text-white"
            }`}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={closeAll}
        className={[
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/*
        Closed, the drawer is only translated off-screen, so without `inert` it
        stays in the accessibility tree and the tab order on every page: 13
        invisible links, and an `aria-modal` that permanently asserts the rest
        of the document is inert. `inert` removes it from both and blocks the
        clicks; `aria-hidden` is belt and braces for older assistive tech, and
        `aria-modal` only claims the page while the drawer is actually up.
      */}
      <div
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal={menuOpen ? true : undefined}
        aria-hidden={menuOpen ? undefined : true}
        inert={!menuOpen}
        aria-label="Site navigation"
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto",
          "bg-neutral-900 text-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          {/* The drawer is bg-neutral-900, so it always wants the light lockup. */}
          {config.logoLight || config.logo ? (
            <img
              src={config.logoLight ?? config.logo}
              alt=""
              width={859}
              height={240}
              decoding="async"
              className="h-10 w-auto"
            />
          ) : (
            <span className="text-[1.15rem] font-bold leading-none tracking-tight text-white">
              {config.brand}
            </span>
          )}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeAll}
            className="rounded-md p-2 text-white/80 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Mobile stays tap-to-open: hover doesn't apply on touch devices. */}
        <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col gap-1 px-5">
          {nav.map((item) =>
            item.children?.length ? (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={mobileSubOpen === item.label}
                  onClick={() =>
                    setMobileSubOpen((v) =>
                      v === item.label ? null : item.label,
                    )
                  }
                  className="flex w-full items-center py-4 font-mono text-lg font-medium uppercase tracking-wide text-white"
                >
                  {item.label}
                </button>

                <div
                  className={[
                    "flex-col gap-1 pb-3 pl-3",
                    mobileSubOpen === item.label ? "flex" : "hidden",
                  ].join(" ")}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href as Route}
                      prefetch={false}
                      onClick={closeAll}
                      className="flex flex-col rounded-lg px-3 py-2.5 leading-tight text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      <b className="font-semibold">{child.label}</b>
                      {child.note && (
                        <small className="text-sm text-white/50">
                          {child.note}
                        </small>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href as Route}
                onClick={closeAll}
                className="border-b border-white/10 py-4 font-mono text-lg font-medium uppercase tracking-wide text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="px-5 pb-8 pt-4">
          <Link
            href="/contact"
            onClick={closeAll}
            className="block rounded-full bg-green-500 px-5 py-3 text-center text-base font-semibold leading-none text-white shadow-sm transition hover:bg-green-600"
          >
            <BsWhatsapp className="inline-block mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
