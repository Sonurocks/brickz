"use client";
// src/components/sections/Projects.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants";
import Button from "@/components/common/Button";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // [currentIndex, scrollDirection]
  const [[index, direction], setIndexTuple] = useState([0, 1]);

  const ITEMS_PER_PAGE = 4;

  const filtered =
    activeFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter || p.tags?.includes(activeFilter));

  const isScrollable = filtered.length > ITEMS_PER_PAGE;

  // Build the visible array (always 4 items if scrollable)
  const visible = [];
  if (isScrollable) {
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      visible.push(filtered[(index + i) % filtered.length]);
    }
  } else {
    visible.push(...filtered);
  }

  const paginate = (newDirection: number) => {
    if (!isScrollable) return;
    setIndexTuple((prev) => {
      let next = prev[0] + newDirection;
      if (next < 0) next = filtered.length - 1;
      else if (next >= filtered.length) next = 0;
      return [next, newDirection];
    });
  };

  // Auto-scroll effect (infinite loop, 1 item at a time)
  useEffect(() => {
    if (!isScrollable) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4000); // Scrolls every 4 seconds
    return () => clearInterval(timer);
  }, [isScrollable, index, direction]);

  function handleFilter(value: string) {
    setActiveFilter(value);
    setIndexTuple([0, 1]); // Reset index
  }

  return (
    <section id="projects" className="w-full overflow-hidden">
      {/* ---- LIGHT HEADER ---- */}
      <div className="pt-16 md:pt-18 pb-16">
        <div className="w-full px-6 xl:px-23 text-center">
          <span className="block text-[12px] font-bold tracking-[0.2em] uppercase text-dark mb-3">OUR PROJECTS</span>
          <h2
            className="text-3xl md:text-[46px] font-black text-dark leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "Barlow, Inter, sans-serif" }}
          >
            Our Project Excellence
          </h2>
          <p className="text-[#767676] text-[16px] leading-relaxed max-w-[560px] mx-auto mt-4">
            We combine innovation, expertise, and excellence to drive sustainable growth future by repairing and
            improving their and success.
          </p>
          <div className="inline-flex flex-col mt-10">
            <div className="h-[0.5px] bg-gray-300 mb-5" />

            <div className="flex flex-wrap justify-center gap-19">
              {PROJECT_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => handleFilter(filter.value)}
                  className={`relative pb-3 text-[18px] font-semibold transition-colors duration-200 border-none bg-transparent cursor-pointer ${
                    activeFilter === filter.value ? "text-dark" : "text-[#767676]"
                  }`}
                >
                  {filter.label}
                  {activeFilter === filter.value && (
                    <motion.div
                      layoutId="project-filter-underline"
                      className="absolute bottom-0 left-0 right-0 h-[4px] bg-yellow"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="h-[0.5px] bg-gray-300" />
          </div>
        </div>
      </div>

      {/* ---- PROJECT GALLERY ---- */}
      <div className="w-full ">
        {/* IMAGE GRID (Perfect 50/50 split) */}
        <div className="relative">
          {/* Black background starts exactly halfway down the image grid wrapper */}
          <div className="absolute top-1/2 bottom-0 left-0 right-0 bg-dark z-0" />

          <div className="relative z-10 w-full mx-auto px-6 xl:px-19">
            <div className="w-full overflow-hidden">
              <div className="flex gap-5 w-full">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  {visible.map((project) => (
                    <motion.div
                      key={`${activeFilter}-${project.id}`}
                      layout
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({
                          x: dir > 0 ? "100%" : "-100%",
                          opacity: 0,
                        }),
                        center: {
                          x: "0%",
                          opacity: 1,
                        },
                        exit: (dir: number) => ({
                          x: dir > 0 ? "-100%" : "100%",
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", ease: "linear", duration: 0.6 },
                        opacity: { duration: 0.4 },
                        layout: { type: "tween", ease: "linear", duration: 0.6 },
                      }}
                      className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-3px)]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <div className="absolute bottom-6 left-6 z-10">
                        {project.tags && (
                          <span className="text-[12px] font-semibold text-yellow tracking-[0.05em]">
                            {project.tags.join(", ")}
                          </span>
                        )}
                        <h3
                          className="text-[18px] font-black text-white mt-1"
                          style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (Fully on dark background) */}
        <div className="bg-dark pt-12 md:pt-19 pb-20 md:pb-30 relative z-10">
          <div className="w-full mx-auto px-6 xl:px-24">
            <div className="flex flex-row items-center justify-between gap-4">
              {/* Arrow pagination */}
              <div className="flex gap-3 pl-0 xl:pl-55">
                <button
                  onClick={() => paginate(-1)}
                  className="w-[52px] h-[52px] rounded-md border-2 border-yellow bg-yellow text-dark flex items-center justify-center
                             hover:bg-white hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-[52px] h-[52px] rounded-md border-2 border-yellow bg-yellow text-dark flex items-center justify-center
                             hover:bg-white hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M19 12l-7 7M19 12l-7-7" />
                  </svg>
                </button>
              </div>

              <div className="pr-0 xl:pr-20">
                <Button href="#projects" text="View All Projects" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
