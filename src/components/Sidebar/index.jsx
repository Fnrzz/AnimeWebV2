"use client";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdBrowseGallery } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb";
import { GiChampions } from "react-icons/gi";

import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col bg-mycolor-secondary w-[265px] h-screen p-[24px] fixed">
      <div className="text-[28px] font-bold mb-[48px] text-mycolor-primary">
        AnimeWeb
      </div>
      <div className="flex flex-col gap-[20px]">
        <Link
          href="/"
          className={`text-[20px] px-[8px] py-[4px] flex items-end w-full  ${
            pathname === "/"
              ? "bg-white rounded-[8px] font-bold text-mycolor-primary"
              : "text-white"
          }`}
        >
          <IoMdHome size={32} className="mr-[8px]" />
          Home
        </Link>
        <Link
          href="/browse"
          className={`text-[20px] px-[8px] py-[4px] flex items-end w-full  ${
            pathname.startsWith("/browse")
              ? "bg-white rounded-[8px] font-bold text-mycolor-primary"
              : "text-white"
          }`}
        >
          <MdBrowseGallery size={32} className="mr-[8px]" />
          Browse
        </Link>
        <Link
          href="/top/anime"
          className={`text-[20px] px-[8px] py-[4px] flex items-end w-full  ${
            pathname === "/top/anime"
              ? "bg-white rounded-[8px] font-bold text-mycolor-primary"
              : "text-white"
          }`}
        >
          <GiChampions size={32} className="mr-[8px]" />
          Top Anime
        </Link>
        <Link
          href="/recomended/anime"
          className={`text-[20px] px-[8px] py-[4px] flex items-end w-full  ${
            pathname === "/recomended/anime"
              ? "bg-white rounded-[8px] font-bold text-mycolor-primary"
              : "text-white"
          }`}
        >
          <TbStarsFilled size={32} className="mr-[8px]" />
          Recomen Anime
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
