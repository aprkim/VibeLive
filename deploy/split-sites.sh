#!/bin/bash
set -e

# ============================================================
# Split the unified out/ build into per-site directories.
#
# Called by each deploy-*.sh after `npx next build`.
# Creates: out-home/, out-built/, out-docs/, out-console/
#
# Each site gets:
#   - Its own index.html (the correct page)
#   - Shared assets: _next/, favicons, logos, images, robots, sitemap
#   - Site-specific HTML pages as needed
# ============================================================

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

SHARED_ASSETS=(
  _next
  favicon-vibelive.png
  favicon-vibelive-w.png
  vibelive-logo.png
  vibelive-logo-w.png
  og-image.png
  og-image.svg
  map.svg
  robots.txt
  sitemap.xml
  social
  uploads
  404.html
)

copy_shared() {
  local dest="$1"
  for asset in "${SHARED_ASSETS[@]}"; do
    if [ -e "out/$asset" ]; then
      cp -R "out/$asset" "$dest/"
    fi
  done
}

# ── HOME site ───────────────────────────────────────────────
rm -rf out-home && mkdir -p out-home
copy_shared out-home
cp out/index.html out-home/            # landing page
cp out/pricing.html out-home/
cp out/privacy.html out-home/
cp out/terms.html out-home/
cp out/submit.html out-home/
cp out/light.html out-home/
cp out/preview.html out-home/
cp out/integration_guide.html out-home/ 2>/dev/null || true
cp out/get-started.md out-home/ 2>/dev/null || true
# Copy .txt variants if they exist (Next.js RSC payloads)
for f in out-home/*.html; do
  base="$(basename "$f" .html)"
  [ -f "out/${base}.txt" ] && cp "out/${base}.txt" out-home/
done
# Copy blog (Astro build) into home site
BLOG_DIR="$REPO_ROOT/../coming/blog"
if [ -d "$BLOG_DIR" ]; then
  cp -R "$BLOG_DIR" out-home/blog
fi
echo "    out-home/  → $(find out-home -type f | wc -l | tr -d ' ') files"

# ── BUILT site ──────────────────────────────────────────────
rm -rf out-built && mkdir -p out-built
copy_shared out-built
# For built, the showcase page is the root
if [ -f "out/index-built.html" ]; then
  cp out/index-built.html out-built/index.html
else
  # If built was the main page.tsx during build, index.html is already correct
  cp out/index.html out-built/
fi
cp out/submit.html out-built/
cp out/privacy.html out-built/
cp out/terms.html out-built/
for f in out-built/*.html; do
  base="$(basename "$f" .html)"
  [ -f "out/${base}.txt" ] && cp "out/${base}.txt" out-built/
done
echo "    out-built/ → $(find out-built -type f | wc -l | tr -d ' ') files"

# ── DOCS site ───────────────────────────────────────────────
rm -rf out-docs && mkdir -p out-docs
copy_shared out-docs
cp out/docs.html out-docs/index.html   # docs is the root page
cp out/privacy.html out-docs/
cp out/terms.html out-docs/
for f in out-docs/*.html; do
  base="$(basename "$f" .html)"
  [ -f "out/${base}.txt" ] && cp "out/${base}.txt" out-docs/
done
[ -f "out/docs.txt" ] && cp "out/docs.txt" out-docs/index.txt
echo "    out-docs/  → $(find out-docs -type f | wc -l | tr -d ' ') files"

# ── CONSOLE site ────────────────────────────────────────────
rm -rf out-console && mkdir -p out-console
copy_shared out-console
cp out/console.html out-console/index.html  # console is the root page
cp out/admin.html out-console/ 2>/dev/null || true
cp out/privacy.html out-console/
cp out/terms.html out-console/
for f in out-console/*.html; do
  base="$(basename "$f" .html)"
  [ -f "out/${base}.txt" ] && cp "out/${base}.txt" out-console/
done
[ -f "out/console.txt" ] && cp "out/console.txt" out-console/index.txt
echo "    out-console/ → $(find out-console -type f | wc -l | tr -d ' ') files"

echo "==> Site split complete."
