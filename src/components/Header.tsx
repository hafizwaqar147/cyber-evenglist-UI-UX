"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Chevron Down Icon
const ChevronDown = () => (
    <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 inline-block"
    >
        <path
            d="M1 1L5 5L9 1"
            stroke="#111827"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', href: '#', hasDropdown: false },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Industry', href: '#', hasDropdown: true },
        { name: 'Our Products', href: '#', hasDropdown: true },
        { name: 'Our Work', href: '#', hasDropdown: false },
        { name: 'Career', href: '#', hasDropdown: true },
    ];

    return (
        <header className="w-full h-[80px] bg-white border-b border-gray-100 flex items-center sticky top-0 z-50">
            <div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between">
                {/* Left Side (Logo) */}
                <Link href="/" className="flex items-center group shrink-0">
                    <div className="relative h-[40px] w-[180px]">
                        <Image
                            src="/Main logo Black.png"
                            alt="Cyber Evangelists Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Center Navigation Menu - Desktop */}
                <nav className="hidden lg:flex items-center gap-[24px]">
                    {navLinks.map((link) => (
                        link.hasDropdown ? (
                            <button key={link.name} className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors flex items-center gap-[4px] cursor-pointer">
                                {link.name} <ChevronDown />
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-[12px]">
                    <div className="hidden md:flex items-center gap-[12px]">
                        <button className="px-[18px] py-[10px] bg-[#7C3AED] text-white text-[14px] font-semibold rounded-[8px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-sm active:scale-95">
                            Contact Us
                        </button>
                        <button className="hidden sm:inline-flex px-[18px] py-[10px] bg-white border border-[#7C3AED] text-[#7C3AED] text-[14px] font-semibold rounded-[8px] hover:bg-purple-50 transition-all duration-200 cursor-pointer active:scale-95">
                            Hire Cyber Security Tech
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[#4B5563] hover:text-[#7C3AED] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99] lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-white z-[100] shadow-2xl lg:hidden p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                                    <div className="relative h-[40px] w-[180px]">
                                        <Image
                                            src="/Main logo Black.png"
                                            alt="Cyber Evangelists Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>
                                <button
                                    className="p-2 text-[#4B5563] hover:text-[#7C3AED] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 mb-12">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-[18px] font-semibold text-[#111827] hover:text-[#7C3AED] transition-colors flex items-center justify-between"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown />}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto flex flex-col gap-4">
                                <button className="w-full py-4 bg-[#7C3AED] text-white text-[16px] font-bold rounded-[12px] shadow-lg shadow-purple-200">
                                    Contact Us
                                </button>
                                <button className="w-full py-4 bg-white border-2 border-[#7C3AED] text-[#7C3AED] text-[16px] font-bold rounded-[12px]">
                                    Hire Security Tech
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
