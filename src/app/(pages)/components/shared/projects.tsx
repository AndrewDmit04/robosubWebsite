import React from 'react';
import ProjectInfo from './projectInfo';
import ProjectCard from './projectCard';

const goToPage = (url: string) => {
  window.location.href = url;
};

export default function Projects() {
  return (
    <div id="Projects" className=" text-gray-200 py-12 text-center bg-gradient-to-b from-[#1b0478] to-[#15035c] relative text-[rgb(208, 207, 207)]">
      <h1 className="mb-8 text-center text-[50px] text-[rgb(208, 207, 207) ">Our Projects</h1>
      <div className="flex flex-row justify-around flex-wrap gap-10">
        {ProjectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            url={project.URL}
          />
        ))}
      </div>
    </div>
  );
}
