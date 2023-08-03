import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full">
      <div className="flex flex-col justify-center max-w-[1000px] mx-auto p-20 h-full bg-[#181818]">
        <h1 className="text-4xl">Hi! I am Yashveer Singh,</h1>
        <h1 className="text-2xl">Frontend Developer and UI/UX Designer.</h1>
        <h1 className="text-xl">
          I design and code beautiful simple things and I love to do that.
        </h1>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
