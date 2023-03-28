import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center ">
      <div className="wrapper h-auto p-5 w-[40%] bg-white rounded space-y-5">
        <h1 className="p-4 text-3xl font-semibold text-center border-b-2 border-black">
          LOG IN
        </h1>
        <form className="space-y-5" action="">
          <div className="flex items-center gap-3">
            <span className="flex-1">Email or Username: </span>

            <input
              type="text"
              placeholder="Enter your username or email"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="flex-1">Password: </span>

            <input
              type="password"
              placeholder="Enter your password"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>

          <div className="flex items-center gap-3">
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

          <button
            className="p-3 text-xl bg-transparent cursor-pointer border border-black
          "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
