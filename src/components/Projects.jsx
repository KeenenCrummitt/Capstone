import Carousel from "./ui/carousel";

const Projects = () => {
  return (
    <div className="md:container min-h-screen flex flex-col justify between">
      <div className="text-3xl pl-10 mt-7">
        <h2>Projects</h2>
        <h4>Creations</h4>
        <br />
      </div>
      <div className="flex relative items-center justify-center lg:flex-row flex-col-reverse gap-5">
        <div className="max-h-screen">
          <img
            src="/public/Keenen_Fist.png"
            alt="Keenen's Fist"
            className="max-h-screen inline-block"
          />
        </div>
        <Carousel>
          <div className="w-96 h-52">
            <img
              key="1"
              src="/public/GradApp.png"
              alt="Graduation App"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-96 h-52">
            <img
              key="2"
              src="/public/Home-Page-5.png"
              alt="Plumber-Tom Homepage"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-96 h-52">
            <img
              key="6"
              src="/public/ParkPage.png"
              alt="YellowStone Homepage 1"
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
