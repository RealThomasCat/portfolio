import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 w-full h-24 flex justify-center items-center px-4 bg-[#101010] text-white">
      {/* menu */}
      <ul className="hidden md:flex gap-8">
        <Link to="home" smooth={true} duration={500}>
          <li className="py-3 px-8 hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Home
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className="py-3 px-8 hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            About
          </li>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <li className="py-3 px-8 hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Projects
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="py-3 px-8 hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Contact
          </li>
        </Link>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden ml-auto z-10 hover:cursor-pointer"
      >
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#101010] flex flex-col justify-center items-center"
        }
      >
        <Link
          onClick={handleClick}
          to="home"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="my-6 py-4 px-10 text-2xl hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Home
          </li>
        </Link>
        <Link
          onClick={handleClick}
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="my-6 py-4 px-10 text-2xl hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            About
          </li>
        </Link>
        <Link
          onClick={handleClick}
          to="projects"
          smooth={true}
          offset={-200}
          duration={500}
        >
          <li className="my-6 py-4 px-10 text-2xl hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Projects
          </li>
        </Link>
        <Link
          onClick={handleClick}
          to="contact"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li className="my-6 py-4 px-10 text-2xl hover:translate-y-[-0.4rem] hover:bg-[#642EFF] duration-500">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
