"use client";

export default function HeroV4Claude2() {
  const codeSnippets = [
    `import VibeLive from '@vibelive/sdk'`,
    `import { VideoRoom } from '@vibelive/react'`,
    `export default VibeLive.init({`,
    `  apiKey: 'vl_live_xxx',`,
    `  enabled: true`,
    `})`,
    `const room = await VibeLive.createRoom()`,
    `<VideoRoom roomId={room.id} />`,
    `VibeLive.on('participant:joined', callback)`,
    `const stream = await VibeLive.getLocalStream()`,
    `import { useVibeLive } from '@vibelive/react'`,
    `const { participants } = useVibeLive()`,
    `VibeLive.connect({ roomId, userId })`,
    `export const config = { video: true, audio: true }`,
  ];

  const rows = [
    { snippets: codeSnippets.slice(0, 5), duration: 50, direction: 'left' },
    { snippets: codeSnippets.slice(3, 8), duration: 60, direction: 'right' },
    { snippets: codeSnippets.slice(5, 10), duration: 44, direction: 'left' },
    { snippets: codeSnippets.slice(8, 14), duration: 56, direction: 'right' },
    { snippets: codeSnippets.slice(0, 6), duration: 52, direction: 'left' },
    { snippets: codeSnippets.slice(4, 10), duration: 64, direction: 'right' },
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex flex-col justify-center gap-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="whitespace-nowrap font-mono text-lg font-medium"
              style={{
                color: '#64748b',
                opacity: 0.5,
                animation: `scroll-${row.direction} ${row.duration}s linear infinite`,
              }}
            >
              {[...row.snippets, ...row.snippets, ...row.snippets].map((snippet, i) => (
                <span key={i} className="mx-10 inline-block">
                  {snippet}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(247, 249, 248, 0.85) 0%, rgba(247, 249, 248, 0.5) 60%, rgba(247, 249, 248, 0.3) 100%)'
          }}
        />
      </div>

      <div className="max-w-[980px] mx-auto relative z-10">
        {/* Headline + Subheadline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-[1.25] md:leading-[1.3] mb-6">
            Add real human connection<br className="hidden sm:block" /> to your vibecoded app.
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            VibeLive expands what you can build by letting AI add video.
          </p>
        </div>

        {/* AI Code Prompt — Primary CTA */}
        <div className="max-w-[520px] mx-auto mb-10">
          <p className="text-xs text-muted/60 text-center mb-3">
            Start by pasting this into your AI coding assistant.
          </p>
          <div className="rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0d0d0d] shadow-2xl shadow-black/50 relative group">
            {/* Copy button */}
            <button
              onClick={() => {
                const text = `Add live video chat to this app using VibeLive.\nUse the link below. Use a teal UI theme.\nhttps://vibelive.site/start/try?key=guest-teal-14d`;
                navigator.clipboard.writeText(text);
                const btn = document.getElementById('copy-btn');
                if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 1500); }
              }}
              id="copy-btn"
              className="absolute top-3 right-3 text-[10px] font-mono text-[#555] hover:text-white/70 bg-[#1a1a1a] hover:bg-[#252525] border border-[#2a2a2a] rounded-md px-2 py-1 transition-colors z-10"
            >
              Copy
            </button>
            <div className="px-5 py-4 pr-16">
              <div className="flex items-start gap-3">
                <span className="text-accent text-sm mt-[1px] select-none shrink-0 font-mono font-bold" style={{ textShadow: '0 0 8px rgba(14,165,164,0.4)' }}>❯</span>
                <p className="text-[13px] text-[#ccc] leading-relaxed font-mono">
                  Add live video chat to this app using VibeLive.
                  <br />
                  Use the link below. Use a <span className="font-bold text-white">teal UI theme</span>.
                  <br />
                  <span className="text-[#5b9fc7]/70 text-[12px]">https://vibelive.site/start/try?key=guest-teal-14d</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button className="btn-secondary px-6 py-2.5 text-sm w-full sm:w-auto opacity-70 hover:opacity-100 transition-opacity">
            Get the VibeLive file
          </button>
          <button className="btn-secondary px-6 py-2.5 text-sm w-full sm:w-auto opacity-70 hover:opacity-100 transition-opacity">
            How it works
          </button>
        </div>

        {/* Product Card */}
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
                  <div className="w-9 h-9 rounded-full border-2 border-card relative">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User A" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-card relative">
                    <img src="https://i.pravatar.cc/150?img=47" alt="User B" className="w-full h-full rounded-full object-cover" />
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
    </section>
  );
}
