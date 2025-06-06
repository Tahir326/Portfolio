import React from "react";
import { motion } from "framer-motion";

import p1 from "../assets/portfolio/P1.png";
import p2 from "../assets/portfolio/P2.png";
import p3 from "../assets/portfolio/P3.png";
import p4 from "../assets/portfolio/P4.png";
import p5 from "../assets/portfolio/P5.png";
import p6 from "../assets/portfolio/P6-2.png";
import p7 from "../assets/portfolio/P7-1.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: p4,
      heading: "AI APPAREL",
      para: "AI Apparel is an AI-powered custom t-shirt design E-commerce platform.",
      livelink: "https://ai-apparel-lovat.vercel.app/",
      code: "",
    },
    {
      id: 6,
      src: p6,
      heading: "Mobile Chat App",
      para: "Mobile chat app built with React Native CLI and Socket.IO for real-time communication.",
      livelink: "",
      code: "https://github.com/Tahir326/Mobile_Chat_App",
    },
    {
      id: 2,
      src: p5,
      heading: "STOCKROOM PITCH SITE",
      para: "A modern, responsive Stockroom-pitch website built with Next.js and Tailwind CSS.",
      livelink: "https://m-tahir-stockroom-project.vercel.app/",
      code: "https://github.com/Tahir326/Stockroom-Project",
    },
    {
      id: 3,
      src: p2,
      heading: "CLONEGPT (CHATGPT CLONE)",
      para: "A ChatGPT clone, featuring real-time AI responses. Powered by the OpenAI API for seamless conversations.",
      livelink: "https://muhammadtahirclonegpt.netlify.app/",
      code: "https://github.com/Tahir326/CLONE_GPT",
    },
    {
      id: 4,
      src: p3,
      heading: "Job Listing Site",
      para: "This website showcases a list of programming jobs and offers a simple, responsive interface.",
      livelink: "https://tahir326.github.io/Job_Listing-App/",
      code: "https://github.com/Tahir326/Job_Listing-App",
    },
    {
      id: 7,
      src: p7,
      heading: "Facebook App Clone",
      para: "Facebook app clone made with React Native CLI.",
      livelink: "",
      code: "https://github.com/Tahir326/Facebook-app-Clone",
    },
    {
      id: 5,
      src: p1,
      heading: "SHOE STORE LANDING PAGE",
      para: "A responsive Shoe Store landing page built using HTML, CSS (Tailwind CSS), and JavaScript.",
      livelink: "https://tahir326.github.io/SHOE_STORE-/",
      code: "https://github.com/Tahir326/SHOE_STORE-",
    },

  ];

  return (
    <div name="projects" className="p-4 bg-white text-white">
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center md:w-[83%] w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pb-8 md:mt-16"
        >
          <p className="text-4xl md:text-6xl text-[#181E4B] poppins-bold inline border-b-4 border-gray-300">
            Projects
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {projects.map(({ id, src, heading, para, livelink, code }) => (
            <motion.div
              key={id}
              className="flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className={`w-full h-40 flex items-center justify-center overflow-hidden rounded-xl shadow-md shadow-gray-200`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={src}
                  alt={heading}
                  className={`w-full h-full ${id === 6 || id === 7 ? "object-contain" : "object-fill"}`}
                />
              </motion.div>

              <h4 className="mt-5 text-xl poppins-bold text-[#181E4B]">
                {heading}
              </h4>
              <div className="mt-2 text-sm text-gray-700 h-20 overflow-y-auto scrollbar-hide">
                <p>{para}</p>
              </div>

              <div className="flex-grow"></div>

              <div
                className={`mt-4 flex ${
                  code ? "" : "justify-center"
                  
                } ${livelink  ? "" : "justify-center"}`}
              >
                  {livelink && (
                <motion.a
                  href={livelink}
                  target="_blank"
                  rel="noreferrer"
                  className="poppins-semibold text-[#181E4B] text-base  w-1/2 px-2 py-2 text-center bg-gradient-to-r from-[#4AEFDF] to-[#22D3EE] md:hover:shadow-md md:hover:shadow-[#028774] rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Visit Site
                </motion.a>
                    )}
                {code && (
                  <motion.a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="poppins-semibold text-base text-[#181E4B] w-1/2 px-2 py-2 text-center bg-gradient-to-r from-[#4AEFDF] to-[#22D3EE] md:hover:shadow-md md:hover:shadow-[#028774] rounded-full ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
