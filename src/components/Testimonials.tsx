"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="w-full bg-white py-[100px] lg:py-[140px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-[64px]"
                >
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] tracking-tight">
                        Client Testimonials
                    </h2>
                    <div className="w-20 h-1.5 bg-[#7C3AED] rounded-full mt-2 mx-auto" />
                </motion.div>

                {/* Testimonial Card Container */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-[800px] w-full bg-white border border-[#F3E8FF] rounded-[32px] p-[40px] md:p-[60px] shadow-2xl shadow-purple-100 relative overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3E8FF] rounded-bl-full -mr-16 -mt-16 opacity-50" />

                        {/* Quote Icon */}
                        <div className="absolute top-10 left-10 text-[#F3E8FF] hidden md:block">
                            <Quote size={80} fill="currentColor" />
                        </div>

                        {/* Card Layout */}
                        <div className="relative z-10 flex flex-col md:flex-row gap-[32px] items-center md:items-start text-center md:text-left">
                            {/* Client Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                                    <Image
                                        src="/client-avatar.png"
                                        alt="Mark J."
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Testimonial Text */}
                                <p className="text-[18px] md:text-[22px] text-[#374151] italic leading-[1.6] mb-8 font-medium">
                                    "Working with Cyber Evangelists has been transformative for our organization.
                                    Their expertise in cybersecurity and AI solutions helped us modernize our
                                    infrastructure while maintaining the highest security standards. The team's
                                    dedication and professionalism exceeded our expectations."
                                </p>

                                {/* Client Info */}
                                <div className="border-t border-gray-100 pt-6">
                                    <h3 className="text-[20px] font-bold text-[#111827]">
                                        Mark J.
                                    </h3>
                                    <p className="text-[16px] text-[#7C3AED] font-semibold">
                                        Cyber Logics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
