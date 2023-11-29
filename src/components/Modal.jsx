import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ fullImage, cropImage }) => {
  const [showModal, setShowModal] = useState();
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {/* A modal was created to show the full size of each picture that the carousel could not */}
      {showModal ? (
        <>
          <img
            src={fullImage}
            alt="Graduation App"
            className="max-h-screen inline-block"
          />
        </>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  fullImage: PropTypes.string.isRequired,
  cropImage: PropTypes.string.isRequired,
};

export default Modal;
