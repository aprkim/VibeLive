export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[980px] mx-auto">
        {/* Copy */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-[1.15] mb-5">
            Add real human connection to your vibecoded app.
          </h1>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            <span className="font-semibold">Vibe</span>Live expands what you can build by letting AI add video.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <button className="btn-primary px-7 py-3.5 text-base w-full sm:w-auto">
              Get the VibeLive file
            </button>
            <button className="btn-secondary px-7 py-3.5 text-base w-full sm:w-auto">
              How it works
            </button>
          </div>
          <p className="text-sm text-tertiary/60">
            <em>No video infrastructure. No signaling servers. Just keep vibecoding.</em>
          </p>
        </div>

        {/* Visual: Code Editor → App Preview */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
          {/* LEFT: Code Editor */}
          <div className="flex-1 rounded-[16px] overflow-hidden border border-border bg-[#1e1e1e] shadow-sm">
            {/* Editor Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-xs text-[#808080] ml-2">vibelive.config.ts</span>
            </div>
            <div className="flex">
              {/* File Tree */}
              <div className="w-40 bg-[#252526] border-r border-[#3c3c3c] py-3 hidden sm:block">
                <div className="px-3 text-[11px] text-[#808080] uppercase tracking-wide mb-2">Explorer</div>
                <div className="space-y-0.5 text-[13px]">
                  <div className="px-3 py-1 text-[#cccccc] flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#dcb67a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    <span>app</span>
                  </div>
                  <div className="px-3 py-1 text-[#cccccc] flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#dcb67a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    <span>components</span>
                  </div>
                  <div className="px-3 py-1 bg-[#094771] text-white flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#519aba]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[13px]">vibelive.config.ts</span>
                  </div>
                </div>
              </div>
              {/* Code Content */}
              <div className="flex-1 p-4 font-mono text-sm leading-6">
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">1</span>
                  <span><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">VibeLive</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;@vibelive/sdk&apos;</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">2</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">3</span>
                  <span><span className="text-[#c586c0]">export default</span> <span className="text-[#dcdcaa]">VibeLive</span><span className="text-[#cccccc]">.</span><span className="text-[#dcdcaa]">init</span><span className="text-[#cccccc]">(&#123;</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">4</span>
                  <span className="pl-4"><span className="text-[#9cdcfe]">apiKey</span><span className="text-[#cccccc]">:</span> <span className="text-[#ce9178]">&apos;vl_live_xxx&apos;</span><span className="text-[#cccccc]">,</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">5</span>
                  <span className="pl-4"><span className="text-[#9cdcfe]">enabled</span><span className="text-[#cccccc]">:</span> <span className="text-[#569cd6]">true</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">6</span>
                  <span><span className="text-[#cccccc]">&#125;)</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">7</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-[#6e7681] text-right mr-4 select-none">8</span>
                  <span className="text-[#6a9955]">// That&apos;s it. Video chat is now available.</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Arrow / Label */}
          <div className="flex flex-col items-center justify-center px-6 py-4 lg:py-0">
            <div className="hidden lg:flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="text-center">
                <div className="text-xs font-medium text-accent">Drop in one file</div>
                <div className="text-xs text-muted">Video unlocked</div>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <svg className="w-5 h-5 text-accent rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-xs font-medium text-accent">Drop in one file → Video unlocked</span>
            </div>
          </div>

          {/* RIGHT: App Preview */}
          <div className="flex-1 max-w-sm lg:max-w-none">
            <div className="card overflow-hidden shadow-sm h-full">
              {/* App Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                  <span className="text-sm font-bold text-text">Mate</span>
                </div>
                <span className="badge-live text-xs">LIVE</span>
              </div>
              {/* App Content */}
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-xs text-muted mb-1">Your Session</div>
                  <div className="text-base font-medium text-text">Live talk in English #7</div>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-medium border-2 border-card">A</div>
                    <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-white text-xs font-medium border-2 border-card">B</div>
                  </div>
                  <span className="text-xs text-muted">2 online</span>
                </div>
                <button className="btn-primary w-full py-2.5 text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start Video
                </button>
                <p className="text-[11px] text-tertiary text-center mt-3">Powered by <span className="font-semibold">Vibe</span>Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
