export type Glyph =
  | "address"
  | "email"
  | "whatsapp"
  | "person"
  | "phone"
  | "globe"
  | "calendar"
  | "group"
  | "compass"
  | "lungs"
  | "mountain"
  | "warning"
  | "star"
  | "download"
  | "check"
  | "question"
  | "menu";

/**
 * The interface icon set.
 *
 * These were emoji and stray typographic characters (🏠 ✉ 💬 👤 📞 🌐 📅 👥 🧭
 * 🫁 🏔 ⚠ ★ ⬇ ✓ ? ☰). Emoji render from the system font, so they arrived
 * full-colour on branded backgrounds, at a size and baseline the type scale had
 * no say over, and drawn differently on every OS. The bare characters inherited
 * the body font and read as punctuation rather than as icons.
 *
 * The WhatsApp mark is Simple Icons (CC0). The rest are drawn on the same 24x24
 * grid as `SocialIcon` and the trust-strip marks, so the whole interface shares
 * one icon language. Single filled shapes, no strokes, so `currentColor` on the
 * parent is all that is needed to recolour them.
 *
 * Not covered here, deliberately: the arrows and minus signs inside body copy
 * ("Kathmandu → Besisahar", "−15 °C") are typography, not icons.
 */
const PATHS: Record<Glyph, string> = {
  address:
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  email:
    "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 4.62-8-4.62V6l8 4.62L20 6v2.24z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z",
  person:
    "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-3.34 0-10 1.67-10 5v3h20v-3c0-3.33-6.66-5-10-5z",
  phone:
    "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2z",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.6 15.6 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14A7.82 7.82 0 0 1 4 12c0-.69.1-1.36.26-2h3.38a16.5 16.5 0 0 0 0 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.07 16zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.6 15.6 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82A13.7 13.7 0 0 1 12 19.96zM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.5 16.5 0 0 0 0-4h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
  calendar:
    "M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z",
  group:
    "M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  compass:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19zM12 10.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z",
  // Breathing / acclimatisation
  lungs:
    "M12 2a1 1 0 0 1 1 1v6.28c.6-.35 1.3-.53 2-.53 1.02 0 1.9.38 2.55 1.06.63.66 1.02 1.55 1.26 2.5.24.95.35 2.02.35 3.07 0 1.2-.14 2.32-.5 3.18-.36.87-1.02 1.62-2.05 1.62-.9 0-1.63-.47-2.2-1.05a7.7 7.7 0 0 1-1.4-2.06c-.66-1.35-1.01-2.9-1.01-4.32V3a1 1 0 0 1 1-1zm-1 12.75c0 1.42-.35 2.97-1.01 4.32a7.7 7.7 0 0 1-1.4 2.06c-.57.58-1.3 1.05-2.2 1.05-1.03 0-1.69-.75-2.05-1.62-.36-.86-.5-1.98-.5-3.18 0-1.05.11-2.12.35-3.07.24-.95.63-1.84 1.26-2.5A3.4 3.4 0 0 1 8 8.75c.7 0 1.4.18 2 .53V3a1 1 0 0 1 2 0v11.75h-1z",
  mountain: "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z",
  warning: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  star: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  download: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
  check: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  question:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26A1.96 1.96 0 0 0 12 7a2 2 0 0 0-2 2H8a4 4 0 1 1 8 0c0 .88-.36 1.68-.93 2.25z",
  menu: "M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",
};

export const GLYPHS = Object.keys(PATHS) as Glyph[];
export const isGlyph = (v: string): v is Glyph => v in PATHS;

/**
 * Decorative by default: whatever wraps this carries the text or the accessible
 * name, so announcing the glyph again would just repeat it.
 */
export function Icon({ glyph }: { glyph: Glyph }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[glyph]} />
    </svg>
  );
}
