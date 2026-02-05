"use client";

import React from 'react';
import { motion } from 'framer-motion';

const DigitalTransformation = () => {
    return (
        <section className="w-full bg-white py-[100px] lg:py-[140px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[960px] mx-auto px-6 text-center"
            >
                {/* Heading with highlighted word */}
                <h2 className="text-[36px] md:text-[52px] font-bold leading-[1.2] text-[#111827] tracking-tight">
                    Leading <span className="text-[#7C3AED]">Digital</span> Transformation
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-[18px] md:text-[20px] font-normal text-[#6B7280] mt-[24px] max-w-[720px] mx-auto leading-relaxed">
                    We empower organizations to embrace innovation and drive meaningful change through
                    cutting-edge technology solutions. Our expertise in digital transformation helps
                    businesses modernize their operations and enhance customer experiences.
                </p>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-[40px] px-[32px] py-[14px] bg-[#7C3AED] text-white text-[16px] font-bold rounded-[12px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-xl shadow-purple-100"
                >
                    Read more
                </motion.button>
            </motion.div>
        </section>
    );
};

export default DigitalTransformation;
