'use client';

import React, { useEffect } from 'react';
import GeneralProject from '../GeneralProject';
import projectImg from '@imgs/projects/float/float.png';
import img0 from '@imgs/projects/float/float.jpg';
import img1 from '@imgs/projects/float/float2.jpg';
import img2 from '@imgs/projects/float/float3.jpg';

export default function Float() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const ProjectName = 'Float Tube';
  const aboutText = `The Float Tube Robotics Competition 
    is an innovative and challenging event where participants design, 
    build, and program autonomous robotic systems to perform tasks on or 
    beneath the surface of the water. Teams work within a limited budget 
    and time frame to create robots that can navigate, collect data, 
    and interact with objects in a buoyant, unpredictable environment. 
    This competition blends engineering disciplines like mechanical design, 
    electronics, and software development, requiring participants to not only 
    solve technical problems but also account for the unique dynamics of water-based movement. 
    `;

  const ImgArr = [img0.src, img1.src, img2.src];

  return (
    <GeneralProject
      ProjectName={ProjectName}
      ProjectImage={projectImg.src}
      AboutText={aboutText}
      ImgArr={ImgArr}
    />
  );
}
