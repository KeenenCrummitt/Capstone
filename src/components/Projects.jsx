import Modal from "./Modal";

const Projects = () => {
  return (
    <div
      className="min-h-screen flex flex-col w-full justify between"
      id="projects"
    >
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
            className="max-h-screen relative inline-block -z-10"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-center">
          <Modal
            fullImage="/public/full-images/GradApp.png"
            cropImage="/public/cropimages/GradApp.png"
            text="Graduation App"
          />

          <Modal
            fullImage="/public/full-images/tom-home.png"
            cropImage="/public/cropimages/tom-home.png"
            text="Plumber-Tom Homepage"
          />

          <Modal
            fullImage="/public/full-images/national-park-home.png"
            cropImage="/public/cropimages/national-park-page.png"
            text="National Park Homepage"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
