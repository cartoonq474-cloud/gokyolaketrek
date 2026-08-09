import Image from "next/image";

export function Hero({
  title = "Discover Treks & Tours in Nepal",
  subtitle,
  image,
  titleFontSize,
  titleOneLine = false,
  minHeight,
  aspect,
  contentLow = false,
  ctas,
}: {
  title?: string;
  subtitle?: string;
  image: string;
  titleFontSize?: string;
  titleOneLine?: boolean;
  minHeight?: number | string;
  aspect?: string;
  contentLow?: boolean;
  ctas?: { label: string; href: string; variant: "green" | "purple" }[];
}) {
  // Without an aspect the frame is a viewport-sized band and bg-cover crops the
  // photo to fill it. With one, the frame takes the photo's own shape instead,
  // so bg-cover has nothing left to crop and the whole image shows. Only worth
  // setting for a landscape photo: a 3:4 portrait shown whole across a 1440px
  // window would be a 1920px tall hero.
  const heroHeight =
    typeof minHeight === "number"
      ? `${minHeight}px`
      : (minHeight ?? (aspect ? "clamp(560px,70vh,720px)" : "clamp(700px,88vh,940px)"));

  return (
    <section
      className={`relative w-full overflow-hidden ${aspect ? "" : "h-screen"}`}
      style={{
        // The floor wins on a narrow screen, where the frame would otherwise be
        // too short for the copy and the photo has to crop whatever we do.
        minHeight: heroHeight,
        ...(aspect ? { aspectRatio: aspect } : {}),
      }}
    >
      {/*
        A real <img> behind the overlays, not a CSS background.

        The preload scanner cannot see a background-image: it is discovered only
        once the CSSOM is built and layout has run, so the largest element on
        every page of the site started downloading late. Measured LCP was 4.9 s
        on throttled mobile with the request not even starting until 842 ms,
        while a 26 KB logo was being preloaded at high priority.

        `priority` emits the <link rel="preload" as="image"> with the srcset on
        it; in Next 16 it no longer implies fetchpriority, so that and the
        eager loading are stated. `fill` + object-cover reproduces bg-cover
        exactly: the frame already takes the photo's own shape when `aspect` is
        set, so there is nothing left to crop, and when the minHeight floor wins
        the crop behaviour is the same as before.
      */}
      <Image
        src={image}
        alt=""
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[var(--brand-navy)]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(8,28,58,0.55),transparent_42%)]" />

      <div className="relative z-10 mx-auto flex min-h-full max-w-7xl flex-col justify-center px-6 py-12 text-left">
        {/*
          The block is vertically centred, so removing anything from it pulls
          the rest back up by half what was removed. The translate sits the
          content lower than dead centre without feeding back into that
          calculation the way extra padding or margin would.
        */}
        <div
          className={`${titleOneLine ? "" : "max-w-3xl"} ${
            contentLow
              ? "mt-auto pb-16"
              : "pt-10 translate-y-10 sm:translate-y-20"
          }`}
        >
          {/*
            titleOneLine drops the 3xl cap so the h1 can use the full container
            and refuses to wrap. Pair it with a titleFontSize that shrinks with
            the viewport, or a long title will simply run off the side.
          */}
          <h1
            className={`font-bold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] ${
              titleOneLine ? "whitespace-nowrap" : ""
            }`}
            style={titleFontSize ? { fontSize: titleFontSize } : undefined}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-base sm:text-lg font-bold text-white/90 leading-relaxed">
              {subtitle}
            </p>
          )}

          {ctas?.length ? (
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              {ctas.map((cta, index) => (
                <a
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={
                    index === 0
                      ? "inline-flex items-center gap-3  bg-white px-5 py-3  font-semibold text-[var(--ink)] shadow-lg shadow-[var(--brand-navy)]/25 transition hover:bg-[var(--brand)] hover:text-white"
                      : "inline-flex items-center justify-center  border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--brand)] hover:bg-[var(--brand)]"
                  }
                >
                  <span>{cta.label}</span>
                  {index === 0 ? (
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
                  ) : null}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
