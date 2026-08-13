"use client";
// src/components/Header.tsx — Exact match to Brickz WordPress site
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight, Menu, X, ChevronDown, Search } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/constants";
import { logo } from "@/lib/assets";
import { BsChevronDown } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Button from "./common/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 130;
      if (headerRef.current) {
        threshold = headerRef.current.offsetTop + headerRef.current.clientHeight;
      }
      setScrolled(window.scrollY > threshold);

      // Highlight active nav link
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ============================
          TOP BAR
      ============================= */}
      <div className="bg-yellow w-full mx-auto">
        <div className="w-full mx-auto px-4 md:px-5 min-h-[36px] py-2 sm:py-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 flex-wrap">
          {/* Left: Have a project */}
          <div className="hidden lg:flex items-center gap-[7px] text-[14px] font-[400] text-gray-900">
            <span className="bg-gray-900 text-yellow-400 py-[2px] rounded-sm flex items-center justify-center">
              <BsChevronDown className="w-4.5 h-4 -rotate-90" strokeWidth={1} />
            </span>
            Have a Project in Mind?{" "}
            <a href="#contact" className="underline hover:no-underline">
              Contact With Us
            </a>
          </div>

          {/* Right: contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 w-full lg:w-auto text-center justify-center flex-wrap">
            <a
              href="tel:+990123456789"
              className="flex items-center justify-center gap-2 text-[13px] sm:text-sm font-normal  text-gray-900 hover:opacity-70 transition-opacity"
            >
              <BiSolidPhoneCall size={16} className="sm:w-[18px] sm:h-[18px]" />
              Call us: +990 123 456 789
            </a>
            <span className="hidden sm:block w-px h-4 bg-gray-900/30" />
            <a
              href="mailto:brickzconstruction@gmail.com"
              className="flex items-center justify-center gap-2 text-[13px] sm:text-sm font-normal  text-gray-900 hover:opacity-70 transition-opacity"
            >
              <IoIosMail size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>
                <span className="hidden md:inline">Send mail: </span>brickzconstruction@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================
          MAIN NAVBAR
      ============================= */}
      <div ref={headerRef} className="w-full h-[80px] lg:h-[90px] z-50 relative">
        <motion.header 
          initial={false}
          animate={{ y: scrolled ? [-90, 0] : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-full bg-card-dark shadow-[0_1px_0_0_#313131] z-50 ${
            scrolled ? "fixed top-0 left-0 shadow-xl" : "absolute top-0 left-0"
          }`}
        >
          <div className="w-full mx-auto px-4 md:px-5 flex items-center justify-between h-[80px] lg:h-[90px]">
          {/* ---- LEFT GROUP: LOGO & NAV ---- */}
          <div className="flex items-center gap-10 lg:gap-24 h-full">
            {/* ---- LOGO ---- */}
            <Link href="/" className="flex items-center group h-full">
              <Image
                src={logo}
                alt="Brickz Logo"
                width={50}
                height={50}
                className="h-[39.5px] w-auto object-contain"
                priority
              />
            </Link>

            {/* ---- DESKTOP NAV ---- */}
            <nav className="hidden lg:flex items-center gap-[7px] ">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={label}
                    href={href}
                    className="relative px-4 py-2 text-[15px] font-bold transition-colors group"
                    style={{ color: isActive ? "#FED403" : "#ffffff" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                    <style jsx>{`
                      a:hover {
                        color: #fed403 !important;
                      }
                    `}</style>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* ---- CTA BUTTON + MOBILE TOGGLE ---- */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <Button text="Get Free Quote" className="justify-between w-[210px]" />
            </div>

            <div className="flex items-center gap-[8px] sm:gap-[15px]">
              <button className="flex items-center justify-center w-[45px] h-[45px] sm:w-[48px] sm:h-[48px] rounded-full border border-white/20 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                className="flex items-center justify-center w-[45px] h-[45px] sm:w-[48px] sm:h-[48px] rounded-full border border-white/20 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <CgMenuRight className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>
        </motion.header>
      </div>

      {/* ---- MOBILE MENU ---- */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{ background: "#1A1A1A", borderTop: "1px solid #333" }}
            >
              <nav className="flex flex-col py-4 px-6 gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-[16px] font-medium border-b border-white/10 last:border-0 transition-colors"
                    style={{ color: "#cccccc" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FED403";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#cccccc";
                    }}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 btn btn-yellow w-full justify-center"
                >
                  Get Free Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}
