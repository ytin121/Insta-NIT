import * as React from "react";
import project from "./page3/projects/project";
const Projects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col self-stretch px-20 py-12 mt-20 w-full bg-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-center mt-2 text-5xl text-cyan-400 whitespace-nowrap max-md:text-4xl">
          <span className="font-extrabold">Our</span>
          <span className="font-extrabold text-cyan-400"> Projects</span>
        </div>
        <div className="mt-32 mb-52 max-md:my-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            {project.map(project =>

              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full hover:border-red-300 cursor-pointer">
                <a href={project.link}>
                  <img
                    loading="lazy"
                    src={project.src}
                    className="flex-1 grow shrink-0 w-full aspect-[1.33] max-md:mt-10"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
