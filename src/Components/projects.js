import React from "react";
import p1 from '../assets/portfolio/P1.png'
import p2 from '../assets/portfolio/P2.png'
import p3 from '../assets/portfolio/P3.png'


const Projects = () => {


  const projects = [
    {
      id: 1,
      src: p1,
      heading:'SHOE_STORE LANDING PAGE',
      para: 'A responsive Shoe_Store landing page build using HTML,CSS(TAILWIND),JAVASCRIPT',
      marginTop:'5rem',
      livelink:'https://tahir326.github.io/SHOE_STORE-/',
      code:'https://github.com/Tahir326/SHOE_STORE-'
 
    
      
    },
    {
      id: 2,
      src: p2,
      heading:'CLONEGPT (CHATGPT CLONE)',
      para: 'This application is a clone of ChatGPT, developed using React and Tailwind CSS.This application is integrated with the OpenAI API and operates similar to CHATGPT ',
      livelink:'https://muhammadtahirclonegpt.netlify.app/',
      code:'https://github.com/Tahir326/CLONE_GPT'
 
    },
    {
      id: 3,
      src: p3,
      heading:'Static Job_Listing Website',
      para: 'This website, built using Reactjs and BootStrap(CSS), presents a list of programming jobs sourced from a dummy data file. those jobs can be filtered based on the jobtitle, jobtype location and experience.',
      livelink:'https://tahir326.github.io/Job_Listing-App/',
      code:'https://github.com/Tahir326/Job_Listing-App'
    },
  ];

  return (
    <>
    <div
      name="projects"
      className="p-4 bg-gradient-to-b  from-gray-800 to-black  w-full text-white md:h-screen"
    >
      <div className="   max-w-screen-2xl p-4 mx-auto flex flex-col justify-center  md:w-[83%] w-full h-full">
        <div className="pb-8 md:mt-16">
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500">
        Projects
          </p>
          <p className="py-6"></p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-16  w-auto h-auto md:w-auto md:h-auto">
            
          {projects.map(({ id, src,heading,para,livelink,code,marginTop }) => (
            <>
            <div key={id} className="" >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 md:hover:scale-110 shadow-md shadow-gray-700 "
              />
              <h4 className="mt-5 text-2xl font-bold">{heading}</h4>

              <div className="mt-1 py-3 w-fit h-fit text-start text-gray-400 text-sm">
                <p className="px-2" >{para}</p>
              </div>
              <div className="  mt-8 flex md:hidden flex-row items-center justify-between">
                  <a href={livelink}   target="_blank" rel="noreferrer" className=" text-center md:text-lg text-base w-1/2 px-6 py-3  ml-0.5  duration-200 hover:scale-105 bg-transparent   border-2 border-gray-500 md:hover:border-0  rounded-lg ">
                  Visit Site
                  </a>
                  <a href={code} target="_blank" rel="noreferrer"  className=" text-center md:text-lg text-base w-1/2 px-6 py-3  ml-3.5  duration-200 hover:scale-105 bg-transparent   border-2 border-gray-500 md:hover:border-0  rounded-lg ">
                  View Code
                  </a>
              </div>

          

            </div>
            
            </>
      
          ))}
   
            {projects.map(({ id, src,heading,para,livelink,code,marginTop }) => (
              <div key={id} className=" hidden  mt-2 md:flex flex-row items-center justify-between">
                  <a href={livelink}   target="_blank" rel="noreferrer" className=" text-center md:text-lg text-base w-1/2 px-6 py-3  ml-2  duration-200 hover:scale-105 bg-transparent  md:hover:shadow-md md:hover:shadow-gray-400 border-2 border-gray-500 md:hover:border-0  rounded-lg cursor-pointer" >
                  Visit Site
                  </a>
                  <a href={code} target="_blank" rel="noreferrer"   className=" text-center md:text-lg text-base w-1/2 px-6 py-3  ml-3.5  duration-200 hover:scale-105 bg-transparent  md:hover:shadow-md md:hover:shadow-gray-400 border-2 border-gray-500 md:hover:border-0  rounded-lg cursor-pointer">
                  View Code
                  </a>
              </div>

                  ))}


         
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;