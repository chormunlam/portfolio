const ProjectItem = ({ img, title }) => {
  return (
    <div
      className="
    group relative flex h-auto w-full items-center justify-center 
    rounded-xl from-gray-200 to-[#001b5e]
    shadow-xl shadow-gray-400 hover:bg-gradient-to-r"
    >
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform group-hover:block">
        <h3 className="text-center text-2xl font-bold tracking-wider text-white">
          {title}
        </h3>

        <p className="pb-4 pt-2 text-center text-white">React Js</p>
        <a href="">
          <p className="cursor-pointer rounded-lg bg-white p-3 text-center text-lg font-bold text-gray-700">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
