import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ text, href = "#", className = "", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center text-[15px] font-medium rounded-sm group bg-yellow text-dark overflow-hidden cursor-pointer ${className}`}
    >
      {/* INVISIBLE SPACER TO FORCE EXACT ORIGINAL DIMENSIONS */}
      <div className="opacity-0 pointer-events-none flex items-center gap-4 py-[9px]" style={{ paddingLeft: "24px", paddingRight: "8px" }}>
        <span>{text}</span>
        <div className="w-9 h-9" />
      </div>

      {/* VISIBLE TEXT */}
      <span className="absolute left-[24px] group-hover:left-[60px] transition-all duration-300 ease-out flex items-center h-full" style={{ WebkitFontSmoothing: "antialiased", transform: "translateZ(0)" }}>
        {text}
      </span>
      
      {/* VISIBLE ICON */}
      <span
        className="absolute right-[8px] group-hover:right-[calc(100%-44px)] transition-all duration-300 ease-out w-9 h-9 flex shrink-0 items-center justify-center bg-navbar"
        style={{ borderRadius: 6, top: "50%", marginTop: "-18px" }}
      >
        <BsArrowUpRight
          className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}
