import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={27} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-tahir326/",
      style: "rounded-tr-md",
    },
    {
        id: 2,
        child: (
          <>
            GitHub <FaGithub size={27} />
          </>
        ),
        href: "https://github.com/Tahir326",
       
        
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:muhammadtahir2056@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-105px] hover:ml-[-13px] hover:rounded-md duration-300 bg-gradient-to-r from-[#3B447A] to-[#1b2253]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
