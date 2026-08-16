"use client";
// src/components/sections/About.tsx
import Button from "@/components/common/Button";
import { aboutPost1, shape1 } from "@/lib/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SKILLS = [
  { label: "Technical Skills", percent: 95 },
  { label: "Physical Skills", percent: 97 },
];

const CHECKLIST = [
  ["Regulatory Investigations", "Competitive Work Analysis"],
  ["Anit- Competitive Conduct", "Innovation. Strategy. Success."],
];

export default function About() {
  return (
    <section id="about" className="relative mt-28 bg-white overflow-hidden">
      {/* Crane shape floating on right edge of section — behind gray container */}
      <motion.div
        className="absolute top-0 right-8 w-[120px] h-auto opacity-80 pointer-events-none z-0"
        animate={{ x: [0, 15, 0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src={shape1}
          alt="Crane decoration"
          width={200}
          height={600}
          className="w-[150px] h-auto object-contain"
        />
      </motion.div>

      <div className="w-full mx-auto px-4 lg:px-6 xl:px-23 relative z-10">
        <div className="relative bg-gray-bg rounded-md px-5 py-12 lg:px-6 lg:py-20 xl:px-14 xl:py-26 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 xl:gap-16 items-start relative z-10">
            {/* ---- LEFT: TEXT SIDE ---- */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-5 pt-4"
            >
              <span
                className="text-[12px] font-bold tracking-[0.2em] uppercase text-dark"
                style={{ letterSpacing: "0.2em" }}
              >
                OUR CONSTRUCTION STRATEGY
              </span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="text-[36px] md:text-[52px] lg:text-[40px] xl:text-[52px] font-semibold leading-[1.15] tracking-tight text-dark"
                style={{ fontFamily: "Barlow, Inter, sans-serif", perspective: 400 }}
              >
                <span className="xl:whitespace-nowrap">
                  {"Strong Foundations For".split(" ").map((word, i) => (
                    <React.Fragment key={`w1-${i}`}>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>{" "}
                    </React.Fragment>
                  ))}
                </span>
                <br />
                <span className="xl:whitespace-nowrap">
                  {"Better Tomorrow".split(" ").map((word, i) => (
                    <React.Fragment key={`w2-${i}`}>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>{" "}
                    </React.Fragment>
                  ))}
                </span>
              </motion.h2>

              <p className="text-hero-desc text-[15px] leading-relaxed max-w-lg">
                Corporate consulting is a professional service that helps businesses identify challenges, improve
                efficiency, and achieve their strategic goals. Consultants work closely with team.
              </p>

              {/* Checklist grid */}
              <div className="flex flex-col gap-3 mt-2">
                {CHECKLIST.flat().map((item, ri) => (
                  <div key={ri} className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-dark flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[15px] text-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-12 lg:pt-6 xl:pt-12">
                <Button href="#contact" text="Get Start Now" />
              </div>
            </motion.div>

            {/* ---- RIGHT: IMAGE SIDE ---- */}
            <div className="relative">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative w-full aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={aboutPost1}
                  alt="Construction workers on site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Floating skills card */}
              <div className="absolute -bottom-28 right-4 lg:-right-4 xl:right-9 bg-white shadow-xs p-8 lg:p-10 xl:p-12 w-[90%] sm:w-[80%] md:w-[460px] lg:w-[400px] xl:w-[460px] z-20">
                <motion.h4
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="text-[24px] font-semibold text-dark mb-4"
                  style={{ perspective: 400 }}
                >
                  {"Working Skill".split(" ").map((word, i) => (
                    <React.Fragment key={`ws-${i}`}>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>{" "}
                    </React.Fragment>
                  ))}
                </motion.h4>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-[2px] bg-dark" />
                  <div className="w-24 h-[1px] bg-gray-200" />
                </div>
                {SKILLS.map((skill) => (
                  <div key={skill.label} className="mb-6 last:mb-0">
                    <div className="flex justify-between text-[15px] font-semibold text-dark mb-3">
                      <span>{skill.label}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    {/* Outline track with inner padding */}
                    <div className="w-full h-[14px] border border-gray-200 bg-[#fbfbfb] p-[3px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="h-full bg-dark"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
