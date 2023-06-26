import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "backend tranfer intern",
    duration: "3 months",
    detail: "handle backend tranfer with aws, and react",
  },

  {
    year: 2022,
    title: "TIQC web develper",
    duration: "1 year",
    detail: "work on wordpress, chatbot, school map",
  },
];

const Work = () => {
  return (
    <div id="work" className="n-auto max-w-[1040] p-4 py-16 md:pl-20">
      <h1 className="text-center text-4xl font-bold text-[#001b53]">work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Work;
