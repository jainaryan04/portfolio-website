"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const RightNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-[1000] flex h-screen w-24 flex-col items-center justify-center border-l border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="flex flex-col items-stretch gap-2">
        {menu.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));

          return (
            <Link href={item.path} key={item.path}>
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
  );
};

export default RightNavbar;

