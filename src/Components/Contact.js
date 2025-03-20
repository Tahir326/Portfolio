import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="w-full min-h-screen bg-white mt-[2%]"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-2xl mx-auto md:w-[83%] w-full h-full">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 mt-10 md:mt-[6.45rem]"
        >
          <p className="text-4xl md:text-6xl poppins-bold inline border-b-4 text-[#181E4B] border-gray-300">
            Contact
          </p>
          <p className="py-6 text-center text-2xl poppins-regular text-gray-500">
            Leave a message
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          name="contact"
          className="mb-9 flex justify-center items-center"
        >
          <motion.form
            action="https://getform.io/f/c386009e-b676-4e0c-9a7a-ff9d925737c3"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Input Fields */}
            {["name", "email", "Subject"].map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-[2px] bg-gradient-to-r from-[#3EDACB] to-[#1AB8C9] rounded-md my-2"
              >
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  className="w-full p-2 poppins-regular bg-white border-2 border-transparent rounded-md text-[#181E4B] focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            ))}

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-[2px] bg-gradient-to-r from-[#3EDACB] to-[#1AB8C9] rounded-md mt-2"
            >
              <motion.textarea
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full p-2 poppins-regular rounded-md text-[#181E4B] focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </motion.div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 w-1/4 py-1.5 px-2 mx-auto md:text-2xl poppins-medium text-base text-[#181E4B] bg-gradient-to-r from-[#3EDACB] to-[#1AB8C9] rounded-3xl shadow-md"
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
