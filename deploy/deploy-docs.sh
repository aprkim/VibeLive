#!/bin/bash
set -e

# ============================================================
# Deploy docs.vibelive.site → Firebase Hosting (vibelive-docs)
#
# Usage:  ./deploy/deploy-docs.sh
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
STASH_OUTPUT=$(git stash push -m "deploy-docs auto-stash" 2>&1)
if [[ "$STASH_OUTPUT" != *"No local changes"* ]]; then
  STASHED=true
  echo "    Stashed uncommitted changes."
fi

echo "==> Applying config..."
cp deploy/home/page.tsx    src/app/page.tsx
cp deploy/home/layout.tsx  src/app/layout.tsx
cp deploy/home/next.config.mjs next.config.mjs

if [ -d src/app/api ]; then
  mv src/app/api src/app/_api_disabled
  API_MOVED=true
fi

echo "==> Building static export..."
npx next build
echo "    Build complete → out/"

echo "==> Splitting site assets..."
bash deploy/split-sites.sh

echo "==> Deploying to Firebase Hosting (docs)..."
npx firebase deploy --only hosting:docs
echo ""
echo "==> Done! https://docs.vibelive.site/ is live."
