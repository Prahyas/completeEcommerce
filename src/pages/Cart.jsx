import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="wrapper p-5">
        <h1 className="font-semibold text-center text-2xl"> Your bag</h1>
        <div className="top flex items-center justify-between">
          <button
            className="p-2 text-md bg-transparent cursor-pointer border border-black
          "
          >
            Continue shopping
          </button>
          <div className="space-x-4">
            <span className="underline cursor-pointer">Shopping Bag (2)</span>
            <span className="underline cursor-pointer">Shopping Bag (5)</span>
          </div>
          <button
            className="p-2 text-md bg-black text-white cursor-pointer border border-black
          "
          >
            Checkout
          </button>
        </div>
        <div className="bottom mt-5 flex justify-between">
          <div className="info flex-[3_3_0%]">
            <div className="product flex justify-between ">
              <div className="productDetail flex-[2_2_0%] flex">
                <div>
                  <img
                    className="w-44 h-44"
                    src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/457823/sub/usgoods_457823_sub7.jpg?width=850"
                    alt=""
                  />
                </div>
                <div className="details text-lg p-5 flex flex-col justify-between">
                  <span>
                    <strong>Product</strong> : Shoes
                  </span>
                  <span>
                    <strong>ID</strong> : 123456
                  </span>
                  <button className="w-8 h-8  bg-black cursor-pointer border-2 border-black"></button>

                  <span>
                    <strong>Size</strong> : Xl
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  -
                </button>
                <span>2</span>
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  +
                </button>
              </div>
              <div className="priceDetails flex-1 flex flex-col justify-center items-center gap-8">
                <p className="text-2xl font-medium">$30</p>
              </div>
            </div>
            <hr className="w-full h-[1px] my-1 bg-black border-0 opacity-10" />

            <div className="product flex justify-between ">
              <div className="productDetail flex-[2_2_0%] flex">
                <div className="w-44 h-44">
                  <img
                    className="w-full h-full object-contain"
                    src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/457823/sub/usgoods_457823_sub7.jpg?width=850"
                    alt=""
                  />
                </div>
                <div className="details text-lg p-5 flex flex-col justify-between">
                  <span>
                    <strong>Product</strong> : Shoes
                  </span>
                  <span>
                    <strong>ID</strong> : 123456
                  </span>
                  <button className="w-8 h-8  bg-black cursor-pointer border-2 border-black"></button>

                  <span>
                    <strong>Size</strong> : Xl
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  -
                </button>
                <span>2</span>
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  +
                </button>
              </div>
              <div className="priceDetails flex-1 flex flex-col justify-center items-center gap-8">
                <p className="text-2xl font-medium">$30</p>
              </div>
            </div>
            <hr className="w-full h-[1px] my-1 bg-black border-0 opacity-10 " />

            <div className="product flex justify-between ">
              <div className="productDetail flex-[2_2_0%] flex">
                <div className="w-44 h-44">
                  <img
                    className="w-full h-full object-contain"
                    src="https://image.uniqlo.com/UQ/ST3/us/imagesgoods/457823/sub/usgoods_457823_sub7.jpg?width=850"
                    alt=""
                  />
                </div>
                <div className="details text-lg p-5 flex flex-col justify-between">
                  <span>
                    <strong>Product</strong> : Shoes
                  </span>
                  <span>
                    <strong>ID</strong> : 123456
                  </span>
                  <button className="w-8 h-8  bg-black cursor-pointer border-2 border-black"></button>

                  <span>
                    <strong>Size</strong> : Xl
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  -
                </button>
                <span>2</span>
                <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                  +
                </button>
              </div>
              <div className="priceDetails flex-1 flex flex-col justify-center items-center gap-8">
                <p className="text-2xl font-medium">$30</p>
              </div>
            </div>
          </div>
          <div className="summary h-auto min-h-[50vh] flex-1 p-5 border-black border-2 space-y-8 border-opacity-10">
            <h1 className="text-4xl font-medium">Order Summary</h1>
            <div className="summaryItem flex justify-between">
              <span>Subtotal </span>
              <span>$60 </span>
            </div>
            <div className="summaryItem flex justify-between">
              <span>Estimated Shipping </span>
              <span>$60 </span>
            </div>
            <div className="summaryItem flex justify-between">
              <span>Shipping discount </span>
              <span>$60 </span>
            </div>
            <div className="summaryItem flex justify-between text-xl">
              <span className="font-semibold">Total </span>
              <span>$60 </span>
            </div>
            <button
              className="w-full p-2 text-md bg-black text-white cursor-pointer border border-black
          "
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
