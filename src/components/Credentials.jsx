import React from "react";
import Typed from "typed.js";
import "./Credentials.css";

const Credentials = () => {
  const titleEl = React.useRef(null);
  const oneYearEl = React.useRef(null);
  const yearsExperienceEl = React.useRef(null);
  const projectsDoneEl = React.useRef(null);
  const tenPlusEl = React.useRef(null);

  React.useEffect(() => {
    // Create reference to store the DOM element containing the animation
    const title = new Typed(titleEl.current, {
      strings: [
        "My name is Keenen",
        "I'm a...",
        "UX UI Designer",
        "Front-end Developer",
      ],
      typeSpeed: 50,
      showCursor: false,
    });

    const oneYear = new Typed(oneYearEl.current, {
      strings: ["1+"],
      typeSpeed: 50,
      startDelay: 5000,
      showCursor: false,
    });

    const yearsExperience = new Typed(yearsExperienceEl.current, {
      strings: ["Years of experience in web development"],
      typeSpeed: 20,
      startDelay: 5200,
      showCursor: false,
    });

    const projectsDone = new Typed(projectsDoneEl.current, {
      strings: ["Projects worked on during my career"],
      typeSpeed: 20,
      startDelay: 6800,
      showCursor: false,
    });

    const tenPlus = new Typed(tenPlusEl.current, {
      strings: ["10+"],
      typeSpeed: 20,
      startDelay: 8200,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      title.destroy();
      yearsExperience.destroy();
      oneYear.destroy();
      projectsDone.destroy();
      tenPlus.destroy();
    };
  }, []);

  return (
    <div className="">
      <h2 ref={titleEl}>UX UI Designer</h2>
      <a href="#contact">
        <button className="hire-button">Hire Me</button>
      </a>
      <div className="work">
        <div className="experience">
          <h3 ref={oneYearEl}>1+</h3>
          <p ref={yearsExperienceEl}>Years of experience in web development</p>
        </div>
        <div className="projects">
          <h3 ref={tenPlusEl}>10+</h3>
          <p ref={projectsDoneEl}>Projects worked on during my career</p>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
