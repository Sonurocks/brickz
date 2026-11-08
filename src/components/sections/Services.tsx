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
          <p className="text-hero-desc text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] mx-auto max-w-[280px] sm:max-w-[420px] md:max-w-none">
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
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                            fill="black"
                          />
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
