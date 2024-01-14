import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import nvlogo from '../assets/nvlogo.png'

function Footer() {
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={20} />
            </>
          ),
          href: "https://www.linkedin.com/in/muhammad-tahir326/",
          
        },
   
        {
          id: 3,
          child: (
            <>
            <HiOutlineMail size={20} />
            </>
          ),
          href: "mailto:mtk456321@gmail.com",
        },
        {
            id: 2,
            child: (
              <>
               <FaGithub size={20} />
              </>
            ),
            href: "https://github.com/Tahir326",
            
            
        },
      ];
  return (
    <div className=" flex flex-row justify-between overflow-hidden items-center w-full h-14  px-4  bg-gradient-to-b  from-gray-800 to-gray-900 border-transparent p-4 text-white overflow-y-hidden  ">
       <div className='  md:mr-0 w-full h-fit  md:ml-[87%] '>
         <img className='md:py-4 md:ml-8 md:w-64 md:h-64 p-4 mb-2 md:p-0 md:mb-0 ml-[-15%] ' src={nvlogo} alt="" />
       </div>
       <div className='  '>
                <ul className='flex flex-row items-center '>
                    {links.map(({ id, child, href}) => (
                    <li
                        key={id}
                        className={
                        " w-auto  h-6 px-2  md:hidden bg-transparent shadow-md shadow-gray-700 rounded-md ml-3" 
                        
                        }
                    >
                        <a
                        href={href}
                        className="flex justify-between items-center mb-32 text-white"
                
                        target="_blank"
                        rel="noreferrer"
                        >
                        {child}
                        </a>
                    </li>
                    ))}
                </ul>
      </div>
      
    </div>
  )
}

export default Footer
