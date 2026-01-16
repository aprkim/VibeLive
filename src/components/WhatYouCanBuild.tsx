export default function WhatYouCanBuild() {
  return (
    <section id="what-you-can-build" className="py-20 px-6 bg-soft">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center">
          What you can build
        </h2>
        <p className="text-xl text-muted mb-12 text-center">
          Apps with video inside. Built by vibecoders like you.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-text mb-1.5">Learning platforms</h3>
            <p className="text-sm text-muted leading-relaxed">
              Add live video inside your learning app. Cohorts, tutoring, and real-time practice — without leaving your product.
            </p>
          </div>
          <div className="card p-6 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text mb-1.5">Community apps</h3>
            <p className="text-sm text-muted leading-relaxed">
              Unlock video inside your community. Users connect face-to-face without leaving your app.
            </p>
          </div>
          <div className="card p-6 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text mb-1.5">Collaboration tools</h3>
            <p className="text-sm text-muted leading-relaxed">
              Add video to your workflow app. Pair programming, design reviews — inside your product.
            </p>
          </div>
          <div className="card p-6 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text mb-1.5">Social products</h3>
            <p className="text-sm text-muted leading-relaxed">
              Unlock real-time video inside your social app. Users connect without switching apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
