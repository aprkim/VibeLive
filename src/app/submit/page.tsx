"use client";

import { useState, useRef } from "react";
import type { ShowcaseCategory } from "@/types/showcase";
import { CATEGORIES } from "@/types/showcase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetAccessModal from "@/components/GetAccessModal";

function isValidUrl(s: string): boolean {
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

export default function SubmitPage() {
  const [appName, setAppName] = useState("");
  const [tagline, setTagline] = useState("");
  const [problemSolved, setProblemSolved] = useState("");
  const [category, setCategory] = useState<ShowcaseCategory | "">("");
  const [builderName, setBuilderName] = useState("");
  const [builderLink, setBuilderLink] = useState("");
  const [demoUrl, setDemoUrl] = useState("");

  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!appName.trim()) return setError("App name is required.");
    if (!tagline.trim()) return setError("Tagline is required.");
    if (tagline.length > 120) return setError("Tagline must be 120 characters or less.");
    if (!category) return setError("Category is required.");
    if (problemSolved.length > 240) return setError("Problem solved must be 240 characters or less.");
    if (builderLink && !isValidUrl(builderLink)) return setError("Builder link must be a valid URL.");
    if (demoUrl && !isValidUrl(demoUrl)) return setError("Demo URL must be a valid URL.");

    setSubmitting(true);

    try {
      // Upload screenshot first if provided
      let screenshotUrl: string | undefined;
      if (screenshotFile) {
        const formData = new FormData();
        formData.append("file", screenshotFile);
        const uploadRes = await fetch("/api/showcase/upload", {
          method: "POST",
          body: formData,
        });
        if (!uploadRes.ok) {
          const data = await uploadRes.json();
          throw new Error(data.error || "Image upload failed");
        }
        const { url } = await uploadRes.json();
        screenshotUrl = url;
      }

      const res = await fetch("/api/showcase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appName: appName.trim(),
          tagline: tagline.trim(),
          problemSolved: problemSolved.trim() || undefined,
          category,
          builderName: builderName.trim() || undefined,
          builderLink: builderLink.trim() || undefined,
          demoUrl: demoUrl.trim() || undefined,
          screenshotUrl,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full text-[13px] bg-[#0a0a0a] border border-[#1a1a1a] text-[#e5e7eb] rounded-lg px-3.5 py-2.5 outline-none focus:border-[#0EA5A4]/40 transition-colors placeholder:text-[#4b5563]";
  const labelClass = "block text-[13px] font-medium text-[#e5e7eb] mb-1.5";

  return (
    <div className="dark bg-[#060606] min-h-screen" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark header { background-color: rgba(15,15,15,0.95) !important; }
      `}</style>
      <Header />

      <main className="max-w-[540px] mx-auto px-6 pt-16 pb-24">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#6b7280] hover:text-[#9ca3af] transition-colors mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to showcase
        </a>

        <h1 className="text-2xl font-bold text-[#e5e7eb] mb-2">Submit your build</h1>
        <p className="text-[14px] text-[#9ca3af] mb-10">
          Share what you&apos;ve built with VibeLive. Submissions are reviewed before appearing in the showcase.
        </p>

        {success ? (
          <div className="rounded-2xl border border-[#0EA5A4]/20 bg-[#0EA5A4]/5 p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0EA5A4]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#e5e7eb] mb-2">Thanks!</h2>
            <p className="text-[14px] text-[#9ca3af]">
              Your build is pending review. We&apos;ll feature it in the showcase once approved.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClass}>
                App name <span className="text-[#0EA5A4]">*</span>
              </label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="My Awesome App"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Tagline <span className="text-[#0EA5A4]">*</span>
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="A one-liner about your app"
                maxLength={120}
                className={inputClass}
              />
              <p className="text-[11px] text-[#4b5563] mt-1">{tagline.length}/120</p>
            </div>

            <div>
              <label className={labelClass}>
                Category <span className="text-[#0EA5A4]">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ShowcaseCategory)}
                className={inputClass}
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>What problem does it solve?</label>
              <textarea
                value={problemSolved}
                onChange={(e) => setProblemSolved(e.target.value)}
                placeholder="Optional — briefly describe the problem"
                maxLength={240}
                rows={2}
                className={inputClass + " resize-none"}
              />
              <p className="text-[11px] text-[#4b5563] mt-1">{problemSolved.length}/240</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Your name</label>
                <input
                  type="text"
                  value={builderName}
                  onChange={(e) => setBuilderName(e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Your link</label>
                <input
                  type="text"
                  value={builderLink}
                  onChange={(e) => setBuilderLink(e.target.value)}
                  placeholder="https://your-site.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Demo URL</label>
              <input
                type="text"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://your-app.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Screenshot</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    if (file.size > 5 * 1024 * 1024) {
                      setError("Image must be under 5 MB");
                      return;
                    }
                    setScreenshotFile(file);
                    setScreenshotPreview(URL.createObjectURL(file));
                    setError("");
                  }
                }}
              />
              {screenshotPreview ? (
                <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]">
                  <img
                    src={screenshotPreview}
                    alt="Preview"
                    className="w-full aspect-video object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setScreenshotFile(null);
                      setScreenshotPreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#060606]/80 border border-[#1a1a1a] flex items-center justify-center text-[#9ca3af] hover:text-[#e5e7eb] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full aspect-video rounded-lg border border-dashed border-[#252525] bg-[#0a0a0a] flex flex-col items-center justify-center gap-2 hover:border-[#0EA5A4]/30 transition-colors cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-[12px] text-[#4b5563]">
                    Click to upload screenshot
                  </span>
                  <span className="text-[11px] text-[#333]">
                    JPEG, PNG, WebP, or GIF &middot; Max 5 MB
                  </span>
                </button>
              )}
            </div>

            {error && (
              <p className="text-[13px] text-red-400 bg-red-400/5 border border-red-400/10 rounded-lg px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full text-sm font-semibold text-white px-5 py-3 rounded-[10px] bg-[#0EA5A4] hover:bg-[#0d9488] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit for review"}
            </button>
          </form>
        )}
      </main>

      <Footer />
      <GetAccessModal />
    </div>
  );
}
