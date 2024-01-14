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


        As a Computer Science student with a focus on frontend development, I've developed strong skills in React.js
        , allowing me to develop projects like web applications and websites interfaces. 
        My strength is in creating easy-to-use and responsive websites and applications. Additionally, I am highly skilled at transforming designs into websites. My studies in Computer Science, 
        together with my practical skills in frontend development, make me well-equipped to build solutions that are not only aesthetically appealing but also work well.
        
        </p>

      </div>
    </div>
  );
};

export default About;