import React from 'react';
import Image from 'next/image';

const SecuringInformation = () => {
    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Security Monitoring' },
        { number: '150+', label: 'Security Experts' },
        { number: '10+', label: 'Years Experience' },
    ];

    return (
        <section className="w-full bg-gradient-to-r from-[#9333EA] to-[#7C3AED] py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Main Content - Two Columns */}
                <div className="flex items-center gap-[48px] mb-[60px]">
                    {/* Left Column - Content */}
                    <div className="flex-1">
                        {/* Heading */}
                        <h2 className="text-[36px] font-bold text-white leading-[1.2]">
                            The ART of Securing Information
                        </h2>

                        {/* Supporting Text */}
                        <p className="text-[16px] font-normal text-[#E9D5FF] mt-[16px] max-w-[480px] leading-relaxed">
                            We combine advanced technology, rigorous testing, and expert knowledge
                            to protect your most valuable digital assets. Our comprehensive approach
                            ensures your information remains secure in an ever-evolving threat landscape.
                        </p>

                        {/* CTA Button */}
                        <button className="mt-[24px] px-[24px] py-[12px] bg-[#6D28D9] text-white text-[16px] font-medium rounded-[10px] hover:bg-[#5B21B6] transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl">
                            Let's work together
                        </button>
                    </div>

                    {/* Right Column - Illustration */}
                    <div className="flex-1 hidden lg:flex justify-center items-center">
                        <div className="w-[420px] h-auto">
                            <Image
                                src="/cybersecurity-illustration.png"
                                alt="Cybersecurity illustration"
                                width={420}
                                height={420}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Statistics Row */}
                <div className="flex justify-between items-center gap-8 flex-wrap">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-[24px] font-bold text-white">
                                {stat.number}
                            </div>
                            <div className="text-[14px] text-[#E9D5FF] mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecuringInformation;
