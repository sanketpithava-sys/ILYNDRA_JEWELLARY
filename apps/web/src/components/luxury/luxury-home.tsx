"use client";

import { useRef } from "react";
import { useScrollState } from "@/hooks/use-scroll-state";
import { LuxuryCategorySection } from "./luxury-category-section";
import { LuxuryDualShowcaseSection } from "./luxury-dual-showcase-section";
import { LuxuryFeaturedCarouselSection } from "./luxury-featured-carousel-section";
import { LuxuryFooterSection } from "./luxury-footer-section";
import { LuxuryHeader } from "./luxury-header";
import { LuxuryHero } from "./luxury-hero";
import { LuxuryPromiseSection } from "./luxury-promise-section";
import { LuxuryTestimonialsSection } from "./luxury-testimonials-section";
import { LuxuryStorySection } from "./luxury-story-section";

type LuxuryHomeProps = {
  videoSrc?: string;
  imageSrc?: string;
};

export function LuxuryHome({ videoSrc, imageSrc }: LuxuryHomeProps) {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const scrolled = useScrollState(32);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#f6eee2] text-[#231810]">
      <LuxuryHeader scrolled={scrolled} />
      <main>
        <LuxuryHero videoSrc={videoSrc} imageSrc={imageSrc} />
        <LuxuryStorySection />
        <LuxuryCategorySection />
        <LuxuryFeaturedCarouselSection />
        <LuxuryDualShowcaseSection />
        <LuxuryTestimonialsSection />
        <LuxuryPromiseSection />
        <LuxuryFooterSection />
      </main>
    </div>
  );
}
