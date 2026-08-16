"use client";
// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronsRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.li initial="rest" whileHover="hover" animate="rest" className="flex">
      <Link href={href} className="inline-flex items-center text-[#A0A0A0] hover:text-[#FED403] transition-colors">
        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: 20 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative flex items-center"
        >
          <motion.span
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute -left-[20px] flex items-center text-[#FED403]"
          >
            <ChevronsRight className="w-[16px] h-[16px]" strokeWidth={3} />
          </motion.span>
          {children}
        </motion.div>
      </Link>
    </motion.li>
  );
};

export default function Footer() {
  return (
    <>
      <footer className="bg-card-dark w-full" style={{ color: "#ffffff", fontFamily: '"Golos Text", sans-serif' }}>
        <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row relative px-4 lg:px-[30px] xl:px-0">
          {/* Left Column */}
          <div className="relative w-full lg:w-[28%] xl:w-[395px] lg:flex-shrink-0 pt-12 lg:pt-[100px] pb-12 lg:pb-[230px] ml-0 lg:ml-[10px] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.082)] pr-4 lg:pr-[30px] xl:pr-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-8">
              <Image
                src="/assets/logo.png"
                alt="Brickz Logo"
                width={160}
                height={50}
                className="h-[45px] w-auto object-contain"
              />
            </Link>

            <p className="text-[16px] leading-[26px] mb-10" style={{ color: "rgb(150, 150, 150)", fontWeight: 400 }}>
              Brickz specializes in helping startups
              <br />
              and enterprises craft strate solutions
              <br />
              donec eu magna quis fells
            </p>

            <div className="flex flex-col gap-5 text-[16px] leading-[26px]" style={{ color: "rgb(150, 150, 150)" }}>
              <p>Call us: +990 123 456 789</p>
              <p>Email: contruction@gmail.com</p>
              <p>Hours: Mon-Fri: 8.00am - 18.00pm</p>
            </div>

            <div className="flex items-center gap-4 mt-12">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-[rgba(255,255,255,0.05)] bg-card-dark text-[#A0A0A0] hover:bg-[#FED403] hover:text-[#1A1A1A] hover:border-[#FED403]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[70%] xl:flex-1 pt-12 lg:pt-[100px] pl-0 lg:pl-[40px] xl:pl-26 pr-0 lg:pr-[10px] xl:pr-4">
            {/* 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Quick Links */}
              <div>
                <h4 className="text-[22px] font-bold text-white mb-8 relative pb-3">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-white"></span>
                </h4>
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px]" style={{ color: "#A0A0A0" }}>
                  {["About Us", "Contact Us", "Projects", "Services"].map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 className="text-[22px] font-bold text-white mb-8 relative pb-3">
                  Industries
                  <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-white"></span>
                </h4>
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px]" style={{ color: "#A0A0A0" }}>
                  {["Residential", "Commercial", "Industrial", "Civil Works"].map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-[22px] font-bold text-white mb-8 relative pb-3">
                  Services
                  <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-white"></span>
                </h4>
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px]" style={{ color: "#A0A0A0" }}>
                  {[
                    "General Contracting",
                    "Planning, Design & Build",
                    "Renovation & Remodeling",
                    "Project Management",
                  ].map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="mt-16 bg-[rgba(255,255,255,0.05)] rounded-[4px] p-6 lg:p-7 flex flex-col gap-4">
              <h3 className="text-white text-[18px] md:text-[24px] font-bold tracking-tight">Subscribe Newsletter</h3>

              {/* Mobile: input stacked above, button below separately */}
              <div className="flex flex-col sm:hidden gap-3">
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="w-full bg-[rgb(49,49,49)] text-[#888888] placeholder-[#888888] px-5 py-3.5 text-[15px] outline-none border border-transparent focus:border-[#FED403] transition-all rounded-[4px]"
                />
                <button
                  className="bg-[#FED403] hover:bg-white font-semibold text-[15px] px-6 py-3.5 flex items-center gap-2 transition-colors rounded-[4px] w-fit whitespace-nowrap flex-shrink-0"
                  style={{ color: "#1A1A1A" }}
                >
                  Let's Join
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] flex-shrink-0" />
                </button>
              </div>

              {/* sm+: input + button attached side by side */}
              <div className="hidden sm:flex w-full">
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="flex-1 bg-[rgb(49,49,49)] text-[#888888] placeholder-[#888888] px-5 py-3.5 text-[15px] outline-none border border-transparent focus:border-[#FED403] transition-all rounded-l-[4px]"
                />
                <button
                  className="bg-[#FED403] hover:bg-white font-semibold text-[15px] px-6 py-3.5 flex items-center gap-2 transition-colors rounded-r-[4px] flex-shrink-0 whitespace-nowrap"
                  style={{ color: "#1A1A1A" }}
                >
                  Let's Join
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Badges (Bottom Right area) */}
            <div className="mt-12 flex items-center justify-center xl:justify-end gap-4 sm:gap-8 xl:gap-10 mb-20 lg:mb-0 xl:pr-[250px]">
              <Image
                src="/assets/footer/footerlogo1.png"
                alt="Worldbin Badge"
                width={100}
                height={75}
                className="h-[80px] sm:h-[80px] xl:h-[90px] w-auto object-contain opacity-50 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              />
              <Image
                src="/assets/footer/footerlogo2.png"
                alt="ISO 9001 Badge"
                width={100}
                height={75}
                className="h-[80px] sm:h-[80px] xl:h-[90px] w-auto object-contain opacity-50 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              />
              <Image
                src="/assets/footer/footerlogo3.png"
                alt="Certified Badge"
                width={100}
                height={75}
                className="h-[80px] sm:h-[80px] xl:h-[90px] w-auto object-contain opacity-50 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.08)] relative">
          <div className="w-full max-w-[1300px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <Link href="#" className="text-[16px] text-[#A0A0A0] hover:text-[#FED403] transition-colors">
                Terms &amp; Agreements
              </Link>
              <Link href="#" className="text-[16px] text-[#A0A0A0] hover:text-[#FED403] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-[16px] text-[#A0A0A0]">© Copyright 2026 RSTheme</p>
          </div>
        </div>
      </footer>
    </>
  );
}
