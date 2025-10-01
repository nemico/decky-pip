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
ZIP="decky-pip-$VERSION.zip"
rm -f "$ZIP"
( cd release-temp && zip -r "../$ZIP" . >/dev/null )
rm -rf release-temp
echo "[INFO] Created $ZIP"
echo "Upload this zip as a GitHub Release asset and use its direct URL in Decky Loader."