"use client";
// src/components/sections/Stats.tsx — counter stats on dark background
import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section style={{ background: "#1A1A1A" }}>
      <div className="w-full mx-auto px-6 xl:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-2"
            >
              <span
                className="text-4xl md:text-5xl font-black"
                style={{ color: "#FED403", fontFamily: "Barlow, Inter, sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
