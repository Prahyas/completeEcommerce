import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="wrapper h-[10vh] p-5 flex items-center">
        <div className="left flex-1 justify-start flex items-center">
          <span className="language text-lg cursor-pointer">EN</span>
          <div className="searchContainer flex items-center ml-8 border border-gray-400 rounded p-0.5">
            <input className="border-none focus:outline-none" type="text" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="center flex-[2_1_0%] text-center">
          <h1 className="text-3xl font-semibold">Ecommerce</h1>
        </div>
        <div className="right flex-1 flex items-center justify-end gap-5">
          <div className="text-lg cursor-pointer">REGISTER</div>
          <div className="text-lg cursor-pointer whitespace-nowrap">
            SIGN IN
          </div>
          <div class="flex items-center cursor-pointer">
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <div class="absolute bottom-4 left-5 inline-flex items-center justify-center bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
