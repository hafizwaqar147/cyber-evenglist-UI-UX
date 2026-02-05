"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCard {
    id: number;
    title: string;
    description: string;
    ctaText: string;
}

const Services = () => {
    const services: ServiceCard[] = [
        {
            id: 1,
            title: 'Artificial Intelligence',
            description: 'Harness the power of AI to automate processes, gain insights, and drive innovation across your organization.',
            ctaText: 'Get Started',
        },
        {
            id: 2,
            title: 'AI Agents',
            description: 'Deploy intelligent agents that work autonomously to solve complex problems and enhance productivity.',
            ctaText: 'Get Started',
        },
        {
            id: 3,
            title: 'Application Modernization',
            description: 'Transform legacy systems into modern, scalable applications that meet today\'s business demands.',
            ctaText: 'Get Started',
        },
    ];

    return (
        <section className="w-full bg-gradient-to-br from-[#9333EA] via-[#7C3AED] to-[#6D28D9] py-[100px] lg:py-[140px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-[64px]"
                >
                    <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight">
                        What would you like to get done?
                    </h2>
                    <p className="text-purple-100 mt-4 text-[18px] max-w-[600px] mx-auto">
                        We provide cutting-edge solutions tailored to your specific business needs.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[24px] p-[40px] flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Card Decoration */}
                            <div className="w-12 h-1 bg-[#7C3AED] rounded-full mb-6" />

                            {/* Card Title */}
                            <h3 className="text-[22px] font-bold text-[#111827]">
                                {service.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-[16px] text-[#6B7280] mt-[16px] leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            {/* Card CTA Button */}
                            <button className="mt-[32px] px-[24px] py-[14px] bg-[#7C3AED] text-white text-[15px] font-bold rounded-[12px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-lg shadow-purple-100 self-start">
                                {service.ctaText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
