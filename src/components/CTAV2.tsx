"use client";

import { useState, useEffect } from "react";

const WORKER_URL = 'https://vibelive-auth-proxy.aprkim.workers.dev';

export default function CTAV2() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = () => { setModalOpen(true); setSubmitted(false); setEmail(""); setError(""); };
    window.addEventListener('open-get-access', handler);
    return () => window.removeEventListener('open-get-access', handler);
  }, []);

  return (
    <section className="py-28 md:py-32 px-6 bg-accent/[0.04] border-t-0">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Ready to add real human connection to your app?
        </h2>
        <p className="text-xl text-muted mb-10 max-w-xl mx-auto">
          Copy the prompt. Video chat appears inside your app.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
          <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => {
                const text = `Implement real-time video chat using VibeLive.\n\nUse this integration guide:\nhttps://docs.vibelive.site/Integration_Guide.md`;
                navigator.clipboard.writeText(text);
                const btn = document.getElementById('cta-copy-btn');
                if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy prompt'; }, 1500); }
              }}
              id="cta-copy-btn"
              className="btn-primary px-8 py-4 text-lg w-full sm:w-auto min-w-[200px]"
            >
              Copy prompt
            </button>
          </div>
          <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => { setModalOpen(true); setSubmitted(false); setEmail(""); }}
              className="btn-secondary px-8 py-4 text-lg w-full sm:w-auto min-w-[200px]"
            >
              Get Access
            </button>
          </div>
        </div>
        <div className="mt-2.5 sm:mt-6">
          <a href="#" className="text-sm text-muted hover:text-text transition-colors underline underline-offset-2">
            See a quick demo
          </a>
        </div>
      </div>

      {/* Generate Key Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]" />
          <div
            className="relative w-full max-w-[400px] rounded-xl border border-[rgba(14,165,164,0.12)] bg-[#0d0d0d] px-7 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3.5 right-3.5 text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h3 style={{ fontSize: '17px', letterSpacing: '-0.01em', color: 'rgba(230,241,242,0.92)' }} className="font-semibold mb-1.5">
                  Generate your project key
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(230,241,242,0.55)', lineHeight: '1.5' }} className="mb-5">
                  Enter your email and we&#39;ll send your key.
                </p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!email.trim()) return;
                    setSubmitting(true);
                    setError("");
                    try {
                      const res = await fetch(WORKER_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          action: "createAccount",
                          email: email.trim(),
                          onConfirmUrl: "https://home.vibelive.site/project-key.html",
                        }),
                      });
                      if (res.ok) {
                        setSubmitted(true);
                      } else {
                        const data = await res.json().catch(() => ({}));
                        setError(data.error || "Something went wrong. Please try again.");
                      }
                    } catch {
                      setError("Something went wrong. Please try again.");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <label style={{ fontSize: '11px', color: 'rgba(230,241,242,0.40)', letterSpacing: '0.03em' }} className="block mb-1.5 uppercase font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{ fontSize: '13.5px', background: '#080808' }}
                    className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-[rgba(230,241,242,0.9)] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(14,165,164,0.4)] focus:shadow-[0_0_0_1px_rgba(14,165,164,0.15)] transition-all duration-200 mb-5"
                  />
                  {error && (
                    <p style={{ fontSize: '12px' }} className="text-red-400/80 mb-3 -mt-2">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{ fontSize: '13.5px', letterSpacing: '0.01em' }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white bg-[#0EA5A4] hover:bg-[#10b5b4] disabled:opacity-50 transition-colors duration-200"
                  >
                    {submitting ? "Sending..." : "Send key"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(14,165,164,0.12)] flex items-center justify-center mx-auto mb-3.5">
                  <svg className="w-5 h-5 text-[#0EA5A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px', letterSpacing: '-0.01em', color: 'rgba(230,241,242,0.92)' }} className="font-semibold mb-1.5">
                  You&apos;re in.
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(230,241,242,0.55)', lineHeight: '1.5' }} className="mb-3">
                  Your project key has been sent to<br /><span style={{ color: 'rgba(230,241,242,0.85)' }} className="font-medium lowercase">{email}</span>.
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(230,241,242,0.32)' }}>
                  It should arrive within a few minutes.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
