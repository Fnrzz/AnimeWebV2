"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Search from "../Search";
const Navbar = ({ title, link }) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-mycolor-tertiary sticky md:relative w-full z-10 top-0 ">
      <div className="relative flex h-[85px] items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsMobile(!isMobile)}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {/* Icon when menu is closed. */}
            <svg
              className={`h-6 w-6 ${isMobile ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* Icon when menu is open. */}
            <svg
              className={`h-6 w-6 ${isMobile ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center md:hidden">
            <h3 className="font-bold text-[24px] text-mycolor-primary">
              AnimeWeb
            </h3>
          </div>
          <div className="hidden w-full md:block">
            <div className="flex justify-start items-center space-x-[24px]">
              <Link
                href={link}
                className={`text-mycolor-primary text-[24px] font-bold`}
              >
                {title}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobile && (
        <div className="md:hidden" id="mobile-menu">
          <ul className=" px-2 pb-3 pt-2 ">
            <li className="mt-3">
              <a
                href="/"
                className={`${
                  pathname === "/"
                    ? "bg-mycolor-primary "
                    : "hover:text-mycolor-primary"
                } block rounded-md px-3 py-2 text-white font-medium`}
              >
                All
              </a>
            </li>
            <li className="mt-3">
              <a
                href="/top/anime"
                className={`${
                  pathname === "/top/anime"
                    ? "bg-mycolor-primary "
                    : "hover:text-mycolor-primary"
                } block rounded-md px-3 py-2 text-white font-medium`}
              >
                Top Anime
              </a>
            </li>
            <li className="mt-3">
              <a
                href="/recomended/anime"
                className={`${
                  pathname === "/recomended/anime"
                    ? "bg-mycolor-primary "
                    : "hover:text-mycolor-primary"
                } block rounded-md px-3 py-2 text-white font-medium`}
              >
                Recomended Anime
              </a>
            </li>
            <li className="mt-3">
              <Search />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
