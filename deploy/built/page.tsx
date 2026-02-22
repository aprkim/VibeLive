import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/showcase/Gallery";
import { getApprovedItems } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "Built with VibeLive — Showcase",
  description:
    "Real vibecoded apps powered by live human connection. See what builders are creating with VibeLive.",
};

export default function BuiltWithPage() {
  const items = getApprovedItems();

  return (
    <div className="dark bg-[#060606] min-h-screen" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark header { background-color: rgba(15,15,15,0.95) !important; }
      `}</style>
      <Header />

      <main className="max-w-[980px] mx-auto px-6">
        {/* Hero */}
        <section className="pt-20 pb-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e7eb] mb-3 tracking-tight">
            Built with VibeLive
          </h1>
          <p className="text-[15px] text-[#9ca3af] mb-8 max-w-lg mx-auto">
            Real vibecoded apps powered by live human connection.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="/submit"
              className="inline-flex items-center justify-center text-sm font-semibold text-white px-5 py-2.5 rounded-[10px] bg-[#0EA5A4] hover:bg-[#0d9488] transition-colors"
            >
              Submit your build
            </a>
            <a
              href="https://vibelive.site/docs"
              className="inline-flex items-center justify-center text-sm font-medium text-[#e5e7eb] px-5 py-2.5 rounded-[10px] bg-[#151515] border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"
            >
              Build with VibeLive
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-20">
          <Gallery items={items} />
        </section>

        {/* Bottom CTA */}
        <section className="pb-20 text-center">
          <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] px-8 py-12">
            <h2 className="text-xl font-semibold text-[#e5e7eb] mb-2">
              Built something with VibeLive?
            </h2>
            <p className="text-[14px] text-[#9ca3af] mb-6">
              We&apos;d love to feature your project here.
            </p>
            <a
              href="/submit"
              className="inline-flex items-center justify-center text-sm font-semibold text-white px-5 py-2.5 rounded-[10px] bg-[#0EA5A4] hover:bg-[#0d9488] transition-colors"
            >
              Submit your build
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
