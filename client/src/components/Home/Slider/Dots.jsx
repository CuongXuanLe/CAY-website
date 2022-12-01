import React from "react";

const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div className="absolute bottom-3 flex w-full justify-center">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index
              ? "mx-[3px] inline-block h-3 w-3 cursor-pointer rounded-full border-2 border-white bg-slate-500 hover:bg-slate-600"
              : "mx-[3px] inline-block h-3 w-3 cursor-pointer rounded-full border-2 border-white bg-black opacity-20"
          }`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
