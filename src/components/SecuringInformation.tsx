"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SecuringInformation = () => {
    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Security Monitoring' },
        { number: '150+', label: 'Security Experts' },
        { number: '10+', label: 'Years Experience' },
    ];

    return (
        <section className="w-full bg-gradient-to-r from-[#9333EA] to-[#7C3AED] py-[100px] lg:py-[140px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Main Content - Two Columns */}
                <div className="flex flex-col lg:flex-row items-center gap-[60px] mb-[80px]">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Heading */}
                        <h2 className="text-[40px] md:text-[52px] font-bold text-white leading-[1.1] tracking-tight">
                            The ART of Securing Information
                        </h2>

                        {/* Supporting Text */}
                        <p className="text-[18px] font-normal text-[#E9D5FF] mt-[24px] max-w-[540px] mx-auto lg:mx-0 leading-relaxed">
                            We combine advanced technology, rigorous testing, and expert knowledge
                            to protect your most valuable digital assets. Our comprehensive approach
                            ensures your information remains secure.
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-[40px] px-[32px] py-[16px] bg-[#6D28D9] text-white text-[16px] font-bold rounded-[14px] hover:bg-[#5B21B6] transition-all duration-200 cursor-pointer shadow-2xl shadow-purple-900"
                        >
                            Let's work together
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 hidden lg:flex justify-center items-center"
                    >
                        <div className="w-[500px] h-auto relative">
                            <Image
                                src="/cybersecurity-illustration.png"
                                alt="Cybersecurity illustration"
                                width={500}
                                height={500}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Statistics Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <div className="text-[32px] font-bold text-white">
                                {stat.number}
                            </div>
                            <div className="text-[14px] font-medium text-purple-100 mt-2 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecuringInformation;
