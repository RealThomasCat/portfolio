import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 mt-32"
    >
      <form
        method="POST"
        action="https://getform.io/f/d9ffd41a-907c-4d56-8ed7-6d45fdf416e4"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="flex justify-center mb-12">
          <h1 className="text-white bg-[#181818] py-3 px-8 text-2xl rounded-[0.5rem]">
            Contact
          </h1>
        </div>

        <input
          className="py-2 px-4 rounded-[0.5rem] my-4"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          className="py-2 px-4 rounded-[0.5rem] my-4"
          type="email"
          placeholder="Email"
          name="email"
        />

        <textarea
          className="py-2 px-4 rounded-[0.5rem] my-4"
          rows="10"
          placeholder="Message"
          name="message"
        />

        <button className="text-white mx-auto my-6 bg-gradient-to-b from-[#642EFF] to-[#8A61FF] py-4 px-8 rounded-full text-lg font-medium shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)] hover:translate-y-[-0.4rem] duration-500">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
