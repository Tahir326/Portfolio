import React from "react";
import main_bg from '../assets/main_bg.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  const resume=[
   {
      id: 1,
      href: "./MUHAMMAD_TAHIR_FRONT_END_DEVELOPER_RESUME.pdf",

      
    },
  ]

   
  return (
    <div
      name="home"
      className=" p-4 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center md:w-[83%] w-full  h-full px-4 md:flex-row ml-18">
        <div className="flex flex-col justify-center h-fit md:mt-16 mt-32">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am Muhammad Tahir
          </h2>
          <p className="text-3xl text-gray-300 pt-4">FRONT-END DEVELOPER</p>
          <p className="text-gray-500 py-4 max-w-md ">
          I am a front-end developer with a strong passion for building web applications. My expertise lies in utilizing cutting-edge technologies such as React, Tailwind CSS and Bootstrap to create web applications interfaces.
          </p>

          <div>
          {resume.map(({ id, href,download}) => (
                  
                    // eslint-disable-next-line
                    <a key={id}  href={href} download={download}  target="_blank"   rel="noreferrer" className="group text-white w-fit px-2 py-3 my-2 flex items-center  bg-transparent  md:hover:shadow-md md:hover:shadow-gray-500 border-2 border-gray-700 md:hover:border-0  rounded-lg cursor-pointer" > 
                           View My Resume 
                          <span className="md:group-hover:rotate-180 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                          </span>
                    </a>
              ))
          }
          </div>
        </div>

        <div className='md:mb-2 md:ml-7 md:mt-[9rem] mt-12  h-fit '>
            <img className='md:mb-40  mb-2 ' src={main_bg } alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;