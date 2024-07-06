import React from "react";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-black-200 selection:text-white-900">
      {/* Background gradient effect */}
      <div className="fixed inset-0 z-[-10] h-full w-full">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-b from-white via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-blue-200 via-white to-transparent rounded-[500px]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <StartPage />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
