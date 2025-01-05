"use client"
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Officers', path: '/officers' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Projects', path: '/projects' }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="bg-black bg-opacity-50 shadow-lg fixed w-full z-50 backdrop-blur-md ">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Title */}
        <div 
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => handleNavigation('/')}
        >
        <div className="h-10 w-10  rounded-full flex items-center justify-center">
          <Image src="/imgs/logos/RobosubLogo.png" width={40} height={40} alt="logo"></Image>
        </div>
        
        <span className="text-white font-bold text-xl">RoboSub UTD</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`${
                  pathname === item.path ? 'text-[#53cbec] glow' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white hover:text-[#53cbec] focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-3 py-2 text-gray-200 hover:text-[#53cbec] transition-colors duration-200 font-medium ${
                    pathname === item.path ? 'text-[#53cbec] glow' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;