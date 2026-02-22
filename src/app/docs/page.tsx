"use client";

import { useState } from "react";
import HeaderDocs from "@/components/HeaderDocs";
import Footer from "@/components/Footer";
import GetAccessModal from "@/components/GetAccessModal";

const WORKER_URL = 'https://vibelive-auth-proxy.aprkim.workers.dev';

export default function DocsPage() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projectId, setProjectId] = useState("");
  const [projectKey, setProjectKey] = useState("");

  const handleGenerate = async () => {
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
  };
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-card\\/90 { background-color: rgba(11, 26, 26, 0.95) !important; }
      `}</style>
      <main className="min-h-screen bg-[#060606] relative z-10">
        <HeaderDocs />
        <div className="max-w-[700px] mx-auto px-6 pt-16 pb-24">

          {/* Page title */}
          <h1 className="text-2xl font-bold text-text mb-2">Documentation</h1>
          <p className="text-sm text-muted mb-12">
            Everything you need to add live video chat to your app with VibeLive.
          </p>

          {/* ── 1. Quick Start ── */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-text mb-4">Quick Start</h2>
            <p className="text-sm text-muted mb-4">
              Generate a key, then paste the prompt into your AI editor (Claude Code, Cursor, Windsurf, etc.).
            </p>
            <div
              className="relative overflow-hidden"
              style={{
                background: 'rgba(18, 24, 24, 0.92)',
                border: '1px solid rgba(160, 255, 240, 0.22)',
                borderRadius: '14px',
                boxShadow: '0 0 0 1px rgba(160, 255, 240, 0.10), 0 14px 32px rgba(0, 0, 0, 0.65)',
              }}
            >
              {/* Copy button — only shown after generate */}
              {generated && (
                <button
                  onClick={() => {
                    const text = `Implement real-time video chat using VibeLive.\n\nProject ID:  ${projectId}\nProject Key: ${projectKey}\n\nUse this integration guide:\nhttps://vibelive.site/get-started`;
                    navigator.clipboard.writeText(text);
                    const btn = document.getElementById('docs-copy-btn');
                    if (btn) {
                      btn.textContent = 'Copied \u2713';
                      setTimeout(() => { btn.textContent = 'Copy'; }, 1200);
                    }
                  }}
                  id="docs-copy-btn"
                  className="hidden md:flex absolute top-5 right-5 text-[11px] font-mono z-10 transition-colors"
                  style={{
                    color: '#A0FFF0',
                    background: 'rgba(160, 255, 240, 0.14)',
                    border: '1px solid rgba(160, 255, 240, 0.35)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    minWidth: '88px',
                    minHeight: '36px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(160, 255, 240, 0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(160, 255, 240, 0.14)'; }}
                >
                  Copy
                </button>
              )}
              <div className="px-4 py-4 md:px-7 md:py-6 md:pr-28">
                <div className="flex items-start gap-3">
                  <span
                    className="select-none shrink-0 font-mono"
                    style={{ color: 'rgba(160, 255, 240, 0.9)', fontWeight: 600, fontSize: '15px' }}
                  >&#10095;</span>
                  <div className="font-mono" style={{ fontSize: '15px', lineHeight: 1.55, color: 'rgba(230, 255, 250, 0.9)', overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                    <p style={{ marginBottom: generated ? '12px' : '0' }}>Implement real-time video chat using VibeLive.</p>
                    {generated && (
                      <>
                        <p style={{ color: 'rgba(230, 255, 250, 0.50)', marginBottom: '2px' }}>
                          <span style={{ display: 'inline-block', minWidth: '100px' }}>Project ID:</span>
                          <span style={{ color: 'rgba(230, 255, 250, 0.9)' }}>{projectId}</span>
                        </p>
                        <p style={{ color: 'rgba(230, 255, 250, 0.50)', marginBottom: '12px' }}>
                          <span style={{ display: 'inline-block', minWidth: '100px' }}>Project Key:</span>
                          <span style={{ color: 'rgba(230, 255, 250, 0.9)' }}>{projectKey}</span>
                        </p>
                        <p style={{ color: 'rgba(230, 255, 250, 0.50)', marginBottom: '2px' }}>Use this integration guide:</p>
                        <p><span style={{ color: 'rgba(91, 159, 199, 0.65)', fontSize: '14px' }}>https://vibelive.site/get-started</span></p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Generate Key button — before generate */}
              {!generated && (
                <div className="px-4 pb-4 md:px-7 md:pb-6">
                  <div style={{ height: '1px', background: 'rgba(160, 255, 240, 0.08)', marginBottom: '16px' }} />
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      className="font-semibold transition-colors"
                      style={{
                        color: '#fff',
                        background: loading ? '#0d8a89' : '#0EA5A4',
                        borderRadius: '10px',
                        padding: '10px 28px',
                        fontSize: '14px',
                        cursor: loading ? 'wait' : 'pointer',
                        opacity: loading ? 0.8 : 1,
                      }}
                      onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#10b5b4'; }}
                      onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#0EA5A4'; }}
                    >
                      {loading ? 'Generating...' : 'Generate Key'}
                    </button>
                    {error && (
                      <span className="text-[12px] font-mono" style={{ color: '#fca5a5' }}>{error}</span>
                    )}
                  </div>
                </div>
              )}
              {/* Copy button — mobile, after generate */}
              {generated && (
                <div className="md:hidden px-4 pb-4">
                  <div style={{ height: '1px', background: 'rgba(160, 255, 240, 0.12)', marginBottom: '12px' }} />
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        const text = `Implement real-time video chat using VibeLive.\n\nProject ID:  ${projectId}\nProject Key: ${projectKey}\n\nUse this integration guide:\nhttps://vibelive.site/get-started`;
                        navigator.clipboard.writeText(text);
                        const btn = document.getElementById('docs-copy-btn-mobile');
                        if (btn) {
                          btn.textContent = 'Copied \u2713';
                          setTimeout(() => { btn.textContent = 'Copy'; }, 1200);
                        }
                      }}
                      id="docs-copy-btn-mobile"
                      className="text-[11px] font-mono transition-colors"
                      style={{
                        color: '#A0FFF0',
                        background: 'rgba(160, 255, 240, 0.14)',
                        border: '1px solid rgba(160, 255, 240, 0.35)',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        minWidth: '88px',
                        minHeight: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onTouchStart={(e) => { e.currentTarget.style.background = 'rgba(160, 255, 240, 0.22)'; }}
                      onTouchEnd={(e) => { e.currentTarget.style.background = 'rgba(160, 255, 240, 0.14)'; }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-muted mt-3">
              That&#39;s it. Your AI editor handles the setup and video integration.
            </p>
          </section>

          {/* ── 2. How VibeLive Works ── */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-text mb-4">How VibeLive Works</h2>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                VibeLive is a JavaScript SDK that adds real-time video and audio to any web app. It connects participants through managed rooms &mdash; you create a room, share a link or room ID, and users join.
              </p>
              <p>
                Under the hood, VibeLive handles:
              </p>
              <ul className="list-none space-y-2 pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                  <span><strong className="text-text font-medium">Signaling &amp; connection</strong> &mdash; WebRTC negotiation, TURN/STUN relay when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                  <span><strong className="text-text font-medium">Room management</strong> &mdash; create, join, leave. Rooms are ephemeral by default</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                  <span><strong className="text-text font-medium">Media controls</strong> &mdash; mute, camera toggle, screen share</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                  <span><strong className="text-text font-medium">UI components</strong> &mdash; optional pre-built React components, or use the headless API</span>
                </li>
              </ul>
              <p>
                VibeLive does not store video or audio data. All media streams are peer-to-peer or relayed transiently.
              </p>
            </div>
          </section>

          {/* ── 3. Keys & Access ── */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-text mb-4">Keys &amp; Access</h2>
            <div className="overflow-hidden rounded-xl border border-[#1a1a1a]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1a1a1a] bg-[#0c0c0c]">
                    <th className="text-left px-4 py-3 text-text font-medium">Tier</th>
                    <th className="text-left px-4 py-3 text-text font-medium">Access</th>
                    <th className="text-left px-4 py-3 text-text font-medium">Limits</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-[#1a1a1a]">
                    <td className="px-4 py-3 text-text font-medium">Guest</td>
                    <td className="px-4 py-3">No API key required</td>
                    <td className="px-4 py-3">2 participants per room, 10-minute sessions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-text font-medium">API Key</td>
                    <td className="px-4 py-3">Generated instantly</td>
                    <td className="px-4 py-3">Configurable room size, persistent rooms, custom themes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-3">
              Generate a project key instantly from the Quick Start above, or request full access from the <button onClick={() => (typeof window !== 'undefined') && window.dispatchEvent(new CustomEvent('open-get-access'))} className="text-accent hover:underline">Get Access</button> form.
              Guest mode works immediately with no signup.
            </p>
          </section>

          {/* ── 4. UI Themes ── */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-text mb-4">UI Themes</h2>
            <p className="text-sm text-muted mb-4">
              VibeLive ships three standard design themes. Each theme defines surfaces, text, accent colors, and component rules. Use the one that fits your app&#39;s personality.
            </p>
            <div className="space-y-3">
              {[
                { name: "Red", color: "#BF3143", desc: "Energetic, action-oriented. Good for social and real-time apps." },
                { name: "Nature Calm", color: "#556B2F", desc: "Grounded, low-saturation. Good for wellness, coaching, long sessions." },
                { name: "Purple", color: "#6E6282", desc: "Calm, thoughtful. Good for creator tools, learning, mentorship." },
              ].map((theme) => (
                <div key={theme.name} className="flex items-center gap-3 rounded-xl border border-[#1a1a1a] bg-[#0c0c0c] px-4 py-3">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: theme.color }} />
                  <div>
                    <span className="text-sm text-text font-medium">{theme.name}</span>
                    <span className="text-sm text-muted ml-2">&mdash; {theme.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              Full design guide tokens (CSS variables, component rules, do/don&#39;t) are provided with your API key.
            </p>
          </section>

          {/* ── 5. FAQ ── */}
          <section className="mb-0">
            <h2 className="text-lg font-semibold text-text mb-4">FAQ</h2>
            <div className="space-y-0 rounded-xl border border-[#1a1a1a] overflow-hidden">
              {[
                {
                  q: "Do I need to write WebRTC code?",
                  a: "No. The SDK handles all WebRTC internals. You create a room and render the component."
                },
                {
                  q: "What frameworks are supported?",
                  a: "React and vanilla JS. The prompt works with Next.js, Vite, and any standard setup."
                },
                {
                  q: "Is there a backend I need to deploy?",
                  a: "No. VibeLive manages signaling and relay infrastructure. Your app only runs client-side SDK code."
                },
                {
                  q: "Can I customize the video UI?",
                  a: "Yes. Use the pre-built components with theme tokens, or use the headless API for full control."
                },
                {
                  q: "What happens if a participant loses connection?",
                  a: "The SDK handles reconnection automatically. If the connection can't be restored, the participant is removed from the room."
                },
                {
                  q: "Is video data stored or recorded?",
                  a: "No. All media is peer-to-peer or transiently relayed. VibeLive does not record or store any audio or video."
                },
              ].map((item, i, arr) => (
                <div key={i} className={`px-4 py-4 ${i < arr.length - 1 ? 'border-b border-[#1a1a1a]' : ''}`}>
                  <h3 className="text-sm font-medium text-text mb-1">{item.q}</h3>
                  <p className="text-sm text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
        <Footer />
        <GetAccessModal />
      </main>
    </div>
  );
}
