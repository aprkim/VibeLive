"use client";

import { useEffect, useState } from "react";

/**
 * HeroV6 - Code dropping effect from top
 *
 * Design: Falling code snippets related to video/SDK
 * - Code snippets drop from the top of the screen
 * - Video-related code (WebRTC, video calls, SDK)
 * - Subtle, non-distracting animation
 */

interface FallingCode {
  id: number;
  text: string;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
}

const VIDEO_CODE_SNIPPETS = [
  "VibeLive.init()",
  "createRoom()",
  "joinCall(roomId)",
  "<VideoRoom />",
  "useVibeLive()",
  "startVideo()",
  "onParticipantJoined",
  "getLocalStream()",
  "toggleMute()",
  "shareScreen()",
  "endCall()",
  "{ video: true }",
  "participants.map()",
  "<VideoGrid />",
  "connectPeer()",
  "MediaStream",
  "getUserMedia()",
  "RTCPeerConnection",
  "addTrack(stream)",
  "onTrack(callback)",
  "setRemoteDescription",
  "createOffer()",
  "await navigator",
  "videoRef.current",
  "srcObject = stream",
  "play()",
  "<video autoPlay />",
  "muted={false}",
  "playsInline",
  "aspectRatio: 16/9",
];

export default function HeroV6() {
  const [fallingCodes, setFallingCodes] = useState<FallingCode[]>([]);

  useEffect(() => {
    // Generate initial falling codes
    const generateCode = (id: number, initialBatch = false): FallingCode => ({
      id,
      text: VIDEO_CODE_SNIPPETS[Math.floor(Math.random() * VIDEO_CODE_SNIPPETS.length)],
      left: Math.random() * 100,
      delay: initialBatch ? Math.random() * 10 : 0, // Staggered delay for initial batch
      duration: 25 + Math.random() * 15, // 25-40 seconds per drop
      opacity: 0.06 + Math.random() * 0.06, // Very subtle: 0.06-0.12
      size: 10 + Math.random() * 3,
    });

    // Create initial batch
    const initial: FallingCode[] = [];
    for (let i = 0; i < 30; i++) {
      initial.push(generateCode(i, true));
    }
    setFallingCodes(initial);

    // Continuously add new codes
    let counter = 30;
    const interval = setInterval(() => {
      setFallingCodes(prev => {
        const newCodes = [...prev];
        // Remove old codes that have completed their animation
        if (newCodes.length > 40) {
          newCodes.shift();
        }
        newCodes.push(generateCode(counter++, false));
        return newCodes;
      });
    }, 1500); // Add new code every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Falling code background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {fallingCodes.map((code) => (
          <div
            key={code.id}
            className="absolute font-mono whitespace-nowrap text-muted animate-fall"
            style={{
              left: `${code.left}%`,
              top: '-50px',
              fontSize: `${code.size}px`,
              opacity: code.opacity,
              animation: `fall ${code.duration}s linear ${code.delay}s infinite`,
            }}
          >
            {code.text}
          </div>
        ))}

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(247, 249, 248, 0.85) 0%, rgba(247, 249, 248, 0.6) 50%, rgba(247, 249, 248, 0.4) 100%)'
          }}
        />
      </div>

      {/* Hero Content */}
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
