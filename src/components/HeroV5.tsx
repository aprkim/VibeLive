"use client";

/**
 * HeroV5 - Minimal animated background with video presence motif
 *
 * Design: Developer infrastructure / SDK aesthetic
 * - 16:9 video frame outlines (empty rectangles)
 * - Presence nodes (dots) connected by thin lines
 * - 1-2 dots gently pulse to indicate "live"
 * - Overall opacity under 20%
 * - Uses teal brand color (--accent: #0EA5A4)
 *
 * TUNING GUIDE:
 * - Adjust FRAME_OPACITY to change video frame visibility (default: 0.15)
 * - Adjust NODE_OPACITY to change node/line visibility (default: 0.2)
 * - Adjust PULSE_OPACITY for live indicator intensity (default: 0.4)
 * - Animation durations are in the globals.css keyframes
 */

export default function HeroV5() {
  // ============================================
  // CONFIGURATION - Adjust these to tune intensity
  // Making more visible for initial testing
  // ============================================
  const FRAME_OPACITY = 0.15;      // Video frame outline opacity
  const NODE_OPACITY = 0.2;        // Base node/dot opacity
  const LINE_OPACITY = 0.12;       // Connection line opacity
  const PULSE_OPACITY = 0.4;       // Pulsing "live" node opacity

  // Teal brand color RGB values (--accent: #0EA5A4)
  const TEAL = "14, 165, 164";
  // Soft blue for live/motion signal (--accent-live: #60a5fa)
  const LIVE_BLUE = "96, 165, 250";

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* ============================================
          ANIMATED BACKGROUND - Video presence motif
          Using percentage-based positioning for reliability
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Left side - video frames and nodes */}
        <div className="absolute left-[3%] top-[15%]">
          {/* Video frame outline */}
          <div
            style={{
              width: '140px',
              height: '79px',
              border: `2px solid rgba(${TEAL}, 0.35)`,
              borderRadius: '8px',
            }}
          />
          {/* Presence nodes cluster */}
          <div className="relative mt-4" style={{ height: '60px' }}>
            <div
              className="presence-node-pulse absolute"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: `rgba(${LIVE_BLUE}, 0.6)`,
                borderRadius: '50%',
                left: '20px',
                top: '0',
              }}
            />
            <div
              className="presence-node absolute"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: `rgba(${TEAL}, 0.3)`,
                borderRadius: '50%',
                left: '60px',
                top: '25px',
              }}
            />
            <div
              className="presence-node absolute"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: `rgba(${TEAL}, 0.25)`,
                borderRadius: '50%',
                left: '35px',
                top: '50px',
              }}
            />
            {/* Connection line */}
            <svg className="absolute" style={{ left: '20px', top: '6px', width: '50px', height: '55px' }}>
              <line x1="6" y1="6" x2="45" y2="25" stroke={`rgba(${TEAL}, 0.2)`} strokeWidth="1.5" />
              <line x1="45" y1="25" x2="21" y2="50" stroke={`rgba(${TEAL}, 0.2)`} strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Right side - video frames and nodes */}
        <div className="absolute right-[3%] top-[20%]">
          {/* Video frame outline */}
          <div
            style={{
              width: '120px',
              height: '68px',
              border: `2px solid rgba(${TEAL}, 0.3)`,
              borderRadius: '6px',
            }}
          />
          {/* Presence nodes cluster */}
          <div className="relative mt-4" style={{ height: '40px' }}>
            <div
              className="presence-node absolute"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: `rgba(${TEAL}, 0.3)`,
                borderRadius: '50%',
                left: '10px',
                top: '0',
              }}
            />
            <div
              className="presence-node-pulse-delayed absolute"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: `rgba(${LIVE_BLUE}, 0.6)`,
                borderRadius: '50%',
                left: '45px',
                top: '18px',
              }}
            />
            <div
              className="presence-node absolute"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: `rgba(${TEAL}, 0.25)`,
                borderRadius: '50%',
                left: '85px',
                top: '8px',
              }}
            />
            {/* Connection line */}
            <svg className="absolute" style={{ left: '10px', top: '4px', width: '85px', height: '30px' }}>
              <line x1="4" y1="4" x2="42" y2="20" stroke={`rgba(${TEAL}, 0.2)`} strokeWidth="1.5" />
              <line x1="42" y1="20" x2="80" y2="8" stroke={`rgba(${TEAL}, 0.2)`} strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Bottom left */}
        <div className="absolute left-[5%] bottom-[15%]">
          <div
            style={{
              width: '100px',
              height: '56px',
              border: `2px solid rgba(${TEAL}, 0.28)`,
              borderRadius: '5px',
            }}
          />
          <div className="flex gap-4 mt-3">
            <div
              className="presence-node"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: `rgba(${TEAL}, 0.3)`,
                borderRadius: '50%',
              }}
            />
            <div
              className="presence-node"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: `rgba(${TEAL}, 0.25)`,
                borderRadius: '50%',
              }}
            />
          </div>
        </div>

        {/* Bottom right */}
        <div className="absolute right-[5%] bottom-[12%]">
          <div
            style={{
              width: '130px',
              height: '73px',
              border: `2px solid rgba(${TEAL}, 0.28)`,
              borderRadius: '6px',
            }}
          />
          <div className="flex gap-4 mt-3">
            <div
              className="presence-node"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: `rgba(${TEAL}, 0.25)`,
                borderRadius: '50%',
              }}
            />
            <div
              className="presence-node"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: `rgba(${TEAL}, 0.3)`,
                borderRadius: '50%',
              }}
            />
          </div>
        </div>

        {/* Additional scattered pulsing dots */}
        {/* Top center-left - small */}
        <div
          className="presence-node-pulse-delay-1 absolute"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.5)`,
            borderRadius: '50%',
            left: '18%',
            top: '8%',
          }}
        />

        {/* Top center-right - medium */}
        <div
          className="presence-node-pulse-delay-2 absolute"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.55)`,
            borderRadius: '50%',
            right: '22%',
            top: '12%',
          }}
        />

        {/* Mid-left - tiny */}
        <div
          className="presence-node-pulse-delay-3 absolute"
          style={{
            width: '5px',
            height: '5px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.45)`,
            borderRadius: '50%',
            left: '12%',
            top: '45%',
          }}
        />

        {/* Mid-right - small */}
        <div
          className="presence-node-pulse-delay-4 absolute"
          style={{
            width: '7px',
            height: '7px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.5)`,
            borderRadius: '50%',
            right: '10%',
            top: '50%',
          }}
        />

        {/* Bottom center-left - medium */}
        <div
          className="presence-node-pulse-delay-1 absolute"
          style={{
            width: '9px',
            height: '9px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.5)`,
            borderRadius: '50%',
            left: '25%',
            bottom: '25%',
          }}
        />

        {/* Bottom center-right - tiny */}
        <div
          className="presence-node-pulse-delay-3 absolute"
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.4)`,
            borderRadius: '50%',
            right: '28%',
            bottom: '20%',
          }}
        />

        {/* Far left mid - small */}
        <div
          className="presence-node-pulse-delay-2 absolute"
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.55)`,
            borderRadius: '50%',
            left: '2%',
            top: '55%',
          }}
        />

        {/* Far right bottom - medium */}
        <div
          className="presence-node-pulse-delay-4 absolute"
          style={{
            width: '11px',
            height: '11px',
            backgroundColor: `rgba(${LIVE_BLUE}, 0.5)`,
            borderRadius: '50%',
            right: '3%',
            bottom: '35%',
          }}
        />
      </div>

      {/* ============================================
          HERO CONTENT
          ============================================ */}
      <div className="max-w-[980px] mx-auto relative z-10">
        {/* Copy */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-[1.15] mb-6">
            Add real human connection to your vibecoded app.
          </h1>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            VibeLive expands what you can build by letting AI add video.
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

        {/* Code Block - Secondary, reduced visual weight */}
        <div className="max-w-md mx-auto mb-5">
          <div className="rounded-[12px] overflow-hidden border border-border bg-[#1e1e1e] shadow-sm opacity-90">
            {/* Editor Title Bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#252526] border-b border-[#3c3c3c]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-[10px] text-[#808080] ml-2">vibelive.config.ts</span>
            </div>
            {/* Code Content */}
            <div className="px-4 py-3 font-mono text-xs leading-6">
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">1</span>
                <span><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">VibeLive</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;@vibelive/sdk&apos;</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">2</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">3</span>
                <span><span className="text-[#c586c0]">export default</span> <span className="text-[#dcdcaa]">VibeLive</span><span className="text-[#cccccc]">.</span><span className="text-[#dcdcaa]">init</span><span className="text-[#cccccc]">(&#123;</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">4</span>
                <span className="pl-3"><span className="text-[#9cdcfe]">apiKey</span><span className="text-[#cccccc]">:</span> <span className="text-[#ce9178]">&apos;vl_live_xxx&apos;</span><span className="text-[#cccccc]">,</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">5</span>
                <span className="pl-3"><span className="text-[#9cdcfe]">enabled</span><span className="text-[#cccccc]">:</span> <span className="text-[#569cd6]">true</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">6</span>
                <span><span className="text-[#cccccc]">&#125;)</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">7</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-[#6e7681] text-right mr-3 select-none">8</span>
                <span className="text-[#6a9955]">// That&apos;s it. Video chat is now available.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Caption - Between code and card */}
        <p className="text-center text-muted/70 text-xs mb-5">
          Drop in one file. Video just appears inside your app.
        </p>

        {/* Product Card - Primary visual hero */}
        <div className="max-w-[420px] mx-auto">
          <div className="card overflow-hidden shadow-lg">
            {/* App Title Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-soft">
              <div className="flex items-center gap-1">
                <span className="text-base font-bold text-[#BF3143]">Tabbi</span>
                <span className="text-base font-bold text-text">Mate</span>
              </div>
              <span className="badge-live text-xs">LIVE</span>
            </div>
            {/* App Content */}
            <div className="p-6">
              <div className="mb-5">
                <div className="text-xs text-muted mb-1">Your Session</div>
                <div className="text-lg font-medium text-muted">Live talk in English #7</div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium border-2 border-card relative">
                    A
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium border-2 border-card relative">
                    B
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                </div>
                <span className="text-sm text-muted">2 online</span>
              </div>
              <button className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Start Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
