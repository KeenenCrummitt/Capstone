import { useState } from "react";
import "./Navbar.modules.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white">
      <button onClick={() => setOpen((prev) => !prev)} className=" md:hidden">
        MENU
      </button>
      <div className="my-4 hidden md:block">
        <a
          className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600"
          href="#hero"
        >
          Home
        </a>
        <a
          className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600"
          href="#about"
        >
          About
        </a>
        <a
          className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600"
          href="#contact"
        >
          Contact
        </a>
      </div>
      {open && (
        <div className="md:hidden flex flex-col absolute top-0 right-0 w-[70%] h-screen bg-white z-30">
          <a
            className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600 ml-8 text-5xl mt-8 mb-8"
            href="#hero"
          >
            Home
          </a>
          <a
            className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600 ml-8 text-5xl mt-8 mb-8"
            href="#about"
          >
            About
          </a>
          <a
            className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600 ml-8 text-5xl mt-8 mb-8"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600 ml-8 text-5xl mt-8 mb-8"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="mx-4 hover:border-solid hover:border-b-2 hover:border-slate-600 ml-8 text-5xl mt-8 mb-8"
            href="#contact"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
