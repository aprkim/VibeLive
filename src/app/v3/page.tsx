import Header from "@/components/Header";
import HeroV5 from "@/components/HeroV5";
import ClarityStrip from "@/components/ClarityStrip";
import BeforeAfter from "@/components/BeforeAfter";
import HowVibecodersUse from "@/components/HowVibecodersUse";
import VibecodingShift from "@/components/VibecodingShift";
import WhatVibeLiveDoes from "@/components/WhatVibeLiveDoes";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import FounderStory from "@/components/FounderStory";
import CTAV2 from "@/components/CTAV2";
import Footer from "@/components/Footer";

export default function HomeV3() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <HeroV5 />
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
  );
}
