import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxArrowTopRight } from 'react-icons/rx';
import Link from 'next/link';

interface ExploreButtonProps {
  href?: string;
  text?: string;
  className?: string;
}

export default function ExploreButton({ href = "#", text = "Explore More", className = "" }: ExploreButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? '#FED403' : '#2b2b2b',
          color: isHovered ? '#1A1A1A' : '#ffffff',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`flex items-center justify-between rounded-md px-6 py-4 cursor-pointer overflow-hidden ${className}`}
      >
        <span className="text-[15px] font-bold relative z-10">{text}</span>
        
        <motion.div
          animate={{
            x: isHovered ? 3 : 0,
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          className="relative z-10"
        >
          <RxArrowTopRight className="w-5 h-5" strokeWidth={0.5} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
