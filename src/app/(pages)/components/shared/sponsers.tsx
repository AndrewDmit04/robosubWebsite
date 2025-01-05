import React from 'react';
import solidWorksLogo from '@imgs/sponsors/solidWorks.jpg';
import VeoliaLogo from '@imgs/sponsors/veolia.png';

export default function Sponsors() {
  return (
    <div id="Sponsors" className="bg-[#1b1149] p-12 text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-gray-300 mb-8">Sponsors</h1>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-10">
        <img src={solidWorksLogo.src} alt="SolidWorks" className="max-w-[600px] w-full rounded-2xl" />
        <img src={VeoliaLogo.src} alt="Veolia" className="max-w-[600px] w-full rounded-2xl" />
      </div>
    </div>
  );
}
