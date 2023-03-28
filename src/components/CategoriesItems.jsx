import React from "react";

const CategoriesItems = ({ item }) => {
  return (
    <div className="flex-1 h-[70vh] sm:h-[40vh] relative">
      <img className="w-full h-full object-cover" src={item.img} alt="" />
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center gap-5 flex-col">
        <h1 className=" text-2xl text-white font-semibold"> {item.title}</h1>
        <button
          className="p-2 text-md bg-white cursor-pointer border border-black
              "
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoriesItems;
