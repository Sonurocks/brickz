"use client";
// src/components/Header.tsx — Exact match to Brickz WordPress site
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NAV_LINKS } from "@/lib/constants";
import { logo } from "@/lib/assets";
import { BsChevronDown } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Button from "./common/Button";

// Gallery images reusing existing project assets
const SIDEBAR_GALLERY = [
  "/assets/about/project1.png",
  "/assets/about/project2.png",
  "/assets/about/project3.png",
  "/assets/about/project4.png",
  "/assets/about/project5.png",
  "/assets/about/project6.png",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

            <div className="flex items-center gap-[8px] sm:gap-[12px] lg:gap-[15px]">
              <button className="flex items-center justify-center w-[36px] h-[36px] lg:w-[45px] lg:h-[45px] rounded-full border border-white/20 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <Search className="w-[16px] h-[16px] lg:w-5 lg:h-5" />
              </button>

              {/* Mobile menu button (< lg) */}
              <button
                className="flex lg:hidden items-center justify-center w-[36px] h-[36px] rounded-full border border-white/20 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <CgMenuRight className="w-6 h-6" />}
              </button>

              {/* Desktop sidebar toggle button (lg+) */}
              <button
                className="hidden lg:flex items-center justify-center w-[45px] h-[45px] rounded-full border border-white/20 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                onClick={() => setSidebarOpen((o) => !o)}
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <CgMenuRight className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>
        </motion.header>
      </div>

      {/* ---- MOBILE SIDE DRAWER MENU (< lg) ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 z-[90] lg:hidden"
            />

            {/* Right Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[300px] sm:w-[340px] bg-[#2b2b2b] z-[100] shadow-2xl flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Top Header Row with Logo and Yellow Close Button */}
              <div className="relative flex items-center justify-between p-6 pt-7 pb-6 border-b border-gray-700/40">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <Image
                    src={logo}
                    alt="Brickz Logo"
                    width={140}
                    height={44}
                    className="h-[38px] w-auto object-contain"
                  />
                </Link>

                {/* Bright Yellow Close Button Square anchored at top right */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-0 right-0 w-[44px] h-[44px] bg-[#FED403] hover:bg-white text-dark flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 stroke-[3] text-black" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col px-6 py-2">
                {NAV_LINKS.map(({ label, href }) => {
                  const id = href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-4 text-[17px] font-bold border-b border-gray-700/50 transition-colors duration-200 ${
                        isActive ? "text-[#FED403]" : "text-white hover:text-[#FED403]"
                      }`}
                      style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>

              {/* CTA Quote Button inside Mobile Drawer */}
              <div className="mt-auto p-6 pt-4">
                <Button
                  href="#contact"
                  text="Get Free Quote"
                  onClick={() => setMobileOpen(false)}
                  className="w-full justify-between"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---- DESKTOP INFO SIDEBAR (lg+) ---- */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop — slides in from right (same direction as sidebar), exits right on close */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-[90] hidden lg:block bg-black/60"
            />

            {/* Info Sidebar Panel — exact WordPress demo match */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-card-dark z-[100] shadow-2xl hidden lg:flex flex-col overflow-hidden"
            >
              {/* Yellow close button — top-LEFT corner, overlapping panel edge, above scroll */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-0 left-0 w-[44px] h-[44px] bg-[#FED403] hover:bg-white flex items-center justify-center transition-colors duration-200 cursor-pointer z-20"
                aria-label="Close sidebar"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Scrollable body — 40px padding, top padding accounts for close button height */}
              <div className="flex flex-col gap-8 px-[40px] pt-[70px] pb-[40px] overflow-y-auto h-full">

                {/* Logo */}
                <Link href="/" onClick={() => setSidebarOpen(false)} className="flex items-center">
                  <Image src={logo} alt="Brickz Logo" width={140} height={44} className="h-[38px] w-auto object-contain" />
                </Link>

                {/* Description */}
                <p className="text-gray-300 text-[15px] leading-[1.7]" style={{ fontFamily: '"Golos Text", sans-serif' }}>
                  We love to bring to life as a developer and I aim the today do this using what ever front tools necessary.
                </p>

                {/* 3×2 Photo Gallery Grid — 100px × 100px images, 10px gap */}
                <div className="grid grid-cols-3 gap-[10px]">
                  {SIDEBAR_GALLERY.map((src, i) => (
                    <div key={i} className="relative w-[100px] h-[100px] overflow-hidden">
                      <Image
                        src={src}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>

                {/* Contact Info — plain text lines, no icons */}
                <div className="flex flex-col gap-[10px]">
                  <a href="tel:+990123456789" className="text-gray-300 text-[15px] hover:text-[#FED403] transition-colors" style={{ fontFamily: '"Golos Text", sans-serif' }}>
                    Call us: +990 123 456 789
                  </a>
                  <a href="mailto:construction@gmail.com" className="text-gray-300 text-[15px] hover:text-[#FED403] transition-colors" style={{ fontFamily: '"Golos Text", sans-serif' }}>
                    Email: construction@gmail.com
                  </a>
                  <span className="text-gray-300 text-[15px]" style={{ fontFamily: '"Golos Text", sans-serif' }}>
                    Hours: Mon-Fri: 8.00am - 18.00pm
                  </span>
                </div>

                {/* Social Icons — dark square boxes with thin border, 12px gap */}
                <div className="flex items-center gap-[12px]">
                  {[
                    { icon: FaFacebookF, label: "Facebook" },
                    { icon: FaInstagram, label: "Instagram" },
                    { icon: FaPinterestP, label: "Pinterest" },
                    { icon: FaXTwitter, label: "X" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-[38px] h-[38px] bg-[#2a2a2b] border border-white/15 flex items-center justify-center text-white hover:bg-[#FED403] hover:border-[#FED403] hover:text-black transition-all duration-200"
                    >
                      <Icon className="w-[14px] h-[14px]" />
                    </a>
                  ))}
                </div>

                {/* Get In Touch Button */}
                <div className="w-full">
                  <Button
                    href="#contact"
                    text="Get In Touch"
                    onClick={() => setSidebarOpen(false)}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
