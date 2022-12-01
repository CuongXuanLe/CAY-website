import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrow";
import Dots from "./Dots";
import dataSlider from "./dataSlider";

const len = dataSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative h-full w-full">
      <SliderContent activeIndex={activeIndex} imageSlider={dataSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={dataSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
