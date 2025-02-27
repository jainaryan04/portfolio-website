import React, { useEffect, useState } from 'react';
import Skills from './skills.jsx'

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const projectImages = [
    "/images/skills/dynamo.png",
    "/images/skills/react.jpg",
    "/images/skills/node.svg",
    "/images/skills/firebase.png",
    "/images/skills/postgresql.png",
    "/images/skills/tailwindcss.jpg"
  ];
  
  return (
    <div className="px-8 py-12 md:py-24 w-full mx-auto h-auto md:h-[100vh] overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="inline-block bg-blue-100 px-3 py-1 mb-6 text-sm">
            ARYAN RAMESH JAIN.
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
            Innovative<br />
            Full-Stack Web<br />
            Development
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            I craft dynamic, high-performance web solutions that blend creativity with cutting-edge technology. As a full-stack developer, I bring together seamless UI/UX design, robust backend architecture, and scalable systems to build engaging digital experiences that drive success.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-black transition-colors">
            <span>Connect</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="md:w-1/2 relative mt-12 md:mt-0">

        <Skills
            media={projectImages}
            changeSpeed={300}
          />

          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-16 h-16">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse"></div>
          </div>
          <div className="absolute top-1/4 -right-8 w-24 h-24">
            <div className="w-full h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-[40%] rotate-45 animate-bounce"></div>
          </div>
          
          {/* Video content area */}
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 w-full md:h-[70vh] rounded-3xl p-4 relative">
            {/* Static grid videos */}
            <div className="w-full h-full">
              <video 
                src="/videos/vitmun.mp4"
                className="w-full h-full object-cover rounded-xl"
                autoPlay 
                loop 
                muted
                playsInline
              />
            </div>
            
            <video 
              src="/videos/enrollments.mp4"
              className="w-full h-full object-cover rounded-xl"
              autoPlay 
              loop 
              muted
              playsInline
            />
            
            <video 
              src="/videos/urjacart.mp4"
              className="w-full h-full object-cover rounded-xl"
              autoPlay 
              loop 
              muted
              playsInline
            />
            
            <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Coming Soon</p>
            </div>
          </div>
          
          {/* <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted
              playsInline
            >
              <source src="/videos/enrollments.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;