"use client";

import { useState, useCallback } from "react";

const WORKER_URL = 'https://vibelive-auth-proxy.aprkim.workers.dev';

export default function HeroV4Claude7V2() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [projectKey, setProjectKey] = useState("");

  const integrationPrompt = `Implement real-time video chat using VibeLive.\n\nProject ID:  ${projectId}\nProject Key: ${projectKey}\n\nUse this integration guide:\nhttps://vibelive.site/get-started`;

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'createTrialProject' }),
      });
      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch { data = { error: text }; }
      if (res.ok && data.projectId) {
        setProjectId(data.projectId);
        setProjectKey(data.projectAuthToken);
        setGenerated(true);
      } else {
        setError(data.error || 'Failed to generate key');
      }
    } catch {
      setError('Network error — please try again');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(integrationPrompt);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = integrationPrompt;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [integrationPrompt]);

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
        <div className="text-center mb-4 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.25] md:leading-[1.3] mb-4 md:mb-6" style={{ color: '#d4d6da' }}>
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
            style={{ background: 'radial-gradient(circle at 50% 40%, rgba(160,255,240,0.08), transparent 68%)' }}
          />
          <div className="flex justify-center mb-3 relative z-10">
            <div style={{ width: '72px', height: '1px', background: 'rgba(160, 255, 240, 0.35)' }} />
          </div>
          <p className="text-sm text-muted text-center mb-4 relative z-10">
            Generate a key. Paste into your AI editor.
          </p>
          {/* Outer glow wrapper — gradient border effect */}
          <div
            className="relative z-20 rounded-[15px] p-px"
            style={{
              background: 'linear-gradient(180deg, rgba(14, 165, 164, 0.40) 0%, rgba(14, 165, 164, 0.08) 50%, rgba(14, 165, 164, 0.20) 100%)',
              boxShadow: '0 0 30px rgba(14, 165, 164, 0.12), 0 0 60px rgba(14, 165, 164, 0.06), 0 14px 32px rgba(0, 0, 0, 0.55)',
            }}
          >
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(12, 18, 18, 0.95)',
              borderRadius: '14px',
            }}
          >
            <div className="px-4 py-4 md:px-7 md:py-6">
              {/* Keyframes */}
              <style>{`
                @keyframes cursor-blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                @keyframes cred-glow {
                  0% { box-shadow: 0 0 0 rgba(14, 165, 164, 0); }
                  30% { box-shadow: 0 0 16px rgba(14, 165, 164, 0.12); }
                  100% { box-shadow: 0 0 0 rgba(14, 165, 164, 0); }
                }
              `}</style>
              {/* Main prompt line */}
              <div className="flex items-start gap-3">
                <span
                  className="select-none shrink-0 font-mono"
                  style={{ color: 'rgba(160, 255, 240, 0.9)', fontWeight: 600, fontSize: '15px' }}
                >&#x276F;</span>
                <p className="font-mono" style={{ fontSize: '15px', lineHeight: 1.55, color: 'rgba(230, 255, 250, 0.9)', overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                  Implement real-time video chat using VibeLive.
                  {!generated && (
                    <span
                      className="inline-block align-middle ml-1"
                      style={{
                        width: '2px',
                        height: '16px',
                        background: 'rgba(160, 255, 240, 0.7)',
                        animation: 'cursor-blink 1.2s step-end infinite',
                        verticalAlign: 'text-bottom',
                      }}
                    />
                  )}
                </p>
              </div>

              {/* Revealed credentials — fade in after generate */}
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: generated ? '260px' : '0',
                  opacity: generated ? 1 : 0,
                  marginTop: generated ? '16px' : '0',
                }}
              >
                {/* Divider — subtle */}
                <div
                  style={{ height: '1px', background: 'rgba(160, 255, 240, 0.08)', marginBottom: '16px' }}
                />
                {/* Credentials — primary output */}
                <div
                  className="font-mono pl-7"
                  style={{
                    borderRadius: '6px',
                    animation: copied ? 'cred-glow 1s ease-out' : 'none',
                  }}
                >
                  <p style={{ fontSize: '14px', lineHeight: 1.8 }}>
                    <span style={{ color: 'rgba(230, 255, 250, 0.50)' }}>Project ID:{' '}</span>
                    <span style={{ color: '#b8fff2', fontWeight: 500, letterSpacing: '0.3px' }}>&nbsp;{projectId}</span>
                    <br />
                    <span style={{ color: 'rgba(230, 255, 250, 0.50)' }}>Project Key:{' '}</span>
                    <span style={{ color: '#b8fff2', fontWeight: 500, letterSpacing: '0.3px' }}>{projectKey}</span>
                  </p>
                </div>
                {/* Integration guide — secondary */}
                <div className="font-mono pl-7" style={{ marginTop: '10px' }}>
                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'rgba(230, 255, 250, 0.35)' }}>
                    Use this integration guide:
                  </p>
                  <a
                    href="https://vibelive.site/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono hover:underline"
                    style={{ fontSize: '13px', color: 'rgba(91, 159, 199, 0.65)', lineHeight: 1.55 }}
                  >
                    https://vibelive.site/get-started
                  </a>
                </div>
              </div>

              {/* Action area */}
              <div style={{ height: '1px', background: 'rgba(160, 255, 240, 0.06)', marginTop: '20px' }} />
              <div className="flex justify-end" style={{ paddingTop: '16px', paddingBottom: '2px' }}>
                {!generated ? (
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      type="button"
                      aria-label="Generate a project key"
                      className="relative z-30 text-[13px] font-mono font-semibold transition-all duration-200 text-white rounded-[8px]"
                      style={{
                        background: loading ? '#0d8a89' : '#0EA5A4',
                        width: '196px',
                        padding: '11px 0',
                        cursor: loading ? 'wait' : 'pointer',
                        textAlign: 'center',
                        boxShadow: '0 0 12px rgba(14, 165, 164, 0.25), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        opacity: loading ? 0.8 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.currentTarget.style.background = '#12b8b7';
                          e.currentTarget.style.boxShadow = '0 0 18px rgba(14, 165, 164, 0.35), 0 1px 3px rgba(0, 0, 0, 0.3)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!loading) {
                          e.currentTarget.style.background = '#0EA5A4';
                          e.currentTarget.style.boxShadow = '0 0 12px rgba(14, 165, 164, 0.25), 0 1px 3px rgba(0, 0, 0, 0.3)';
                        }
                      }}
                    >
                      {loading ? 'Generating...' : 'Generate Key'}
                    </button>
                    {error && (
                      <span className="text-[12px] font-mono" style={{ color: '#fca5a5' }}>{error}</span>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleCopy}
                    type="button"
                    aria-label="Copy integration prompt to clipboard"
                    className="relative z-30 text-[13px] font-mono font-semibold transition-all duration-200 rounded-[8px]"
                    style={{
                      color: copied ? '#fff' : '#0EA5A4',
                      background: copied ? '#0EA5A4' : 'rgba(14, 165, 164, 0.08)',
                      border: '1px solid rgba(14, 165, 164, 0.25)',
                      width: '196px',
                      padding: '11px 0',
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: copied ? '0 0 12px rgba(14, 165, 164, 0.25)' : 'none',
                    }}
                    onMouseEnter={(e) => { if (!copied) e.currentTarget.style.background = 'rgba(14, 165, 164, 0.15)'; }}
                    onMouseLeave={(e) => { if (!copied) e.currentTarget.style.background = 'rgba(14, 165, 164, 0.08)'; }}
                  >
                    {copied ? 'Copied \u2713' : 'Copy Integration Prompt'}
                  </button>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* === MOBILE: Paired cards (pre-join + room together) === */}
        <div className="md:hidden flex flex-col gap-6 max-w-[980px] mx-auto opacity-[0.88]">

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
                    <span>&#x1F1FA;&#x1F1F8;</span>
                    <span className="text-muted/40">&#x21C4;</span>
                    <span>&#x1F1EF;&#x1F1F5;</span>
                    <span className="ml-1">English &#x2194; &#x65E5;&#x672C;&#x8A9E;</span>
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
                <span className="text-[9px] font-mono text-muted/60">27:14</span>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute top-1.5 left-1.5">
                      <span className="text-[8px] bg-black/40 text-white/70 px-1.5 py-0.5 rounded">&#x1F1FA;&#x1F1F8; EN</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute top-1.5 left-1.5">
                      <span className="text-[8px] bg-black/40 text-white/70 px-1.5 py-0.5 rounded">&#x1F1EF;&#x1F1F5; JP</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#BF3143] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="text-sm font-medium text-muted">Sunday Hangout &#x1F33F;</div>
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
                <span className="text-[9px] text-muted/60">4 in room</span>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <div className="absolute bottom-1 right-1.5">
                        <span className="w-1.5 h-1.5 block rounded-full bg-[#556B2F]"></span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#556B2F] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="relative rounded-lg aspect-[16/10] bg-[#141414] flex items-center justify-center border border-[#2a2a2a]">
                  <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="w-[60px] h-[40px] rounded bg-[#1e1e1e] border border-[#6E6282]/40 flex items-center justify-center shadow-lg relative">
                      <svg className="w-5 h-5 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="absolute bottom-0.5 left-1 text-[6px] bg-[#6E6282]/70 text-white px-1 py-px rounded">Mentor</span>
                    </div>
                    <div className="w-[60px] h-[40px] rounded bg-[#1e1e1e] border border-[#333] flex items-center justify-center shadow-lg relative">
                      <svg className="w-5 h-5 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="absolute bottom-0.5 left-1 text-[6px] bg-black/50 text-white/70 px-1 py-px rounded">You</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-[980px] mx-auto opacity-[0.88]">

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
                  <span>&#x1F1FA;&#x1F1F8;</span>
                  <span className="text-muted/40">&#x21C4;</span>
                  <span>&#x1F1EF;&#x1F1F5;</span>
                  <span className="ml-1">English &#x2194; &#x65E5;&#x672C;&#x8A9E;</span>
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
                <div className="text-sm font-medium text-muted">Sunday Hangout &#x1F33F;</div>
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
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-[980px] mx-auto mt-4 opacity-[0.88]">

          {/* 1. TabbiMate — 1:1 Language Practice (Red) */}
          <div className="card overflow-hidden shadow-md">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-soft">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#BF3143]">Tabbi</span>
                <span className="text-sm font-bold text-text">Mate</span>
              </div>
              <span className="text-[9px] font-mono text-muted/60">27:14</span>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-1.5">
                <div className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="absolute top-1.5 left-1.5">
                    <span className="text-[8px] bg-black/40 text-white/70 px-1.5 py-0.5 rounded">&#x1F1FA;&#x1F1F8; EN</span>
                  </div>
                </div>
                <div className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="absolute top-1.5 left-1.5">
                    <span className="text-[8px] bg-black/40 text-white/70 px-1.5 py-0.5 rounded">&#x1F1EF;&#x1F1F5; JP</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#BF3143] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span className="text-[9px] text-muted/60">4 in room</span>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="relative rounded-lg aspect-[16/10] bg-[#1e1e1e] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="absolute bottom-1 right-1.5">
                      <span className="w-1.5 h-1.5 block rounded-full bg-[#556B2F]"></span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#556B2F] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="relative rounded-lg aspect-[16/10] bg-[#141414] flex items-center justify-center border border-[#2a2a2a]">
                <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-[60px] h-[40px] rounded bg-[#1e1e1e] border border-[#6E6282]/40 flex items-center justify-center shadow-lg relative">
                    <svg className="w-5 h-5 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="absolute bottom-0.5 left-1 text-[6px] bg-[#6E6282]/70 text-white px-1 py-px rounded">Mentor</span>
                  </div>
                  <div className="w-[60px] h-[40px] rounded bg-[#1e1e1e] border border-[#333] flex items-center justify-center shadow-lg relative">
                    <svg className="w-5 h-5 text-[#3a3a3a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="absolute bottom-0.5 left-1 text-[6px] bg-black/50 text-white/70 px-1 py-px rounded">You</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 pb-1">
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <button className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
