"use client";

export default function HeroV4Light() {
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
    <section className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Animated code background — hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute inset-0 flex flex-col justify-center gap-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="whitespace-nowrap font-mono text-lg font-medium"
              style={{
                color: '#94a3b8',
                opacity: 0.35,
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
            background: 'radial-gradient(ellipse at center, rgba(247, 249, 248, 0.95) 0%, rgba(247, 249, 248, 0.8) 60%, rgba(247, 249, 248, 0.6) 100%)'
          }}
        />
      </div>

      <div className="max-w-[980px] mx-auto relative z-10">
        {/* Headline + Subheadline */}
        <div className="text-center mb-4 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-text leading-[1.25] md:leading-[1.3] mb-4 md:mb-6">
            Add real human connection<br className="hidden sm:block" /> to your vibecoded app.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            VibeLive expands what you can build by letting AI add video.
          </p>
        </div>

        {/* AI Code Prompt — Primary CTA */}
        <div className="w-full md:max-w-[740px] mx-auto mt-10 md:mt-16 mb-16 md:mb-24 relative">
          {/* Spotlight radial behind prompt */}
          <div
            className="absolute -inset-12 md:-inset-20 pointer-events-none"
            style={{ background: 'transparent' }}
          />
          <div className="flex justify-center mb-3 relative z-10">
            <div style={{ width: '72px', height: '1px', background: 'rgba(14, 165, 164, 0.20)' }} />
          </div>
          <p className="text-sm text-muted text-center mb-4 relative z-10">
            Start by pasting this into your AI coding assistant.
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Copy button — desktop: top-right overlay */}
            <button
              onClick={() => {
                const text = `Add live video chat to this app using VibeLive.\nUse the link below. Use a teal UI theme.\nhttps://vibelive.site/start/try?key=guest-teal-14d`;
                navigator.clipboard.writeText(text);
                const btn = document.getElementById('copy-btn');
                if (btn) {
                  btn.textContent = 'Copied ✓';
                  setTimeout(() => { btn.textContent = 'Copy'; }, 1200);
                }
              }}
              id="copy-btn"
              className="hidden md:flex absolute top-5 right-5 text-[11px] font-mono z-10 transition-colors"
              style={{
                color: '#0EA5A4',
                background: 'rgba(14, 165, 164, 0.08)',
                border: '1px solid rgba(14, 165, 164, 0.25)',
                borderRadius: '6px',
                padding: '8px 12px',
                minWidth: '88px',
                minHeight: '36px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 165, 164, 0.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(14, 165, 164, 0.08)'; }}
            >
              Copy
            </button>
            <div className="px-4 py-4 md:px-7 md:py-6 md:pr-28">
              <div className="flex items-start gap-3">
                <span
                  className="select-none shrink-0 font-mono"
                  style={{ color: '#0EA5A4', fontWeight: 600, fontSize: '15px' }}
                >❯</span>
                <p className="font-mono" style={{ fontSize: '15px', lineHeight: 1.55, color: '#1e293b', overflowWrap: 'anywhere' as const, wordBreak: 'break-word' as const }}>
                  Add live video chat to this app using VibeLive.
                  <br />
                  Use the link below. Use a <span className="font-bold" style={{ color: '#0f172a' }}>teal UI theme</span>.
                  <br />
                  <span style={{ color: '#64748b', fontSize: '14px' }}>https://vibelive.site/start/try?key=guest-teal-14d</span>
                </p>
              </div>
            </div>
            {/* Copy button — mobile: bottom-right, below divider */}
            <div className="md:hidden px-4 pb-4">
              <div style={{ height: '1px', background: '#e2e8f0', marginBottom: '12px' }} />
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    const text = `Add live video chat to this app using VibeLive.\nUse the link below. Use a teal UI theme.\nhttps://vibelive.site/start/try?key=guest-teal-14d`;
                    navigator.clipboard.writeText(text);
                    const btn = document.getElementById('copy-btn-mobile');
                    if (btn) {
                      btn.textContent = 'Copied ✓';
                      setTimeout(() => { btn.textContent = 'Copy'; }, 1200);
                    }
                  }}
                  id="copy-btn-mobile"
                  className="text-[11px] font-mono transition-colors"
                  style={{
                    color: '#0EA5A4',
                    background: 'rgba(14, 165, 164, 0.08)',
                    border: '1px solid rgba(14, 165, 164, 0.25)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    minWidth: '88px',
                    minHeight: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onTouchStart={(e) => { e.currentTarget.style.background = 'rgba(14, 165, 164, 0.14)'; }}
                  onTouchEnd={(e) => { e.currentTarget.style.background = 'rgba(14, 165, 164, 0.08)'; }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === MOBILE: Paired cards (pre-join + room together) === */}
        <div className="md:hidden flex flex-col gap-6 max-w-[980px] mx-auto">

          {/* TabbiMate pair */}
          <div className="flex flex-col gap-2">
            {/* Pre-join */}
            <div className="card overflow-hidden shadow-md flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                  <span className="text-sm font-bold text-text">Mate</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3">
                  <div className="text-[10px] text-muted mb-0.5">Your Session</div>
                  <div className="text-sm font-medium text-muted flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span className="text-muted/40">⇄</span>
                    <span>🇯🇵</span>
                    <span className="ml-1">English ↔ 日本語</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 flex-1">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-card relative">
                      <img src="https://i.pravatar.cc/150?img=32" alt="User A" className="w-full h-full rounded-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                    </div>
                    <div className="w-7 h-7 rounded-full border-2 border-card relative">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User B" className="w-full h-full rounded-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                    </div>
                  </div>
                  <span className="text-xs text-muted">2 online</span>
                </div>
                <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#BF3143]/85 hover:bg-[#BF3143] text-white/90 font-medium transition-colors mt-auto">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start Talking
                </button>
              </div>
            </div>
            {/* Room */}
            <div className="card overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                  <span className="text-sm font-bold text-text">Mate</span>
                </div>
                <span className="text-[9px] font-mono text-muted">27:14</span>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute top-1.5 left-1.5">
                      <span className="text-[8px] bg-black/40 text-[#666] px-1.5 py-0.5 rounded">🇺🇸 EN</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute top-1.5 left-1.5">
                      <span className="text-[8px] bg-black/40 text-[#666] px-1.5 py-0.5 rounded">🇯🇵 JP</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#BF3143] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TinyRoom pair */}
          <div className="flex flex-col gap-2">
            {/* Pre-join */}
            <div className="card overflow-hidden shadow-md flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#556B2F]">Tiny</span>
                  <span className="text-sm font-bold text-text">Room</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#556B2F]/15 text-[#556B2F] border border-[#556B2F]/30">LIVE</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3">
                  <div className="text-[10px] text-muted mb-0.5">Room</div>
                  <div className="text-sm font-medium text-muted">Sunday Hangout 🌿</div>
                </div>
                <div className="flex items-center gap-2 mb-4 flex-1">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=1" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=5" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=8" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                      <img src="https://i.pravatar.cc/150?img=11" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-xs text-muted">4 in room</span>
                </div>
                <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#556B2F]/85 hover:bg-[#495C28] text-white/90 font-medium transition-colors mt-auto">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Join Room
                </button>
              </div>
            </div>
            {/* Room */}
            <div className="card overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#556B2F]">Tiny</span>
                  <span className="text-sm font-bold text-text">Room</span>
                </div>
                <span className="text-[9px] text-muted">4 in room</span>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <div className="absolute bottom-1 right-1.5">
                        <span className="w-1.5 h-1.5 block rounded-full bg-[#556B2F]"></span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#556B2F] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MentorNow pair */}
          <div className="flex flex-col gap-2">
            {/* Pre-join */}
            <div className="card overflow-hidden shadow-md flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#6E6282]">Mentor</span>
                  <span className="text-sm font-bold text-text">Now</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#6E6282]/15 text-[#6E6282] border border-[#6E6282]/30">1 : 1</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3">
                  <div className="text-[10px] text-muted mb-0.5">Session</div>
                  <div className="text-sm font-medium text-muted flex items-center gap-2">
                    <span>Career Check-in</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#6E6282]/10 text-[#6E6282] border border-[#6E6282]/20 font-mono">15:00</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 flex-1">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-card relative">
                      <img src="https://i.pravatar.cc/150?img=25" alt="Mentee" className="w-full h-full rounded-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                    </div>
                    <div className="w-7 h-7 rounded-full border-2 border-[#6E6282]/50 relative">
                      <img src="https://i.pravatar.cc/150?img=52" alt="Mentor" className="w-full h-full rounded-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#6E6282] rounded-full border-2 border-card"></span>
                    </div>
                  </div>
                  <span className="text-xs text-muted">Mentor ready</span>
                </div>
                <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#6E6282]/85 hover:bg-[#585070] text-white/90 font-medium transition-colors mt-auto">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start Session
                </button>
              </div>
            </div>
            {/* Room */}
            <div className="card overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#6E6282]">Mentor</span>
                  <span className="text-sm font-bold text-text">Now</span>
                </div>
                <span className="text-[9px] font-mono text-[#6E6282]/70">15 min</span>
              </div>
              <div className="p-2">
                <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center border border-[#e5e5e5]">
                  <svg className="w-8 h-8 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 block rounded-full bg-[#6E6282] animate-pulse"></span>
                    <span className="text-[7px] text-[#6E6282]/80 font-mono">Screen sharing</span>
                  </div>
                  <div className="absolute top-1.5 right-1.5">
                    <span className="text-[8px] bg-black/40 text-white/60 px-1.5 py-0.5 rounded font-mono">11:42</span>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 flex flex-col gap-1">
                    <div className="w-[60px] h-[40px] rounded bg-[#f0f0f0] border border-[#6E6282]/40 flex items-center justify-center shadow-lg relative">
                      <svg className="w-5 h-5 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="absolute bottom-0.5 left-1 text-[6px] bg-[#6E6282]/70 text-white px-1 py-px rounded">Mentor</span>
                    </div>
                    <div className="w-[60px] h-[40px] rounded bg-[#f0f0f0] border border-border flex items-center justify-center shadow-lg relative">
                      <svg className="w-5 h-5 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="absolute bottom-0.5 left-1 text-[6px] bg-black/50 text-[#666] px-1 py-px rounded">You</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#6E6282] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#6E6282]/30 flex items-center justify-center border border-[#6E6282]/50">
                    <svg className="w-3.5 h-3.5 text-[#6E6282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* === DESKTOP: Original two-grid layout === */}
        {/* Product Cards (pre-join state) */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-[980px] mx-auto">

          {/* 1. TabbiMate — Language Practice (Red) */}
          <div className="card overflow-hidden shadow-md flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                <span className="text-sm font-bold text-text">Mate</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-3">
                <div className="text-[10px] text-muted mb-0.5">Your Session</div>
                <div className="text-sm font-medium text-muted flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span className="text-muted/40">⇄</span>
                  <span>🇯🇵</span>
                  <span className="ml-1">English ↔ 日本語</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-1">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-card relative">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User A" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-card relative">
                    <img src="https://i.pravatar.cc/150?img=47" alt="User B" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                </div>
                <span className="text-xs text-muted">2 online</span>
              </div>
              <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#BF3143]/85 hover:bg-[#BF3143] text-white/90 font-medium transition-colors mt-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Start Talking
              </button>
            </div>
          </div>

          {/* 2. TinyRoom — Group Video Chat (Green) */}
          <div className="card overflow-hidden shadow-md flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#556B2F]">Tiny</span>
                <span className="text-sm font-bold text-text">Room</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#556B2F]/15 text-[#556B2F] border border-[#556B2F]/30">LIVE</span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-3">
                <div className="text-[10px] text-muted mb-0.5">Room</div>
                <div className="text-sm font-medium text-muted">Sunday Hangout 🌿</div>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-1">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=1" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=5" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=8" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-card overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=11" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-xs text-muted">4 in room</span>
              </div>
              <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#556B2F]/85 hover:bg-[#495C28] text-white/90 font-medium transition-colors mt-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Join Room
              </button>
            </div>
          </div>

          {/* 3. MentorNow — 1:1 Mentoring (Purple) */}
          <div className="card overflow-hidden shadow-md flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-soft">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#6E6282]">Mentor</span>
                <span className="text-sm font-bold text-text">Now</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#6E6282]/15 text-[#6E6282] border border-[#6E6282]/30">1 : 1</span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-3">
                <div className="text-[10px] text-muted mb-0.5">Session</div>
                <div className="text-sm font-medium text-muted flex items-center gap-2">
                  <span>Career Check-in</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#6E6282]/10 text-[#6E6282] border border-[#6E6282]/20 font-mono">15:00</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-1">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-card relative">
                    <img src="https://i.pravatar.cc/150?img=25" alt="Mentee" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-card"></span>
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-[#6E6282]/50 relative">
                    <img src="https://i.pravatar.cc/150?img=52" alt="Mentor" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#6E6282] rounded-full border-2 border-card"></span>
                  </div>
                </div>
                <span className="text-xs text-muted">Mentor ready</span>
              </div>
              <button className="w-full py-2.5 text-sm flex items-center justify-center gap-2 rounded-[10px] bg-[#6E6282]/85 hover:bg-[#585070] text-white/90 font-medium transition-colors mt-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Start Session
              </button>
            </div>
          </div>

        </div>

        {/* Three Live Video Cards (room samples) — desktop only */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-[980px] mx-auto mt-4">

          {/* 1. TabbiMate — 1:1 Language Practice (Red) */}
          <div className="card overflow-hidden shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                <span className="text-sm font-bold text-text">Mate</span>
              </div>
              <span className="text-[9px] font-mono text-muted">27:14</span>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-1.5">
                <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="absolute top-1.5 left-1.5">
                    <span className="text-[8px] bg-black/40 text-[#666] px-1.5 py-0.5 rounded">🇺🇸 EN</span>
                  </div>
                </div>
                <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="absolute top-1.5 left-1.5">
                    <span className="text-[8px] bg-black/40 text-[#666] px-1.5 py-0.5 rounded">🇯🇵 JP</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#BF3143] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2. TinyRoom — Group Video (Green) */}
          <div className="card overflow-hidden shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#556B2F]">Tiny</span>
                <span className="text-sm font-bold text-text">Room</span>
              </div>
              <span className="text-[9px] text-muted">4 in room</span>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute bottom-1 right-1.5">
                      <span className="w-1.5 h-1.5 block rounded-full bg-[#556B2F]"></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#556B2F] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 3. MentorNow — 1:1 Mentoring with Screen Share (Purple) */}
          <div className="card overflow-hidden shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#6E6282]">Mentor</span>
                <span className="text-sm font-bold text-text">Now</span>
              </div>
              <span className="text-[9px] font-mono text-[#6E6282]/70">15 min</span>
            </div>
            <div className="p-2">
              <div className="relative rounded-lg aspect-[16/10] bg-[#f0f0f0] flex items-center justify-center border border-[#e5e5e5]">
                <svg className="w-8 h-8 text-[#c0c0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 block rounded-full bg-[#6E6282] animate-pulse"></span>
                  <span className="text-[7px] text-[#6E6282]/80 font-mono">Screen sharing</span>
                </div>
                <div className="absolute top-1.5 right-1.5">
                  <span className="text-[8px] bg-black/40 text-white/60 px-1.5 py-0.5 rounded font-mono">11:42</span>
                </div>
                <div className="absolute bottom-1.5 right-1.5 flex flex-col gap-1">
                  <div className="w-[60px] h-[40px] rounded bg-[#f0f0f0] border border-[#6E6282]/40 flex items-center justify-center shadow-lg relative">
                    <svg className="w-5 h-5 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="absolute bottom-0.5 left-1 text-[6px] bg-[#6E6282]/70 text-white px-1 py-px rounded">Mentor</span>
                  </div>
                  <div className="w-[60px] h-[40px] rounded bg-[#f0f0f0] border border-border flex items-center justify-center shadow-lg relative">
                    <svg className="w-5 h-5 text-[#c0c0c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="absolute bottom-0.5 left-1 text-[6px] bg-black/50 text-[#666] px-1 py-px rounded">You</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#6E6282] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#6E6282]/30 flex items-center justify-center border border-[#6E6282]/50">
                  <svg className="w-3.5 h-3.5 text-[#6E6282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
