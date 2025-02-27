"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ProjectShowcase() {
  return (
    <div className="relative">
      {/* This div creates the scrollable space */}
      <div style={{ height: `${projects.length * 100}vh` }}></div>
      
      {/* Fixed container to display the cards */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            total={projects.length} 
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track scroll position to determine which card to show
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveIndex = Math.floor(scrollPosition / windowHeight);
      
      if (newActiveIndex !== activeIndex && newActiveIndex < total) {
        setActiveIndex(newActiveIndex);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, total]);
  
  // Calculate the opacity and translation based on active index
  const isActive = activeIndex === index;
  const hasAppeared = activeIndex >= index;
  const opacity = isActive ? 1 : hasAppeared ? 0.3 : 0;
  const translateY = isActive ? 0 : hasAppeared ? -100 : 100;
  
  return (
    <div 
      className="absolute w-full h-full flex items-center justify-center"
      style={{ 
        opacity, 
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.5s ease, transform 0.5s ease",
        zIndex: total - index
      }}
    >
      <div className="w-[90vw] max-w-4xl h-[80vh] bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        
        <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
          {project.video ? (
            <video 
              src={project.video} 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
            />
          ) : (
            <img 
              src={project.image} 
              className="w-full h-full object-cover" 
              alt={project.title} 
            />
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
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
    image: "/images/ecommerce-dashboard.jpg", 
    video: "/videos/dashboard-demo.mp4", 
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"] 
  },
  { 
    id: "project2", 
    title: "Weather App", 
    description: "Location-based weather forecasting with animated visualizations.", 
    image: "/images/weather-app.jpg", 
    techStack: ["JavaScript", "OpenWeather API", "CSS3"] 
  },
  { 
    id: "project3", 
    title: "Task Management System", 
    description: "Collaborative project management tool with kanban boards and team chat.", 
    image: "/images/task-app.jpg", 
    video: "/videos/task-app-demo.mp4", 
    techStack: ["TypeScript", "React", "Firebase", "Tailwind CSS"] 
  },
  { 
    id: "project4", 
    title: "Fitness Tracker", 
    description: "Mobile application for tracking workouts and nutrition with personalized goals.", 
    image: "/images/fitness-app.jpg", 
    techStack: ["React Native", "Redux", "Express", "SQL"] 
  },
];