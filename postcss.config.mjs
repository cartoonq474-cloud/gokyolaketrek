/**
 * Tailwind v4 runs as a PostCSS plugin. Without this file Next resolves
 * `@import "tailwindcss"` as an ordinary CSS import, inlines the package's
 * index.css, and ships Preflight with no utilities generated. The reset lands,
 * the utility classes never do.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
