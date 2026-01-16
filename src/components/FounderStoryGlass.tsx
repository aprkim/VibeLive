export default function FounderStoryGlass() {
  return (
    <section id="founder-story" className="py-20 px-6">
      <div className="max-w-[980px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
            Why we built VibeLive
          </h2>
          {/* Glassmorphism card */}
          <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 text-left">
            <p className="text-lg text-text mb-6">
              Marty and April have been building together for years, driven by the same belief:<br />
              technology should bring people closer.
            </p>
            <p className="text-lg text-text mb-6">
              Marty was drawn to live connection—spaces where people actually show up through video.<br />
              April wanted to connect people globally through language learning.
            </p>
            <p className="text-lg text-text mb-6">
              As vibecoding took off, apps shipped faster than ever.<br />
              But many of them felt empty.
            </p>
            <p className="text-lg text-text mb-6">
              The problem wasn&apos;t AI.<br />
              It was the lack of real human presence.
            </p>
            <p className="text-lg text-text mb-6">
              So they built VibeLive—invisible infrastructure that brings live video into vibecoded apps.
            </p>
            <p className="text-lg text-text mb-6">
              Because in the AI era, human connection isn&apos;t a feature.<br />
              It&apos;s the foundation.
            </p>
            <div className="mt-8 pt-6 border-t border-black/10">
              <p className="text-muted">
                Marty & April
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
