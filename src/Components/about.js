import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="p-4 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center  px-4  md:w-[83%] w-full h-full">
        <div className="pb-8">
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base md:text-xl md:mt-12 mt-12 text-gray-400 text-center ">


        Skilled and detail-oriented full-stack web developer with a strong background in programming and a passion for building innovative software solutions. Proficient in JavaScript with experience in developing dynamic, scalable, and user-friendly web applications. Committed to leveraging technical expertise and a passion for innovation to deliver impactful, high-quality software solutions.
        
        </p>

      </div>
    </div>
  );
};

export default About;