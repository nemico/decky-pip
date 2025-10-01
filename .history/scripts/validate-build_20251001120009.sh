#!/usr/bin/env bash
set -euo pipefail

echo "[validate] Checking plugin.json ..."
[ -f plugin.json ] || { echo "plugin.json missing"; exit 1; }
NAME=$(jq -r '.name' plugin.json 2>/dev/null || echo 'UNKNOWN')
echo "[validate] plugin name: $NAME"

echo "[validate] Checking dist/index.js ..."
[ -f dist/index.js ] || { echo "dist/index.js missing"; exit 1; }
SIZE=$(wc -c < dist/index.js)
echo "[validate] dist/index.js size: $SIZE bytes"
if [ "$SIZE" -lt 50000 ]; then
  echo "[validate] dist/index.js too small (<50KB)"; exit 1;
fi

ZIP=decky-pip.zip
if [ -f "$ZIP" ]; then
  echo "[validate] Inspecting existing $ZIP"
  unzip -l "$ZIP" | sed -n '1,30p'
fi

echo "[validate] OK"
