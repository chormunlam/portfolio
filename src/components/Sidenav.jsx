import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        className="absolute right-4 top-4 z-[99] "
        onClick={handleNav}
      />
      {nav ? (
        <div className="bg-green/90 fixed z-20 flex h-screen w-full flex-col items-center justify-center">
          <a
            href="#main"
            className="m-2 flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="m-2 flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#main"
            className="m-2 flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="m-2 flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#main"
            className="m-2 flex w-[75%] cursor-pointer justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      /do sth else here */ div
      <div className="fixed top-[25%] z-10 hidden md:block">
        <div className="flex flex-col">
          <a
            href="#main"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4
          shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4
          shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4
          shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4
          shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="m-2 cursor-pointer rounded-full bg-gray-100 p-4
          shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
