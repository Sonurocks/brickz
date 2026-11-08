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
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center justify-between rounded-md px-6 py-4 cursor-pointer overflow-hidden bg-navbar hover:bg-yellow text-white hover:text-dark transition-all duration-300 ${className}`}
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
      </div>
    </Link>
  );
}
