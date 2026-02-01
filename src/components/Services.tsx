import React from 'react';

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
        <section className="w-full bg-gradient-to-br from-[#9333EA] via-[#7C3AED] to-[#6D28D9] py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-[32px] font-bold text-white mb-[48px] text-center">
                    What would you like to get done?
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-[16px] p-[32px] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Card Title */}
                            <h3 className="text-[18px] font-semibold text-[#111827]">
                                {service.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-[15px] text-[#6B7280] mt-[12px] leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            {/* Card CTA Button */}
                            <button className="mt-[24px] px-[20px] py-[12px] bg-[#7C3AED] text-white text-[14px] font-medium rounded-[10px] hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg self-start">
                                {service.ctaText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
