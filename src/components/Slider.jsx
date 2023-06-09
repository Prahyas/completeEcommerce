import React, { useEffect, useState } from "react";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  let lastIndex = -200;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? (slideIndex) => slideIndex - 100 : 200);
    } else {
      setSlideIndex(slideIndex < 200 ? (slideIndex) => slideIndex + 100 : 0);
    }
  };

  console.log("skideIndex", slideIndex);

  return (
    <div className="wrapper flex lg:h-[85vh] md:h-[50vh] sm:h-[50vh] h-auto  relative overflow-hidden ">
      <div
        className={`wrapper flex h-screen sm:h-full transition-all duration-500 ease-in-out`}
        style={{ transform: `translateX(-${slideIndex}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="slide w-screen h-full flex flex-col md:flex-row items-center pt-5"
          >
            <div className="imgContainer flex-1 h-full flex justify-center">
              <img
                className="h-full w-full sm:object-contain object-cover"
                src={item.img}
                alt="sliderImage"
              />
              
            </div>
            <div className="infoContainer flex-1 p-14">
              <h1 className="text-5xl font-semibold">{item.title}</h1>
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
        onClick={() => handleClick("left")}
        className="leftArrow bg-black rounded-[50%] h-12 w-12 flex justify-center items-center cursor-pointer opacity-80 absolute top-0 bottom-0 left-5 m-auto z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
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
        onClick={() => handleClick("right")}
        className="rightArrow bg-black rounded-[50%] h-12 w-12 flex justify-center items-center cursor-pointer opacity-80 absolute top-0 bottom-0 right-5 m-auto z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
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
