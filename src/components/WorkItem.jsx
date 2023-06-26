function WorkItem({ year, title, duration, detail }) {
  return (
    <ol className="relative flex flex-col border-l-2 border-stone-200 pl-6 md:flex-row">
      <li className="mb-10 ml-4">
        <div className="absolute -left-2.5 mt-1.5 h-3 w-3 rounded-full border-white bg-stone-200" />
        <p className="intems-center flex flex-row flex-wrap justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-[#001b53] px-2 py-1 font-semibold text-white">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{detail}</p>
      </li>
    </ol>
  );
}

export default WorkItem;
