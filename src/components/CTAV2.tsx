"use client";

import { useState, useEffect } from "react";

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
                const text = `Add live video chat to this app using VibeLive.\nUse the link below. Use a teal UI theme.\nhttps://vibelive.site/start/try?key=guest-teal-14d`;
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

      {/* Get Access Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md rounded-2xl border border-[#2a2a2a] bg-[#111] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-text transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-text mb-2">
                  Get early access
                </h3>
                <p className="text-sm text-muted mb-6">
                  Enter your email and we&#39;ll send you access details and your API key.
                </p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!email.trim()) return;
                    setSubmitting(true);
                    setError("");
                    try {
                      const res = await fetch("https://formspree.io/f/mzdadakz", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email }),
                      });
                      if (res.ok) {
                        setSubmitted(true);
                      } else {
                        setError("Something went wrong. Please try again.");
                      }
                    } catch {
                      setError("Something went wrong. Please try again.");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <label className="block text-xs text-muted mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-text placeholder:text-[#444] focus:outline-none focus:border-accent/50 transition-colors mb-6"
                  />
                  {error && (
                    <p className="text-sm text-red-400 mb-4">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3 text-base disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Request access"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-sm text-muted mb-4">
                  We&#39;ll send access details to <span className="text-text font-medium">{email}</span>.
                </p>
                <p className="text-xs text-muted">
                  You&#39;ll hear from us within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
