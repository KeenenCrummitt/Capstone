import Youtube from "./icons/youtube.jsx";
import Linkedin from "./icons/linkedin.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Github from "./icons/github";

const Contact = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3kqebg",
        "template_ctze3qm",
        form.current,
        "uz1XDiFCFlq2Aifdi"
      )
      .then(
        () => {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          alert("Your message was sent!");
        },
        () => {
          alert("Could not send message! Try Again.");
        }
      );
  };
  return (
    <div className="px-10 py-14 mx-auto max-w-3xl">
      <h4 className="subtitle text-opacity-1 text-white text-3xl">
        Contact Me
      </h4>
      <br />
      <div
        className="md:container md:flex-row flex-col gap-5 md:gap-8 flex"
        id="contact"
      >
        <div className="w-96">
          <form
            className="flex-1 max-w-[30rem] flex flex-col gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              ref={nameRef}
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              ref={emailRef}
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              ref={messageRef}
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>

            <button className="hire-button-1 btn self-start bg-white text-dark_primary">
              Submit
            </button>
          </form>
        </div>
        <div className="w-96 flex flex-col text-white gap-3">
          <div className="e-mail  gap-2">
            <div className="flex items-center gap-2">
              <h4 className="text-white fill-white">
                <Github />
              </h4>
              <a
                className="font-Poppins"
                href="https://github.com/KeenenCrummitt"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="linkedin flex items-center gap-2">
            <h4 className="text-white fill-white">
              <Linkedin />
            </h4>
            <a
              className="font-Poppins"
              href="https://www.linkedin.com/in/keenen-crummitt-01770785/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className="youtube flex items-center gap-2">
            <h4 className="text-white fill-white">
              <Youtube />
            </h4>
            <a
              className="font-Poppins"
              href="https://www.youtube.com/@TheMobileGardener-gg9uk"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
