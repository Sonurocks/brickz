"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "yellow" | "dark" | "outline" | "white";
  icon?: React.ElementType;
  showIcon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function AnimatedButton({
  text,
  href,
  onClick,
  variant = "yellow",
  icon: Icon = ArrowUpRight,
  showIcon = true,
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
}: AnimatedButtonProps) {
  const variantStyles = {
    yellow: "bg-yellow text-dark hover:bg-yellow",
    dark: "bg-dark-2 text-white hover:bg-dark",
    outline: "border border-white/20 text-white hover:bg-white/10",
    white: "bg-white text-dark hover:bg-gray-100",
  };

  const content = (
    <>
      {/* Upward Sliding Text */}
      <div className="relative overflow-hidden flex flex-col h-[1.6em] leading-[1.35em]">
        <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full will-change-transform">
          {text}
        </span>
        <span
          className="absolute top-0 left-0 inline-block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 will-change-transform"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>

      {/* Directional Sliding Icon (diagonally top-right) */}
      {showIcon && (
        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full will-change-transform" />
          <Icon
            className="w-4 h-4 absolute transition-transform duration-300 ease-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 will-change-transform"
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-[15px] cursor-pointer transition-all duration-300 select-none overflow-hidden ${variantStyles[variant]} ${
    disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
