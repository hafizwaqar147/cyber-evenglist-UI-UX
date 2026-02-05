"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Understanding the Modern Cyber Threat Landscape in 2024",
        category: "RESEARCH REPORT",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "How Al is Revolutionizing Cyber Defense Strategies for Enterprises",
        category: "INDUSTRY INSIGHTS",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    }
];

const BlogCard = ({ post, index }: { post: BlogPost, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-[360px] md:h-[440px] rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/100" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="inline-block px-3 py-1 bg-[#7C3AED] text-white text-[12px] font-bold mb-4 rounded-full tracking-wider uppercase">
                    {post.category}
                </span>
                <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-tight max-w-[90%] transition-colors duration-300 group-hover:text-purple-200">
                    {post.title}
                </h3>
                <div className="mt-6 flex items-center text-white font-bold text-[14px] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Read Report <span className="ml-2">→</span>
                </div>
            </div>
        </motion.div>
    );
};

const InsightsSection = () => {
    return (
        <section className="bg-white py-20 md:py-32 px-6">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-[32px] md:text-[48px] font-bold text-[#111827] leading-[1.1] tracking-tight max-w-[800px]">
                        Insights & Knowledge From The <span className="text-[#7C3AED]">Cyber Security</span> Research
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {BLOG_POSTS.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
