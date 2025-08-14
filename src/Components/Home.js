import React from "react";
import { motion } from "framer-motion";
import main_bg from "../assets/main_bg2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const resume = [{ id: 1, href: "./Muhammad_Tahir_Web_Developer_Resume.pdf" }];

  return (
    <div
      name="home"
      className="relative p-4 h-screen w-full flex flex-col justify-center items-center bg-white"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col md:w-[83%] w-full h-full px-4 md:flex-row justify-between items-center">
        
        {/* Left Section - Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-fit md:mt-16 mt-12"
        >
          <p className="text-2xl sm:text-4xl font-semibold text-[#181E4B] mb-2 md:mt-0 mt-5 poppins-bold">
            Hi{" "}
            <motion.span 
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: 1 }} // Stops after 2s
              className="inline-block cursor-pointer"
            >
              👋
            </motion.span>
            ,
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#181E4B] ml-4 sm:ml-6 poppins-bold">
            I am Muhammad Tahir
          </h2>
          <p className="text-[1.4rem] sm:text-3xl text-gray-600 pt-4 ml-4 sm:ml-6 poppins-semibold">
            WEB DEVELOPER
          </p>
          <p className="text-gray-500 py-4 max-w-md ml-4 sm:ml-6 poppins-regular">
          I am a passionate web developer dedicated to craft dynamic and user friendly applications. I specialize in building scalable and efficient solutions that enhance user experiences.
          </p>

          <div className="ml-4 sm:ml-6">
            {resume.map(({ id, href }) => (
              <motion.a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
          
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group poppins-medium text-base text-[#181E4B] w-fit px-2 py-2 my-2 flex items-center bg-gradient-to-r from-[#4AEFDF] to-[#22D3EE]  rounded-full cursor-pointer md:hover:shadow-lg md:hover:shadow-[#028774] "
              >
                View My Resume
                <span className="group-hover:rotate-180 duration-500">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className=" md:ml-7 md:mt-[6rem] mt-12 md:w-[55%] w-auto"
        >
          <img className="md:mb-5 mb-2" src={main_bg} alt="Muhammad Tahir" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
