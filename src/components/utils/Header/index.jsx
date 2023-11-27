import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex justify-center md:hidden block">
      <h1 className="text-xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default Header;
