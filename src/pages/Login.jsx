import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen md:h-screen w-full py-20 bg-black flex justify-center items-center ">
      <div className="wrapper lg:min-w-[60vw] md:w-[60vh] h-auto p-10 w-3/4 bg-white rounded space-y-7">
        <h1 className="p-4 text-2xl font-semibold text-center border-b-[1px] border-opacity-30 border-black">
          LOG IN
        </h1>
        <form className="space-y-5" action="">
          <div className="flex flex-col gap-3">
            <span className="flex-1">Email or Username: </span>
            <input
              type="text"
              placeholder="Enter your username or email"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="flex-1">Password: </span>

            <input
              type="password"
              placeholder="Enter your password"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>

          <div className="flex flex-col gap-3 ">
            <span className="flex-1">Or login with </span>
            <div className="flex flex-[2_2_0%] space-x-2">
              <button className="py-2 px-2  text-sm bg-transparent cursor-pointer border-2 border-black">
                Google
              </button>
              <button className="py-2 px-2  text-sm bg-transparent cursor-pointer border-2 border-black">
                Facebook
              </button>
              <button className="py-2 px-2  text-sm bg-transparent cursor-pointer border-2 border-black">
                Github
              </button>
            </div>
          </div>
          <Link
            className="block text-center p-3 text-xl bg-black text-white w-full cursor-pointer border border-black
            "
            to={`/home`}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
