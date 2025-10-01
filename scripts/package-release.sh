#!/usr/bin/env bash
set -euo pipefail
VERSION="${1:-}" 
if [[ -z "$VERSION" ]]; then
  VERSION=$(jq -r .version package.json)
fi

echo "[INFO] Building dist (version $VERSION)"
npm run build >/dev/null
rm -rf release-temp
mkdir release-temp
cp plugin.json release-temp/
[ -f picture.jpg ] && cp picture.jpg release-temp/
[ -f expand.jpg ] && cp expand.jpg release-temp/
cp -r dist release-temp/dist
ZIP_VERSIONED="decky-pip-$VERSION.zip"
ZIP_CONST="decky-pip.zip"
rm -f "$ZIP_VERSIONED" "$ZIP_CONST"
( cd release-temp && zip -r "../$ZIP_VERSIONED" . >/dev/null )
cp "$ZIP_VERSIONED" "$ZIP_CONST"
rm -rf release-temp
echo "[INFO] Created $ZIP_VERSIONED and $ZIP_CONST"
echo "Upload decky-pip.zip as Release asset for stable URL (or keep versioned for archive)."