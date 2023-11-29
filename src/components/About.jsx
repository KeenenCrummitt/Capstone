const About = () => {
  return (
    <div className="flex justify-stretch h-full px-8 pt-8" id="about">
      <div>
        <div className="about mt-36 pl-5 underline md: underline-offset-[12px]">
          About Me
        </div>
        <br />
        <div className="paragraph container space-y-5 text-white text-sm flex-1 max-[30rem] pr-5 pl-5">
          <p>
            Graduate of Bridgerland Technical College in Logan, Utah. Acquired
            certificate in completion of web & mobile development program.
            Skilled in UX UI design and front-end coding. I love to create and
            make it interactive!
          </p>

          <p>
            Professional gardener by trade with over 10+ years of experience in
            the agriculture industry. Graduate of Utah State University with a
            degree in horticulture.
          </p>

          <p>
            I have a Youtube channel called The Mobile Gardener. The channel is
            dedicated to show how to garden from seed to harvest, make food, and
            enjoy it!
          </p>

          <p>
            Married to a beautiful wife and have two wonderful children. I love
            to involve them in what I do and I love them so much!
          </p>
        </div>
      </div>
      <div className="md:w-[100%] flex flex-col items-end relative mt-auto sm:w-2">
        <img
          className="ml-auto max-h-full flex-bottom"
          src="/public/logo-image-start.png"
          alt="selfie"
        />
      </div>
    </div>
  );
};

export default About;
