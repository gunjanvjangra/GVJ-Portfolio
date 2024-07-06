import React from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects I have worked on:</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a
                href={project.website} // Add the website link here
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-8 rounded-lg hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-blue-900">
                {project.title}
              </h6>
              <p className="mb-4 text-black">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-blue-900 px-2 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
