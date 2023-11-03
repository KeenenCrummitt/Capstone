const Contact = () => {
  return (
    <>
      <div className="md:container px-10 py-14">
        <h4 className="subtitle text-opacity-1 text-white text-3xl">
          Contact Me
        </h4>
        <br />
        <form className="flex-1 max-w-[30rem] flex flex-col gap-5">
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
          <button className="btn self-start bg-white text-dark_primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
