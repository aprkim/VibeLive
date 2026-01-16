export default function WhatVibeLiveDoes() {
  return (
    <section className="py-20 px-6 bg-soft">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          What VibeLive unlocks
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-text mb-2">Video, inside your app</h3>
            <p className="text-sm text-muted">Not links. Not redirects. Real presence where users already are.</p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-text mb-2">One-file setup</h3>
            <p className="text-sm text-muted">No WebRTC. No servers. No infrastructure decisions.</p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-semibold text-text mb-2">Invisible by design</h3>
            <p className="text-sm text-muted">Your UI. Your branding. VibeLive stays out of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
