import React from "react";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <div>
      {imageSlider.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "" : "hidden"}>
          <img className="h-72 w-full" src={slide.imgUrl} alt=""></img>
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
