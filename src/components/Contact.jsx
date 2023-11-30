import Youtube from "./icons/youtube.jsx";
import Linkedin from "./icons/linkedin.jsx";
import Email from "./icons/email.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
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
                <Email />
              </h4>
              <a
                className="font-Poppins"
                href="mailto:keenencrummitt@gmail.com"
              >
                keenencrummitt@gmail.com
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
