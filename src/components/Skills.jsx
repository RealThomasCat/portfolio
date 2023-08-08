import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div className="max-w-[1000px] grid grid-cols-4 sm:grid-cols-8 gap-6">
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={HTML}
          alt="html-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={CSS}
          alt="css-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={JavaScript}
          alt="javascript-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={ReactImg}
          alt="react-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={Tailwind}
          alt="tailwind-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={GitHub}
          alt="github-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={Node}
          alt="github-icon"
        />
      </div>
      <div className="group bg-[#181818] p-6 sm:p-3 lg:p-6 rounded-[1rem]">
        <img
          className="w-full mx-auto group-hover:scale-110 duration-500"
          src={Mongo}
          alt="github-icon"
        />
      </div>
    </div>
  );
};

export default Skills;
