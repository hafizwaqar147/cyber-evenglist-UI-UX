import React from 'react';

const DigitalTransformation = () => {
    return (
        <section className="w-full bg-white py-[80px]">
            <div className="max-w-[960px] mx-auto px-6 text-center">
                {/* Heading with highlighted word */}
                <h2 className="text-[32px] font-bold leading-[1.3] text-[#111827]">
                    Leading <span className="text-[#7C3AED]">Digital</span> Transformation
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-[16px] font-normal text-[#6B7280] mt-[16px] max-w-[720px] mx-auto leading-relaxed">
                    We empower organizations to embrace innovation and drive meaningful change through
                    cutting-edge technology solutions. Our expertise in digital transformation helps
                    businesses modernize their operations, enhance customer experiences, and achieve
                    sustainable growth in the digital age.
                </p>

                {/* CTA Button */}
                <button className="mt-[24px] px-[20px] py-[10px] bg-[#7C3AED] text-white text-[14px] font-medium rounded-[8px] hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-md">
                    Read more
                </button>
            </div>
        </section>
    );
};

export default DigitalTransformation;
