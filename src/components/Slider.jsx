import React, { useState } from "react";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      console.log("leftclicked");
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  console.log("slideindex", slideIndex);
  return (
    <div className="wrapper flex w-screen h-[85vh] relative overflow-hidden">
      <div
        onClick={() => handleClick("left")}
        className="leftArrow bg-black rounded-[50%] h-12 w-12 flex justify-center items-center cursor-pointer opacity-80 absolute top-0 bottom-0 left-2 m-auto z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>

      <div
        className={`wrapper flex h-full translate-x-[${slideIndex * -100}vw]`}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="slide w-screen h-full flex items-center"
          >
            <div className="imgContainer flex-1 h-full flex justify-center pt-14">
              <img
                className="h-full w-full object-contain"
                src={item.img}
                alt="sliderImage"
              />
              
            </div>
            <div className="infoContainer flex-1 p-14">
              <h1 className="text-5xl">{item.title}</h1>
              <p className="my-9 text-lg font-medium ">{item.desc}</p>
              <button
                className="p-3 text-xl bg-transparent cursor-pointer border border-black
              "
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleClick("right")}
        className="rightArrow bg-black rounded-[50%] h-12 w-12 flex justify-center items-center cursor-pointer opacity-80 absolute top-0 bottom-0 right-2 m-auto z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
