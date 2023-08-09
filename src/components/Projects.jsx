import React from "react";
import Working from "../assets/projects/workImg.jpeg";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen flex flex-col justify-between items-center pt-28 pb-6">
      <div className="flex flex-row justify-center w-full">
        <h1 className="text-white bg-[#181818] py-3 px-8 text-2xl rounded-[0.5rem]">
          Projects
        </h1>
      </div>
      <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
        <div
          style={{ backgroundImage: `url(${Working})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-2xl font-bold text-white">React App</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Working})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-2xl font-bold text-white">React App</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Working})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-2xl font-bold text-white">React App</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Working})` }}
          className="group content-div bg-[#181818] p-6 rounded-[1rem] flex justify-center items-center"
        >
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-2xl font-bold text-white">React App</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-[1rem] text-white bg-[#181818] px-4 py-3 m-2 font-bold text-lg">
                  Code
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
