"use client";

import React from 'react';

const ContactFooter = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-t-[40px] md:rounded-t-[80px] pt-16 md:pt-20 pb-12 px-4 overflow-hidden mt-[-40px] md:mt-[-80px] z-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Column: Brand & Info */}
                <div className="text-white">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-[#7C3AED] rounded-sm rotate-45" />
                        </div>
                        <span className="text-[20px] font-semibold tracking-tight">Cyber Security Research</span>
                    </div>

                    <p className="text-[#E9D5FF] text-[14px] md:text-[15px] leading-relaxed max-w-[420px] mb-8">
                        Empowering organizations with cutting-edge cybersecurity research, strategic insights, and robust defense solutions to navigate the evolving digital landscape with confidence.
                    </p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 mt-0.5 text-[#E9D5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-[#E9D5FF] text-[14px]">123 Cyber Way, Innovation District, Tech City 10101</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#E9D5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[#E9D5FF] text-[14px]">contact@cyberresearch.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#E9D5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-[#E9D5FF] text-[14px]">+1 (555) 123-4567</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <button key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-sm group-hover:scale-110 transition-transform" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-xl max-w-[520px] w-full mx-auto lg:ml-auto">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full h-[44px] px-4 rounded-[8px] border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-[14px]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full h-[44px] px-4 rounded-[8px] border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-[14px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[13px] font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full h-[44px] px-4 rounded-[8px] border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-[14px]"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[13px] font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="How can we help you?"
                                rows={4}
                                className="w-full px-4 py-3 rounded-[8px] border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-[14px] resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-3 rounded-[10px] transition-all transform active:scale-[0.98] shadow-md mt-6"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-[#E9D5FF] text-[12px]">
                <p>© 2024 Cyber Security Research. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
