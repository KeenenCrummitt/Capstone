import Modal from "./Modal";
import Carousel from "./ui/carousel";
import { useState } from "react";

const Projects = () => {
  const [modalImage, setModalImage] = useState();
  const [openModal, setOpenModal] = useState();

  function openImageModal(url) {
    setModalImage(url);
    setOpenModal();
  }

  return (
    <div
      className="md:container min-h-screen flex flex-col justify between"
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
            className="max-h-screen inline-block"
          />
        </div>
        <div id="imageGrid">
          <img
            src="some/image-crop.png"
            alt="some text"
            onClick={() => openImageModal("some/image-full.png")}
          />
        </div>
        {openModal && <Modal src={modalImage} />}
        <Carousel>
          <div className="w-96 h-52">
            <Modal fullImage="" cropImage="/public/GradApp.png" />
          </div>
          <div className="w-96 h-52">
            <Modal fullImage="" cropImage="/public/Home-Page-5.png" />
          </div>
          <div className="w-96 h-52">
            <Modal fullImage="" cropImage="/public/ParkPage.png" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
