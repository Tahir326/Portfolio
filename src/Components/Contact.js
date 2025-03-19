import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-2xl mx-auto md:w-[83%] w-full h-full">
        <div className="pb-8 mt-10 md:mt-[6.45rem]">
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-center text-2xl">Leave a message</p>
        </div>

        <div name="contact" className="mb-9 flex justify-center items-center">
          <form
            action="https://getform.io/f/c386009e-b676-4e0c-9a7a-ff9d925737c3"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="mt-2 text-center md:text-2xl text-lg w-1/2 py-3 px-6 mx-auto bg-transparent md:hover:shadow-md md:hover:shadow-gray-300 border-2 border-gray-400 md:hover:border-0 rounded-lg cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
