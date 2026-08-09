#!/usr/bin/env bash
# Build every brand asset from the one master logo file.
#
# The supplied artwork is a raster lockup on a near-white ground, so three
# derivatives have to be generated rather than used directly:
#
#   logo-gokyo-lake-trek.png        full colour, transparent. For the white
#                                   scrolled header.
#   logo-gokyo-lake-trek-light.png  navy and slate turned white, blue
#                                   brightened. For the dark footer, the mobile
#                                   drawer, and the transparent header sitting
#                                   over a hero photograph.
#   app/icon.png, apple-icon.png,   the hiker glyph lifted out of the lockup,
#   app/favicon.ico                 white on brand navy. A wordmark is illegible
#                                   at 32px, a single glyph is not.
#
# Re-run after replacing brand/logo-master.png. Requires ImageMagick.
set -euo pipefail

ROOT="/Users/sailesh/gokyo-lake-trek"
MASTER="$ROOT/brand/logo-master.png"
OUT="$ROOT/public/images"
APP="$ROOT/app"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# Palette read off the master art, not guessed.
NAVY="#081C3A"   # "Gokyo", and the icon ground
BLUE="#016FCD"   # "Lake"
SLATE="#4D5667"  # "Trek" and the hiker

[ -f "$MASTER" ] || { echo "missing $MASTER"; exit 1; }

# 1. Trim the surround, knock the near-white ground out to alpha.
#    14% fuzz clears the #FEFEFE ground and its antialiasing without eating the
#    glyph edges. Verified against a mid-grey backdrop for halos.
magick "$MASTER" -fuzz 8% -trim +repage "$TMP/trimmed.png"
magick "$TMP/trimmed.png" -fuzz 14% -transparent "#FEFEFE" -resize x240 "$OUT/logo-gokyo-lake-trek.png"

# 2. Light variant. Recolour by colour distance rather than by luminance: the
#    slate and the blue sit at nearly the same luminance (33% and 37%), so a
#    threshold cannot separate them, but their hue and saturation can.
magick "$OUT/logo-gokyo-lake-trek.png" \
  -fuzz 30% -fill "#FFFFFF" -opaque "$NAVY" \
  -fuzz 22% -fill "#E3EBF5" -opaque "$SLATE" \
  -fuzz 18% -fill "#5FB0FF" -opaque "$BLUE" \
  "$OUT/logo-gokyo-lake-trek-light.png"

# 3. The hiker glyph, for the app icons. Coordinates are into the trimmed
#    1456x407 lockup; re-measure if the master art changes.
magick "$TMP/trimmed.png" -crop 160x180+870+235 +repage \
  -fuzz 20% -transparent "#FEFEFE" -trim +repage "$TMP/hiker.png"
magick "$TMP/hiker.png" -channel RGB -fill white -colorize 100% "$TMP/hiker-white.png"

# Square icon: white hiker on navy, with breathing room so it survives the
# circular crop some platforms apply.
for size in 512 180 32; do
  magick -size 1024x1024 xc:"$NAVY" \
    \( "$TMP/hiker-white.png" -resize 620x620 \) -gravity center -composite \
    -resize "${size}x${size}" "$TMP/icon-$size.png"
done

cp "$TMP/icon-512.png" "$APP/icon.png"
cp "$TMP/icon-180.png" "$APP/apple-icon.png"
magick "$TMP/icon-32.png" \( "$TMP/icon-32.png" -resize 16x16 \) "$APP/favicon.ico"

echo "Built:"
for f in "$OUT/logo-gokyo-lake-trek.png" "$OUT/logo-gokyo-lake-trek-light.png" \
         "$APP/icon.png" "$APP/apple-icon.png" "$APP/favicon.ico"; do
  printf "  %-52s %s  %s\n" "${f#$ROOT/}" "$(magick identify -format '%wx%h' "$f" 2>/dev/null | head -1)" \
    "$(du -h "$f" | cut -f1)"
done
