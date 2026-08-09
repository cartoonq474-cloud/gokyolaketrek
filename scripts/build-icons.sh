#!/usr/bin/env bash
#
# Regenerates the favicon set in app/ from the 6K Nepal Treks logo.
# Requires ImageMagick 7 (`brew install imagemagick`). Run from the repo root:
#
#   bash scripts/build-icons.sh
#
# Two decisions are baked in here:
#
# 1. Only the "6K" glyph is used, not the full lockup. The source mark is
#    128x92 and includes a "TREKS" ribbon under the letters. At 16px that
#    ribbon is about 3px tall, so it renders as grey mush and steals height
#    from the part people actually recognise. Cropping to the top 73 rows
#    drops the ribbon and lets "6K" fill the tile.
#
# 2. The tile is white, not brand cyan. The letters are filled with sky and
#    forest photography and carry a white outline. On cyan the sky blends
#    into the background and legibility collapses at 32px and below. White
#    also matches how the footer already presents the logo, in a white chip.
#
# The source art is only 128px wide, so 180px and above are upscaled and will
# look soft. If a higher resolution logo ever arrives, drop it in as SRC and
# rerun. Nothing else needs to change.

set -euo pipefail

SRC="public/images/logo-6k-treks-mark.png"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# The 6K glyph, ribbon cropped off, trimmed to its own bounds.
magick "$SRC" -crop 128x73+0+0 +repage -trim +repage \
  -filter Lanczos -resize 880x -colorspace sRGB "PNG32:$TMP/glyph.png"

# Rounded white tile. PNG32 forces RGBA: a plain white canvas is detected as
# greyscale, and compositing onto it silently desaturates the logo.
magick -size 1024x1024 xc:none \
  -fill white -draw "roundrectangle 0,0 1023,1023 176,176" \
  -colorspace sRGB "PNG32:$TMP/tile.png"

magick "$TMP/tile.png" "$TMP/glyph.png" -gravity center -composite \
  "PNG32:$TMP/master.png"

# 16/32/48 into one .ico. The unsharp pass buys back edge definition lost in
# the downscale; without it the letters read as a blue smudge at 16px.
for n in 16 32 48; do
  magick "$TMP/master.png" -filter Lanczos -resize "${n}x${n}" \
    -unsharp 0x0.5+0.6+0.02 "PNG32:$TMP/ico-$n.png"
done
magick "$TMP/ico-16.png" "$TMP/ico-32.png" "$TMP/ico-48.png" app/favicon.ico

magick "$TMP/master.png" -filter Lanczos -resize 96x96 \
  -unsharp 0x0.5+0.4+0.02 "PNG32:app/icon.png"

# iOS composites the touch icon onto its own background and ignores rounding,
# so this one ships flattened and square.
magick "$TMP/master.png" -filter Lanczos -resize 180x180 \
  -background white -alpha remove -alpha off "PNG32:app/apple-icon.png"

echo "Wrote app/favicon.ico, app/icon.png, app/apple-icon.png"
