"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type ModalState = "form" | "loading" | "success" | "error";

interface Credentials {
  projectId: string;
  projectKey: string;
}

function buildIntegrationPrompt(creds: Credentials) {
  return `Implement real-time video chat using VibeLive.

Project ID: ${creds.projectId}
Project Key: ${creds.projectKey}

Use this integration guide:
https://vibelive.site/get-started`;
}

const WORKER_URL = 'https://vibelive-auth-proxy.aprkim.workers.dev';

export default function CTAV2() {
  // New "Get Project Key" modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState>("form");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  // Old "Get Access" modal state
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [accessEmail, setAccessEmail] = useState("");
  const [accessSubmitted, setAccessSubmitted] = useState(false);
  const [accessSubmitting, setAccessSubmitting] = useState(false);
  const [accessError, setAccessError] = useState("");

  const openModal = useCallback(() => {
    setModalState("form");
    setEmail("");
    setError("");
    setCredentials(null);
    setCopied(false);
    setModalOpen(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    setTimeout(() => setModalOpen(false), 200);
  }, []);

  // ESC key closes modals
  useEffect(() => {
    if (!modalOpen && !accessModalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (modalOpen) closeModal();
        if (accessModalOpen) setAccessModalOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen, accessModalOpen, closeModal]);

  // Focus email input when modal opens
  useEffect(() => {
    if (modalOpen && modalState === "form") {
      setTimeout(() => emailRef.current?.focus(), 100);
    }
  }, [modalOpen, modalState]);

  // Listen for header "Get Access" buttons — opens the OLD email modal
  useEffect(() => {
    const handler = () => {
      setAccessModalOpen(true);
      setAccessSubmitted(false);
      setAccessEmail("");
      setAccessError("");
    };
    window.addEventListener("open-get-access", handler);
    return () => window.removeEventListener("open-get-access", handler);
  }, []);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;
    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setModalState("loading");
    setError("");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "createTrialProject",
          email: trimmedEmail,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setCredentials({ projectId: data.projectId, projectKey: data.projectAuthToken });
        setModalState("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
        setModalState("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setModalState("error");
    }
  };

  const handleCopy = async () => {
    if (!credentials || copied) return;
    try {
      await navigator.clipboard.writeText(buildIntegrationPrompt(credentials));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = buildIntegrationPrompt(credentials);
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-28 md:py-32 px-6 bg-accent/[0.04] border-t-0">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Ready to ship real-time video in your app?
        </h2>
        <p className="text-xl text-muted mb-10 max-w-xl mx-auto">
          Generate your key. Copy the prompt. Ship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
          <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={openModal}
              id="getProjectKeyBtn"
              className="btn-primary px-8 py-4 text-lg w-full sm:w-auto min-w-[200px]"
            >
              Get Project Key
            </button>
          </div>
        </div>
        <div className="mt-2.5 sm:mt-6">
          <a href="#" className="text-sm text-muted hover:text-text transition-colors underline underline-offset-2">
            See 60-second demo
          </a>
        </div>
      </div>

      {/* Project Key Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 200ms ease-out",
          }}
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]" />
          <div
            className="relative w-full max-w-[440px] rounded-xl border border-[rgba(14,165,164,0.12)] bg-[#0d0d0d] px-7 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            style={{
              transform: visible ? "scale(1)" : "scale(0.95)",
              transition: "transform 200ms ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3.5 right-3.5 text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Form State */}
            {(modalState === "form" || modalState === "error") && (
              <>
                <h3 style={{ fontSize: "17px", letterSpacing: "-0.01em", color: "rgba(230,241,242,0.92)" }} className="font-semibold mb-1.5">
                  Create your VibeLive project
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(230,241,242,0.55)", lineHeight: "1.5" }} className="mb-5">
                  Get your credentials instantly. No verification needed.
                </p>
                <form onSubmit={handleSubmit}>
                  <label style={{ fontSize: "11px", color: "rgba(230,241,242,0.40)", letterSpacing: "0.03em" }} className="block mb-1.5 uppercase font-medium">
                    Email <span className="text-red-400/60">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                    placeholder="you@example.com"
                    style={{ fontSize: "13.5px", background: "#080808" }}
                    className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-[rgba(230,241,242,0.9)] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(14,165,164,0.4)] focus:shadow-[0_0_0_1px_rgba(14,165,164,0.15)] transition-all duration-200 mb-5"
                  />

                  {error && (
                    <p style={{ fontSize: "12px" }} className="text-red-400/80 mb-3 -mt-2">{error}</p>
                  )}

                  <button
                    type="submit"
                    style={{ fontSize: "13.5px", letterSpacing: "0.01em" }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white bg-[#0EA5A4] hover:bg-[#10b5b4] disabled:opacity-50 transition-colors duration-200"
                  >
                    Generate Key
                  </button>
                </form>
                <div className="text-center mt-3">
                  <button
                    onClick={closeModal}
                    style={{ fontSize: "12px", color: "rgba(230,241,242,0.40)" }}
                    className="hover:text-[rgba(230,241,242,0.6)] transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            {/* Loading State */}
            {modalState === "loading" && (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-2 border-[rgba(14,165,164,0.3)] border-t-[#0EA5A4] rounded-full animate-spin mx-auto mb-4" />
                <p style={{ fontSize: "14px", color: "rgba(230,241,242,0.7)" }}>
                  Creating your project...
                </p>
              </div>
            )}

            {/* Success State */}
            {modalState === "success" && credentials && (
              <>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[rgba(14,165,164,0.12)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0EA5A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "17px", letterSpacing: "-0.01em", color: "rgba(230,241,242,0.92)" }} className="font-semibold">
                    Your VibeLive Project Credentials
                  </h3>
                </div>

                {/* Credentials display */}
                <div className="rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#080808] px-4 py-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: "11px", color: "rgba(230,241,242,0.40)", letterSpacing: "0.03em" }} className="uppercase font-medium">
                      Project ID
                    </span>
                    <span style={{ fontSize: "13px", color: "rgba(230,241,242,0.85)" }} className="font-mono">
                      {credentials.projectId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: "11px", color: "rgba(230,241,242,0.40)", letterSpacing: "0.03em" }} className="uppercase font-medium">
                      Project Key
                    </span>
                    <span style={{ fontSize: "13px", color: "rgba(230,241,242,0.85)" }} className="font-mono">
                      {credentials.projectKey}
                    </span>
                  </div>
                </div>

                {/* Integration prompt code block */}
                <div className="rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#080808] px-4 py-3 mb-4">
                  <p style={{ fontSize: "10px", color: "rgba(230,241,242,0.35)", letterSpacing: "0.03em" }} className="uppercase font-medium mb-2">
                    Integration Prompt
                  </p>
                  <pre
                    style={{ fontSize: "12px", color: "rgba(230,241,242,0.7)", lineHeight: "1.6" }}
                    className="whitespace-pre-wrap font-mono"
                  >
                    {buildIntegrationPrompt(credentials)}
                  </pre>
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  style={{ fontSize: "13.5px", letterSpacing: "0.01em" }}
                  className="w-full py-2.5 rounded-lg font-semibold text-white bg-[#0EA5A4] hover:bg-[#10b5b4] transition-colors duration-200"
                >
                  {copied ? "✓ Copied!" : "Copy Integration Prompt"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Get Access Modal (old email flow — triggered by header buttons) */}
      {accessModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setAccessModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[6px]" />
          <div
            className="relative w-full max-w-[400px] rounded-xl border border-[rgba(14,165,164,0.12)] bg-[#0d0d0d] px-7 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setAccessModalOpen(false)}
              className="absolute top-3.5 right-3.5 text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!accessSubmitted ? (
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
                    if (!accessEmail.trim()) return;
                    setAccessSubmitting(true);
                    setAccessError("");
                    try {
                      const res = await fetch(WORKER_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          action: "createAccount",
                          email: accessEmail.trim(),
                          onConfirmUrl: "https://vibelive.site/project-key.html",
                        }),
                      });
                      if (res.ok) {
                        setAccessSubmitted(true);
                      } else {
                        const data = await res.json().catch(() => ({}));
                        setAccessError(data.error || "Something went wrong. Please try again.");
                      }
                    } catch {
                      setAccessError("Something went wrong. Please try again.");
                    } finally {
                      setAccessSubmitting(false);
                    }
                  }}
                >
                  <label style={{ fontSize: "11px", color: "rgba(230,241,242,0.40)", letterSpacing: "0.03em" }} className="block mb-1.5 uppercase font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={accessEmail}
                    onChange={(e) => setAccessEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{ fontSize: "13.5px", background: "#080808" }}
                    className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-[rgba(230,241,242,0.9)] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(14,165,164,0.4)] focus:shadow-[0_0_0_1px_rgba(14,165,164,0.15)] transition-all duration-200 mb-5"
                  />
                  {accessError && (
                    <p style={{ fontSize: "12px" }} className="text-red-400/80 mb-3 -mt-2">{accessError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={accessSubmitting}
                    style={{ fontSize: "13.5px", letterSpacing: "0.01em" }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white bg-[#0EA5A4] hover:bg-[#10b5b4] disabled:opacity-50 transition-colors duration-200"
                  >
                    {accessSubmitting ? "Sending..." : "Send key"}
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
                  Your project key has been sent to<br /><span style={{ color: "rgba(230,241,242,0.85)" }} className="font-medium lowercase">{accessEmail}</span>.
                </p>
                <p style={{ fontSize: "12px", color: "rgba(230,241,242,0.32)" }}>
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
