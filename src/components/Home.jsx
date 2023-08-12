import React from "react";
import Socials from "./Socials";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" flex flex-col justify-center items-center w-full h-screen"
    >
      <div className="w-full h-full mt-32">
        <div className="flex flex-col justify-center max-w-[480px] h-96 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto mt-12 mb-16 bg-[#181818] text-white rounded-[1rem]">
          <h1 className="text-[1.98rem] md:text-4xl text-center my-4">
            Hi! I am <span className="text-[#9F7DFF]">Yashveer Singh</span>,
          </h1>
          <h1 className="text-[1.17rem] md:text-[1.5rem] lg:text-[1.6rem] text-center my-4">
            Frontend Developer and UI/UX Designer.
          </h1>
          <h1 className="text-[0.75rem] md:text-[1rem] lg:text-xl text-center my-5 font-light">
            I design and code beautiful simple things and I love to do that.
          </h1>
          <div className="flex justify-center mt-8 mb-5">
            <Link to="projects" smooth={true} duration={500}>
              <button className="transition-all bg-gradient-to-b from-[#642EFF] to-[#8A61FF]  py-3 px-8 rounded-full text-lg font-medium shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)] hover:translate-y-[-0.4rem] duration-500">
                View Work
              </button>
            </Link>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
