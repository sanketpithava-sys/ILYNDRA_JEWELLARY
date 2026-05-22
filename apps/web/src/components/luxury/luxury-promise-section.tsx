"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type PromiseIconKind =
  | "certified"
  | "shine"
  | "packaging"
  | "secure"
  | "shipping"
  | "handcrafted"
  | "returns"
  | "support"
  | "craftsmanship";

type PromiseItem = {
  title: string;
  icon: PromiseIconKind;
};

const promises: PromiseItem[] = [
  { title: "Certified Jewellery", icon: "certified" },
  { title: "Lifetime Shine", icon: "shine" },
  { title: "Luxury Packaging", icon: "packaging" },
  { title: "Secure Payments", icon: "secure" },
  { title: "Worldwide Shipping", icon: "shipping" },
  { title: "Handcrafted Pieces", icon: "handcrafted" },
  { title: "Easy Returns", icon: "returns" },
  { title: "Premium Support", icon: "support" },
  { title: "Timeless Craftsmanship", icon: "craftsmanship" },
];

function PromiseGlyph({ kind, className }: { kind: PromiseIconKind; className?: string }) {
  const strokeClassName = className ?? "h-6 w-6";

  switch (kind) {
    case "certified":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3.5 15 5l3.4.7.7 3.4 1.5 3-1.5 3-.7 3.4-3.4.7-3 1.5-3-1.5-3.4-.7-.7-3.4-1.5-3 1.5-3 .7-3.4L9 5Z" />
          <path d="m8.5 12.1 2.1 2.1 4.8-4.8" />
        </svg>
      );
    case "shine":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3.5 13.7 8l4.5 1.7-4.5 1.8L12 16l-1.7-4.5-4.5-1.8L10.3 8Z" />
          <path d="M18 14.5l.9 2.2 2.2.9-2.2.9-.9 2.2-.9-2.2-2.2-.9 2.2-.9Z" />
        </svg>
      );
    case "packaging":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.5 8.5 12 5l6.5 3.5-6.5 3.5z" />
          <path d="M5.5 8.5V17L12 20.5 18.5 17V8.5" />
          <path d="M12 12v8.5" />
          <path d="M8.4 6.5 12 12l3.6-5.5" />
        </svg>
      );
    case "secure":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.5 11.2V8a4.5 4.5 0 0 1 9 0v3.2" />
          <path d="M6.5 11.2h11V19h-11z" />
          <path d="M12 14.2v2.1" />
        </svg>
      );
    case "shipping":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.8 8.2h10.4v7.2H3.8z" />
          <path d="M14.2 10.1h3.8l2.2 2.2v3.1h-2.1" />
          <circle cx="7.3" cy="17.2" r="1.6" />
          <circle cx="17.8" cy="17.2" r="1.6" />
        </svg>
      );
    case "handcrafted":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.3 13.8c1.7-.9 3.1-1.4 4.7-1.4 1 0 1.8.4 2.5 1l2.2 1.9c.6.5.7 1.4.2 2-.5.6-1.4.7-2 .2l-1.7-1.4" />
          <path d="M7 13.5 8 9.8c.2-.8 1-1.4 1.8-1.4.9 0 1.6.6 1.8 1.5l.5 2.2" />
          <path d="M12.1 10.3 13 8.1c.3-.7 1.1-1.1 1.8-.9.8.2 1.3.9 1.2 1.7l-.2 2.3" />
        </svg>
      );
    case "returns":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7H4.5V4.5" />
          <path d="M4.7 7.2A8.8 8.8 0 1 1 6.5 18.7" />
          <path d="M4.5 4.5 7 7" />
          <path d="M17 17h2.5v2.5" />
        </svg>
      );
    case "support":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 13.2V12a7.2 7.2 0 1 1 14.4 0v1.2" />
          <path d="M5.5 13.2v2.6a1.6 1.6 0 0 0 1.6 1.6h1.4v-5.8H7.1a1.6 1.6 0 0 0-1.6 1.6Zm12.3 0v2.6a1.6 1.6 0 0 1-1.6 1.6h-1.4v-5.8h1.4a1.6 1.6 0 0 1 1.6 1.6Z" />
          <path d="M13.3 18.7c-.4.9-1.2 1.3-2.2 1.3h-1.1" />
        </svg>
      );
    case "craftsmanship":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={strokeClassName} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 4.2 2.2 3.9 4.4.8-3.1 3.2.7 4.4-4.2-2-4.2 2 .7-4.4-3.1-3.2 4.4-.8Z" />
        </svg>
      );
    default:
      return null;
  }
}

function PromiseTile({ item, index }: { item: PromiseItem; index: number }) {
  return (
    <motion.article
      className="group rounded-[14px] border border-[#1d1712]/8 bg-[#fcfaf6] px-3 py-3 text-center shadow-[0_1px_0_rgba(255,255,255,0.72)_inset] transition-colors duration-300 hover:border-[#c8a96b]/35 sm:px-4 sm:py-3 min-h-[104px] lg:min-h-0 lg:h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
      whileHover={{ y: -3 }}
    >
      <motion.div
        className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96b]/26 bg-[#fffdf9] text-[#8c6d35] shadow-[0_0_0_0_rgba(200,169,107,0)] transition duration-300 group-hover:border-[#c8a96b]/48 group-hover:text-[#b08a4f]"
        whileHover={{ scale: 1.04, boxShadow: "0 0 0 5px rgba(200,169,107,0.06)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <PromiseGlyph kind={item.icon} className="h-4 w-4" />
      </motion.div>

      <h3 className="mt-2 font-display text-[13px] leading-tight tracking-[0.01em] text-[#161210] sm:text-[14px]">
        {item.title}
      </h3>
    </motion.article>
  );
}

export function LuxuryPromiseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-18% 0px -12% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-6 text-[#1a1410] sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col items-stretch gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <motion.div
            className="relative text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block max-w-full">
              <p className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[0.9] tracking-[0.01em] text-[#141110]">
                ILYNDRA
              </p>
              <p className="font-display text-[clamp(1.1rem,2.2vw,1.6rem)] leading-[0.95] tracking-[0.01em] text-[#141110]">
                Promise
              </p>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2 lg:justify-start">
              <span className="hidden h-px w-10 bg-[#16110e]/12 sm:block" aria-hidden="true" />
              <p className="max-w-[18rem] text-[12px] leading-5 text-[#5d5148] sm:text-[12.5px] lg:max-w-[22rem]">
                Thoughtfully crafted. Honestly yours. Always and forever.
              </p>
            </div>
          </motion.div>

          {/* separator removed to keep two-column layout */}

          <motion.div
            className="rounded-[18px] border border-[#1d1712]/12 bg-[#fffdf9] p-2 shadow-[0_12px_34px_rgba(38,24,15,0.04)] sm:p-2 lg:p-2 max-w-[760px] lg:ml-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:h-full lg:items-stretch lg:gap-2">
              {promises.map((item, index) => (
                <PromiseTile key={item.title} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}