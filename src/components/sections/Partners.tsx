"use client";
// src/components/sections/Partners.tsx — partner logos grid with dividers
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTNER_LOGOS = [
  { name: "Chain", src: "/assets/ptnr/ptnr1.png" },
  { name: "Protected", src: "/assets/ptnr/ptnr2.png" },
  { name: "Mainpoint", src: "/assets/ptnr/ptnr3.png" },
  { name: "Asterisk", src: "/assets/ptnr/ptnr4.png" },
  { name: "Fast Aid", src: "/assets/ptnr/ptnr5.png" },
  { name: "access", src: "/assets/ptnr/ptnr6.png" },
  { name: "cowrywise", src: "/assets/ptnr/ptnr7.png" },
  { name: "Puzzle", src: "/assets/ptnr/ptnr8.png" },
  { name: "TalentQL", src: "/assets/ptnr/ptnr9.png" },
  { name: "piggyvest", src: "/assets/ptnr/ptnr10.png" },
  { name: "Produqted", src: "/assets/ptnr/ptnr11.png" },
  { name: "Partner12", src: "/assets/ptnr/ptnr12.png" },
];

export default function Partners() {
  const visibleLogos = PARTNER_LOGOS;

  const numItems = visibleLogos.length;
  const xKeyframes: string[] = [];
  const times: number[] = [];
  const slideDuration = 0.5;
  const pauseDuration = 1.0;
  const totalStepDuration = slideDuration + pauseDuration;
  const totalDuration = totalStepDuration * numItems;

  for (let i = 0; i <= numItems; i++) {
    const pos = `-${(i / numItems) * 50}%`;
    if (i === 0) {
      xKeyframes.push(pos, pos);
      times.push(0, pauseDuration / totalDuration);
    } else if (i === numItems) {
      xKeyframes.push(pos);
      times.push(1);
    } else {
      xKeyframes.push(pos, pos);
      times.push(
        (i * totalStepDuration) / totalDuration,
        (i * totalStepDuration + pauseDuration) / totalDuration
      );
    }
  }

  return (
    <section className="w-full bg-white border-y border-gray-200 overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: xKeyframes }}
        transition={{
          repeat: Infinity,
          duration: totalDuration,
          ease: "easeInOut",
          times: times,
        }}
      >
        {[...visibleLogos, ...visibleLogos].map((logo, i) => (
          <motion.div
            key={i}
            className="relative flex-shrink-0 flex items-center justify-center w-[240px] h-[100px] border-r border-gray-200 last:border-r-0 cursor-pointer overflow-hidden group"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Animated Circular Background */}
            <motion.div
              variants={{ rest: { scale: 0.8, opacity: 0 }, hover: { scale: 1, opacity: 1 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute w-[90px] h-[90px] rounded-full bg-gray-100 z-0"
            />

            {/* Static Logo */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                className="h-12 w-[140px] object-contain grayscale opacity-60 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
