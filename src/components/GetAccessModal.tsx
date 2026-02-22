"use client";

import { useState, useEffect } from "react";

const WORKER_URL = 'https://vibelive-auth-proxy.aprkim.workers.dev';

export default function GetAccessModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setSubmitted(false);
      setEmail("");
      setError("");
    };
    window.addEventListener("open-get-access", handler);
    return () => window.removeEventListener("open-get-access", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]" />
      <div
        className="relative w-full max-w-[400px] rounded-xl border border-[rgba(14,165,164,0.12)] bg-[#0d0d0d] px-7 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3.5 right-3.5 text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h3 style={{ fontSize: "17px", letterSpacing: "-0.01em", color: "rgba(230,241,242,0.92)" }} className="font-semibold mb-1.5">
              Generate your project key
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(230,241,242,0.55)", lineHeight: "1.5" }} className="mb-5">
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
                      onConfirmUrl: "https://vibelive.site/project-key.html",
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
              <label style={{ fontSize: "11px", color: "rgba(230,241,242,0.40)", letterSpacing: "0.03em" }} className="block mb-1.5 uppercase font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoFocus
                style={{ fontSize: "13.5px", background: "#080808" }}
                className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-[rgba(230,241,242,0.9)] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(14,165,164,0.4)] focus:shadow-[0_0_0_1px_rgba(14,165,164,0.15)] transition-all duration-200 mb-5"
              />
              {error && (
                <p style={{ fontSize: "12px" }} className="text-red-400/80 mb-3 -mt-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                style={{ fontSize: "13.5px", letterSpacing: "0.01em" }}
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
            <h3 style={{ fontSize: "17px", letterSpacing: "-0.01em", color: "rgba(230,241,242,0.92)" }} className="font-semibold mb-1.5">
              You&apos;re in.
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(230,241,242,0.55)", lineHeight: "1.5" }} className="mb-3">
              Your project key has been sent to<br /><span style={{ color: "rgba(230,241,242,0.85)" }} className="font-medium lowercase">{email}</span>.
            </p>
            <p style={{ fontSize: "12px", color: "rgba(230,241,242,0.32)" }}>
              It should arrive within a few minutes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
