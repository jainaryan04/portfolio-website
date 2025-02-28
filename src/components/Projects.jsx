"use client";
import { useEffect, useState } from "react";

export default function ProjectShowcase() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  
  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    
    updateViewportDimensions();
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("resize", updateViewportDimensions);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", updateViewportDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projectHeight = isMobile ? viewportHeight * 1.2 : viewportHeight * 2; 
  const totalHeight = viewportHeight + (projects.length * projectHeight); 

  return (
    <div className="relative">
      <div style={{ height: `${totalHeight}px` }}></div>

      <div className="fixed top-0 left-0 w-full h-screen">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            scrollY={scrollY}
            viewportHeight={viewportHeight}
            projectHeight={projectHeight}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, scrollY, viewportHeight, projectHeight, isMobile }) {
  const projectStart = viewportHeight + (index * projectHeight);
  const projectEnd = projectStart + projectHeight;
  
  const projectProgress = Math.max(0, Math.min(1, 
    (scrollY - projectStart) / projectHeight
  ));
  
  const isBeforeActive = scrollY < projectStart;
  const isActive = scrollY >= projectStart && scrollY < projectEnd;
  const isAfterActive = scrollY >= projectEnd;
  
  let imageScale = 1;
  let imageX = 0;
  let imageY = 0;
  let contentOpacity = 0;
  let cardOpacity = 0;

  const mobileTransformAmount = isMobile ? 20 : 40;
  const mobileScaleAmount = isMobile ? 0.7 : 0.5;

  if (isActive) {
    if (projectProgress < 0.3) {
      imageScale = 1; 
      imageX = 0;
      imageY = 0;
      contentOpacity = 0;
      cardOpacity = projectProgress / 0.3; 
    }
    
    else if (projectProgress < 0.6) {
      const stageProgress = (projectProgress - 0.3) / 0.3;
      imageScale = 1 - ((1 - mobileScaleAmount) * stageProgress); 
      imageX = -mobileTransformAmount * stageProgress; 
      imageY = isMobile ? 0 : (-mobileTransformAmount * stageProgress); 
      contentOpacity = stageProgress; 
      cardOpacity = 1;
    }
    else {
      const stageProgress = (projectProgress - 0.6) / 0.4;
      imageScale = mobileScaleAmount;
      imageX = -mobileTransformAmount;
      imageY = isMobile ? 0 : -mobileTransformAmount;
      contentOpacity = 1; 
      cardOpacity = projectProgress > 0.9 ? 1 - ((projectProgress - 0.9) * 10) : 1; 
    }
  } else if (isBeforeActive) {
    cardOpacity = 0;
  } else if (isAfterActive) {
    cardOpacity = 0;
  }

  if (!isActive && !isBeforeActive && scrollY > projectStart - viewportHeight / 2 && scrollY < projectStart) {
    cardOpacity = 0.1;
  }

  return (
    <div
      className="absolute top-0 left-0 w-full h-screen flex items-center justify-center transition-opacity duration-500 bg-black"
      style={{
        opacity: cardOpacity,
        visibility: cardOpacity > 0 ? 'visible' : 'hidden',
        zIndex: 100 - index, 
      }}
    >
      <div className={`absolute inset-0 flex items-center justify-center`} style={{ zIndex: 200 }}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="transition-all duration-700 object-cover"
            style={{
              maxWidth: isMobile ? '85vw' : '70vw',
              maxHeight: isMobile ? '40vh' : '70vh',
              transform: `translate(${imageX}%, ${imageY}%) scale(${imageScale})`,
              transformOrigin: isMobile ? 'center top' : 'center',
            }}
          />
        </a>
      </div>

      <div
        className={`absolute inset-0 text-white bg-black bg-opacity-70 transition-all duration-500 flex flex-col justify-center ${
          isMobile ? 'p-4 pt-64' : 'p-8'
        }`}
        style={{
          opacity: contentOpacity,
          transform: isMobile 
            ? `translateY(${(1 + contentOpacity) * 50}px)`
            : `translateX(${(1 + contentOpacity) * 50}px)`,
          zIndex: 150,
        }}
      >
        <div className={`${isMobile ? 'max-w-full mx-4' : 'max-w-2xl '} md:mt-64 md:-ml-12`}>
          <h2 className={`md:text-[6vh] font-bold mb-3`}>{project.title}</h2>
          <p className={`mb-3 md:text-[3vh]`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="p-4 bg-gray-800 rounded-full text-xl"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* <div className="space-x-4">
          <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded-md text-white font-medium"
            >
              View Repository
            </a>


            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded-md text-white font-medium"
            >
              View Repository
            </a>
            </div> */}
        </div>
      </div>
    </div>
  );
}

const projects = [
  { 
    id: "project1", 
    title: "VIT Model United Nations", 
    description: "A responsive website for delegate registration and portfolio allotment for the MUN organised by the Department of Students' Welfare.", 
    image: "/images/vitmun.png", 
    techStack: ["Next", "Tailwind CSS", "TypeScript"] ,
    link:"https://vitmun.vit.ac.in",
    repo:"https://github.com/nervewastaken/vitmun-25"
  },
  { 
    id: "project2", 
    title: "Enrollments Website", 
    description: "Enrollments website for the IEEE CS Chapter for 2025.", 
    image: "/images/enrollments.png", 
    techStack: ["FAST API", "DynamoDB", "S3"],
    link:"https://enrollments.ieeecsvit.com",
    repo:"https://github.com/IEEECS-VIT/enrollments-2025-backend"
  },
  { 
    id: "project3", 
    title: "UrjaCart", 
    description: "E Commerce website for a Lucknow based company", 
    image: "/images/urjacart.png", 
    techStack: ["React", "Firebase", "Tailwind CSS","Retool"],
    link:"https://shop.urjacart.com",
    repo:"https://github.com/CarbexOfficial/UrjacartWebsite"
  },
];