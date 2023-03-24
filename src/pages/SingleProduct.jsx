import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const SingleProduct = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="wrapper flex h-[85vh] p-8">
        <div className="slide w-screen h-full flex items-center">
          <div className="imgContainer flex-1 h-full flex justify-center">
            <img
              className="h-full w-full object-contain"
              src="https://im.uniqlo.com/global-cms/spa/resa21a851aec87c0097d7fb96b52a600ccfr.jpg"
              alt="sliderImage"
            />
            
          </div>
          <div className="infoContainer max-h-full flex-1 p-14 space-y-8">
            <h1 className="text-4xl">Product</h1>
            <p className="text-lg font-medium ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              id ratione sint hic animi aliquid. Excepturi cum libero numquam
              asperiores ducimus! Accusamus voluptatem soluta culpa? Eveniet
              illo vel similique corporis?
            </p>
            <h1 className="text-4xl">$50</h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span>Color:</span>
                <div class="flex space-x-2">
                  <button class="w-8 h-8  bg-black cursor-pointer border-2 border-black"></button>
                  <button class="w-8 h-8  bg-white cursor-pointer border-2 border-black"></button>
                  <button class="w-8 h-8  bg-red-400 cursor-pointer border-2 border-black"></button>
                  <button class="w-8 h-8  bg-green-400 cursor-pointer border-2 border-black"></button>
                  <button class="w-8 h-8  bg-blue-400 cursor-pointer border-2 border-black"></button>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <span>Sizes: </span>
                <div class="flex space-x-2">
                  <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                    S
                  </button>
                  <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                    M
                  </button>
                  <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                    L
                  </button>
                  <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                    XL
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span>Quantity: </span>
              <div className="flex items-center gap-3">
                <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  -
                </button>
                <input type="number" className="w-20 p-2 border border-black" />
                <button class="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  +
                </button>
              </div>
            </div>
            <button
              className=" p-3 text-xl bg-transparent cursor-pointer border border-black
              "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
