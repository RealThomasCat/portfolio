import React from "react";
import Amazon from "../assets/projects/amazon-clone.png";
import Exercise from "../assets/projects/exercise-app.png";
import Weather from "../assets/projects/weather-app.png";
import UiUx from "../assets/projects/uiux.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen flex flex-col justify-between items-center pt-28 pb-6"
    >
      <div className="flex flex-row justify-center w-full mb-12">
        <h1 className="text-white bg-[#181818] py-3 px-8  text-2xl rounded-[0.5rem]">
          Projects
        </h1>
      </div>
      <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
        <div
          style={{ backgroundImage: `url(${Amazon})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="flex text-2xl font-bold text-white justify-center">
              Amazon Clone
            </span>
            <div className="pt-6 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/RealThomasCat/amazon-clone"
                target="_blank"
              >
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Exercise})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="flex text-2xl font-bold text-white justify-center">
              Exercise App
            </span>
            <div className="pt-6 text-center">
              <a href="https://rtc-react-gym.netlify.app/" target="_blank">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/RealThomasCat/gym-app"
                target="_blank"
              >
                <button
                  className="text-center rounded-[1rem] text-white 
                bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500"
                >
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Weather})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="flex text-2xl font-bold text-white justify-center">
              Weather App
            </span>
            <div className="pt-6 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/RealThomasCat/Weather-app"
                target="_blank"
              >
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${UiUx})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="flex text-2xl font-bold text-white justify-center">
              UI/UX
            </span>
            <div className="pt-6 text-center">
              <a href="https://dribbble.com/Real_Thomas_Cat" target="_blank">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Dribbble
                </button>
              </a>
              <a href="https://www.behance.net/yashveersingh8" target="_blank">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg hover:translate-y-[-0.4rem] duration-500">
                  Behance
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
