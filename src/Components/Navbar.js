import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import nvlogo from '../assets/nvlogo1.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setNav(false); // Close menu when a link is clicked
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-14 md:h-20 px-4 text-white z-50 transition-all duration-300 
      ${scrolling ? "backdrop-blur-md bg-white/10 shadow-lg" : "bg-transparent"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center w-full h-full">
        {/* Logo */}
        <div className="mr-[10%] md:ml-[2%] w-fit h-fit mb-[1%] mt-[1%]">
          <img
            className="w-[35%] h-[5%] md:w-[25%] md:h-[3%] transition-transform duration-500 hover:scale-125"
            src={nvlogo}
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <motion.li 
              key={id} 
              className="relative px-4 cursor-pointer capitalize text-gray-700 poppins-medium transition-all md:hover:scale-110 md:duration-300 duration-700"
              whileHover={{ scale: 1.1 }}
            >
              <Link 
                to={link} 
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}  
                onSetActive={() => setActiveSection(link)}
              
              >
                {link}
              </Link>

              {/* Animated Small Bottom Border */}
              {activeSection === link && (
                <motion.div
                  className="absolute  left-1/2 w-[40%] h-[3px] bg-[#3EDACB] rounded-full transform -translate-x-1/2"
                  initial={{ width: "0%" }}
                  animate={{ width: "40%" }}
                  transition={{ ease: "easeOut" }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden">
          {nav ? <FaTimes size={25} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.1 }}
                className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-600 poppins-medium"
              >
                <Link 
                  onClick={handleClick} 
                  to={link} 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  offset={-80}
                  onSetActive={() => setActiveSection(link)}
                  className="transition-all duration-200"
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
