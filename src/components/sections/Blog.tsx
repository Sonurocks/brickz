"use client";
// src/components/sections/Blog.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="w-full mx-auto px-6 xl:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <SectionTag label="Latest Blog" />
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "Barlow, Inter, sans-serif" }}
            >
              News & Updates
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-gray-900 border-b-2 border-yellow-400 pb-1 hover:text-yellow-500 transition-colors"
          >
            View All Posts <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] mb-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1"
                  style={{ background: "#FED403", color: "#1A1A1A" }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 bg-gray-100">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-black text-gray-900 text-lg leading-snug mb-4 group-hover:text-yellow-500 transition-colors"
                  style={{ fontFamily: "Barlow, Inter, sans-serif" }}
                >
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 font-bold text-sm text-gray-900 group-hover:text-yellow-500 transition-colors">
                  Read More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
