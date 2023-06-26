import { TypeAnimation } from "react-type-animation";
import {  FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="scale-x[-1] object- h-screen w-full object-cover"
        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        alt="cloudpink"
      />
      <div className="absolute left-0 top-0 h-screen w-full bg-white/50">
        <div className="m-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center lg:items-start">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            {" "}
            I am Chormun Lam
          </h1>
          <h2 className="flex pt-4 text-2xl text-gray-800 sm:text-3xl">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "AWS Certified Solutions Architect ",
                1000,
                "Efficient learner",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex w-full max-w-[100px] justify-between pt-6">
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
