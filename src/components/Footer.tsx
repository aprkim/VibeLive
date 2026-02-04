export default function Footer() {
  return (
    <footer className="dark:bg-[#060606]">
      {/* Divider line */}
      <div className="border-t border-border" />
      {/* Main footer content */}
      <div className="py-6 px-[30px] bg-black/[0.02] dark:bg-transparent">
        <div className="max-w-[980px] mx-auto">
          {/* Main row: Brand | Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Logo + Tagline stacked */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <a href="/VibeLive/dark"><img src="/VibeLive/vibelive-logo.png" alt="VibeLive" className="h-6" /></a>
              </div>
              <p className="text-xs text-[rgba(160,255,240,0.20)]">
                A bridge for real human connection in the AI era.
              </p>
            </div>

            {/* Right: Links + Copyright */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-6">
                <a href="/VibeLive/dark/docs" className="text-sm text-muted hover:text-text transition-colors">
                  Docs
                </a>
                <a href="/VibeLive/dark/privacy" className="text-sm text-muted hover:text-text transition-colors">
                  Privacy
                </a>
                <a href="/VibeLive/dark/terms" className="text-sm text-muted hover:text-text transition-colors">
                  Terms
                </a>
                <a href="mailto:hello@vibelive.site" className="text-sm text-muted hover:text-text transition-colors">
                  Contact
                </a>
              </div>
              <p className="text-xs text-[rgba(160,255,240,0.20)]">
                © 2026 VibeLive. Built for vibecoders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
