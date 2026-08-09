/**
 * Inline SVG sprite. Every trek page references these symbols via
 * `<svg class="..."><use href="#i-clock"/></svg>` inside its content HTML,
 * so the sprite has to be present in the document before the content renders.
 */
export function IconSprite() {
  return (
    <svg style={{ display: "none" }} aria-hidden="true">
      <symbol id="i-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </symbol>
      <symbol id="i-mtn" viewBox="0 0 24 24">
        <path d="M3 20l6-9 3.5 4.5L16 10l5 10z" />
      </symbol>
      <symbol id="i-meal" viewBox="0 0 24 24">
        <path d="M6 3v18M4 3v5a2 2 0 0 0 2 2M8 3v5a2 2 0 0 1-2 2M17 3c-1.5 0-2 3-2 6h4v12" />
      </symbol>
      <symbol id="i-bed" viewBox="0 0 24 24">
        <path d="M3 18V8h13a4 4 0 0 1 4 4v6M3 18v-4h18M3 18h18" />
      </symbol>
      <symbol id="i-car" viewBox="0 0 24 24">
        <path d="M5 16l1.4-5h11.2L19 16M4 16h16v3H4zM7 19v1M17 19v1" />
      </symbol>
    </svg>
  );
}
