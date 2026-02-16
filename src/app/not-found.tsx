import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <main className="min-h-screen bg-[#060606] flex items-center justify-center px-6">
        <div className="text-center">
          <svg className="w-[30px] h-[30px] mx-auto mb-6 text-accent/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.788m13.788 0c3.808 3.808 3.808 9.98 0 13.788" />
          </svg>
          <h1 className="text-7xl md:text-8xl font-bold leading-none text-text mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            Vibe not found.
          </h2>
          <p className="text-sm text-muted mb-12">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="btn-primary px-10 py-3.5 text-base inline-block"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
