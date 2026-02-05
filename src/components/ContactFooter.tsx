"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const ContactFooter = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-t-[40px] md:rounded-t-[100px] pt-24 md:pt-32 pb-12 px-6 overflow-hidden mt-[-40px] md:mt-[-100px] z-10">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-64 -mt-64" />

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative z-20">

                {/* Left Column: Brand & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="relative h-[45px] w-[200px] brightness-0 invert">
                            <Image
                                src="/Main logo Black.png"
                                alt="Cyber Evangelists Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <p className="text-[#E9D5FF] text-[16px] md:text-[18px] leading-relaxed max-w-[480px] mb-12">
                        Empowering organizations with cutting-edge cybersecurity research, strategic insights, and robust defense solutions to navigate the evolving digital landscape with confidence.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <MapPin size={20} className="text-white" />
                            </div>
                            <span className="text-[#E9D5FF] text-[15px] pt-2">123 Cyber Way, Innovation District, Tech City 10101</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Mail size={20} className="text-white" />
                            </div>
                            <span className="text-[#E9D5FF] text-[15px]">contact@cyberresearch.com</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Phone size={20} className="text-white" />
                            </div>
                            <span className="text-[#E9D5FF] text-[15px]">+1 (555) 123-4567</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: <Twitter size={20} />, href: "#" },
                            { icon: <Linkedin size={20} />, href: "#" },
                            { icon: <Facebook size={20} />, href: "#" },
                            { icon: <Github size={20} />, href: "#" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
                                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors shadow-lg"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl max-w-[600px] w-full mx-auto lg:ml-auto"
                >
                    <h3 className="text-[28px] font-bold text-[#111827] mb-8">Send us a Message</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full h-14 px-6 rounded-2xl border-2 border-gray-100 focus:border-[#7C3AED] focus:ring-0 outline-none transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full h-14 px-6 rounded-2xl border-2 border-gray-100 focus:border-[#7C3AED] focus:ring-0 outline-none transition-all text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full h-14 px-6 rounded-2xl border-2 border-gray-100 focus:border-[#7C3AED] focus:ring-0 outline-none transition-all text-[15px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-gray-700">Message</label>
                            <textarea
                                placeholder="How can we help you?"
                                rows={5}
                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#7C3AED] focus:ring-0 outline-none transition-all text-[15px] resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-purple-100 mt-8 text-[16px]"
                        >
                            Get in Touch
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <div className="max-w-[1280px] mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#E9D5FF] text-[14px]">
                <p>© 2026 Cyber Security Research. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
