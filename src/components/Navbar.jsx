import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  return (
    <nav className="nav">
      <div className="wrapper h-[10vh] p-5 flex items-center">
        <div className="left flex-1 justify-start flex items-center">
          <span className="language text-lg cursor-pointer">EN</span>
          <div className="searchContainer hidden lg:flex items-center ml-8 border border-gray-400 rounded p-0.5">
            <input className="border-none focus:outline-none" type="text" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="center flex-[2_1_0%] text-center">
          <Link to="/">
            <h1 className="text-3xl font-semibold">Ecommerce</h1>
          </Link>
        </div>
        <div className="flex-1 flex justify-end lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="right flex-1 hidden lg:flex items-center justify-end gap-5">
          <div className="text-lg cursor-pointer">REGISTER</div>
          <div className="text-lg cursor-pointer whitespace-nowrap">
            SIGN IN
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <Link to="/cart">
                <div className="absolute bottom-4 left-5 inline-flex items-center justify-center bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {cart.quantity}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
