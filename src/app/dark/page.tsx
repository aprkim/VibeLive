import Header from "@/components/Header";
import HeroV4 from "@/components/HeroV4";
import ClarityStrip from "@/components/ClarityStrip";
import BeforeAfter from "@/components/BeforeAfter";
import HowVibecodersUse from "@/components/HowVibecodersUse";
import VibecodingShift from "@/components/VibecodingShift";
import WhatVibeLiveDoes from "@/components/WhatVibeLiveDoes";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import FounderStory from "@/components/FounderStory";
import CTAV2 from "@/components/CTAV2";
import Footer from "@/components/Footer";
import AnimatedMap from "@/components/AnimatedMap";

export default function DarkHome() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-soft { background-color: rgba(255,255,255,0.02) !important; }
        .dark .card { background-color: rgba(15,15,15,0.9) !important; border-color: #1a1a1a !important; }
        .dark .bg-card\\/95 { background-color: rgba(15,15,15,0.95) !important; }
      `}</style>
      <AnimatedMap />
      <main className="min-h-screen relative z-10">
        <Header />
        <HeroV4 />
        <ClarityStrip />
        <BeforeAfter />
        <HowVibecodersUse />
        <VibecodingShift />
        <WhatVibeLiveDoes />
        <WhatYouCanBuild />
        <FounderStory />
        <CTAV2 />
        <Footer />
      </main>
    </div>
  );
}
