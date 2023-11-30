import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Credentials from "./components/credentials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/footer";

export default function MyApp() {
  return (
    <>
      <Navbar />
      {/************************************ Hire Me page  **************************************/}
      <Section className="kc-hero-gradient flex justify-center md:justify-start pt-8 md:pt-0 ">
        <>
          <div
            className="flex flex-col md:flex-row justify-center items-center md:items-end px-4 md:bg-white md:w-[65%]"
            id="hero"
          >
            <div className="h-full flex justify-center items-center md:pl-8">
              <Credentials />
            </div>
            <div className=" w-[300px] h-auto md:max-w-[500px] md:w-[60%] md:-mr-[40%]">
              <img
                className=" max-h-full border-b-2 border-black md:border-b-0"
                src="/Portfolio-img.png"
                alt="selfie"
              />
            </div>
            <h1 className="text-white text-7xl rotate-90 absolute -right-52 top-96 hidden md:flex">
              KEENEN&nbsp;<span className="text-slate-700">CRUMMITT</span>
            </h1>
          </div>
        </>
      </Section>
      {/************************************ About page  **************************************/}
      <Section className="bg-indigo-900 text-white text-7xl">
        <About />
      </Section>
      {/************************************ Skills page  **************************************/}
      <Section className="bg-blue-100 overflow-hidden" id="skills">
        <Skills className="skills-container px-5 py-5" />
      </Section>
      {/************************************ Projects page  **************************************/}
      <Section class="bg-white" id="projects">
        <Projects />
      </Section>
      {/************************************ Contact page  **************************************/}
      <div className="bg-indigo-900 z-10" id="hire-btn">
        <Contact />
        <Footer />
      </div>
    </>
  );
}
