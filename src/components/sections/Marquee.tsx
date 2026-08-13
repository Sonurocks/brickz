'use client';
// src/components/sections/Marquee.tsx
import React from 'react';
import { Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  "Construction . Company . since 1999 .",
  "Construction . Company . since 1999 .",
  "Construction . Company . since 1999 .",
  "Construction . Company . since 1999 .",
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
  items = TICKER_ITEMS,
  speed = '90s',
  direction = 'left',
}: MarqueeProps) {
  const duration = parseInt(speed) || 30;
  
  // Right direction starts at -50% and moves to 0%
  const xAnimation = direction === 'right' ? ["-50%", "0%"] : ["0%", "-50%"];

  if (outline) {
    return (
      <div className="pt-2 pb-6 overflow-hidden flex whitespace-nowrap">
        <motion.div
          className="flex w-max"
          animate={{ x: xAnimation }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
        > 
          {[...items, ...items].map((item, i) => (
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

  return (
    <div
      className="overflow-hidden py-6 border-b border-gray-300 flex whitespace-nowrap"
      style={{ background: dark ? '#1A1A1A' : '#F6F6F6' }}
    >
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: xAnimation }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[20px] md:text-[24px] font-semibold text-dark flex items-center uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
