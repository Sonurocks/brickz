'use client';
// src/components/ui/Button.tsx — Reusable Button component
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type ButtonVariant = 'yellow' | 'dark' | 'outline-white';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'yellow',
  href,
  onClick,
  showArrow = true,
  className = '',
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const variantClass = `btn btn-${variant}`;
  const widthClass = fullWidth ? 'w-full justify-center' : '';

  const content = (
    <>
      {children}
      {showArrow && (
        <span className="w-7 h-7 flex items-center justify-center bg-black/20 rounded-sm">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={`${variantClass} ${widthClass} ${className}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${variantClass} ${widthClass} ${className}`}
    >
      {content}
    </motion.button>
  );
}
