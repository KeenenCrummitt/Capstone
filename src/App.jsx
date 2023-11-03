import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Credentials from "./components/credentials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function MyApp() {
  return (
    <>
      {/************************************ Hire Me page  **************************************/}
      <Section className="kc-hero-gradient flex" id="Hire">
        <>
          <div className="md:bg-white md:w-[65%] h-full">
            <Navbar />
            <Credentials />
          </div>
          <div className="kc-image md:w-[35%] flex items-end relative">
            <img
              className="-ml-[45%] max-h-full"
              src="/Portfolio-img.png"
              alt="selfie"
            />
            <h1 className="text-white text-7xl rotate-90 absolute -right-52 top-96 md: ">
              KEENEN&nbsp;<span className="text-slate-700">CRUMMITT</span>
            </h1>
          </div>
        </>
      </Section>

      {/************************************ Skills page  **************************************/}

      <Section className="bg-blue-100" id="skills">
        <Skills className="skills-container px-5 py-5" />
      </Section>

      {/************************************ Projects page  **************************************/}

      <Section class="bg-white" id="projects">
        <Projects />
      </Section>

      {/************************************ Contact page  **************************************/}

      <Section className="bg-indigo-900">
        <Contact />
      </Section>
    </>
  );
}
