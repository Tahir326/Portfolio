import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import nvlogo from '../assets/nvlogo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setNav(!nav);
    }, 150);
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-14 px-4 text-white bg-gradient-to-l from-gray-700 via-black to-black fixed z-50">
      <div className="mr-[10%] h-fit mb-[1%] mt-[1%]">
        <img className="w-[45%] h-[10%]" src={nvlogo} alt="Logo" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={26} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300">
              <Link onClick={handleClick} to={link} smooth duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
