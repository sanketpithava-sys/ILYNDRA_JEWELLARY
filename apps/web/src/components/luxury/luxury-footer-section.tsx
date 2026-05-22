"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FooterColumn = {
  heading: string;
  links: string[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Customer Care",
    links: [
      "Order Tracking",
      "Shipping Information",
      "Returns & Exchange",
      "Contact Support",
      "FAQs",
      "Size Guide",
      "Book Appointment",
    ],
  },
  {
    heading: "Membership",
    links: ["Join ILYNDRA Club", "Rewards Program", "Exclusive Access", "Wishlist", "Gift Cards"],
  },
  {
    heading: "About ILYNDRA",
    links: ["About Brand", "Craftsmanship", "Careers", "Sustainability", "Store Locator", "Press & Media"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Refund Policy", "Accessibility"],
  },
];

type SocialItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function DiamondDivider() {
  return (
    <div className="relative h-px w-full bg-[#b89558]/75">
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#d6b67d] bg-[#f7f5f0]" />
    </div>
  );
}

function HeadingAdornment() {
  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="h-px w-16 bg-[#b89558]/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#d6b67d]" />
      <span className="h-px w-16 bg-[#b89558]/70" />
    </div>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <Link href="#" className="group inline-flex items-center text-[16px] leading-[1.4] text-[#23211e] transition-colors duration-300 hover:text-[#7e643a]">
        <span>{label}</span>
        <span className="ml-0.5 inline-block h-px w-0 bg-[#d6b67d] transition-all duration-300 group-hover:w-4" />
      </Link>
    </li>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

function SocialCircle({ item }: { item: SocialItem }) {
  return (
    <motion.a
      href={item.href}
      aria-label={item.label}
      className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1.4px] border-[#c5a065] text-[#b58f53] transition-colors duration-300 hover:border-[#9f7a43] hover:text-[#8a6837]"
      whileHover={{ scale: 1.05, boxShadow: "0 0 0 4px rgba(197,160,101,0.12)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {item.icon}
    </motion.a>
  );
}

const socialItems: SocialItem[] = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M10.2 20.1 11.5 15" />
        <path d="M9.9 10.2c0-2.2 1.6-3.6 3.6-3.6 1.8 0 3.1 1.2 3.1 2.8 0 2.1-.9 4.6-2.8 4.6-.9 0-1.6-.7-1.4-1.6l.5-1.9" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <path d="M14.5 8.5h1.9V5.6h-1.9c-2.2 0-3.5 1.5-3.5 3.6V11H9v2.8h2v4.6h2.9v-4.6h2.2L16.5 11h-2V9.6c0-.7.3-1.1 1-1.1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <rect x="4" y="7" width="16" height="10" rx="3" />
        <path d="m11 10 4 2-4 2z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <path d="M14 5.5v8.2a3.5 3.5 0 1 1-2.8-3.4" />
        <path d="M14 5.5c.7 1.3 1.8 2.3 3.2 2.8" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px]">
        <path d="M5.5 5.5 18.5 18.5" />
        <path d="M18.5 5.5 5.5 18.5" />
      </svg>
    ),
  },
];

export function LuxuryFooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#f7f5f0] px-4 pt-16 pb-10 text-[#23211e] sm:px-6 sm:pt-20 sm:pb-12 lg:px-10 lg:pt-24 lg:pb-14">
      <div className="relative mx-auto w-full max-w-[1680px]">
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:gap-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c39a58] sm:text-[12px]">{column.heading}</h3>
              <HeadingAdornment />
              <ul className="mt-7 space-y-2.5">
                {column.links.map((item) => (
                  <FooterLink key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 sm:mt-18 lg:mt-20">
          <DiamondDivider />
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-4 text-[18px] text-[#1f1d1b]">
              <button type="button" className="inline-flex items-center gap-2 text-[#252321] transition-colors hover:text-[#8b6a3a]">
                <GlobeIcon />
                <span>India</span>
                <ChevronDown />
              </button>
              <span className="h-7 w-px bg-[#c9a66d]/60" />
              <button type="button" className="inline-flex items-center gap-2 text-[#252321] transition-colors hover:text-[#8b6a3a]">
                <span>English</span>
                <ChevronDown />
              </button>
            </div>

            <p className="mt-8 text-[13px] leading-6 text-[#696662]">© 2026 ILYNDRA. All rights reserved.</p>
            <p className="mt-1 max-w-[34ch] text-[12px] leading-6 text-[#6f6b67]">
              ILYNDRA and the ILYNDRA logo are registered trademarks of ILYNDRA Jewelry Pvt. Ltd.
            </p>
          </div>

          <div className="order-1 text-center lg:order-2">
            <p className="font-display text-[clamp(3.3rem,8.6vw,7.2rem)] leading-[0.9] tracking-[0.01em] text-[#141210]">
              ILYNDRA
            </p>
          </div>

          <div className="order-3 flex items-center justify-start gap-3 sm:gap-4 lg:justify-end">
            {socialItems.map((item) => (
              <SocialCircle key={item.label} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
