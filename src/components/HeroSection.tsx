"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Smart AI Product",
        subtitle: "Discover intelligent tools for AI-powered cybersecurity protection",
        description: "Explore cutting-edge products built to secure your systems. Stay ahead with next-gen, automated defense solutions.",
        buttonText: "View Products",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
        highlight: "Smart"
    },
    {
        id: 2,
        title: "Threat Detection",
        subtitle: "Real-time monitoring and proactive threat neutralization",
        description: "Our AI-driven engine identifies vulnerabilities before they are exploited. Experience seamless security monitoring across all endpoints.",
        buttonText: "Explore More",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        highlight: "Threat"
    },
    {
        id: 3,
        title: "Vulnerability Scan",
        subtitle: "Comprehensive analysis to find your security gaps",
        description: "Strengthen your infrastructure's weak points with deep structural audits. Get actionable insights and automated patching recommendations.",
        buttonText: "Start Audit",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        highlight: "Vulnerability"
    },
    {
        id: 4,
        title: "Security Advisory",
        subtitle: "Expert guidance for navigating digital complexity",
        description: "Tailored strategies for modern enterprise protection. Our experts help you build a resilient security culture from the ground up.",
        buttonText: "Consult Now",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        highlight: "Security"
    }
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="relative w-full bg-white overflow-hidden h-[calc(100vh-80px)] min-h-[600px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Right Side Background Image with Lower Global Opacity */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div
                            className="absolute right-0 top-0 w-full lg:w-[85%] h-full bg-cover bg-center bg-no-repeat transition-all duration-700 opacity-30"
                            style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
                        />
                        {/* Gradient Overlay: Left side reveal (45%) and Bottom reveal (5%) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent via-[30%] to-[45%] z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent via-[5%] z-[11]" />
                        <div className={`absolute inset-0 bg-purple-600/5 mix-blend-multiply transition-colors duration-1000 ${currentSlide % 2 === 0 ? 'opacity-0' : 'opacity-100'} z-[12]`} />
                    </div>

                    <div className="relative max-w-[1280px] mx-auto px-6 w-full h-full z-20 flex flex-col lg:flex-row items-center py-20 lg:py-32">
                        {/* Left Column - Content */}
                        <div className="flex-1 max-w-[640px]">
                            {/* Main Heading */}
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#111827]"
                            >
                                <span className="text-[#7C3AED]">{slides[currentSlide].highlight}</span> {slides[currentSlide].title.replace(slides[currentSlide].highlight, "").trim()}
                            </motion.h1>

                            {/* Subheading */}
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-[20px] md:text-[24px] lg:text-[32px] mt-6 lg:mt-8 leading-[1.3]"
                            >
                                <span className="font-bold text-[#111827]">{slides[currentSlide].subtitle.split(' ').slice(0, 3).join(' ')} </span>
                                <span className="font-bold text-[#7C3AED]">
                                    {slides[currentSlide].subtitle.split(' ').slice(3).join(' ')}
                                </span>
                            </motion.h2>

                            {/* Supporting Paragraph */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-[14px] md:text-[16px] lg:text-[18px] text-[#4B5563] mt-6 lg:mt-8 max-w-[540px] leading-relaxed font-normal"
                            >
                                <p>{slides[currentSlide].description}</p>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 lg:mt-12 px-10 py-4 bg-[#7C3AED] text-white text-[16px] font-bold rounded-[12px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-xl shadow-purple-200"
                            >
                                {slides[currentSlide].buttonText}
                            </motion.button>

                            {/* Slider Indicators (Pagination) */}
                            <div className="flex items-center gap-3 mt-12 lg:mt-20">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentSlide ? 1 : -1);
                                            setCurrentSlide(index);
                                        }}
                                        className={`h-[4px] transition-all duration-300 rounded-full ${index === currentSlide ? 'w-[40px] bg-[#7C3AED]' : 'w-[12px] bg-[#E5E7EB] hover:bg-[#D1D5DB]'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Area - Implicitly handled by the background image */}
                        <div className="flex-1 hidden lg:block" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <div className="absolute bottom-10 right-10 z-30 hidden lg:flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-3 bg-white border border-gray-100 rounded-full text-[#111827] hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 bg-white border border-gray-100 rounded-full text-[#111827] hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section >
    );
};

export default HeroSection;
