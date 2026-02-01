import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
            {/* Right Side Background Image with Gradient Fade */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute right-0 top-0 w-full lg:w-[85%] h-full bg-cover bg-center bg-no-repeat transition-all duration-700"
                    style={{ backgroundImage: 'url("/hero-robot-new.jpg")' }}
                />
                {/* Gradient for fading the image into the white background on mobile and desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/100 to-transparent lg:via-white/40 lg:w-full z-10" />
            </div>

            <div className="relative max-w-[1280px] mx-auto px-6 w-full z-20 flex flex-col lg:flex-row items-center py-20 lg:py-32">
                {/* Left Column - Content */}
                <div className="flex-1 max-w-[640px]">
                    {/* Main Heading */}
                    <h1 className="text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#111827]">
                        <span className="text-[#7C3AED]">Smart</span> AI Product
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-[20px] md:text-[24px] lg:text-[32px] mt-6 lg:mt-8 leading-[1.3]">
                        <span className="font-bold text-[#111827]">Discover intelligent tools for </span>
                        <span className="font-bold text-[#7C3AED]">
                            AI-powered cybersecurity protection
                        </span>
                    </h2>

                    {/* Supporting Paragraph */}
                    <div className="text-[14px] md:text-[16px] lg:text-[18px] text-[#4B5563] mt-6 lg:mt-8 max-w-[540px] leading-relaxed font-normal">
                        <p>Explore cutting-edge products built to secure your systems.</p>
                        <p>Stay ahead with next-gen, automated defense solutions.</p>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-8 lg:mt-12 px-8 py-3.5 bg-[#7C3AED] text-white text-[16px] font-medium rounded-[8px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-lg active:scale-95">
                        View Products
                    </button>

                    {/* Slider Indicators (Pagination) */}
                    <div className="flex items-center gap-3 mt-12 lg:mt-16">
                        <div className="h-[10px] w-[32px] bg-[#9CA3AF] rounded-full"></div>
                        <div className="h-[10px] w-[10px] bg-[#E5E7EB] rounded-full"></div>
                        <div className="h-[10px] w-[10px] bg-[#E5E7EB] rounded-full"></div>
                    </div>
                </div>

                {/* Right Area - Implicitly handled by the background image */}
                <div className="flex-1 hidden lg:block" />
            </div>
        </section>
    );
};

export default HeroSection;
