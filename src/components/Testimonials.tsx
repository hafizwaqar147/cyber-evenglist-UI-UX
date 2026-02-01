import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <section className="w-full bg-white py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-[28px] font-bold text-[#111827] mb-[40px] text-center">
                    Client Testimonials
                </h2>

                {/* Testimonial Card Container */}
                <div className="flex justify-center">
                    <div className="max-w-[720px] w-full bg-white border border-[#E5E7EB] rounded-[16px] p-[32px] hover:shadow-lg transition-shadow duration-300">
                        {/* Card Layout - Row */}
                        <div className="flex gap-[24px] items-start">
                            {/* Client Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-[64px] h-[64px] rounded-full overflow-hidden relative">
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
                                {/* Client Info */}
                                <div>
                                    <h3 className="text-[16px] font-semibold text-[#111827]">
                                        Mark J.
                                    </h3>
                                    <p className="text-[14px] text-[#6B7280] mt-[4px]">
                                        Cyber Logics
                                    </p>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-[16px] text-[#374151] leading-[1.6] mt-[12px]">
                                    "Working with Cyber Evangelists has been transformative for our organization.
                                    Their expertise in cybersecurity and AI solutions helped us modernize our
                                    infrastructure while maintaining the highest security standards. The team's
                                    dedication and professionalism exceeded our expectations."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
