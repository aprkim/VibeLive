import HeroV4Claude7V2 from "@/components/HeroV4Claude7V2";
import ClarityStrip from "@/components/ClarityStrip";
import HowVibecodersUse from "@/components/HowVibecodersUse";
import VibecodingShift from "@/components/VibecodingShift";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import FounderStory from "@/components/FounderStory";
import CTAV2 from "@/components/CTAV2";
import Footer from "@/components/Footer";
import HeaderHome from "@/components/HeaderHome";
import AnimatedMapFaces from "@/components/AnimatedMapFaces";

export default function PreviewPage() {
  return (
    <div className="dark bg-[#080808] min-h-screen" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-soft { background-color: rgba(255,255,255,0.02) !important; }
        .dark .card { background-color: rgba(15,15,15,0.9) !important; border-color: #1a1a1a !important; }
        .dark .bg-card\\/90 { background-color: rgba(11, 26, 26, 0.95) !important; }
        .dark9-steps-bg { background-color: rgba(14, 165, 164, 0.04); }
        @media (max-width: 640px) {
          .map-container { opacity: 0.2 !important; }
        }
      `}</style>
      <AnimatedMapFaces />
      <main className="min-h-screen relative z-10">
        <HeaderHome />
        <HeroV4Claude7V2 />
        <ClarityStrip />
        <div className="dark9-steps-bg">
          <HowVibecodersUse />
        </div>
        <VibecodingShift />
        <WhatYouCanBuild />
        <FounderStory />
        <CTAV2 />
        <Footer />
      </main>
    </div>
  );
}
