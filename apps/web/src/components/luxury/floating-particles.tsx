"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type FloatingParticlesProps = {
  progress: MotionValue<number>;
};

const particles = [
  { left: "8%", top: "20%", size: 8, delay: 0 },
  { left: "17%", top: "63%", size: 10, delay: 0.8 },
  { left: "36%", top: "18%", size: 6, delay: 1.2 },
  { left: "58%", top: "34%", size: 12, delay: 0.5 },
  { left: "74%", top: "22%", size: 7, delay: 1.5 },
  { left: "86%", top: "58%", size: 9, delay: 0.9 },
];

export function FloatingParticles({ progress }: FloatingParticlesProps) {
  const opacity = useTransform(progress, [0, 0.25], [0.95, 0.4]);
  const drift = useTransform(progress, [0, 1], [0, -36]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity, y: drift }}
    >
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white/55 shadow-[0_0_30px_rgba(255,255,255,0.25)] backdrop-blur-sm"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.35, 0.9, 0.35],
            scale: [1, 1.22, 1],
          }}
          transition={{ duration: 6 + particle.delay, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
        />
      ))}
    </motion.div>
  );
}
