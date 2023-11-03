import { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  return (
    <div className="relative shadow-xl rounded-xl overflow-hidden w-96 border border-solid border-slate-200">
      <div
        className="flex w-fit z-0 transition-all ease-in-out duration-200"
        style={{
          transform: `translateX(-${currentIndex * 24}rem)`, // Adjust for the item width
        }}
      >
        {children}
      </div>
      <div className="z-10">
        <button
          onClick={prevSlide}
          className="bg-blue-500 text-white p-2 rounded-full absolute left-2 top-1/2 rotate-180 transform -translate-y-1/2"
        >
          &#x2794;
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-500 text-white p-2 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          &#x2794;
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Carousel;
