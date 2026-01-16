export default function HeroV2() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-[980px] mx-auto">
        {/* Copy */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-[1.15] mb-6">
            Add real human connection to your vibecoded app.
          </h1>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            <span className="font-semibold">Vibe</span>Live expands what you can build by letting AI add video.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button className="btn-primary px-7 py-3.5 text-base w-full sm:w-auto">
              Get the VibeLive file
            </button>
            <button className="btn-secondary px-7 py-3.5 text-base w-full sm:w-auto">
              How it works
            </button>
          </div>
          <p className="text-xs text-tertiary/50">
            <em>No video infrastructure. No signaling servers. Just keep vibecoding.</em>
          </p>
        </div>

        {/* PRIMARY Visual: Code Editor */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="rounded-[16px] overflow-hidden border border-border bg-[#1e1e1e] shadow-lg">
            {/* Editor Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-xs text-[#808080] ml-2">vibelive.config.ts</span>
            </div>
            {/* Code Content */}
            <div className="p-5 font-mono text-sm leading-7">
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

        {/* SECONDARY Visual: App Preview (lower opacity, below the fold) */}
        <p className="text-center text-muted text-sm mb-4">
          Drop in one file. Video just appears inside your app.
        </p>
        <div className="max-w-sm mx-auto opacity-60">
          <div className="card overflow-hidden shadow-sm">
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
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium border-2 border-card relative">
                    A
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium border-2 border-card relative">
                    B
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                </div>
                <span className="text-xs text-muted">2 online</span>
              </div>
              <button className="btn-primary w-full py-2.5 text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Start Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
