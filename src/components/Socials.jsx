import React from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex justify-center items-center p-3 mt-10 gap-6  bg-[#181818]">
        <li>
          <a href="/">
            <FaLinkedin size={32} color="#48A7FF" />
          </a>
        </li>
        <li>
          <a>
            <FaGithub size={32} color="#ffffff" />
          </a>
        </li>
        <li>
          <a>
            <FaDribbble size={32} color="#FF3D8E" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
