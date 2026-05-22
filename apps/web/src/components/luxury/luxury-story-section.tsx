"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function LuxuryStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-18% 0px -12% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f7f0e4] px-4 py-12 text-[#241812] sm:px-6 sm:py-14 lg:px-10 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_36%),radial-gradient(circle_at_bottom,rgba(217,188,144,0.08),transparent_28%)]" />

      <div className="relative mx-auto flex max-w-[920px] flex-col items-center text-center">
        <motion.h2
          className="whitespace-nowrap font-display text-[28px] leading-none tracking-[0.01em] text-[#20160f] sm:text-[38px] md:text-[44px] lg:text-[50px]"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          Crafting Elegance Since 2020
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[760px] text-[14px] leading-7 text-[#5b4634] sm:mt-5 sm:text-[15px] lg:text-[16px]"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          Founded in 2020, ILYNDRA was created with a vision to blend timeless craftsmanship with modern elegance. Every piece is thoughtfully designed to celebrate individuality, confidence, and refined luxury.
        </motion.p>
      </div>
    </section>
  );
}