"use client";
// src/components/sections/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ExploreButton from "@/components/common/ExploreButton";

export default function Services() {
  return (
    <section id="services" className="relative w-full z-0">
      {/* --- HEADER (WHITE BG) --- */}
      <div className="w-full bg-white pt-28 pb-12">
        <div className="w-full px-5 mx-auto flex flex-col items-center text-center">
          <p className="text-hero-desc text-[12px] font-bold tracking-[0.15em] uppercase mb-4">
            OUR CONSTRUCTION SERVICES
          </p>
          <h2
            className="text-[28px] sm:text-[36px] md:text-[46px] font-black text-dark mb-5 tracking-[-0.02em] leading-[1.1] mx-auto"
            style={{ fontFamily: "Barlow, Inter, sans-serif" }}
          >
            Reliable Construction <br className="block sm:hidden" /> <span className="hidden sm:inline"><br className="block md:hidden" /></span> Services
          </h2>
          <p className="text-[#767676] text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] mx-auto max-w-[280px] sm:max-w-[420px] md:max-w-none">
            Focus on serving mid-size to enterprise-level companies looking for scalable strategic.
          </p>
        </div>
      </div>

      {/* --- CARDS GRID (SPLIT BG) --- */}
      <div className="relative w-full">
        {/* Background split: Top 50% White, Bottom 50% Dark */}
        <div className="absolute inset-0 flex flex-col -z-10">
          <div className="h-[50%] bg-white w-full" />
          <div className="h-[50%] bg-navbar w-full" />
        </div>

        <div className="w-full px-5 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-lg border border-gray-200 p-[10px] shadow-sm flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full h-[260px] rounded-md overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text Content */}
                <div className="px-3 pt-6 pb-2 flex-grow flex flex-col">
                  <h3 className="text-[20px] font-bold text-dark mb-3 tracking-tight">{service.title}</h3>

                  <p className="text-[17px] text-hero-desc leading-relaxed mb-6">{service.description}</p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {service.features?.map((f, index) => (
                      <li key={index} className="flex items-center gap-3 text-[14px] text-dark font-bold">
                        <svg
                          className="w-3.5 h-3.5 text-dark flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <ExploreButton />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM DARK AREA --- */}
      <div className="w-full bg-navbar relative">
        <div className="w-full mx-auto px-5 h-28 flex items-center justify-end"></div>
      </div>
    </section>
  );
}
