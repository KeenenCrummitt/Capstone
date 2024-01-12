import { useState } from "react";
import "./Navbar.modules.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" md:hidden absolute top-0 left-0 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2 w-12 h-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
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
