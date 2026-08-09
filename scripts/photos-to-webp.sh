#!/usr/bin/env bash
# Convert the source JPEGs in fwdphotos/ into web-ready WebP under a hard byte
# ceiling, and record what happened in photos/manifest.csv.
#
# Two knobs, tried in this order:
#   1. quality, walked down from Q_START in steps of 4 to Q_FLOOR
#   2. the longest edge, halved in stages once quality alone cannot get there
#
# Quality first because dropping resolution is the lossy change you cannot undo
# later, and these are mountain photographs where the fine detail is the point.
set -euo pipefail

SRC_DIR="/Users/sailesh/gokyo-lake-trek"
OUT_DIR="$SRC_DIR/photos/web"
MANIFEST="$SRC_DIR/photos/manifest.csv"

# 350 KB read the strict way, 350,000 bytes rather than 350 * 1024.
#
# The two readings are 8 KB apart and the brief just said "max 350 kb". macOS
# reports file sizes in decimal, so a file that satisfies the 350 KiB reading
# still shows as "357 KB" in Finder and looks like it broke the limit. Taking
# the smaller number means the answer is right under either reading.
MAX_BYTES=350000
MAX_EDGE=2400      # longest edge of the first attempt
Q_START=82
Q_FLOOR=58

mkdir -p "$OUT_DIR"
echo "original,webp,orig_dimensions,webp_dimensions,webp_bytes,quality,status" > "$MANIFEST"

# original relative path | output basename
MAP=$(cat <<'EOF'
fwdphotos/IMG_4254.jpeg|ngozumpa-glacier
fwdphotos/IMG_4255.jpeg|ngozumpa-moraine
fwdphotos/IMG_4256.jpeg|gokyo-lake
fwdphotos/IMG_4258.jpeg|gokyo-village-lakeshore
fwdphotos/IMG_4259.jpeg|trekker-lake-shore
fwdphotos/IMG_4260.jpeg|trekker-lake-view
fwdphotos/IMG_4270.jpeg|guide-and-trekker
fwdphotos/IMG_4271.jpeg|guide-and-trekker-lake
fwdphotos/IMG_4457.JPG|gokyo-lake-dusk
fwdphotos (1)/IMG_4369.jpeg|trekker-cairn
fwdphotos (1)/IMG_4380.jpeg|lake-reflection-cairn
fwdphotos (1)/IMG_4381.jpeg|lakeshore-trail
fwdphotos (1)/IMG_4382.jpeg|guide-portrait
fwdphotos (1)/IMG_8253.JPG|lake-mirror-peaks
fwdphotos (1)/IMG_8275.JPG|prayer-flags-peak
EOF
)

# Strip EXIF once up front. cwebp reads the rotation flag but does not apply it,
# so a phone portrait would land on its side; -auto-orient bakes the rotation
# into the pixels and the flag then has nothing left to say.
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

while IFS='|' read -r rel name; do
  [ -n "$rel" ] || continue
  src="$SRC_DIR/$rel"
  out="$OUT_DIR/$name.webp"

  orig_dims=$(magick identify -format '%wx%h' "$src[0]")

  edge=$MAX_EDGE
  done_flag=0
  status="failed"
  q=$Q_START
  bytes=0
  dims=""

  while [ $done_flag -eq 0 ] && [ $edge -ge 900 ]; do
    # One decode per edge size, reused across the whole quality walk.
    flat="$TMP/flat.png"
    magick "$src[0]" -auto-orient -resize "${edge}x${edge}>" -strip "$flat"

    q=$Q_START
    while [ $q -ge $Q_FLOOR ]; do
      cwebp -quiet -q $q -m 6 -mt "$flat" -o "$out"
      bytes=$(stat -f%z "$out")
      if [ "$bytes" -le $MAX_BYTES ]; then
        done_flag=1
        status="ok"
        break
      fi
      q=$((q - 4))
    done

    [ $done_flag -eq 1 ] && break
    edge=$((edge * 3 / 4))
  done

  dims=$(magick identify -format '%wx%h' "$out")
  printf '%s,%s,%s,%s,%s,%s,%s\n' \
    "$(basename "$rel")" "$name.webp" "$orig_dims" "$dims" "$bytes" "$q" "$status" >> "$MANIFEST"
  printf '%-26s %-11s q%-3s %6s KB  %s\n' "$name.webp" "$dims" "$q" "$((bytes / 1024))" "$status"
done <<< "$MAP"

echo
echo "Wrote $(ls -1 "$OUT_DIR" | wc -l | tr -d ' ') files to photos/web"
echo "Largest:"
ls -lS "$OUT_DIR" | head -4 | awk 'NR>1 {printf "  %s  %d KB\n", $NF, $5/1024}'
