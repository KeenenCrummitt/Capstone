import FigmaIcon from "./icons/figma";
import JavascriptIcon from "./icons/javascript";
import PremierProIcon from "./icons/premier_pro";
import ReactIcon from "./icons/react";
import TailwindIcon from "./icons/tailwind";
import PhotoshopIcon from "./icons/photoshop";
import SkillCard from "./SkillCard";
import "./Skills.modules.css";

///////////////////////// Skills Card Function to individually call out icons /////////////////////////////

const Skills = () => {
  return (
    <div className="skills-container container px-5 py-14 mx-auto" id="skills">
      <div className="skills-styling text-3xl min-h-100vh">
        <h2>Skills</h2>
        <h4 className="top-skills-title text-gray-400 ">My Top Skills</h4>
        <br />

        <div className="skills-icons flex flex-wrap gap-4 justify-center overflow-auto max-h-[100vh]">
          <SkillCard
            icon={ReactIcon}
            title="React.js"
            text="Lorem ipsum dolor sit amet."
          />
          <SkillCard
            icon={JavascriptIcon}
            title="JavaScript"
            text="Lorem ipsum dolor sit amet."
          />
          <SkillCard
            icon={FigmaIcon}
            title="Figma"
            text="Lorem ipsum dolor sit amet."
          />
          <SkillCard
            icon={TailwindIcon}
            title="TailwindCSS"
            text="Lorem ipsum dolor sit amet."
          />
          <SkillCard
            icon={PhotoshopIcon}
            title="Adobe Photoshop"
            text="Lorem ipsum dolor sit amet."
          />
          <SkillCard
            icon={PremierProIcon}
            title="Adobe Premier Pro"
            text="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
