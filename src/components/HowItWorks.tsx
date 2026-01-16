export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          How it works
        </h2>
        <p className="text-xl text-muted mb-12 text-center">
          Three steps. No workflow change.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-text mb-3">Get the VibeLive file</h3>
            <p className="text-sm text-muted mb-4">
              This file unlocks video capability in your project.
            </p>
            <div className="card p-4">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <code className="text-accent">vibelive.config.ts</code>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-text mb-3">Vibecode as usual</h3>
            <p className="text-sm text-muted mb-4">
              Keep building in Cursor, VS Code, or your favorite editor. Nothing changes.
            </p>
            <div className="card p-4">
              <div className="flex items-center justify-center gap-3 text-muted">
                <span className="text-xs">Cursor</span>
                <span className="text-tertiary">·</span>
                <span className="text-xs">VS Code</span>
                <span className="text-tertiary">·</span>
                <span className="text-xs">Any editor</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-text mb-3">Ask AI to add video</h3>
            <p className="text-sm text-muted mb-4">
              AI can now add video instantly. No WebRTC pain.
            </p>
            <div className="card p-4">
              <p className="text-sm text-muted italic">&quot;Add video chat to my app&quot;</p>
              <p className="text-xs text-accent mt-2">→ It just works.</p>
            </div>
          </div>
        </div>
        <p className="text-center text-muted mt-12">
          That&apos;s the entire workflow. Video capability, unlocked.
        </p>
      </div>
    </section>
  );
}
