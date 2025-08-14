import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.svg";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import MUI from "..//assets/material-ui.svg";
// import typescript from "../assets/TypeScript.png";
import node from "../assets/node.png";
import express from "../assets/Express (2).png";
import MongoDB from "../assets/MongoDB.png";
// import MySQL from "../assets/MySQL.png";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML"},
    { id: 2, src: css, title: "CSS"},
    { id: 3, src: tailwind, title: "Tailwind CSS"},
    { id: 12, src: MUI, title: "Material UI"},
    { id: 4, src: javascript, title: "JavaScript"},
    // { id: 5, src: typescript, title: "TypeScript", style: "shadow-lg shadow-blue-900" },
    { id: 6, src: reactImage, title: "React"},
    { id: 7, src: nextjs, title: "Next.js"},
    // { id: 6, src: reactImage, title: "React Native"},
    { id: 8, src: node, title: "Node.js"},
    { id: 9, src: express, title: "Express.js"},
    { id: 10, src: MongoDB, title: "MongoDB"},
    { id: 11, src: github, title: "Git & GitHub"},
  ];

  return (
    <div name="skills" className="bg-white w-full h-full">
      <div className="max-w-screen-2xl mx-auto p-4 py-32 flex flex-col justify-center md:w-[83%] w-full h-full">
        
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          <p className="text-4xl md:text-6xl poppins-bold border-b-4 text-[#181E4B] border-gray-300 p-2 inline">
            Skills
          </p>
        </motion.div>

        <p className="py-6"></p>

        {/* Animated Skill Cards */}
        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:py-8 md:px-8 py-5 md:mt-0 px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
            hidden: { opacity: 0 },
          }}
        >
          {techs.map(({ id, src, title }) => (
            <motion.div
              key={id}
              className="py-2 rounded-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.15 }}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-gray-700 poppins-medium">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
