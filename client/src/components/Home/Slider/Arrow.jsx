import React from "react";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="z-10">
      <span
        className="absolute top-0 h-full w-6 cursor-pointer text-center"
        onClick={prevSlide}
      >
        <div className="hidden">&#10094;</div>
      </span>
      <span
        className="absolute top-0 right-0 h-full w-6 cursor-pointer text-center"
        onClick={nextSlide}
      >
        <div className="hidden">&#10095;</div>
      </span>
    </div>
  );
};

export default Arrows;
