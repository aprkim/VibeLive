"use client";

export default function HeaderHome() {
  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 bg-card/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[980px] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://vibelive.site"><img src="/vibelive-logo.png" alt="VibeLive" className="h-7" /></a>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://vibelive.site/docs"
            className="hidden sm:block text-muted hover:text-text transition-colors text-sm font-medium"
          >
            Docs
          </a>
          <a
            href="https://vibelive.site/start/try"
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
          >
            Get Access
          </a>
        </nav>
      </div>
    </header>
  );
}
