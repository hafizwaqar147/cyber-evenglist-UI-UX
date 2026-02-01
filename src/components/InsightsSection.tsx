"use client";

import React from 'react';

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

const BlogCard = ({ post }: { post: BlogPost }) => {
    return (
        <div className="relative h-[320px] md:h-[360px] rounded-[16px] overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/100" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <span className="block text-[12px] md:text-[14px] font-medium text-[#E5E7EB] mb-2 tracking-wider uppercase">
                    {post.category}
                </span>
                <h3 className="text-[18px] md:text-[22px] font-semibold text-white leading-tight max-w-[90%] transition-colors duration-300 group-hover:text-gray-100">
                    {post.title}
                </h3>
            </div>
        </div>
    );
};

const InsightsSection = () => {
    return (
        <section className="bg-white py-16 md:py-20 px-4">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-[24px] md:text-[28px] font-bold text-[#111827] mb-8 md:mb-10 leading-[1.3]">
                    Insights & Knowledge From The Cyber Security Research
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BLOG_POSTS.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
