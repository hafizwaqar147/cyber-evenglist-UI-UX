"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    image: string;
}

const FeaturedWork = () => {
    const projects: ProjectCard[] = [
        {
            id: 1,
            title: 'Surfaceer',
            description: 'Advanced dashboard analytics platform with real-time monitoring',
            image: '/project-1.png',
        },
        {
            id: 2,
            title: 'Aurora Mobile',
            description: 'Modern mobile application with seamless user experience',
            image: '/project-2.png',
        },
        {
            id: 3,
            title: 'Web Portal',
            description: 'Clean and intuitive web interface for enterprise solutions',
            image: '/project-3.png',
        },
    ];

    return (
        <section className="w-full bg-white py-[100px] lg:py-[140px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Header Row */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-between mb-[48px]"
                >
                    {/* Section Title */}
                    <div>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] tracking-tight">
                            Featured Work
                        </h2>
                        <div className="w-20 h-1.5 bg-[#7C3AED] rounded-full mt-2" />
                    </div>

                    {/* View All Link */}
                    <Link
                        href="#"
                        className="group text-[16px] font-bold text-[#7C3AED] hover:text-[#6D28D9] transition-all duration-200 cursor-pointer flex items-center gap-2"
                    >
                        View All Work
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-[20px]"
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group bg-[#F9F5FF] rounded-[24px] overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="w-full h-[240px] relative overflow-hidden bg-[#E9D5FF]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/10 transition-colors duration-300" />
                            </div>

                            {/* Card Content */}
                            <div className="p-[32px]">
                                {/* Card Title */}
                                <h3 className="text-[20px] font-bold text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                                    {project.title}
                                </h3>

                                {/* Card Description */}
                                <p className="text-[15px] text-[#6B7280] mt-[12px] leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex items-center text-[#7C3AED] font-bold text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Case Study <span className="ml-1">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;

