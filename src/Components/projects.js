import React from "react";
import p1 from '../assets/portfolio/P1.png';
import p2 from '../assets/portfolio/P2.png';
import p3 from '../assets/portfolio/P3.png';
import p4 from '../assets/portfolio/P4.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: p4,
      heading: 'AI APPAREL',
      para: 'AI Apparel is an AI-powered custom t-shirt design e-commerce platform that lets users create unique designs effortlessly. Upload your own image or use our AI-driven text-to-image generator to craft personalized fashion. Enjoy a seamless ordering experience with doorstep delivery and flexible payment options.',
      livelink: 'https://ai-apparel-lovat.vercel.app/',
      code: ''
    },
    {
      id: 2,
      src: p2,
      heading: 'CLONEGPT (CHATGPT CLONE)',
      para: 'This application is a clone of ChatGPT, developed using React and Tailwind CSS. It is integrated with the OpenAI API and operates similarly to ChatGPT.',
      livelink: 'https://muhammadtahirclonegpt.netlify.app/',
      code: 'https://github.com/Tahir326/CLONE_GPT'
    },
    {
      id: 3,
      src: p3,
      heading: 'Static Job Listing Website',
      para: 'This website, built using React.js and Bootstrap, presents a list of programming jobs sourced from a dummy data file. Jobs can be filtered based on title, type, location, and experience.',
      livelink: 'https://tahir326.github.io/Job_Listing-App/',
      code: 'https://github.com/Tahir326/Job_Listing-App'
    },
    {
      id: 4,
      src: p1,
      heading: 'SHOE_STORE LANDING PAGE',
      para: 'A responsive Shoe Store landing page built using HTML, CSS (Tailwind), and JavaScript.',
      livelink: 'https://tahir326.github.io/SHOE_STORE-/',
      code: 'https://github.com/Tahir326/SHOE_STORE-'
    },
  ];

  return (
    <div name="projects" className="p-4 bg-gradient-to-b from-gray-800 to-black w-full text-white">
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center md:w-[83%] w-full">
        
        {/* Heading */}
        <div className="pb-8 md:mt-16">
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, heading, para, livelink, code }) => (
            <div key={id} className="flex flex-col h-full ">
              
              {/* Image */}
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-xl transition-transform duration-500 hover:scale-110 ">
                <img 
                  src={src} 
                  alt={heading} 
                  className="w-full h-full object-contain "
                />
              </div>

              {/* Title */}
              <h4 className="mt-5 text-2xl font-bold">{heading}</h4>

              {/* Description (Scrollable) */}
              <div className="mt-2 text-sm text-gray-400 h-20 overflow-y-auto scrollbar-hide">
                <p>{para}</p>
              </div>

              {/* Spacer to align buttons at bottom */}
              <div className="flex-grow"></div>

              {/* Buttons */}
              <div className={`mt-4 flex ${code ? "justify-between" : "justify-center"}`}>
                <a href={livelink} target="_blank" rel="noreferrer" className="w-1/2 px-4 py-2 text-center border-2 border-gray-500 rounded-lg duration-200 hover:scale-105">
                  Visit Site
                </a>
                {code && (
                  <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-4 py-2 text-center border-2 border-gray-500 rounded-lg duration-200 hover:scale-105 ml-2">
                    View Code
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
