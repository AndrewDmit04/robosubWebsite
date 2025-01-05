import React from 'react';
import './projectStyle.css';
import Ending from '@/app/(pages)/components/ending';
import Navbar from '@/app/(pages)/components/navbar';
import { Carousel } from 'react-responsive-carousel';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function GeneralProject({
  ProjectName,
  ProjectImage,
  AboutText,
  ImgArr,
}: {
  ProjectName: string;
  ProjectImage: string;
  AboutText: string;
  ImgArr: string[];
}) {
  return (
    <div>
      <ParallaxProvider>
        <Navbar />
        <div className="general-project">
          <div className="project-landing-background">
            <Parallax
              className="parallax-container"
              translateX={['100px', '-100px']}
            >
              <h1 className="project-title">{ProjectName}</h1>
            </Parallax>
            <Parallax translateX={['-200px', '200px']}>
              <img
                className="project-img"
                src={ProjectImage}
                alt="project-image"
              />
            </Parallax>
            <span className="project-arrow">&#9662;</span>
          </div>
          <div className="project-about-section">
            <Carousel
              className="carousel"
              showArrows={true}
              emulateTouch={true}
              showThumbs={false}
            >
              {ImgArr.map(
                (img: string | undefined, i: React.Key | null | undefined) => (
                  <img
                    draggable={false}
                    className="car-image"
                    src={img}
                    key={i}
                    alt="project"
                  />
                )
              )}
            </Carousel>
            <div className="about-ind-project">
              <h1>About</h1>
              <p>{AboutText}</p>
            </div>
          </div>
        </div>
        <Ending start={'black'} end={'black'} />
      </ParallaxProvider>
    </div>
  );
}

export default GeneralProject;
