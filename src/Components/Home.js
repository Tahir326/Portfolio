import React from "react";
import main_bg from "../assets/main_bg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const resume = [
    {
      id: 1,
      href: "./MUHAMMAD_TAHIR_WEB_DEVELOPER_RESUME.pdf",
    },
  ];

  return (
    <div
      name="home"
      className="relative p-4 h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col md:w-[83%] w-full h-full px-4 md:flex-row justify-between items-center">
        
        {/* Hi 👋 slightly to the left, followed by "I am Muhammad Tahir" */}
        <div className="flex flex-col justify-center h-fit md:mt-16 mt-12">
          <p className="text-2xl sm:text-4xl font-semibold text-gray-300 mb-2 md:mt-0 mt-5">Hi 👋,</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white ml-4 sm:ml-6">
            I am Muhammad Tahir
          </h2>
          <p className="text-[1.4rem] sm:text-3xl text-gray-300 pt-4 ml-4 sm:ml-6">WEB DEVELOPER</p>
          <p className="text-gray-500 py-4 max-w-md ml-4 sm:ml-6">
            I am a passionate web developer dedicated to crafting dynamic and
            user-friendly web applications. With expertise in modern
            technologies like React, Node.js, Express.js, and MongoDB, I
            specialize in building scalable and efficient solutions that enhance
            user experiences.
          </p>

          <div className="ml-4 sm:ml-6">
            {resume.map(({ id, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group text-white w-fit px-2 py-3 my-2 flex items-center bg-transparent md:hover:shadow-md md:hover:shadow-gray-500 border-2 border-gray-700 md:hover:border-0 rounded-lg cursor-pointer"
              >
                View My Resume
                <span className="md:group-hover:rotate-180 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:mb-2 md:ml-7 md:mt-[9rem] mt-12 h-fit">
          <img className="md:mb-40 mb-2" src={main_bg} alt="Muhammad Tahir" />
        </div>
      </div>
    </div>
  );
};

export default Home;
