"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiHeadphones, FiClock, FiGlobe } from "react-icons/fi";

const CONTACT_INFO = [
  {
    icon: FiHeadphones,
    label: "Phone Number:",
    value: "+88015569569",
  },
  {
    icon: FiClock,
    label: "Opening Hours:",
    value: "Mon-Fri: 08:00 - 17:00 Sat-Sun: Closed",
  },
  {
    icon: FiGlobe,
    label: "Office Location:",
    value: "New Jesrsy, 1201, USA",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-10 md:py-14 xl:py-24 overflow-hidden" style={{ backgroundColor: "#F6F6F6" }}>
      {/* Global Faint Dotted Map Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/assets/blogs/blogslft.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Engineer Image Background (Left 38% of screen) */}
      <div className="hidden xl:block absolute top-0 left-0 h-full w-[38%] z-0">
        <Image src="/assets/blogs/postbg.png" alt="Construction Engineer" fill className="object-cover object-center" />
      </div>

      {/* Foreground Content Container (Aligned with Navbar) */}
      <div className="relative z-10 mx-auto w-full px-6 xl:px-0 xl:w-[89%] xl:max-w-[1600px] flex flex-col xl:flex-row items-stretch gap-8 md:gap-10 xl:gap-0">
        {/* Left Form Box */}
        <div className="w-full xl:w-[45%] flex items-center justify-center xl:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 bg-[#2b2b2b] w-full xl:w-[620px] mx-auto xl:mx-0 p-6 md:p-10 lg:p-12 border-t-[5px] border-[#FED403]"
          >
            <h3
              className="text-white text-[32px] md:text-[40px] font-bold leading-tight mb-3"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              Have Any Questions?
            </h3>
            <p className="text-gray-300 text-[15px] mb-8">The point of using Lorem Ipsum is that it has more</p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#363636] text-white placeholder-gray-400 px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-[#363636] text-white placeholder-gray-400 px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full bg-[#363636] text-white placeholder-gray-400 px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your massage"
                className="w-full bg-[#363636] text-white placeholder-gray-400 px-6 py-4 text-[15px] outline-none focus:ring-1 focus:ring-yellow-400 transition-all resize-none mb-2"
              />
              <button
                type="submit"
                className="bg-[#FED403] hover:bg-white text-dark font-bold text-[15px] py-4 px-8 w-max transition-colors duration-300"
              >
                Submit Now
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Info Section */}
        <div className="w-full xl:w-[55%] flex flex-col justify-center xl:pl-20">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full relative z-10"
          >
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
              LET'S WORK
            </span>
            <h2
              className="text-3xl md:text-[52px] font-semibold mb-6 leading-[1.15] tracking-tight"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              Your Trusted Partner in Construction.
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-12">
              Crafting compelling digital experiences that captivate and drive meaningful connections. our digital
              agency combines innovation online success.
            </p>

            {/* Contact Info Blocks */}
            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="w-[70px] h-[70px] bg-[#313131] rounded-md flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-8 h-8 text-[#FED403] stroke-[1.5]" />
                  </div>
                  <div>
                    <h4
                      className="text-dark font-bold text-[20px] mb-1"
                      style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                    >
                      {info.label}
                    </h4>
                    <p className="text-gray-500 text-[15px]">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Van Image */}
      <motion.div
        className="absolute bottom-0 right-0 z-20 w-[180px] sm:w-[240px] md:w-[280px] lg:w-[340px] xl:w-[450px]"
        animate={{ x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Image
          src="/assets/blogs/van.png"
          alt="Construction Loader Van"
          width={600}
          height={400}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
