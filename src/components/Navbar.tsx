"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
//   { label: "Contact", path: "/contact" },
];

const RightNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 h-screen flex flex-col items-end justify-center z-[1000] bg-white pr-4"> {/* Changed top-1/2 to top-0, added h-screen, items-end, justify-center, and pr-4 */}
      {menu.map((item) => (
        <Link href={item.path} key={item.path} scroll={false}>
          <button
            className={`my-2 py-2 px-4 cursor-pointer text-black text-lg transition-all duration-200 ${ // Adjusted padding, text size, and added transition
              pathname === item.path ? "font-bold bg-gray-200 rounded-lg" : "font-normal hover:bg-gray-100 rounded-lg" // Added background for active/hover states
            }`}
          >
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default RightNavbar;