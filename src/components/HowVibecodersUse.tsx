export default function HowVibecodersUse() {
  return (
    <section className="py-16 px-6 bg-soft">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
          Three steps. No workflow change.
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-4">
          {/* Step 1 */}
          <div className="text-center flex-1 max-w-[260px]">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg font-semibold mx-auto mb-4">
              1
            </div>
            <h3 className="text-base font-semibold text-text mb-1">
              Build as usual
            </h3>
            <p className="text-xs text-muted">
              Keep vibecoding. Nothing changes.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex items-center justify-center pt-3">
            <svg className="w-5 h-5 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="text-center flex-1 max-w-[260px]">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg font-semibold mx-auto mb-4">
              2
            </div>
            <h3 className="text-base font-semibold text-text mb-1">
              Drop in one file
            </h3>
            <p className="text-xs text-muted">
              Add vibelive.config.ts + your key.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center pt-3">
            <svg className="w-5 h-5 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="text-center flex-1 max-w-[260px]">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg font-semibold mx-auto mb-4">
              3
            </div>
            <h3 className="text-base font-semibold text-text mb-1">
              Ask AI to add video
            </h3>
            <p className="text-xs text-muted">
              Video appears inside your app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
