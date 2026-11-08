"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { logo, banner1 } from "@/lib";
import Button from "../common/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-dark-hero overflow-hidden ">
      {/* Large Watermark Logo */}
      {/* <div className="absolute bottom-10 left-10 lg:left-32 opacity-[0.03] pointer-events-none w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] z-0">
        <Image src={logo} alt="Watermark" fill className="object-contain" />
      </div> */}

      {/* Main Centered Container */}
      <div className="w-full mx-auto px-4 md:px-5 relative z-10 flex flex-col">
        {/* Banner Image Container */}
        <div
          className="w-full h-[350px] rounded-xl relative overflow-hidden order-3 lg:order-1 mt-10 lg:mt-0"
          style={{
            background: `url('${banner1}') no-repeat`,
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Below Banner (Text left, Form right overlapping) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-5 mt-0 lg:mt-0 order-1 lg:order-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:flex-1 lg:pr-10 lg:pt-24"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-[56px] font-black text-white mb-6 md:mb-8 font-semibold"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              Trusted Construction <br /> Solutions Built
            </h1>

            {/* Custom Divider Line */}
            <div className="w-full h-[2px] bg-white/10 mb-6 md:mb-8 max-w-[500px] relative">
              <div className="absolute top-0 left-0 h-full bg-white w-36"></div>
            </div>

            <p className="text-hero-desc text-[15px] mb-6 md:mb-8 max-w-[500px]">
              We believe that every business is unique, our approach is never one size.
            </p>

            <Button text="Free Consultation" className="mt-2" />
          </motion.div>

          {/* RIGHT CONTACT FORM (Width: 700px, overlaps banner) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[52.5%] max-w-[800px] flex-shrink-0 lg:-mt-[240px] relative z-20"
          >
            {/* Yellow Top Section */}
            <div className="bg-yellow p-6 pb-8 md:p-10 md:pb-12 lg:p-14 lg:pb-16 w-full rounded-t-sm">
              <span className="text-[13px] font-medium tracking-widest uppercase text-dark-blue block mb-4">
                CONTACT WITH US NOW
              </span>
              <h3
                className="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "Barlow, Inter, sans-serif" }}
              >
                Let's Collaborate With Us!
              </h3>
              <p className="text-[15px] text-gray-900/80">
                Read and update the latest news from us. done eu magna quis felis.
              </p>
            </div>

            {/* White Form Section */}
            <div className="bg-white p-5 md:p-8 lg:p-14 shadow-2xl w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget as HTMLFormElement;
                  const btn = target.querySelector('button[type="submit"]') as HTMLButtonElement;
                  if (btn) {
                    const orig = btn.innerText;
                    btn.innerText = "✓ Request Received!";
                    btn.classList.add("bg-green-600");
                    setTimeout(() => {
                      btn.innerText = orig;
                      btn.classList.remove("bg-green-600");
                      target.reset();
                    }, 3000);
                  }
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="Your Name*"
                    className="border border-gray-200 px-5 py-4 text-[14px] outline-none focus:border-yellow transition-colors placeholder:text-gray-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email*"
                    className="border border-gray-200 px-5 py-4 text-[14px] outline-none focus:border-yellow transition-colors placeholder:text-gray-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="border border-gray-200 px-5 py-4 text-[14px] outline-none focus:border-yellow transition-colors placeholder:text-gray-500"
                  />
                  <div className="relative">
                    <select className="w-full border border-gray-200 px-5 py-4 text-[14px] outline-none focus:border-yellow transition-colors text-gray-500 bg-white appearance-none cursor-pointer">
                      <option value="">Your Services</option>
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Industrial Construction</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-yellow">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="border border-gray-200 px-5 py-4 text-[14px] outline-none focus:border-yellow transition-colors placeholder:text-gray-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-dark-hero hover:bg-[#1a1a1a] text-white font-bold text-[14px] tracking-wider uppercase py-4 transition-colors rounded-sm cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
