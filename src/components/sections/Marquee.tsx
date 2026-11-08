'use client';
// src/components/sections/Marquee.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DEFAULT_MARQUEE_ITEMS = [
  "Construction",
  "Building",
  "Renovation",
];

interface MarqueeProps {
  dark?: boolean;
  outline?: boolean;
  items?: string[];
  speed?: string;
  direction?: 'left' | 'right';
}

export default function Marquee({
  dark = false,
  outline = false,
  items = DEFAULT_MARQUEE_ITEMS,
  speed = '40s',
  direction = 'left',
}: MarqueeProps) {
  const duration = parseInt(speed) || 35;
  
  // Right direction starts at -50% and moves to 0%, left moves 0% to -50%
  const xAnimation = direction === 'right' ? ["-50%", "0%"] : ["0%", "-50%"];

  if (outline) {
    return (
      <div className="pt-2 pb-6 overflow-hidden flex whitespace-nowrap">
        <motion.div
          className="flex w-max"
          animate={{ x: xAnimation }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
        > 
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[120px] font-semibold mx-8 tracking-tight leading-[110px] text-center uppercase"
              style={{
                WebkitTextStroke: '2px var(--color-outline-stroke)',
                color: 'var(--color-transparent-text)',
              }}
            >
              {item}
            </span>
          ))}
        </motion.div> 
      </div>
    );
  }

  // Duplicate items to ensure seamless infinite looping track
  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div
      className={`overflow-hidden py-[25px] border-y border-[#E3E3E8] flex whitespace-nowrap ${
        dark ? 'bg-dark' : 'bg-[#F6F6F6]'
      }`}
    >
      <motion.div
        className="flex w-max items-center"
        animate={{ x: xAnimation }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-6 mx-2 sm:mx-3 shrink-0">
            <span
              className="text-[22px] sm:text-[25px] md:text-[26px] font-normal leading-none tracking-normal capitalize text-black"
              style={{
                fontFamily: 'var(--font-cal-sans)',
                color: '#000000',
                fontWeight: 600,
              }}
            >
              {item}
            </span>
            <div className="relative w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] flex items-center justify-center shrink-0">
              <Image
                src="/assets/star.png"
                alt="Star Icon"
                width={25}
                height={25}
                className="w-full h-full object-contain brightness-0"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
