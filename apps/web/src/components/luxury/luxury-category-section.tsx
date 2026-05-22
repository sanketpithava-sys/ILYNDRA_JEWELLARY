"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { label: "Earrings", href: "/earrings" },
  { label: "Rings", href: "/rings" },
  { label: "Bracelets", href: "/bracelets" },
  { label: "Necklaces", href: "/necklaces" },
  { label: "Pendants", href: "/pendants" },
  { label: "Gifts", href: "/gifts" },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CategoryPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[2px] border border-[#ebe4da] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,244,237,0.84))]">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[2px] border border-[#d8d0c3] bg-white/50 sm:h-20 sm:w-20">
        <div className="relative h-10 w-10 rounded-[2px] border border-[#cfc7ba]">
          <span className="absolute left-1 top-1/2 h-3 w-3 -translate-y-1/2 border-b border-l border-[#cfc7ba]" />
          <span className="absolute bottom-1 left-1/2 h-3 w-5 -translate-x-1/2 -rotate-45 border-b border-[#cfc7ba]" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border border-[#cfc7ba]" />
        </div>
      </div>
    </div>
  );
}

export function LuxuryCategorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-16% 0px -10% 0px" });

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 text-[#1f1711] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1152px] text-center">
        <motion.div
          className="flex items-center justify-center gap-3 text-[#c59a58]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-px w-8 bg-current/70 sm:w-10" />
          <span className="text-[10px] font-medium tracking-[0.38em] uppercase sm:text-[11px]">Shop by Category</span>
          <span className="h-px w-8 bg-current/70 sm:w-10" />
        </motion.div>

        <motion.h2
          className="mt-4 font-display text-[38px] leading-[0.95] tracking-[0.01em] text-[#111111] sm:mt-5 sm:text-[54px] lg:text-[68px]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          Discover Timeless Essentials
        </motion.h2>

        <motion.div
          className="mt-5 flex items-center justify-center gap-3 text-[#c59a58]"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <span className="h-px w-7 bg-current/55" />
          <span className="text-[11px] leading-none">✦</span>
          <span className="h-px w-7 bg-current/55" />
        </motion.div>

        <motion.p
          className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#4f4a45] sm:mt-6 sm:text-[16px] lg:text-[17px]"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          Explore our curated edit of fine jewelry, designed to celebrate every moment, every emotion, every you.
        </motion.p>

        <motion.div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" variants={gridVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link
                href={category.href}
                className="group flex min-h-[220px] flex-col overflow-hidden rounded-[2px] border border-[#ece7df] bg-white p-5"
              >
                <div className="flex flex-1 items-center justify-center">
                  <motion.div
                    className="h-full w-full max-w-[320px]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <CategoryPlaceholder />
                  </motion.div>
                </div>

                <div className="mt-5 flex flex-col items-center text-center">
                  <span className="text-[#c59a58]">✦</span>
                  <span className="mt-3 font-display text-[16px] tracking-[0.42em] text-[#1a1816] uppercase sm:text-[18px]">
                    {category.label}
                  </span>
                  <span className="mt-3 text-[18px] leading-none text-[#c59a58] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}