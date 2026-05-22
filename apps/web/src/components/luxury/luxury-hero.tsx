"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDownIcon } from "./luxury-icons";
import { FloatingParticles } from "./floating-particles";

type LuxuryHeroProps = {
  videoSrc?: string;
  imageSrc?: string;
};

export function LuxuryHero({ videoSrc, imageSrc }: LuxuryHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.2]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen w-full overflow-hidden bg-[#f6eee2] pt-[186px] text-white sm:pt-[186px] lg:pt-[186px]">
      <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ y: mediaParallax, backgroundImage: imageSrc ? `url(${imageSrc})` : undefined }}>
        {!imageSrc && videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            poster=""
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : !imageSrc ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.34),transparent_32%),radial-gradient(circle_at_80%_32%,rgba(224,185,122,0.42),transparent_28%),linear-gradient(135deg,#9a7750_0%,#d9b583_38%,#f6ead7_70%,#8c6642_100%)]" />
        ) : null}
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(255,234,199,0.2),transparent_20%),linear-gradient(180deg,rgba(28,19,13,0.36)_0%,rgba(28,19,13,0.18)_30%,rgba(28,19,13,0.46)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b120d]/58 via-[#1b120d]/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_18%,rgba(255,255,255,0.03)_48%,transparent_72%)] opacity-55 mix-blend-screen" />
      <FloatingParticles progress={scrollYProgress} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1360px] items-center px-4 pb-16 pt-10 sm:px-6 lg:px-10">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.p
            className="mb-5 text-[11px] font-medium tracking-[0.34em] text-[#e5c594] uppercase"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Sparkle like never before
          </motion.p>

          <motion.h1
            className="font-display max-w-xl text-[52px] leading-[0.93] tracking-[0.005em] text-white sm:text-[64px] lg:text-[68px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
          >
            New Collection
            <br />
            New Radiance
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[470px] text-[15px] leading-7 text-white/86"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38 }}
          >
            Discover timeless elegance with pieces that celebrate every version of you.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.5 },
              },
            }}
          >
            <motion.a
              href="/collections"
              className="inline-flex min-w-[160px] items-center justify-center rounded-none bg-[#c9a36a] px-6 py-[14px] text-[12px] font-semibold tracking-[0.24em] text-white uppercase shadow-[0_16px_40px_rgba(201,163,106,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d3b079]"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            >
              Shop Now
            </motion.a>
            <motion.a
              href="/collections"
              className="inline-flex min-w-[170px] items-center justify-center border border-white/40 bg-white/8 px-6 py-[14px] text-[12px] font-semibold tracking-[0.24em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-white/14"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            >
              Discover More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll for more"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full border border-white/24 bg-white/8 p-3 text-white/90 backdrop-blur-md"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
