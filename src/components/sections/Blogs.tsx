"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser, FiCalendar } from "react-icons/fi";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How Sustainable Design Reduces Construction Costs",
    author: "brickz",
    date: "December 17, 2025",
    image: "/assets/blogs/post1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Green Construction Building a Sustainable Future",
    author: "brickz",
    date: "December 17, 2025",
    image: "/assets/blogs/post2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Road & Highway Construction Challenges and Solutions",
    author: "brickz",
    date: "December 17, 2025",
    image: "/assets/blogs/post3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Innovations in Smart Construction Equipment",
    author: "brickz",
    date: "December 18, 2025",
    image: "/assets/blogs/post1.png",
    link: "#",
  },
];

export default function Blogs() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth, scrollWidth, scrollLeft } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // Calculate width of one card + gap (showing 2 cards on md+)
        const cardWidth = window.innerWidth >= 768 ? clientWidth / 2 : clientWidth;

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
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-full mx-auto px-6 xl:px-24">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-3 md:mb-1 lg:mb-3 block">
            READ OUR BLOG & NEWS
          </span>
          <h2
            className="text-3xl md:text-[46px] font-black text-dark leading-tight tracking-[-0.02em] mb-4 md:mb-2 lg:mb-4"
            style={{ fontFamily: "Barlow, Inter, sans-serif" }}
          >
            Featured News & Insights
          </h2>
          <p className="text-gray-500 text-[16px]">
            Read and update the latest news from us. donec eu magna quis felis.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-7 pb-8 pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-14px)] shrink-0 snap-start bg-white border border-gray-200 rounded-lg overflow-hidden group duration-300"
            >
              {/* Image Section */}
              <div className="w-full h-[320px] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Meta */}
                <div className="flex items-center gap-6 text-gray-500 text-[14px] mb-4">
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[22px] md:text-[19px] lg:text-[22px] font-bold text-dark leading-[1.4] mb-8"
                  style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                >
                  {post.title}
                </h3>

                {/* Animated Divider */}
                <div className="w-full h-[1px] bg-gray-200 mb-5 relative">
                  <div className="absolute left-0 top-0 h-[1px] bg-dark w-12 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-block text-[14px] font-bold text-dark underline underline-offset-4 decoration-2 decoration-dark transition-all"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
