#!/bin/bash
set -e

# ============================================================
# Deploy built.vibelive.site → Firebase Hosting (vibelive-built)
#
# Usage:  ./deploy/deploy-built.sh
# ============================================================

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

API_MOVED=false
STASHED=false

cleanup() {
  echo ""
  echo "==> Restoring working tree..."
  git checkout -- src/app/page.tsx next.config.mjs 2>/dev/null || true
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
STASH_OUTPUT=$(git stash push -m "deploy-built auto-stash" 2>&1)
if [[ "$STASH_OUTPUT" != *"No local changes"* ]]; then
  STASHED=true
  echo "    Stashed uncommitted changes."
fi

echo "==> Applying built.vibelive.site config..."
cp deploy/built/page.tsx       src/app/page.tsx
cp deploy/built/next.config.mjs next.config.mjs

if [ -d src/app/api ]; then
  mv src/app/api src/app/_api_disabled
  API_MOVED=true
fi

echo "==> Building static export..."
npx next build
echo "    Build complete → out/"

echo "==> Splitting site assets..."
bash deploy/split-sites.sh

echo "==> Deploying to Firebase Hosting (built)..."
npx firebase deploy --only hosting:built
echo ""
echo "==> Done! https://built.vibelive.site/ is live."
