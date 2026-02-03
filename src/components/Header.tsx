"use client";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 bg-card/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[980px] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/VibeLive/vibelive-logo.png" alt="VibeLive" className="h-7" />
        </div>
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hidden sm:block text-muted hover:text-text transition-colors text-sm font-medium"
          >
            Docs
          </button>
          <button className="btn-primary text-sm px-5 py-2">
            Get Access
          </button>
        </nav>
      </div>
    </header>
  );
}
