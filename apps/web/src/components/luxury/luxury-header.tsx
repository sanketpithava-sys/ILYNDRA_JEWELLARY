"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { announcementLinks, mainNavigation } from "@/constants/navigation";
import { BagIcon, HeartIcon, SearchIcon, StoreIcon } from "./luxury-icons";

type LuxuryHeaderProps = { scrolled: boolean };

function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[11px] font-medium tracking-[0.28em] uppercase transition-colors duration-300 hover:opacity-80">
      {children}
    </Link>
  );
}

export function LuxuryHeader({ scrolled }: LuxuryHeaderProps) {
  return (
    <motion.header
      className="group fixed inset-x-0 top-0 z-50 border-b border-white/10"
      animate={{
        backgroundColor: scrolled ? "rgba(248, 243, 235, 0.92)" : "rgba(255, 255, 255, 0.08)",
        color: scrolled ? "#20160f" : "#ffffff",
        height: scrolled ? 70 : 186,
      }}
      whileHover={{ backgroundColor: "#f7f5f0", color: "#20160f" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ boxShadow: scrolled ? "0 16px 48px rgba(68,45,21,0.12)" : "0 12px 50px rgba(0,0,0,0.18)" }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1360px] flex-col px-4 py-3 sm:px-6 lg:px-10" style={{ paddingLeft: scrolled ? 0 : undefined }}>

        <motion.div className="flex items-center justify-between gap-4 border-b border-current/15 pb-2" animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -8 : 0, height: scrolled ? 0 : "auto" }} transition={{ duration: 0.35, ease: "easeOut" }}>
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] uppercase lg:text-[11px]">
            <StoreIcon className="h-4 w-4" />
            {announcementLinks[0] && <HeaderLink href={announcementLinks[0].href}>{announcementLinks[0].label}</HeaderLink>}
          </div>

          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-center lg:text-[11px]">Free standard shipping over: INR 9,590.00</p>

          <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase lg:gap-5 lg:text-[11px]">
            <HeaderLink href={announcementLinks[1].href}>{announcementLinks[1].label}</HeaderLink>
            <HeaderLink href={announcementLinks[2].href}>{announcementLinks[2].label}</HeaderLink>
            <button type="button" className="inline-flex items-center gap-1 transition-opacity hover:opacity-80">
              <HeartIcon className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {!scrolled ? (
          <motion.div className="relative flex flex-1 flex-col" animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div layoutId="brand-logo" className="absolute left-1/2 top-6 -translate-x-1/2 text-center font-display text-[72px] leading-none tracking-[0.22em] uppercase text-white transition-colors duration-300 group-hover:text-[#141210] sm:text-[86px] lg:text-[96px]">
              ILYNDRA
            </motion.div>

            <div className="mt-[112px] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 lg:gap-6">
              <div />

              <nav className="hidden md:flex items-center justify-center gap-6 whitespace-nowrap" aria-label="Primary">
                {mainNavigation.map((item) => (
                  <Link key={item.label} href={item.href} className="whitespace-nowrap text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity duration-300 hover:opacity-70 sm:text-[12px] lg:text-[13px]">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-2 pr-1 sm:gap-3 lg:gap-4">
                <button type="button" aria-label="Search" className="rounded-full p-2 transition-colors hover:bg-black/5">
                  <SearchIcon className="h-5 w-5" />
                </button>
                <button type="button" aria-label="Cart" className="relative rounded-full p-2 transition-colors hover:bg-black/5">
                  <BagIcon className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c9a36a] px-1 text-[10px] font-semibold text-white">0</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div className="grid flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 lg:gap-6" animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div layoutId="brand-logo" className="font-display ml-3 sm:ml-4 lg:ml-6 text-[34px] leading-none tracking-[0.18em] uppercase text-[#b89460] transition-colors duration-300 group-hover:text-[#141210] lg:text-[40px]">
              ILYNDRA
            </motion.div>

            <nav className="flex items-center justify-center gap-8 whitespace-nowrap" aria-label="Primary">
              {mainNavigation.map((item) => (
                <Link key={item.label} href={item.href} className="whitespace-nowrap text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity duration-300 hover:opacity-70 sm:text-[12px] lg:text-[13px]">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-2 pr-1 sm:gap-3 lg:gap-4">
              <button type="button" aria-label="Search" className="rounded-full p-2 transition-colors hover:bg-black/5">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Cart" className="relative rounded-full p-2 transition-colors hover:bg-black/5">
                <BagIcon className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c9a36a] px-1 text-[10px] font-semibold text-white">0</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {scrolled && (
          <motion.div key="scrolled-edge" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d5b07b] to-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
