import React from "react";

const Footer = () => {
  return (
    <div className="h-auto  bg-black mt-5 flex flex-col lg:flex-row gap-5 text-white">
      <div className="item1 flex-1 p-10 flex flex-col gap-5 ">
        <h1 className="text-4xl">Ecommerce</h1>
        <p className="text-sm">
          Our online clothing store offers trendy and fashionable clothing items
          for both men and women.
        </p>
        <div className="flex gap-5">
          <img
            className="h-8 w-8 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt=""
          />
          <img
            className="h-8 w-8 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt=""
          />
          <img
            className="h-8 w-8 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/3536/3536559.png"
            alt=""
          />
        </div>
      </div>

      <div className="item1 flex-1 p-10 flex flex-col gap-5 ">
        <h1 className="text-2xl">Useful Links</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-base cursor-pointer ">Home</p>
            <p className="text-base cursor-pointer">Mens fashion</p>
            <p className="text-base cursor-pointer">Accessories</p>
            <p className="text-base cursor-pointer">Order tracking</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base cursor-pointer">About Us</p>
            <p className="text-base cursor-pointer">Womens fashion</p>
            <p className="text-base cursor-pointer">Shoes</p>
            <p className="text-base cursor-pointer">My account</p>
          </div>
        </div>
      </div>

      <div className="item1 flex-1 p-10 flex flex-col gap-5 ">
        <h1 className="text-2xl">Contact</h1>

        <div className="flex flex-col gap-3 cursor-pointer">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="text-base">1234 William Street, New York , 18895</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <p className="text-base">+1123456789</p>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>

            <p className="text-base">ecommerce@shop.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
