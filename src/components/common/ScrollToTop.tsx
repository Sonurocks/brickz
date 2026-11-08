"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  // Create a buttery smooth spring animation for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Show button after scrolling down 300px
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  
  // Transform the (0 to 1) scroll progress into the exact SVG stroke offset
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [circumference, 0]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-6 md:right-8 z-[99] flex items-center justify-center w-[40px] h-[40px] bg-yellow rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="absolute text-dark w-[18px] h-[18px] z-10" strokeWidth={2.5} />
          
          <svg
            height="40"
            width="40"
            className="absolute inset-0 -rotate-90 pointer-events-none"
          >
            {/* The progress circle stroke - Hardware accelerated by Framer Motion */}
            <motion.circle
              stroke="var(--color-dark)"
              fill="transparent"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={radius}
              cx="20"
              cy="20"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
