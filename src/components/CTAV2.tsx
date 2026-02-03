"use client";

export default function CTAV2() {
  return (
    <section className="py-28 md:py-32 px-6 bg-accent/[0.04] border-t-0">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Ready to add real human connection to your app?
        </h2>
        <p className="text-xl text-muted mb-10 max-w-xl mx-auto">
          Vibecoders are shipping apps with real human connection. Now you can too.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
            Get Access
          </button>
          <button className="btn-secondary px-8 py-4 text-lg w-full sm:w-auto">
            See it in action (3 min)
          </button>
        </div>
      </div>
    </section>
  );
}
