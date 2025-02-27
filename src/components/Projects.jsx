"use client";
import { useEffect, useState } from "react";

export default function ProjectShowcase() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate required heights
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const projectHeight = viewportHeight * 2; // Each project takes 2x viewport height
  const totalHeight = viewportHeight + (projects.length * projectHeight); // Initial viewport + projects

  return (
    <div className="relative">
      {/* Scrollable container */}
      <div style={{ height: `${totalHeight}px` }}></div>

      {/* Fixed content container */}
      <div className="fixed top-0 left-0 w-full h-screen">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            scrollY={scrollY}
            viewportHeight={viewportHeight}
            projectHeight={projectHeight}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, scrollY, viewportHeight, projectHeight }) {
  // Calculate the start and end positions for this project
  const projectStart = viewportHeight + (index * projectHeight);
  const projectEnd = projectStart + projectHeight;
  
  // Calculate where we are in this project's scroll range (0 to 1)
  const projectProgress = Math.max(0, Math.min(1, 
    (scrollY - projectStart) / projectHeight
  ));
  
  // Determine if this project is active
  const isBeforeActive = scrollY < projectStart;
  const isActive = scrollY >= projectStart && scrollY < projectEnd;
  const isAfterActive = scrollY >= projectEnd;
  
  // Define animation stages more clearly
  // Stage 1 (0-0.3): Image centered and growing
  // Stage 2 (0.3-0.6): Image moving to corner
  // Stage 3 (0.6-1.0): Content visible, then fading

  let imageScale = 1;
  let imageX = 0;
  let imageY = 0;
  let contentOpacity = 0;
  let cardOpacity = 0;

  if (isActive) {
    // Stage 1: Center and grow
    if (projectProgress < 0.3) {
      imageScale = 1 + (projectProgress / 0.3); // Scale from 1 to 2
      imageX = 0;
      imageY = 0;
      contentOpacity = 0;
      cardOpacity = projectProgress / 0.3; // Fade in card
    }
    // Stage 2: Move to corner
    else if (projectProgress < 0.6) {
      const stageProgress = (projectProgress - 0.3) / 0.3;
      imageScale = 2 - stageProgress; // Scale from 2 to 1
      imageX = -50 * stageProgress; // Move left
      imageY = -50 * stageProgress; // Move up
      contentOpacity = 0;
      cardOpacity = 1;
    }
    // Stage 3: Show content, then all fade out
    else {
      const stageProgress = (projectProgress - 0.6) / 0.4;
      imageScale = 1;
      imageX = -50;
      imageY = -50;
      contentOpacity = Math.min(1, stageProgress * 2); // Content appears in first half
      cardOpacity = projectProgress > 0.9 ? 1 - ((projectProgress - 0.9) * 10) : 1; // Quick fade at end
    }
  } else if (isBeforeActive) {
    // Wait to appear
    cardOpacity = 0;
  } else if (isAfterActive) {
    // Fully hidden after completion
    cardOpacity = 0;
  }

  if (!isActive && !isBeforeActive && scrollY > projectStart - viewportHeight / 2 && scrollY < projectStart) {
    // Pre-load next project with slight visibility
    cardOpacity = 0.1;
  }

  return (
    <div
      className="absolute top-0 left-0 w-full h-screen flex items-center justify-center transition-opacity duration-500"
      style={{
        opacity: cardOpacity,
        visibility: cardOpacity > 0 ? 'visible' : 'hidden',
        zIndex: 100 - index, // Higher index = lower layer
      }}
    >
      {/* Project image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="transition-all duration-700 object-cover"
          style={{
            maxWidth: '70vw',
            maxHeight: '70vh',
            transform: `translate(${imageX}%, ${imageY}%) scale(${imageScale})`,
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Project details */}
      <div
        className="absolute top-1/4 right-8 w-1/3 text-white bg-black bg-opacity-70 p-6 rounded-lg transition-all duration-500"
        style={{
          opacity: contentOpacity,
          transform: `translateX(${(1 - contentOpacity) * 50}px)`,
        }}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  { 
    id: "project1", 
    title: "E-Commerce Dashboard", 
    description: "A responsive dashboard for monitoring sales and inventory with real-time updates.", 
    image: "/images/vitmun.png", 
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"] 
  },
  { 
    id: "project2", 
    title: "Weather App", 
    description: "Location-based weather forecasting with animated visualizations.", 
    image: "/images/enrollments.png", 
    techStack: ["JavaScript", "OpenWeather API", "CSS3"] 
  },
  { 
    id: "project3", 
    title: "Task Management System", 
    description: "Collaborative project management tool with kanban boards and team chat.", 
    image: "/images/task-app.jpg", 
    techStack: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
  },
  {
    id: "project4",
    title: "Fitness Tracker", 
    description: "Mobile application for tracking workouts and nutrition with personalized goals.",
    image: "/images/fitness-app.jpg",
    techStack: ["React Native", "Redux", "Express", "SQL"],
  },
];