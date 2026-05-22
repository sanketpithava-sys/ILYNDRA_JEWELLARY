"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ShowcaseItem = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
  imageSrc: string;
  reverse: boolean;
};

const showcaseItems: ShowcaseItem[] = [
  {
    eyebrow: "TIMELESS BEAUTY",
    title: "Crafted to Shine Forever",
    description:
      "Discover exquisite charms and pendants that capture love, elegance, and individuality in every sparkling detail.",
    primaryCta: "Shop Now",
    secondaryCta: "Discover More",
    imageAlt: "Luxury jewelry showcase",
    imageSrc: "/hero-image.jpeg",
    reverse: false,
  },
  {
    eyebrow: "FOREVER YOURS",
    title: "Love in Every Cut",
    description:
      "Celebrate life\'s most precious moments with Swarovski inspired diamonds, brilliantly crafted for everlasting memories.",
    primaryCta: "Explore Collection",
    secondaryCta: "Find the Perfect Gift",
    imageAlt: "Luxury jewelry showcase",
    imageSrc: "/hero-image.jpeg",
    reverse: true,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function LuxuryShowcaseMedia({ imageSrc, imageAlt }: Pick<ShowcaseItem, "imageSrc" | "imageAlt">) {
  return (
    <div className="h-full border border-[#ece4d8] bg-[#fffdf8] p-0 shadow-[0_10px_30px_rgba(92,68,35,0.05)] lg:p-0">
      <div className="relative h-[320px] overflow-hidden bg-[#f9f6f1] sm:h-[420px] lg:h-[520px] p-3 lg:p-4">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </motion.div>
      </div>
    </div>
  );
}

function LuxuryShowcaseContent({ item }: { item: ShowcaseItem }) {
  return (
    <div className="flex h-full items-center bg-white px-0 py-0">
      <div className="max-w-[520px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <motion.p
          className="text-[10px] font-medium tracking-[0.4em] text-[#c59a58] uppercase sm:text-[11px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.eyebrow}
        </motion.p>

        <motion.h2
          className="mt-4 max-w-[11ch] font-display text-[40px] leading-[0.95] tracking-[0.01em] text-[#111111] sm:text-[54px] lg:text-[64px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          {item.title}
        </motion.h2>

        <motion.p
          className="mt-5 max-w-[420px] text-[15px] leading-7 text-[#4f4a45] sm:text-[16px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
            <Link
              href="/collections"
              className="inline-flex min-w-[160px] items-center justify-center bg-[#c9a36a] px-6 py-[14px] text-[12px] font-semibold tracking-[0.2em] text-white uppercase shadow-[0_14px_34px_rgba(201,163,106,0.22)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d3b47d]"
            >
              {item.primaryCta}
            </Link>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
            <Link
              href="/collections"
              className="inline-flex items-center gap-3 border-b border-[#c9a36a] pb-1 text-[12px] font-semibold tracking-[0.2em] text-[#1c1814] uppercase transition-opacity duration-300 hover:opacity-70"
            >
              {item.secondaryCta}
              <span className="text-[#c9a36a]">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function LuxuryDualShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px -10% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="mt-[60px] overflow-hidden bg-white text-[#1c1814] sm:mt-[72px] lg:mt-[84px]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div variants={sectionVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        {showcaseItems.map((item) => (
          <motion.div key={item.title} className="grid lg:grid-cols-2 gap-0 m-0" variants={rowVariants}>
            {item.reverse ? (
              <>
                <LuxuryShowcaseMedia imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
                <LuxuryShowcaseContent item={item} />
              </>
            ) : (
              <>
                <LuxuryShowcaseContent item={item} />
                <LuxuryShowcaseMedia imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}