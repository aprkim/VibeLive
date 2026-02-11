import HeaderLight from "@/components/HeaderLight";
import HeroV4Light from "@/components/HeroV4Light";
import ClarityStripLight from "@/components/ClarityStripLight";

import HowVibecodersUse from "@/components/HowVibecodersUse";
import VibecodingShift from "@/components/VibecodingShift";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import FounderStory from "@/components/FounderStory";
import CTAV2Light from "@/components/CTAV2Light";
import FooterLight from "@/components/FooterLight";

export default function LightHome() {
  return (
    <div className="bg-bg min-h-screen">
      <main className="min-h-screen">
        <HeaderLight />
        <HeroV4Light />
        <ClarityStripLight />
        <HowVibecodersUse />
        <VibecodingShift />
        <WhatYouCanBuild />
        <FounderStory />
        <CTAV2Light />
        <FooterLight />
      </main>
    </div>
  );
}
