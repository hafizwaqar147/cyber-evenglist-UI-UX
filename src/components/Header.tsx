import Link from 'next/link';
import React from 'react';

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

// Custom Logo Icon (Refined to match image)
const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15" stroke="#7C3AED" strokeWidth="2" />
    <path
      d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24M16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24M16 8V24"
      stroke="#7C3AED"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-white border-b border-gray-100 flex items-center sticky top-0 z-50">
      <div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between">
        {/* Left Side (Logo) */}
        <Link href="/" className="flex items-center gap-[8px] group shrink-0">
          <LogoIcon />
          <h1 className="text-[20px] font-bold tracking-tight">
            <span className="text-[#7C3AED]">Cyber</span>{' '}
            <span className="text-[#111827]">Evangelists</span>
          </h1>
        </Link>

        {/* Center Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-[24px]">
          <Link
            href="#"
            className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors"
          >
            About Us
          </Link>
          <button className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors flex items-center gap-[4px] cursor-pointer">
            Services <ChevronDown />
          </button>
          <button className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors flex items-center gap-[4px] cursor-pointer">
            Industry <ChevronDown />
          </button>
          <button className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors flex items-center gap-[4px] cursor-pointer">
            Our Products <ChevronDown />
          </button>
          <Link
            href="#"
            className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors"
          >
            Our Work
          </Link>
          <button className="text-[14px] font-medium text-[#4B5563] hover:text-[#7C3AED] transition-colors flex items-center gap-[4px] cursor-pointer">
            Career <ChevronDown />
          </button>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-[12px]">
          <button className="px-[18px] py-[10px] bg-[#7C3AED] text-white text-[14px] font-semibold rounded-[8px] hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-sm active:scale-95">
            Contact Us
          </button>
          <button className="hidden sm:inline-flex px-[18px] py-[10px] bg-white border border-[#7C3AED] text-[#7C3AED] text-[14px] font-semibold rounded-[8px] hover:bg-purple-50 transition-all duration-200 cursor-pointer active:scale-95">
            Hire Cyber Security Tech
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
