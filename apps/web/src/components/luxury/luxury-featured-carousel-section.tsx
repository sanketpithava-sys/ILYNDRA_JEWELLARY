"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type FeaturedProduct = {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  accent: string;
};

type FeatureItem = {
  title: string;
  subtitle: string;
  icon: "shipping" | "gift" | "authenticity" | "returns" | "support";
};

const products: FeaturedProduct[] = [
  { title: "Earrings", subtitle: "Light-catching essentials", price: "₹ 11,900", href: "/earrings", accent: "from-[#f4efe9] to-[#e9ddd0]" },
  { title: "Rings", subtitle: "Modern sculpted silhouettes", price: "₹ 14,900", href: "/rings", accent: "from-[#f1ece5] to-[#e8dfd6]" },
  { title: "Bracelets", subtitle: "Refined stackable pieces", price: "₹ 16,500", href: "/bracelets", accent: "from-[#f7f2eb] to-[#eadfcc]" },
  { title: "Necklaces", subtitle: "Soft statement layers", price: "₹ 23,000", href: "/necklaces", accent: "from-[#f3eee8] to-[#e6d8c8]" },
  { title: "Pendants", subtitle: "Elegant signature drops", price: "₹ 12,900", href: "/pendants", accent: "from-[#f2ece6] to-[#e9dfd2]" },
  { title: "Gifts", subtitle: "Curated luxury moments", price: "₹ 9,590", href: "/gifts", accent: "from-[#f5efe8] to-[#eadcc8]" },
  { title: "Luxury Set", subtitle: "An elevated pairing edit", price: "₹ 47,000", href: "/luxury-sets", accent: "from-[#f4efe9] to-[#e7ddd0]" },
  { title: "Diamond Collection", subtitle: "Brilliant refined sparkle", price: "₹ 49,900", href: "/collections/diamond", accent: "from-[#f6f1ea] to-[#ece2d4]" },
  { title: "Pearl Collection", subtitle: "Luminous timeless details", price: "₹ 38,000", href: "/collections/pearl", accent: "from-[#f7f2ed] to-[#e8dfd5]" },
  { title: "Signature Collection", subtitle: "The house statement edit", price: "₹ 56,000", href: "/collections/signature", accent: "from-[#f5f0ea] to-[#e7dbca]" },
  { title: "Crystal Collection", subtitle: "Delicate radiant facets", price: "₹ 29,500", href: "/collections/crystal", accent: "from-[#f6f1ec] to-[#e6ddd0]" },
  { title: "Limited Edition", subtitle: "Exclusive seasonal release", price: "₹ 62,000", href: "/collections/limited-edition", accent: "from-[#f7f2eb] to-[#eadfcf]" },
];

const features: FeatureItem[] = [
  { title: "Complimentary Shipping", subtitle: "On all orders", icon: "shipping" },
  { title: "Luxury Gift Wrapping", subtitle: "Elegantly packaged", icon: "gift" },
  { title: "Authenticity Guaranteed", subtitle: "Swarovski certified", icon: "authenticity" },
  { title: "Easy Returns", subtitle: "Within 7 days", icon: "returns" },
  { title: "Dedicated Support", subtitle: "Always here to help", icon: "support" },
];

function Icon({ kind }: { kind: FeatureItem["icon"] }) {
  const common = "h-5 w-5 text-[#c59a58]";

  if (kind === "gift") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 10h15v10H4.5z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 10v10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 14h15" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 10c-1.5 0-2.7-1.1-2.7-2.5S10.5 5 12 7.5c1.5-2.5 2.7-1.9 2.7-.5S13.5 10 12 10Zm0 0c-1.5 0-2.7-1.1-2.7-2.5S10.5 5 12 7.5c1.5-2.5 2.7-1.9 2.7-.5S13.5 10 12 10Z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }

  if (kind === "authenticity") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5 14.7 6l3.6.5-.8 3.5 1.6 3.2-3 1.8-.5 3.5-3.6-.8-3.6.8-.5-3.5-3-1.8 1.6-3.2-.8-3.5L9.3 6 12 3.5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="m9.8 12 1.4 1.4 2.9-3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === "returns") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 7h9.5a4.5 4.5 0 0 1 0 9H7" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8 5-2 2 2 2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M18 17l2-2-2-2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === "support") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 13.5v-1a7.5 7.5 0 1 1 15 0v1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 14.5v-2.2a5 5 0 0 1 10 0v2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 16.5c0 1.2 1 2.2 2.2 2.2h1.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 16.5c0 1.2-1 2.2-2.2 2.2h-1.3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v16" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ProductArtwork({ accent, title }: { accent: string; title: string }) {
  const decorativeBlocks = useMemo(() => {
    const base = title.length % 3;

    return [
      { left: "18%", top: "24%", size: "44%", opacity: 0.4 },
      { left: "48%", top: "14%", size: "24%", opacity: 0.25 },
      { left: "30%", top: "40%", size: "30%", opacity: 0.18 },
    ].map((block, index) => ({ ...block, delay: base * 0.05 + index * 0.08 }));
  }, [title]);

  return (
    <div className={`relative flex h-[220px] items-center justify-center overflow-hidden rounded-[1px] bg-gradient-to-br ${accent} sm:h-[240px]`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.84),transparent_42%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {decorativeBlocks.map((block, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full border border-[#d2c6b7] bg-white/30 shadow-[0_10px_24px_rgba(127,101,65,0.08)]"
            style={{ left: block.left, top: block.top, width: block.size, height: block.size, opacity: block.opacity }}
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: block.opacity, scale: 1 }}
            transition={{ duration: 0.8, delay: block.delay, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function ProductCard({ product, index }: { product: FeaturedProduct; index: number }) {
  return (
    <motion.article
      className="group h-full rounded-[4px] border border-[#e7dfd5] bg-[#fffdf9]"
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={product.href} className="relative flex h-full flex-col p-3 sm:p-3.5">
        <motion.div className="overflow-hidden rounded-[2px]" whileHover={{ scale: 1.01 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <ProductArtwork accent={product.accent} title={product.title} />
        </motion.div>

        <div className="flex flex-1 flex-col items-center px-2 pb-3 pt-4 text-center sm:px-3 sm:pb-4">
          <span className="text-[10px] font-medium tracking-[0.24em] text-[#c59a58] uppercase">NEW</span>
          <h3 className="mt-3 max-w-[16ch] text-[13px] font-semibold leading-5 text-[#1f1711] sm:text-[14px]">
            {product.title}
          </h3>
          <p className="mt-2 text-[11px] leading-5 text-[#7a7168] sm:text-[12px]">{product.subtitle}</p>
          <p className="mt-3 text-[13px] font-medium leading-none text-[#1f1711] sm:text-[14px]">{product.price}</p>
        </div>

        <motion.span className="absolute inset-0 rounded-[4px] border border-transparent group-hover:border-[#d8c7ab]/70" aria-hidden="true" />
      </Link>
      <span className="sr-only">Featured product {index + 1}</span>
    </motion.article>
  );
}

export function LuxuryFeaturedCarouselSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-18% 0px -12% 0px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <motion.section
      ref={sectionRef}
      className="overflow-hidden bg-[#f7f3ee] px-4 pt-16 pb-0 text-[#1f1711] sm:px-6 sm:pt-20 sm:pb-0 lg:px-10 lg:pt-24 lg:pb-0"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 text-[#c59a58]">
            <span className="h-px w-8 bg-current/70 sm:w-10" />
            <span className="text-[10px] font-medium tracking-[0.38em] uppercase sm:text-[11px]">NEW ARRIVALS</span>
            <span className="h-px w-8 bg-current/70 sm:w-10" />
          </div>

          <h2 className="mt-4 font-display text-[40px] leading-[0.95] tracking-[0.01em] text-[#111111] sm:mt-5 sm:text-[56px] lg:text-[70px]">
            Crafted to Captivate
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3 text-[#c59a58]">
            <span className="h-px w-7 bg-current/55" />
            <span className="text-[11px] leading-none">✦</span>
            <span className="h-px w-7 bg-current/55" />
          </div>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#4f4a45] sm:mt-6 sm:text-[16px] lg:text-[17px]">
            Explore our latest collection of timeless jewelry pieces designed to elevate every moment.
          </p>
        </motion.div>

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous products"
            className="absolute left-0 top-[40%] z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#eee5d9] bg-white/90 text-[#c59a58] shadow-[0_8px_24px_rgba(120,93,55,0.08)] backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
          >
            <span className="text-[24px] leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next products"
            className="absolute right-0 top-[40%] z-20 flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full border border-[#eee5d9] bg-white/90 text-[#c59a58] shadow-[0_8px_24px_rgba(120,93,55,0.08)] backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
          >
            <span className="text-[24px] leading-none">›</span>
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <motion.div
              className="flex"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-7 bg-[#c59a58]" : "w-2.5 bg-[#d9cfbf]"}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-14 grid gap-0 border-t border-[#e9e1d4] bg-white sm:mt-16 lg:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 border-b border-[#efe8dd] px-4 py-5 sm:px-5 lg:border-b-0 lg:border-r lg:px-6 lg:py-6 last:border-r-0">
              <div className="mt-0.5 rounded-full border border-[#eadfcd] bg-[#fffaf2] p-2">
                <Icon kind={feature.icon} />
              </div>
              <div>
                <h3 className="text-[13px] font-medium tracking-[0.08em] text-[#1f1711] sm:text-[14px]">{feature.title}</h3>
                <p className="mt-1 text-[11px] leading-5 text-[#736a60] sm:text-[12px]">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}