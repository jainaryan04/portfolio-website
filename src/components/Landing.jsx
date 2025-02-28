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
    <div className="px-24 py-12 md:py-24 w-full mx-auto h-[100vh] overflow-hidden">
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
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
  {/* LinkedIn Button */}
  <a 
    href="https://linkedin.com/in/jainaryan04" 
    target="_blank" 
    className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-black transition-colors"
  >
    <span>LinkedIn</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>
  
  <a 
    href="https://github.com/jainaryan04" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-black transition-colors"
  >
    <span>GitHub</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>
  
  <a 
    href="mailto:aryanrameshjain@gmail.com" 
    className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-black transition-colors"
  >
    <span>Email</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  </a>
</div>
        </div>
        <div className="md:w-1/2 relative mt-12 md:mt-0">

        <Skills
            media={projectImages}
            changeSpeed={300}
          />

          <div className="absolute -top-12 -left-12 w-16 h-16">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse"></div>
          </div>
          <div className="absolute top-1/4 -right-8 w-24 h-24">
            <div className="w-full h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-[40%] rotate-45 animate-bounce"></div>
          </div>
          
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 w-full md:h-[70vh] rounded-3xl p-4 relative">
            {/* Static grid videos */}
            {/* <div className="w-full h-full">
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
            /> */}
            
            {/* <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Coming Soon</p>
            </div> */}
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