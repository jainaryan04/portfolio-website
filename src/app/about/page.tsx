import React from 'react';

// --- Helper Components for better structure ---

// Icon for the timeline
const TimelineIcon = () => (
  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 ring-8 ring-gray-800">
    <svg className="h-3 w-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
    </svg>
  </div>
);

// Tech tag component with modern styling
const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium tracking-wide text-purple-300 ring-1 ring-inset ring-purple-500/20">
    {children}
  </span>
);


// --- Main About Section Component ---

const AboutSection = () => {
  const experiences = [
    {
      role: "PRISM Project Intern",
      company: "Samsung R&D Institute India - Bangalore",
      date: "Aug 25-present",
      description: "Developed and maintained features for a large-scale web application using React and TypeScript. Collaborated with a cross-functional team to deliver high-quality code and improved application performance by 15%.",
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Figma"]
    },
    {
      role: "Full-Stack Web Developer Intern",
      company: "Urjacart Energy Labs Pvt Ltd",
      date: "Dec 24-Aug 25",
      description: "Built responsive and accessible user interfaces for client websites using modern CSS frameworks. Translated complex design mockups into pixel-perfect, interactive web pages and contributed to a reusable component library.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Next.js"]
    }
  ];

  return (
    <section className="h-auto bg-[#0A192F] font-sans text-white antialiased">
      <div className="container mx-auto max-w-4xl px-4 py-24">
        
      <h2 
          className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl"
          // Suggested font: Satoshi or Clash Display
        >
          Crafting Digital Experiences
        </h2>
        <p 
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400"
          // Suggested font: Inter
        >
          Driven by a passion for building beautiful and functional web experiences. Here's a look at my recent work and the technologies I've used along the way.
        </p>

        {/* Experience Timeline */}
        <div className="mt-16 flow-root">
          <div className="-m-8">
            <div className="p-8">
              <div className="relative border-l-2 border-gray-700 pl-8">
                
                {/* Vertical line connecting timeline items */}
                <div className="absolute bottom-0 left-0 top-0 w-px bg-gray-700"></div>

                {experiences.map((exp, index) => (
                  <div key={index} className={`relative ${index > 0 ? 'mt-12' : ''}`}>
                    <TimelineIcon />
                    <div className="rounded-lg bg-gray-900/50 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:ring-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role} @ {exp.company}
                        </h3>
                        <time className="flex-shrink-0 text-sm font-medium text-gray-400">{exp.date}</time>
                      </div>
                      <p className="mt-4 text-base text-gray-300">{exp.description}</p>
                      
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <TechTag key={tech}>{tech}</TechTag>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
