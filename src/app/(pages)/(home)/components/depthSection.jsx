"use client"
import React, { useState, useEffect } from 'react';

const DepthSection = () => {
  const [scrollDepth, setScrollDepth] = useState(0);
  const maxDepth = 100; // Maximum depth in meters

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollDepth(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

      <div className="fixed top-20 right-1  w-2 h-3/4 bg-[#125d99] z-50">
        {/* Depth indicator */}
        <div 
          className="w-full bg-[#53cbec] absolute top-0 transition-all duration-300"
          style={{ height: `${scrollDepth}%` }}
        />
        
        {/* Depth markings */}
        {[0, 25, 50, 75, 100].map((depth) => (
          <div 
            key={depth}
            className="absolute w-8 -left-8 flex items-center"
            style={{ top: `${depth}%` }}
          >
            <div className="w-4 h-0.5 bg-[#53cbec]" />
            <span className="text-[#53cbec] text-sm ml-2">{depth}m</span>
          </div>
        ))}

        {/* Submarine icon */}
        <div 
          className="absolute -left-4 w-8 h-8 transition-all duration-300"
          style={{ top: `${scrollDepth}%` }}
        >
          <div className="w-full h-full bg-[#53cbec] rounded-full flex items-center justify-center">
            <span className="text-[#1b1149] text-xs font-bold">SUB</span>
          </div>
        </div>
      </div>
  );
};

export default DepthSection;