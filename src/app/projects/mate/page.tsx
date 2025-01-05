'use client';

import React, { useEffect } from 'react';
import GeneralProject from '../GeneralProject';
import projectImg from '@imgs/misc/subROV.png';
import slideShowImg0 from '@imgs/projects/mate/mate.jpg';
import slideShowImg1 from '@imgs/projects/mate/MateROV1.jpg';
import slideShowImg2 from '@imgs/projects/mate/screenshot.png';

export default function Mate() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const ProjectName = 'VespaROV';
  const aboutText = `Named after the swift and agile vespa wasp, 
                           VESPA embodies a compact design while maximizing functionality. 
                           Our team utilized advanced mechanical and electrical CAD tools, 
                           along with robust simulation software, to ensure VESPA's exceptional 
                           performance. This project marks our first ever venture into ROV design 
                           and development, representing the culmination of relentless effort and 
                           innovation from our dedicated team members`;

  const ImgArr = [slideShowImg0.src, slideShowImg1.src, slideShowImg2.src];

  return (
    <GeneralProject
      ProjectName={ProjectName}
      ProjectImage={projectImg.src}
      AboutText={aboutText}
      ImgArr={ImgArr}
    />
  );
}
