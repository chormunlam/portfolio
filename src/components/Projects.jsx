import ProjectItem from "./ProjectItem";
import ubereat from "../assets/ubereat.webp";
import js from "../assets/javascript.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20">
      <h1 className="text-center text-4xl font-bold text-[#001b5e]">
        Projects
      </h1>
      ;
      <p className="py-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione
        assumenda earum? Atque, incidunt soluta voluptates odio dolorem cum
        blanditiis distinctio impedit voluptate voluptatibus molestiae minima
        labore cumque similique beatae.
      </p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem img={js} title="Javascript" />
        <ProjectItem img={ubereat} title="Aws" />
      </div>
    </div>
  );
};

export default Projects;
