import Link from "next/link";
import React from "react";

const Header = ({ title, link }) => {
  return (
    <div className="flex justify-between items-center mb-[16px]">
      <h1 className="md:text-3xl text-xl font-bold text-white">{title}</h1>
      <Link href={link} className="text-sm text-white">
        See more
      </Link>
    </div>
  );
};

export default Header;
