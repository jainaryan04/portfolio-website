"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RoughEase } from "gsap/dist/EasePack"; // Import RoughEase for the jitter effect

gsap.registerPlugin(ScrollTrigger, RoughEase); // Register RoughEase

const projects = [
  {
    id: "project1",
    title: "VIT Model United Nations",
    description:
      "A responsive website for delegate registration and portfolio allotment for the MUN organised by the Department of Students' Welfare.",
    image: "/images/vitmun.png",
    techStack: ["Next", "Tailwind CSS", "TypeScript"],
    link: "https://vitmun.vit.ac.in",
    repo: "https://github.com/nervewastaken/vitmun-25",
  },
  {
    id: "project2",
    title: "Enrollments Website",
    description: "Enrollments website for the IEEE CS Chapter for 2025.",
    image: "/images/enrollments.png",
    techStack: ["FAST API", "DynamoDB", "S3"],
    link: "https://enrollments.ieeecsvit.com",
    repo: "https://github.com/IEEECS-VIT/enrollments-2025-backend",
  },
  {
    id: "project3",
    title: "UrjaCart",
    description: "E Commerce website for a Lucknow based company",
    image: "/images/urjacart.png",
    techStack: ["React", "Firebase", "Tailwind CSS", "Retool"],
    link: "https://shop.urjacart.com",
    repo: "https://github.com/CarbexOfficial/UrjacartWebsite",
  },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific project with funky animation
  const scrollToProject = (index: number) => {
    if (containerRef.current && projectRefs.current[index]) {
      const targetElement = projectRefs.current[index];
      const targetScrollTop = targetElement.offsetTop;
      const currentScrollTop = containerRef.current.scrollTop;
      // const viewportHeight = window.innerHeight; // Not directly used for scroll calculation in this version

      // Calculate a "halfway" point for the scroll relative to the current and target
      const halfwayScroll = currentScrollTop + (targetScrollTop - currentScrollTop) * 0.4; // Scroll 40% of the way

      const tl = gsap.timeline({
        onStart: () => {
          setIsAnimating(true); // Prevent further pulls during this animation sequence
        },
        onComplete: () => {
          setCurrentProject(index); // Update current project after the full animation
          setIsAnimating(false); // Allow handle pulls again
        }
      });

      tl.to(containerRef.current, {
        scrollTop: halfwayScroll,
        duration: 0.5, // Smooth scroll to halfway
        ease: "power2.out",
      })
      .to(containerRef.current, {
        // Jitter effect - this will apply small, quick movements to the container
        // It's a visual shake, not a major scroll
        x: 'random(-5, 5)', // Random horizontal jitter
        y: 'random(-5, 5)', // Random vertical jitter
        repeat: 5, // Repeat 5 times for a noticeable shake
        yoyo: true, // Go back and forth for a cleaner jitter
        duration: 0.08, // Very fast individual jitter movements
        ease: "power1.inOut", // Simple ease for quick movements
      })
      .to(containerRef.current, {
        scrollTop: targetScrollTop,
        duration: 0.8, // Smooth scroll to the final target
        ease: "power2.inOut",
        x: 0, // Ensure x/y reset after jitter
        y: 0,
      }, ">-0.2"); // Start final scroll slightly before jitter animation technically ends for continuity
    }
  };

  // Effect to disable manual scrolling and ensure initial project display
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Disable manual scroll
      container.style.overflowY = 'hidden';

      // Set initial scroll position to the first project to ensure it's visible
      // This is a direct set, not an animation, to prevent initial scroll issues
      if (projectRefs.current[0]) {
        container.scrollTop = projectRefs.current[0].offsetTop;
        setCurrentProject(0);
      }
    }

    return () => {
      if (container) {
        // Re-enable scroll if component unmounts (optional, for cleanup)
        container.style.overflowY = 'scroll';
      }
    };
  }, []); // Run only once on mount

  const handleSlotPull = () => {
    if (isAnimating) return; // Prevent multiple pulls if an animation is in progress
    
    // Animate handle pull down and up
    if (handleRef.current) {
      gsap.to(handleRef.current, {
        y: 20,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(handleRef.current, {
            y: 0,
            duration: 0.3,
            ease: "elastic.out(1, 0.5)",
            onComplete: () => {
              const nextIndex = (currentProject + 1) % projects.length;
              scrollToProject(nextIndex); // Trigger the funky scroll animation
            }
          });
        }
      });
    }
  };

  return (
    <div className="relative">
      {/* Slot Machine Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center">
        {/* Slot Machine Body */}
        <div className="">
          {/* Slot Machine Handle */}
          <div className="flex justify-center mb-4">
            <div
              ref={handleRef}
              onClick={handleSlotPull}
              className={`cursor-pointer transform transition-transform duration-100 ${
                isAnimating ? 'pointer-events-none' : 'hover:scale-105' // Disable pointer events if animating
              }`}
            >
              <img
                src="/images/slot.png"
                alt="Slot Machine Handle"
                className="w-48 h-40 object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Project Display Window */}
          {/* <div className="bg-black rounded-lg p-3 border-2 border-gray-300 mb-4">
            <div className="flex flex-col items-center space-y-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div> */}

          {/* Status Display */}
          {/* <div className="bg-black rounded px-3 py-2 border border-gray-300">
            <div className="text-center">
              <div className="text-green-400 text-xs font-mono mb-1">
                {isAnimating ? 'PULLING...' : 'READY'}
              </div>
              <div className="text-yellow-400 text-sm font-bold">
                {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
            </div>
          </div> */}
        </div>

        {/* Instructions */}
        <div className="mt-4 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
          <span className="text-white text-xs text-center block">
            Pull Handle to Spin
          </span>
        </div>
      </div>

      {/* Project Container */}
      <div
        ref={containerRef}
        className="h-screen w-full flex flex-col" 
      >
        {projects.map((project, i) => (
          <section
            key={project.id}
            ref={(el) => (projectRefs.current[i] = el)}
            className="h-screen w-full flex items-center justify-center px-6 bg-black text-white flex-shrink-0" 
          >
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-7xl w-full"> {/* Increased gap and max-w-7xl, added w-full */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2 flex justify-center" // Added flex justify-center to center image if it doesn't fill
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg object-contain w-full h-[75vh]" // Increased image height
                />
              </a>
              <div className="w-full md:w-1/2 space-y-6"> {/* Increased space-y for more vertical separation */}
                <h2 className="text-5xl font-bold md:text-6xl">{project.title}</h2> {/* Increased title size */}
                <p className="text-xl md:text-2xl">{project.description}</p> {/* Increased description size */}
                <div className="flex flex-wrap gap-4"> {/* Increased gap for tech stack */}
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 rounded-full px-5 py-2 text-base md:text-lg" // Increased tech stack padding and text size
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-8 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition text-lg font-medium" // Increased button padding and text size
                >
                  View Repository
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}