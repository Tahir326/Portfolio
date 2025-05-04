import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="p-4 w-full h-screen bg-white flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center px-4 md:w-[83%] w-full h-full"
      >
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="text-4xl md:text-6xl text-[#181E4B] poppins-bold  inline border-b-4 border-gray-300">
            About
          </p>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-xl md:mt-12 mt-12 text-gray-700 text-center poppins-regular"
        >
          Skilled and detail-oriented software developer with a strong
          background in programming and a passion for building innovative
          software solutions. Proficient in JavaScript with experience in
          developing dynamic, scalable, and user-friendly applications.
          Committed to leveraging technical expertise and a passion for
          innovation to deliver impactful, high-quality software solutions.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
