"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  age: number;
  quote: string;
  imageAlt: string;
  imageSrc: string;
  rotation: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    age: 27,
    quote: "The ring is absolutely stunning. It shines so beautifully and makes every moment special.",
    imageAlt: "Customer wearing a luxury ring",
    imageSrc: "/hero-image.jpeg",
    rotation: "-1.4deg",
  },
  {
    name: "Riya Mehta",
    age: 30,
    quote: "Elegant, timeless and worth every penny. I loved the packaging too.",
    imageAlt: "Customer wearing a delicate necklace",
    imageSrc: "/hero-image.jpeg",
    rotation: "1.2deg",
  },
  {
    name: "Neha Verma",
    age: 26,
    quote: "I wear it every day and it still looks as radiant as the first day. Truly premium quality.",
    imageAlt: "Customer wearing a bracelet",
    imageSrc: "/hero-image.jpeg",
    rotation: "-0.8deg",
  },
  {
    name: "Simran Kaur",
    age: 29,
    quote: "Beautiful craftsmanship and super fast delivery. Highly recommend!",
    imageAlt: "Customer holding a ring with polished manicure",
    imageSrc: "/hero-image.jpeg",
    rotation: "1.6deg",
  },
  {
    name: "Aditi Rao",
    age: 31,
    quote: "The sparkle is refined, not loud. It feels like fine jewelry should feel.",
    imageAlt: "Customer with a pendant necklace",
    imageSrc: "/hero-image.jpeg",
    rotation: "-1deg",
  },
  {
    name: "Ishita Jain",
    age: 25,
    quote: "The piece looks even more luxurious in person. The whole experience felt premium.",
    imageAlt: "Customer wearing stacked jewelry",
    imageSrc: "/hero-image.jpeg",
    rotation: "0.9deg",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

function GoldStars() {
  return (
    <div className="flex items-center justify-center gap-1 text-[#C8A96B]" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="m10 2.25 2.56 5.19 5.72.83-4.14 4.03.98 5.7L10 15.98 4.88 18l.98-5.7-4.14-4.03 5.72-.83L10 2.25Z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#C8A96B]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 1.9 3.8 4.1v4.7c0 3.8 2.5 7.3 6.2 9.1 3.7-1.8 6.2-5.3 6.2-9.1V4.1L10 1.9Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="m7.8 10.2 1.6 1.6 2.9-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HangingClip() {
  return (
    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-10 w-8 text-[#C8A96B]">
        <div className="absolute left-1/2 top-0 h-5 w-4 -translate-x-1/2 rounded-t-full border-l-2 border-r-2 border-t-2 border-current" />
        <div className="absolute bottom-0 left-0 right-0 h-4 border-l border-r border-b border-current" />
      </div>
    </div>
  );
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <motion.article
      className="relative h-full rounded-[3px] border border-[#f0e6d8] bg-white shadow-[0_18px_40px_rgba(74,56,31,0.08)]"
      style={{ rotate: item.rotation }}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.015, rotate: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <HangingClip />

      <div className="relative px-3 pt-5 pb-4 sm:px-4 sm:pt-6 sm:pb-5">
        <div className="overflow-hidden border border-[#f1e6d8] bg-[#fcfaf6] shadow-[0_10px_24px_rgba(80,60,28,0.06)]">
          <div className="relative aspect-[0.84/1] w-full overflow-hidden bg-[#f6f1ea]">
            <motion.img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <div className="px-2 pt-4 text-center sm:px-3">
          <GoldStars />
          <p className="mx-auto mt-4 max-w-[18ch] text-[13px] leading-6 text-[#49433d] sm:text-[14px]">
            “{item.quote}”
          </p>

          <div className="mx-auto mt-5 h-px w-10 bg-[#C8A96B]/70" />

          <h3 className="mt-4 text-[14px] font-medium tracking-[0.02em] text-[#1b1713] sm:text-[15px]">
            {item.name}, {item.age}
          </h3>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#7a7166]">
            <span>Verified Buyer</span>
            <VerifiedIcon />
          </div>
        </div>
      </div>

      <span className="sr-only">Testimonial card {index + 1}</span>
    </motion.article>
  );
}

export function LuxuryTestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px -12% 0px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    if (!emblaApi || !isInView || isHovered) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3600);

    return () => window.clearInterval(interval);
  }, [emblaApi, isInView, isHovered]);

  return (
    <motion.section
      ref={sectionRef}
      className="overflow-hidden bg-[#f7f3ee] px-4 py-20 text-[#1c1814] sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          className="mx-auto max-w-[760px] text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold tracking-[0.46em] text-[#C8A96B] uppercase sm:text-[11px]">
            REAL STORIES, REAL SPARKLE
          </p>

          <h2 className="mt-4 font-display text-[44px] leading-[0.95] tracking-[0.01em] text-[#111111] sm:text-[58px] lg:text-[76px]">
            Customer Testimonials
          </h2>

          <p className="mt-4 text-[18px] font-light tracking-[0.06em] text-[#c3a2b5] sm:text-[20px]">
            #ilyndraandme
          </p>
        </motion.div>

        <div
          className="relative mt-12 sm:mt-14 lg:mt-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(200,169,107,0.4),rgba(200,169,107,0.18),transparent)] lg:block" />

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#efe3d1] bg-white/95 text-[#C8A96B] shadow-[0_10px_28px_rgba(88,66,33,0.08)] backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
          >
            <span className="text-[26px] leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#efe3d1] bg-white/95 text-[#C8A96B] shadow-[0_10px_28px_rgba(88,66,33,0.08)] backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
          >
            <span className="text-[26px] leading-none">›</span>
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <motion.div
              className="flex items-stretch"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={sectionVariants}
            >
              {testimonials.map((item, index) => (
                <div key={item.name} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                  <TestimonialCard item={item} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-7 bg-[#C8A96B]" : "w-2.5 bg-[#eadfcd]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}