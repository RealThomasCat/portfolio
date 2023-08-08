import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Socials = () => {
  const [logoColor, setLogoColor] = useState("#ffffff");
  const [logoColor1, setLogoColor1] = useState("#ffffff");
  const [logoColor2, setLogoColor2] = useState("#ffffff");

  const setHoverColor = () => {
    setLogoColor("#808080");
    setLogoColor1("#808080");
    setLogoColor2("#808080");
  };

  const resetHoverColor = () => {
    setLogoColor("#ffffff");
    setLogoColor1("#ffffff");
    setLogoColor2("#ffffff");
  };

  return (
    <div className="flex justify-center">
      <ul
        onMouseEnter={setHoverColor}
        onMouseLeave={resetHoverColor}
        className="flex group justify-center items-center p-3 mb-[3.5rem] gap-4 bg-[#181818] rounded-[0.5rem] hover:gap-8 hover:px-4 duration-500"
      >
        <li>
          <a href="https://www.linkedin.com/in/yashveer4/" target="_blank">
            <FaLinkedin
              className="group-hover:scale-110 duration-500"
              size={32}
              color={logoColor}
              onMouseEnter={() => setLogoColor("#48a7ff")}
              onMouseLeave={() => setLogoColor("#808080")}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/RealThomasCat" target="_blank">
            <FaGithub
              className="group-hover:scale-110 duration-500"
              size={32}
              color={logoColor1}
              onMouseEnter={() => setLogoColor1("#ffffff")}
              onMouseLeave={() => setLogoColor1("#808080")}
            />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/Real_Thomas_Cat" target="_blank">
            <FaDribbble
              className="group-hover:scale-110 duration-500"
              size={32}
              color={logoColor2}
              onMouseEnter={() => setLogoColor2("#FF3D8E")}
              onMouseLeave={() => setLogoColor2("#808080")}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
