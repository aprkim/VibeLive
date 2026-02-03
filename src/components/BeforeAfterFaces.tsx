export default function BeforeAfterFaces() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[980px] mx-auto">
        <h3 className="text-lg md:text-2xl font-semibold text-text text-center mb-6 md:mb-8">Same app. One file difference.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch max-w-sm md:max-w-none mx-auto">
          {/* LEFT: Without VibeLive */}
          <div className="flex flex-col">
            <div className="text-xs text-muted/70 mb-2 text-center">Without <span className="font-medium">Vibe</span>Live</div>
            <div className="card overflow-hidden opacity-50 saturate-[0.5] grayscale-[0.2] flex-1 flex flex-col">
              {/* App Title Bar */}
              <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#8b5cf6] flex items-center justify-center">
                    <span className="text-white text-[10px] md:text-xs font-bold">M</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-text">MyApp</span>
                </div>
                {/* Invisible placeholder to match height of LIVE badge */}
                <span className="text-[10px] md:text-xs px-2 py-0.5 invisible">LIVE</span>
              </div>
              {/* App Content */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="mb-3 md:mb-4">
                  <div className="text-xs text-muted mb-1">Current view</div>
                  <div className="text-sm md:text-base font-medium text-text">Dashboard</div>
                </div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=32" alt="User A" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User B" className="w-full h-full object-cover grayscale" />
                    </div>
                  </div>
                  <span className="text-xs text-muted">2 users</span>
                </div>
                {/* Disabled Button */}
                <button
                  disabled
                  className="w-full py-2 md:py-2.5 text-xs md:text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[var(--disabled-bg)] border border-[var(--disabled-border)] text-[var(--disabled-text)] cursor-not-allowed mt-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Video unavailable
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: With VibeLive */}
          <div className="flex flex-col">
            <div className="text-xs text-accent/80 mb-2 text-center">With <span className="font-medium">Vibe</span>Live</div>
            <div className="card overflow-hidden shadow-lg flex-1 flex flex-col">
              {/* App Title Bar */}
              <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#8b5cf6] flex items-center justify-center">
                    <span className="text-white text-[10px] md:text-xs font-bold">M</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-text">MyApp</span>
                </div>
                <span className="badge-live text-[10px] md:text-xs">LIVE</span>
              </div>
              {/* App Content */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <div className="mb-3 md:mb-4">
                  <div className="text-xs text-muted mb-1">Current view</div>
                  <div className="text-sm md:text-base font-medium text-text">Dashboard</div>
                </div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=32" alt="User A" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User B" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-xs text-muted">2 online</span>
                </div>
                {/* Enabled Button */}
                <button className="btn-primary w-full py-2 md:py-2.5 text-xs md:text-sm flex items-center justify-center gap-2 mt-auto">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
