import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsolePage() {
  return (
    <div className="dark bg-[#060606] min-h-screen" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark header { background-color: rgba(15,15,15,0.95) !important; }
      `}</style>
      <Header />

      <main className="max-w-[980px] mx-auto px-6">
        <section className="pt-20 pb-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e7eb] mb-3 tracking-tight">
            Console
          </h1>
          <p className="text-[15px] text-[#9ca3af] max-w-lg mx-auto">
            Dashboard coming soon.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
