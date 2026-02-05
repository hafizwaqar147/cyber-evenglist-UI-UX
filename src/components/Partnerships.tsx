"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Partner {
    id: number;
    name: string;
    logo: string;
}

const Partnerships = () => {
    const partners: Partner[] = [
        {
            id: 1,
            name: 'Partner 1',
            logo: '/partner-1.png',
        },
        {
            id: 2,
            name: 'Partner 2',
            logo: 'svg2',
        },
        {
            id: 3,
            name: 'Partner 3',
            logo: 'svg3',
        },
        {
            id: 4,
            name: 'Partner 4',
            logo: 'svg4',
        },
        {
            id: 5,
            name: 'Partner 5',
            logo: 'svg5',
        },
    ];

    const renderLogo = (partner: Partner) => {
        if (partner.logo.startsWith('/')) {
            return (
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="object-contain"
                />
            );
        }

        // SVG logos for partners 2-5
        const svgLogos: { [key: string]: React.ReactElement } = {
            svg2: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="#3B82F6" strokeWidth="3" />
                    <rect x="14" y="14" width="20" height="20" fill="#3B82F6" rx="4" />
                </svg>
            ),
            svg3: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8L38 40H10L24 8Z" fill="#10B981" />
                    <circle cx="24" cy="32" r="4" fill="white" />
                </svg>
            ),
            svg4: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="8" fill="#F97316" />
                    <path d="M16 24L24 16L32 24L24 32L16 24Z" fill="white" />
                </svg>
            ),
            svg5: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L44 24L24 44L4 24L24 4Z" fill="#8B5CF6" />
                    <circle cx="24" cy="24" r="8" fill="white" />
                </svg>
            ),
        };

        return svgLogos[partner.logo] || null;
    };

    return (
        <section className="w-full bg-[#F9F5FF] py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[20px] font-bold text-[#7C3AED] mb-[48px] text-center uppercase tracking-[0.2em]"
                >
                    Trusted by Industry Leaders
                </motion.h2>

                {/* Logos Row */}
                <div className="flex justify-center items-center gap-[40px] md:gap-[80px] flex-wrap">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-white rounded-2xl p-[20px] flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-purple-50"
                        >
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 italic">
                                {renderLogo(partner)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnerships;
