#!/bin/bash
set -e

# ============================================================
# Deploy home.vibelive.site → GitHub Pages (gh-pages branch)
#
# Usage:  ./deploy/deploy-home.sh
#
# This script:
#   1. Swaps in the landing-page config from deploy/home/
#   2. Moves API routes out of the way (not supported in static export)
#   3. Builds a static export to out/
#   4. Force-pushes a clean gh-pages branch
#   5. Reverts all working-tree changes (even on failure)
# ============================================================

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

WORKTREE="/tmp/gh-pages-deploy-$$"
API_MOVED=false
STASHED=false

# ── Cleanup (runs on exit, success or failure) ──────────────
cleanup() {
  echo ""
  echo "==> Restoring working tree..."
  git checkout -- src/app/page.tsx src/app/layout.tsx next.config.mjs 2>/dev/null || true
  if [ "$API_MOVED" = true ] && [ -d src/app/_api_disabled ]; then
    mv src/app/_api_disabled src/app/api
  fi
  git worktree remove "$WORKTREE" 2>/dev/null || true
  rm -rf "$WORKTREE"
  if [ "$STASHED" = true ]; then
    git stash pop --quiet 2>/dev/null || true
  fi
  echo "==> Working tree restored."
}
trap cleanup EXIT

# ── 1. Stash uncommitted changes ────────────────────────────
echo "==> Checking working tree..."
STASH_OUTPUT=$(git stash push -m "deploy-home auto-stash" 2>&1)
if [[ "$STASH_OUTPUT" != *"No local changes"* ]]; then
  STASHED=true
  echo "    Stashed uncommitted changes."
fi

# ── 2. Swap in landing-page overrides ───────────────────────
echo "==> Applying home.vibelive.site config..."
cp deploy/home/page.tsx    src/app/page.tsx
cp deploy/home/layout.tsx  src/app/layout.tsx
cp deploy/home/next.config.mjs next.config.mjs

# ── 3. Move API routes (incompatible with static export) ────
if [ -d src/app/api ]; then
  mv src/app/api src/app/_api_disabled
  API_MOVED=true
fi

# ── 4. Build ────────────────────────────────────────────────
echo "==> Building static export..."
npx next build
echo "    Build complete → out/"

# ── 5. Deploy to gh-pages ───────────────────────────────────
echo "==> Deploying to gh-pages..."

# Ensure we have latest gh-pages
git fetch origin gh-pages 2>/dev/null || true

# Create worktree
git worktree add "$WORKTREE" gh-pages 2>/dev/null || {
  git worktree remove "$WORKTREE" 2>/dev/null || true
  rm -rf "$WORKTREE"
  git worktree add "$WORKTREE" gh-pages
}

# Clean everything in the worktree, then copy fresh build
cd "$WORKTREE"
git rm -rf . --quiet 2>/dev/null || true
cp -R "$REPO_ROOT/out/"* .
touch .nojekyll
echo "home.vibelive.site" > CNAME

# Commit and push
git add -A
if git diff --cached --quiet; then
  echo "    No changes to deploy."
else
  git commit -m "Deploy home.vibelive.site ($(date '+%Y-%m-%d %H:%M'))" --quiet
  git push origin gh-pages
  echo "    Pushed to gh-pages."
fi

cd "$REPO_ROOT"

echo ""
echo "==> Done! https://home.vibelive.site/ will update in ~1 minute."
