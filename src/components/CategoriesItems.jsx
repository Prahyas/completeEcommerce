import React from "react";
import { Link } from "react-router-dom";

const CategoriesItems = ({ item }) => {
  return (
    <div className="lg:w-[24%] md:w-[32%]  sm:w-[48%] w-full h-auto relative">
      <Link to={`/products/${item.cat}`}>
        <img className="w-full h-full object-cover" src={item.img} alt="" />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center gap-5 flex-col">
          <h1 className="text-center text-xl sm:text-sm md:text-lg text-white font-semibold">
            {" "}
            {item.title}
          </h1>
          <button
            className="p-2 text-sm bg-white cursor-pointer border border-black
              "
          >
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesItems;
