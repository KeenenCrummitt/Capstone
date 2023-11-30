import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ fullImage, cropImage, text }) => {
  const [showModal, setShowModal] = useState();

  const handleBackgroundClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        className="shadow-lg rounded-lg overflow-hidden"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img className="object-contain w-48" src={cropImage} alt={text} />
      </button>
      {/* A modal was created to show the full size of each picture that the carousel could not */}
      {showModal ? (
        <div
          onClick={handleBackgroundClick}
          className="top-0 left-0 fixed w-screen h-screen z-[100] bg-black/50 flex items-center justify-center"
        >
          <img
            src={fullImage}
            alt={text}
            className="max-h-screen inline-block"
          />
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  fullImage: PropTypes.string.isRequired,
  cropImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
