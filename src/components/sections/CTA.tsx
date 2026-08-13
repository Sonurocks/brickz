"use client";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, damping: 14, stiffness: 100 },
    },
  };

  return (
    <section className="relative pt-24 pb-24 z-20 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[50%] before:bg-[#2b2b2b] before:-z-10">
      <div className="w-full mx-auto px-6 xl:px-23">
        {/* Yellow Banner */}
        <div className="relative bg-[#FED403] rounded-lg w-full flex flex-col lg:flex-row items-center min-h-[330px] pt-16 pb-[240px] lg:pt-0 lg:pb-0">
          {/* Left: Overlapping Image */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-start items-center z-10 order-3 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-15 bottom-0 h-[380px] lg:h-[520px] w-[200px] lg:w-[320px]"
            >
              <Image
                src="/assets/ctaleftpost.png"
                alt="Construction Worker"
                fill
                className="object-contain object-bottom"
                priority
              />
            </motion.div>
          </div>

          {/* Center: Magnetic Badge */}
          <div className="w-full lg:w-[15%] flex justify-center items-center pb-6 lg:pb-0 z-10 order-1 lg:order-2">
            <motion.div
              whileHover="hover"
              initial="initial"
              className="relative w-40 h-40 flex items-center justify-center cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="relative w-36 h-36 bg-white rounded-full shadow-xl flex items-center justify-center transition-shadow hover:shadow-2xl"
              >
                {/* Static Circular Elements */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Circular Text */}
                  <div className="absolute inset-0">
                    {(() => {
                      const text = "BRICKZ CONSTRUCTIONS!";
                      const chars = text.split("");
                      const total = chars.length;
                      const startAngle = -85;
                      const arcDeg = 170;
                      const step = arcDeg / (total - 1);
                      const r = 38; // Radius to perfectly match the arc image below

                      return chars.map((char, i) => {
                        const angle = startAngle + i * step;
                        const rad = (angle * Math.PI) / 180;
                        const x = 50 + r * Math.sin(rad);
                        const y = 50 - r * Math.cos(rad);
                        return (
                          <span
                            key={i}
                            style={{
                              position: "absolute",
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                              fontSize: "14px",
                              fontWeight: "500",
                              letterSpacing: "2px",
                              fontFamily: "Barlow, Inter, sans-serif",
                              color: "#1a1a1a",
                              background: "transparent",
                              lineHeight: 1,
                              userSelect: "none",
                            }}
                          >
                            {char}
                          </span>
                        );
                      });
                    })()}
                  </div>

                  {/* Arc Image (Fixed at Bottom) */}
                  <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[76%] h-[40%]">
                    <Image
                      src="/assets/roteing-01.png"
                      alt="Arc Decoration"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                {/* Center Arrow — FiArrowUpRight icon */}
                <motion.div
                  variants={{
                    initial: { rotate: 0, x: 0 },
                    hover: { rotate: 45, x: 5 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10 w-10 h-10 flex items-center justify-center"
                  style={{ marginTop: "-12px" }}
                >
                  <FiArrowUpRight className="w-8 h-8 text-[#1a1a1a]" strokeWidth={2.5} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Text and Button */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start justify-center px-4 lg:pl-16 xl:pl-20 lg:pr-8 py-6 z-10 order-2 lg:order-3 text-center lg:text-left">
            <span className="text-dark font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">
              BEST BUSINESS STRATEGY
            </span>
            <motion.h2
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-[28px] md:text-[30px] lg:text-[38px] xl:text-[52px] font-bold text-dark leading-[1.15]  lg:max-w-none"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              <span className="inline lg:block">
                {["Navigate", "The", "Complex"].map((word, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    variants={wordAnimation}
                    className="inline-block whitespace-pre"
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </span>
              <span className="inline lg:block">
                {["World", "of", "Construction!"].map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordAnimation}
                    className="inline-block whitespace-pre"
                  >
                    {word}{i !== 2 ? " " : ""}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
