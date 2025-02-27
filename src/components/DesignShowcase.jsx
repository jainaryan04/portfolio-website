import React from 'react';

const DesignShowcase = () => {
  return (
    <div className="px-8 py-16 relative">
      <div className="absolute right-0 top-0 w-4/5 h-full bg-gradient-to-bl from-purple-100 to-pink-100 rounded-l-full z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 relative">
            {/* Main showcase video */}
            <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden relative">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/urbanblanc-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold">URBANBLANC</div>
                  <div className="flex items-center space-x-2">
                    <span>BAG 0</span>
                    <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="text-xs mb-2">AUTUMN WINTER 24</div>
                  <div className="inline-block bg-black bg-opacity-50 px-4 py-2 mb-4 text-xs">
                    SCROLL
                  </div>
                </div>
              </div>
            </div>
            
            {/* NOOR BLOOM card with video preview */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 w-3/4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  NOOR BLOOM
                </div>
                <div className="text-xs text-gray-500">
                  WORK • SERVICES
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
                  DIGITAL PERSONAL CMS
                </div>
                <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
                  FRONTEND TECH FREELANCE
                </div>
              </div>
              <div className="mt-4 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/noor-bloom-preview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pl-8">
            <div className="mb-8">
              <button className="bg-pink-100 text-black px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-pink-200 transition-colors">
                <span>What's New</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="mt-16">
              <button className="bg-green-200 text-black px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-green-300 transition-colors">
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;