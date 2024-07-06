import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // Pick a random quote from the data
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        setQuote(randomQuote);
      })
      .catch((error) => console.error("Error fetching quote:", error));
  };

  return (
    <div className="container mx-auto px-8">
      {/* Inverted commas */}
      <div className="flex justify-start mt-6"></div>

      {/* Merged quote and contact box */}
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden md:flex md:items-center md:justify-between">
        {/* Left section with quote */}
        <div className="px-6 py-8 md:w-1/2">
          <p className="text-lg font-light italic">{quote}</p>
        </div>

        {/* Right section with contact form and social media icons */}
        <div className="px-6 py-8 md:w-1/2">
          <h2 className="text-4xl text-center font-bold mb-6">Let's Connect</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none h-20"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-white to-purple-500 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:from-blue-400 hover:to-purple-400 focus:outline-none"
            >
              Send Message
            </button>
          </form>

          {/* Social media icons with links */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.linkedin.com/in/gunjanvaishnavijangra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer mx-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gunjanvjangra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 hover:text-gray-800 cursor-pointer mx-2"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:gunjanvaishnavijangra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-red-500 hover:text-red-700 cursor-pointer mx-2"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright notice centered at the bottom */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} GVJ. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
