export default function Footer() {
  return (
    <footer>
      {/* Main footer content */}
      <div className="py-16 px-6 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="max-w-[980px] mx-auto">
          {/* Main row: Brand | Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Logo + Tagline stacked */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-sm bg-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xs">V</span>
                </div>
                <span className="font-semibold text-text"><span className="font-semibold">Vibe</span>Live</span>
              </div>
              <p className="text-xs text-muted/70">
                A bridge for real human connection in the AI era.
              </p>
            </div>

            {/* Right: Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted hover:text-text transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright with darker background */}
      <div className="py-5 px-6 bg-black/[0.04] dark:bg-white/[0.04]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-sm text-muted tracking-wide">
            © 2026 VibeLive. Built for vibecoders.
          </p>
        </div>
      </div>
    </footer>
  );
}
