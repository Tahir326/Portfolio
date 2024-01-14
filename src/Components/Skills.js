import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-700",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-700",
    },
    // {
    //   id: 6,
    //   src: nextjs,
    //   title: "Next JS",
    //   style: "shadow-white",
    // },
    // {
    //   id: 7,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    {
      id: 8,
      src: github,
      title: "Git & GitHub",
      style: "shadow-orange-800",
    },
  ];

  return (
    <div
      name="skills"

      className=" bg-gradient-to-b from-black to-gray-800 w-full h-full"
    >
      <div className="   max-w-screen-2xl mx-auto p-4 py-32 flex flex-col justify-center md:w-[83%] w-full h-full text-white">
        <div className="">
          <p className=" text-4xl md:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:py-8 md:px-8 py-5  md:mt-0 px-3 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;