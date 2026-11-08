"use client";
// src/components/sections/About.tsx
import AnimatedButton from "@/components/common/AnimatedButton";
import { aboutPost1, shape1 } from "@/lib/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SKILLS = [
  { label: "Technical Skills", percent: 95 },
  { label: "Physical Skills", percent: 97 },
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
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-dark">
                  Our Construction Strategy
                </span>
              </div>

              <h2
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[42px] xl:text-[50px] font-bold leading-[1.18] tracking-tight text-dark"
                style={{ fontFamily: "Barlow, Inter, sans-serif" }}
              >
                Strong Foundations For Better Tomorrow
              </h2>

              <p className="text-body-text text-[15px] leading-relaxed max-w-xl">
                Corporate consulting is a professional service that helps businesses identify challenges, improve
                efficiency, and achieve their strategic goals. Consultants work closely with team.
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 my-2">
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                      <path
                        d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-[15px] text-dark font-medium">Regulatory Investigations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                      <path
                        d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-[15px] text-dark font-medium">Anit- Competitive Conduct</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                      <path
                        d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-[15px] text-dark font-medium">Competitive Work Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                      <path
                        d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-[15px] text-dark font-medium">Innovation. Strategy. Success.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <AnimatedButton
                  href="#contact"
                  text="Get Start Now"
                  variant="yellow"
                  className="w-fit"
                />
              </div>
            </motion.div>

            {/* ---- RIGHT: IMAGE SIDE ---- */}
            <div className="relative pb-16 sm:pb-24 lg:pb-0">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden shadow-lg"
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute -bottom-8 right-2 sm:right-6 lg:-right-4 xl:right-8 bg-white shadow-xl rounded-[6px] p-6 sm:p-8 lg:p-8 xl:p-10 w-[92%] sm:w-[80%] md:w-[420px] lg:w-[380px] xl:w-[440px] z-20 border border-gray-100"
              >
                <h4
                  className="text-[22px] sm:text-[24px] font-bold text-dark mb-3"
                  style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                >
                  Working Skill
                </h4>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-[2px] bg-yellow" />
                  <div className="w-20 h-[1px] bg-gray-200" />
                </div>

                {SKILLS.map((skill) => (
                  <div key={skill.label} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-[14px] font-semibold text-dark mb-2">
                      <span>{skill.label}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    {/* Outline track with inner padding */}
                    <div className="w-full h-[12px] bg-gray-track rounded-[3px] p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-dark rounded-[2px]"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
