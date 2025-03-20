import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import nvlogo from '../assets/nvlogo1.png';

function Footer() {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={22} />,
            href: "https://www.linkedin.com/in/muhammad-tahir326/",
        },
        {
            id: 2,
            child: <FaGithub size={22} />,
            href: "https://github.com/Tahir326",
        },
        {
            id: 3,
            child: <HiOutlineMail size={22} />,
            href: "mailto:muhammadtahir2056@gmail.com",
        },
    ];

    return (
        <motion.div 
            className="flex flex-row justify-between items-center w-full h-16 md:h-32 px-4 py-4 bg-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }} // Fade in & slide up
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Logo Animation */}
            <motion.div 
                className="w-fit h-fit md:ml-[87%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5, ease: "easeOut"}}
            >
                <img className="md:w-full md:h-full w-[55%] h-[5%] object-cover cursor-pointer mb-2 md:mb-0" src={nvlogo} alt="NV Logo" />
            </motion.div>

            {/* Social Links with Animation */}
            <ul className="flex flex-row items-center">
                {links.map(({ id, child, href }) => (
                    <motion.li
                        key={id}
                        className="w-auto h-6 px-2 md:hidden bg-transparent  rounded-md ml-3 "
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                         <a 
                            href={href} 
                            className="bg-gradient-to-r from-[#3EDACB] to-[#1AB8C9] bg-clip-text  text-2xl"
                            target="_blank" 
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default Footer;
