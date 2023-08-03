import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-40 flex justify-between items-center px-4 bg-[#101010] text-white">
      {/* menu */}
      <ul className="hidden md:flex m-auto gap-8">
        <li className="py-3 px-8">Home</li>
        <li className="py-3 px-8">About</li>
        <li className="py-3 px-8">Projects</li>
        <li className="py-3 px-8">Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden ml-auto z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#101010] flex flex-col justify-center items-center"
        }
      >
        <li className="my-6 py-6 px-12 text-4xl">Home</li>
        <li className="my-6 py-6 px-12 text-4xl">About</li>
        <li className="my-6 py-6 px-12 text-4xl">Projects</li>
        <li className="my-6 py-6 px-12 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
