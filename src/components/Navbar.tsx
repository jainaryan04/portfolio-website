"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const RightNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-4 top-4 z-[1100] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-slate-950/30 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`fixed inset-y-0 right-0 z-[1001] flex w-72 max-w-[85vw] flex-col justify-center border-l border-slate-200 bg-white/95 p-6 shadow-2xl transition-transform duration-300 md:left-0 md:right-auto md:h-screen md:w-24 md:flex-row md:items-center md:justify-center md:border-l md:border-slate-200 md:bg-white/80 md:p-0 md:shadow-none ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-stretch gap-2 md:items-center">
          {menu.map((item) => {
            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));

            return (
              <Link href={item.path} key={item.path} onClick={closeMenu}>
                <div
                  className={`flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default RightNavbar;

