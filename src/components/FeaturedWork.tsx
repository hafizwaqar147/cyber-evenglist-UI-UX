import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    image: string;
}

const FeaturedWork = () => {
    const projects: ProjectCard[] = [
        {
            id: 1,
            title: 'Surfaceer',
            description: 'Advanced dashboard analytics platform with real-time monitoring',
            image: '/project-1.png',
        },
        {
            id: 2,
            title: 'Aurora Mobile',
            description: 'Modern mobile application with seamless user experience',
            image: '/project-2.png',
        },
        {
            id: 3,
            title: 'Web Portal',
            description: 'Clean and intuitive web interface for enterprise solutions',
            image: '/project-3.png',
        },
    ];

    return (
        <section className="w-full bg-white py-[80px]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-[40px]">
                    {/* Section Title */}
                    <h2 className="text-[28px] font-bold text-[#111827]">
                        Featured Work
                    </h2>

                    {/* View All Link */}
                    <Link
                        href="#"
                        className="text-[14px] font-medium text-[#7C3AED] hover:text-[#6D28D9] transition-colors duration-200 cursor-pointer flex items-center gap-1"
                    >
                        All Work
                        <span className="text-[16px]">→</span>
                    </Link>
                </div>

                {/* Cards Layout */}
                <div className="flex gap-[24px] overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="min-w-[280px] w-[280px] bg-[#F3E8FF] rounded-[14px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="w-full h-[160px] relative bg-[#E9D5FF]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-[16px]">
                                {/* Card Title */}
                                <h3 className="text-[16px] font-semibold text-[#111827]">
                                    {project.title}
                                </h3>

                                {/* Card Description */}
                                <p className="text-[14px] text-[#6B7280] mt-[8px] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;

