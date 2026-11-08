"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { TEAM } from "@/lib/constants";
import Button from "@/components/common/Button";

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="w-full mx-auto px-6 xl:px-23 max-w-[1920px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div>
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-dark mb-3 block">
              THE EXPERT TEAMS MEMBER
            </span>
            <h2
              className="text-3xl md:text-[46px] font-black text-dark leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              Meet Our Contruction Expert
            </h2>
            <p className="text-hero-desc text-[15px] mt-2">
              Focus on serving mid-size to enterprise-level companies looking
            </p>
          </div>

          <Button href="#team" text="View All Member" className="w-60" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col relative overflow-hidden aspect-[4/5] w-full rounded-lg"
            >
              {/* Background Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover "
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Social Links (Slides in from right on hover) */}
              <div className="absolute top-0 right-0 bg-yellow flex flex-col items-center gap-4 py-2 px-2 rounded-bl-md translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                <a href="#" className="text-dark hover:text-white transition-colors">
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <a href="#" className="text-dark hover:text-white transition-colors">
                  <FaXTwitter className="w-3 h-3" />
                </a>
                <a href="#" className="text-dark hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>

              {/* Overlaid Info Box */}
              <div className="absolute bottom-0 left-0 w-[90%] bg-navbar px-8 py-8 rounded-tr-md transition-colors duration-300 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-[22px] md:text-[26px] font-bold text-white group-hover:text-yellow transition-colors duration-300"
                      style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[15px] text-gray-text font-medium transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="w-12 h-12 border border-border-dark rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <FiArrowUpRight className="w-6 h-6 text-white group-hover:text-yellow transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Animated Bottom Line */}
                <div className="w-full h-[1px] bg-border-dark mt-8 group-hover:bg-yellow transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
