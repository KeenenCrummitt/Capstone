import FigmaIcon from "./icons/figma";
import JavascriptIcon from "./icons/javascript";
import PhotoshopIcon from "./icons/photoshop";
import PremierProIcon from "./icons/premier_pro";
import ReactIcon from "./icons/react";
import TailwindIcon from "./icons/tailwind";
import XDIcon from "./icons/xd";
import SkillCard from "./SkillCard";
import "./Skills.modules.css";

const Skills = () => {
  return (
    <div className="skills-container container px-5 py-14 mx-auto">
      <div className="skills-styling text-3xl">
        <h2>Skills</h2>
        <h4 className="top-skills-title text-gray-400 ">My Top Skills</h4>
        <br />

        <div className="skills-icons flex flex-wrap gap-4 justify-center">
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
            icon={XDIcon}
            title="Adobe XD"
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
