import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-gray-100 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Get the latest news and updates delivered straight to your inbox.
      </p>
      <form className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email address"
          className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent border-gray-300"
        />

        <button className="bg-transparent py-2 px-4 rounded-r-md flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
          <span className="mr-2">Subscribe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
