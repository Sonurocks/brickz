"use client";
// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronsRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedButton from "./common/AnimatedButton";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.li initial="rest" whileHover="hover" animate="rest" className="flex">
      <Link href={href} className="inline-flex items-center text-gray-text hover:text-yellow transition-colors">
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
            className="absolute -left-[20px] flex items-center text-yellow"
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
      <footer className="bg-card-dark w-full text-white" style={{ fontFamily: '"Golos Text", sans-serif' }}>
        <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row relative px-4 lg:px-[30px] xl:px-0">
          {/* Left Column */}
          <div className="relative w-full lg:w-[28%] xl:w-[395px] lg:flex-shrink-0 pt-12 lg:pt-[100px] pb-12 lg:pb-[230px] ml-0 lg:ml-[10px] border-b lg:border-b-0 lg:border-r border-white/10 pr-4 lg:pr-[30px] xl:pr-0">
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

            <p className="text-[16px] leading-[26px] mb-10 text-gray-400 font-normal">
              Brickz specializes in helping startups
              <br />
              and enterprises craft strate solutions
              <br />
              donec eu magna quis fells
            </p>

            <div className="flex flex-col gap-5 text-[16px] leading-[26px] text-gray-400">
              <p>Call us: +990 123 456 789</p>
              <p>Email: contruction@gmail.com</p>
              <p>Hours: Mon-Fri: 8.00am - 18.00pm</p>
            </div>

            <div className="flex items-center gap-4 mt-12">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/5 bg-card-dark text-gray-text hover:bg-yellow hover:text-dark hover:border-yellow"
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
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px] text-gray-text">
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
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px] text-gray-text">
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
                <ul className="flex flex-col gap-3 lg:gap-6 text-[16px] text-gray-text">
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

            {/* Newsletter Box — responsive (stacked on <xl, single row on xl+) */}
            <div className="mt-[35px] xl:mt-16 w-full xl:w-[774px] min-h-[82px] bg-white/5 rounded-[6px] p-6 sm:p-7 xl:pt-[16px] xl:pb-[16px] xl:pl-[25px] xl:pr-[16px] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 xl:gap-[20px] relative z-[1]">
              <h3
                className="text-white text-[22px] sm:text-[24px] font-bold leading-[34px] tracking-tight whitespace-nowrap"
                style={{ fontFamily: 'var(--font-space-grotesk), "Cal Sans", "Barlow", sans-serif' }}
              >
                Subscribe Newsletter
              </h3>

              {/* Form / Container — stacked on <xl, single pill on xl+ */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget as HTMLFormElement;
                  const input = target.querySelector('input[type="email"]') as HTMLInputElement;
                  if (input && input.value) {
                    const prev = input.placeholder;
                    input.value = "";
                    input.placeholder = "✓ Subscribed successfully!";
                    setTimeout(() => {
                      input.placeholder = prev;
                    }, 3000);
                  }
                }}
                className="w-full xl:w-[450px] flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-[12px] xl:bg-card-dark xl:rounded-[6px] xl:p-[6px] xl:pl-[22px] xl:justify-between"
              >
                <div className="w-full bg-card-dark xl:bg-transparent rounded-[6px] px-5 py-3.5 xl:p-0 flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Your email address.."
                    className="w-full bg-transparent text-white placeholder-gray-mid text-[15px] outline-none border-none"
                    style={{ fontFamily: '"Golos Text", sans-serif' }}
                  />
                </div>
                <AnimatedButton
                  type="submit"
                  text="Let's Join"
                  variant="yellow"
                  className="rounded-[6px] px-[22px] py-[12px] xl:px-[20px] xl:py-[10px] text-[15px] font-semibold flex-shrink-0 whitespace-nowrap"
                />
              </form>
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
        <div className="border-t border-white/10 relative">
          <div className="w-full max-w-[1300px] mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <Link href="#" className="text-[16px] text-gray-text hover:text-yellow transition-colors">
                Terms &amp; Agreements
              </Link>
              <Link href="#" className="text-[16px] text-gray-text hover:text-yellow transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-[16px] text-gray-text">© Copyright {new Date().getFullYear()} RSTheme. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
