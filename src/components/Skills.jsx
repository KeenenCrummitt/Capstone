import "./Skills.modules.css";

const Skills = () => {
  return (
      <div className="skills-container container px-5 py-14 mx-auto">
        <div className="skills-styling text-3xl">
          <h2>Skills</h2>
          <h4 className="top-skills-title text-gray-400 ">My Top Skills</h4>
          <br />
          <div className="skills-icons flex flex-wrap gap-4 justify-center">
            <div className="figma bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
                <div>
                    <img src="" alt="..." className="w-10 group-hover:scale-125 duration-200">
                </div>
            </div>
            <div className="react bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"></div>
            <div className="premier-pro bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"></div>
            <div className="xd bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"></div>
            <div className="photo-shop bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"></div>
            <div className="tailwind bg-white sm:cursor-pointer relative group w-full flex-items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"></div>
          </div>
        </div>
      </div>
  );
};

export default Skills;
