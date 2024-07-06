import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/G.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        {/* Ensure no additional styling is applied to preserve original colors */}
        <img src={logo} alt="logo" className="w-20 mx-2" />
      </div>
      <div className="m-8 flex items-center gap-8 text-xl">
        <a
          href="#home"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Contact
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/gunjanvaishnavijangra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gunjanvjangra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:gunjanvaishnavijangra@gmail.com"
          className="text-black hover:text-blue-500"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
