"use client";
import React, { useState, useEffect } from 'react';

const menu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const RightNavbar = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    // Set the current path on component mount (client-side only)
    setPathname(window.location.pathname);
  }, []);

  return (
    <nav className="fixed right-0 top-0 z-[1000] flex h-screen w-24 flex-col items-center justify-center border-l border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="flex flex-col items-stretch gap-2">
        {menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <a href={item.path} key={item.path}>
              <button
                className={`flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-purple-500/20 text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {item.label}
              </button>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default RightNavbar;

