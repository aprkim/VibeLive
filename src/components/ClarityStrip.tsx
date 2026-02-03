export default function ClarityStrip() {
  return (
    <section className="py-16 md:py-20 px-6 bg-soft">
      <div className="max-w-[720px] mx-auto text-center">
        <h2 className="text-xl md:text-[28px] font-semibold text-white mb-5 md:mb-6 leading-tight">
          <span className="font-semibold">Vibe</span>Live is not a video app. It&apos;s a capability.
        </h2>
        <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-5 md:mb-5 leading-relaxed">
          Video breaks vibecoding. <span className="font-medium">Vibe</span>Live removes the barrier.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-3 md:gap-x-6 md:gap-y-2 text-sm font-medium pl-16 md:pl-0">
          <span className="flex items-center gap-1.5 text-white/90">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No video setup
          </span>
          <span className="flex items-center gap-1.5 text-white/90">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Works inside your app
          </span>
          <span className="flex items-center gap-1.5 text-white/90">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Built for vibecoding
          </span>
        </div>
      </div>
    </section>
  );
}
