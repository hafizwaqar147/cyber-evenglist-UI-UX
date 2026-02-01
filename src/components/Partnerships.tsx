import React from 'react';
import Image from 'next/image';

interface Partner {
    id: number;
    name: string;
    logo: string;
}

const Partnerships = () => {
    const partners: Partner[] = [
        {
            id: 1,
            name: 'Partner 1',
            logo: '/partner-1.png',
        },
        {
            id: 2,
            name: 'Partner 2',
            logo: 'svg2',
        },
        {
            id: 3,
            name: 'Partner 3',
            logo: 'svg3',
        },
        {
            id: 4,
            name: 'Partner 4',
            logo: 'svg4',
        },
        {
            id: 5,
            name: 'Partner 5',
            logo: 'svg5',
        },
    ];

    const renderLogo = (partner: Partner) => {
        if (partner.logo.startsWith('/')) {
            return (
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="object-contain"
                />
            );
        }

        // SVG logos for partners 2-5
        const svgLogos: { [key: string]: React.ReactElement } = {
            svg2: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="#3B82F6" strokeWidth="3" />
                    <rect x="14" y="14" width="20" height="20" fill="#3B82F6" rx="4" />
                </svg>
            ),
            svg3: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8L38 40H10L24 8Z" fill="#10B981" />
                    <circle cx="24" cy="32" r="4" fill="white" />
                </svg>
            ),
            svg4: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="8" fill="#F97316" />
                    <path d="M16 24L24 16L32 24L24 32L16 24Z" fill="white" />
                </svg>
            ),
            svg5: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L44 24L24 44L4 24L24 4Z" fill="#8B5CF6" />
                    <circle cx="24" cy="24" r="8" fill="white" />
                </svg>
            ),
        };

        return svgLogos[partner.logo] || null;
    };

    return (
        <section className="w-full bg-gradient-to-r from-[#9333EA] to-[#7C3AED] py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-[28px] font-bold text-white mb-[40px] text-center">
                    Our Partnerships
                </h2>

                {/* Logos Row */}
                <div className="flex justify-center items-center gap-[32px] flex-wrap">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="w-[80px] h-[80px] bg-white rounded-full p-[16px] flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                        >
                            {renderLogo(partner)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnerships;
