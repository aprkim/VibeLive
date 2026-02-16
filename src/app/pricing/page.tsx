"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
      `}</style>
      <main className="min-h-screen bg-[#060606] relative z-10">
        <Header />
        <div className="max-w-[820px] mx-auto px-6 pt-16 pb-24">

          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Pricing</h1>
            <p className="text-base text-muted max-w-md mx-auto">
              Start experimenting for free. Upgrade when you&apos;re ready to build.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-[680px] mx-auto">

            {/* Free — Sandbox */}
            <div className="rounded-2xl border border-[#1a1a1a] bg-[#0c0c0c] p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-block text-xs font-medium text-muted/80 uppercase tracking-wider mb-3">Sandbox</span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-text">$0</span>
                  <span className="text-sm text-muted">/ forever</span>
                </div>
                <p className="text-sm text-muted">
                  Explore what&apos;s possible with AI + live video.
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  1 active room at a time
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Up to 2 participants
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Video &amp; audio
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Join preview (camera/mic check)
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Limited session length
                </li>
                {/* Attribution intentionally flexible — may change */}
                <li className="flex items-start gap-2.5 text-sm text-muted/60">
                  <svg className="w-4 h-4 text-muted/40 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  &quot;Powered by VibeLive&quot; attribution
                </li>
              </ul>

              <button
                onClick={() => {
                  const text = `Add live video chat to this app using VibeLive.\nUse the link below. Use a teal UI theme.\nhttps://vibelive.site/start/try?key=guest-teal-14d`;
                  navigator.clipboard.writeText(text);
                  const btn = document.getElementById('pricing-free-btn');
                  if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Get started'; }, 1500); }
                }}
                id="pricing-free-btn"
                className="btn-secondary w-full py-3 text-sm min-w-0"
              >
                Get started
              </button>
            </div>

            {/* Pro — Builder */}
            <div className="rounded-2xl border border-accent/20 bg-[#0c0c0c] p-8 flex flex-col relative">
              <div className="mb-6">
                <span className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-3">Builder</span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-text">$10</span>
                  <span className="text-sm text-muted">/ month</span>
                </div>
                <p className="text-sm text-muted">
                  For building real experiences.
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {/* Limits intentionally vague — caps may change */}
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Multiple concurrent rooms
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  More participants per room
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Extended session length
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Screen sharing
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Smart layout behavior
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No watermark
                </li>
              </ul>

              <button
                onClick={() => { setModalOpen(true); setSubmitted(false); setEmail(""); }}
                className="btn-primary w-full py-3 text-sm min-w-0"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Future plans note */}
          <div className="text-center mt-14">
            <p className="text-sm text-muted/50">
              Teams, higher usage, and advanced features coming soon.
            </p>
          </div>
        </div>
        <Footer />
      </main>

      {/* Upgrade Modal */}
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
                  Upgrade to Pro
                </h3>
                <p className="text-sm text-muted mb-6">
                  Enter your email and we&#39;ll reach out with Builder plan access.
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
                        body: JSON.stringify({ email, plan: "builder" }),
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
                    {submitting ? "Submitting..." : "Request Pro access"}
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
                  We&#39;ll send Builder plan details to <span className="text-text font-medium">{email}</span>.
                </p>
                <p className="text-xs text-muted">
                  You&#39;ll hear from us within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
