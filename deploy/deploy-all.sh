#!/bin/bash
set -e

# ============================================================
# Deploy ALL sites → Firebase Hosting
#
# Usage:  ./deploy/deploy-all.sh
#
# Does TWO builds:
#   1. Home config → produces home, docs, console pages
#   2. Built config → produces showcase page
# Then splits and deploys all 4 targets.
# ============================================================

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

API_MOVED=false
STASHED=false

cleanup() {
  echo ""
  echo "==> Restoring working tree..."
  git checkout -- src/app/page.tsx src/app/layout.tsx next.config.mjs 2>/dev/null || true
  if [ "$API_MOVED" = true ] && [ -d src/app/_api_disabled ]; then
    mv src/app/_api_disabled src/app/api
  fi
  if [ "$STASHED" = true ]; then
    git stash pop --quiet 2>/dev/null || true
  fi
  echo "==> Working tree restored."
}
trap cleanup EXIT

echo "==> Checking working tree..."
STASH_OUTPUT=$(git stash push -m "deploy-all auto-stash" 2>&1)
if [[ "$STASH_OUTPUT" != *"No local changes"* ]]; then
  STASHED=true
  echo "    Stashed uncommitted changes."
fi

if [ -d src/app/api ]; then
  mv src/app/api src/app/_api_disabled
  API_MOVED=true
fi

# ── Build 1: Home config (home + docs + console pages) ──────
echo ""
echo "==> [1/2] Building with HOME config..."
cp deploy/home/page.tsx    src/app/page.tsx
cp deploy/home/layout.tsx  src/app/layout.tsx
cp deploy/home/next.config.mjs next.config.mjs
npx next build
echo "    Build 1 complete → out/"

echo "==> Splitting home/docs/console..."
bash deploy/split-sites.sh

# ── Build 2: Built config (showcase page) ────────────────────
echo ""
echo "==> [2/2] Building with BUILT config..."
cp deploy/built/page.tsx       src/app/page.tsx
cp deploy/built/next.config.mjs next.config.mjs
npx next build
echo "    Build 2 complete → out/"

# Re-split just the built site
echo "==> Splitting built site..."
rm -rf out-built && mkdir -p out-built

# Copy shared assets
for asset in _next favicon-vibelive.png favicon-vibelive-w.png vibelive-logo.png vibelive-logo-w.png og-image.png og-image.svg map.svg robots.txt sitemap.xml social uploads 404.html; do
  [ -e "out/$asset" ] && cp -R "out/$asset" out-built/
done

cp out/index.html out-built/
cp out/submit.html out-built/
cp out/privacy.html out-built/
cp out/terms.html out-built/
for f in out-built/*.html; do
  base="$(basename "$f" .html)"
  [ -f "out/${base}.txt" ] && cp "out/${base}.txt" out-built/
done
echo "    out-built/ → $(find out-built -type f | wc -l | tr -d ' ') files"

# ── Deploy all ───────────────────────────────────────────────
echo ""
echo "==> Deploying all sites to Firebase Hosting..."
npx firebase deploy --only hosting
echo ""
echo "==> All sites deployed!"
echo "    https://vibelive.site/"
echo "    https://built.vibelive.site/"
echo "    https://docs.vibelive.site/"
echo "    https://console.vibelive.site/"
