import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div name="about" className="w-full h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-rows-2 gap-6 text-white">
          <div className="flex flex-row gap-6">
            <div className="bg-[#181818] min-w-[200px] rounded-[1rem]">
              <img></img>
            </div>
            <div className="flex flex-col justify-center gap-4 px-8 py-6 bg-[#181818] col-span-3 rounded-[1rem]">
              <h1 className="font-bold">Yashveer Singh</h1>
              <h2 className="text-[#9F7DFF] line-clamp-2">
                Frontend Developer | UI/UX Designer | Pre Final Year at IIITM
                Gwalior
              </h2>
              <p className="text-sm max-h-[86px] line-clamp-3 lg:line-clamp-4 ">
                I'm pursuing my Integrated B.Tech and M.Tech at the Indian
                Institute of Information Technology, Gwalior, from 2020-2025. I
                have a deep interest in Web development and UI/UX Design. I
                primarily work with the MERN stack. I'm familiar with Tailwind
                CSS and MUI. I design stunning user interfaces using Figma.
              </p>
            </div>
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
