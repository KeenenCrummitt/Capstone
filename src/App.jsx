import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Credentials from "./components/credentials";

export default function MyApp() {
  return (
    <>
      {/************************************ Hire Me page  **************************************/}
      <Section className="kc-hero-gradient flex">
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
      </Section>

      {/************************************ Skills page  **************************************/}

      <Section>
        <div className="bg-gradient-to-r  from-sky-200 via-sky-100 to bg-white h-full">
          <Skills className="skills-container px-5 py-5" />
        </div>
      </Section>
      {/* <Section></Section>
      <Section></Section> */}

      {/* <Navbar /> */}
      {/* <div className="hero-box">
        <div className="hero-background">
          <div className="hero-left"></div>
          <div className="hero-right">
            <h1 className="keenen">
              KEENEN <span className="crummitt">CRUMMITT</span>
            </h1>
          </div>
        </div>
        <div className="hero-content">
          
          <div className="self-image">
            <img className="img1" src="/Portfolio-img.png" alt="selfie" />
          </div>
        </div>
      </div> */}
      {/* <Skills /> */}
    </>
  );
}
