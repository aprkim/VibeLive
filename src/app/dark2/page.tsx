import Header from "@/components/Header";
import HeroV4Faces from "@/components/HeroV4Faces";
import ClarityStrip from "@/components/ClarityStrip";
import BeforeAfterFaces from "@/components/BeforeAfterFaces";
import HowVibecodersUse from "@/components/HowVibecodersUse";
import VibecodingShift from "@/components/VibecodingShift";
import WhatVibeLiveDoes from "@/components/WhatVibeLiveDoes";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import FounderStory from "@/components/FounderStory";
import CTAV2 from "@/components/CTAV2";
import Footer from "@/components/Footer";
import AnimatedMapFaces from "@/components/AnimatedMapFaces";

export default function Dark2Home() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-soft { background-color: rgba(255,255,255,0.02) !important; }
        .dark .card { background-color: rgba(15,15,15,0.9) !important; border-color: #1a1a1a !important; }
        .dark .bg-card\\/90 { background-color: rgba(11, 26, 26, 0.95) !important; }
      `}</style>
      <AnimatedMapFaces />
      <main className="min-h-screen relative z-10">
        <Header />
        <HeroV4Faces />
        <ClarityStrip />
        <BeforeAfterFaces />
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
