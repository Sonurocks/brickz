"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth, scrollWidth, scrollLeft } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // Calculate width of one card + gap (roughly) based on viewport
        const cardWidth = window.innerWidth >= 1280 
          ? clientWidth / 3 
          : window.innerWidth >= 768 
            ? clientWidth / 2 
            : clientWidth;

        // If we've reached the end, rewind to start, otherwise scroll by 1 card
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow w-4 h-4" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow w-4 h-4" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
    <section className="pt-6 pb-28 bg-card-dark">
      <div className="w-full mx-auto px-6 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-white mb-3 block">
            OUR CLIENTS TESTIMONIALS
          </span>
          <h2
            className="text-3xl md:text-[46px] font-black text-white leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "Barlow, Inter, sans-serif" }}
          >
            Testimonials That Inspire Trust
          </h2>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.3333%-16px)] shrink-0 snap-start"
            >
              <div className="bg-card-dark border border-white/10 rounded-[6px] pt-[35px] pb-[35px] pl-[35px] pr-[40px] relative overflow-hidden group transition-colors flex flex-col h-full">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="text-white font-bold text-[20px]" style={{ fontFamily: "Barlow, Inter, sans-serif" }}>
                      {testimonial.name}
                    </h3>
                    <p className="text-white font-medium text-[14px] mt-1">{testimonial.role}</p>
                  </div>
                  {/* Large Quote Icon */}
                  <BiSolidQuoteAltRight className="w-14 h-14 text-quote-gold absolute top-0 right-0" />
                </div>

                <div className="flex items-center gap-4 mb-8 mt-4">
                  <span
                    className="text-white text-[56px] font-black leading-none"
                    style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                  >
                    {testimonial.rating.toFixed(1)}
                  </span>
                  <div className="flex gap-1 mt-2 text-[16px]">{renderStars(testimonial.rating)}</div>
                </div>

                <p className="text-white/90 text-[16px] leading-[26px] italic" style={{ fontFamily: '"Golos Text", sans-serif' }}>
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
