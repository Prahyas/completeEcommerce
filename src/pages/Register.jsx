import React from "react";

const Register = () => {
  return (
    <div className="h-auto md:h-screen w-full py-20 bg-black flex justify-center items-center ">
      <div className="wrapper lg:min-w-[60vw] md:w-[60vh] h-auto p-10 w-3/4 bg-white rounded space-y-7">
        <h1 className="p-4 text-2xl font-semibold text-center border-b-[1px] border-opacity-30 border-black">
          CREATE AN ACCOUNT
        </h1>
        <form className="space-y-5" action="">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex md:flex-1 flex-col gap-3">
              <span className="flex-1">First name: </span>
              <input
                type="text"
                placeholder="Enter your first name"
                className="flex-[2_2_0%] p-2 border border-black"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-3">
              <span className="flex-1">Last name: </span>

              <input
                type="text"
                placeholder="Enter your last name"
                className="flex-[2_2_0%] p-2 border border-black"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex-1">Username: </span>

            <input
              type="text"
              placeholder="Enter a username"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex-1">Email: </span>

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-[2_2_0%] p-2 border border-black"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex md:flex-1 flex-col gap-3">
              <span className="flex-1">Password: </span>

              <input
                type="password"
                placeholder="Choose a strong password"
                className="flex-[2_2_0%] p-2 border border-black"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-3">
              <span className="flex-1">Confirm password: </span>

              <input
                type="text"
                placeholder="Enter the password again"
                className="flex-[2_2_0%] p-2 border border-black"
              />
            </div>
          </div>
          <div className="agreement text-sm">
            By creating an account, I consent to use my information in
            accordance to the <strong>Privacy Policy</strong>
          </div>
          <button
            className="p-3 text-xl bg-black text-white w-full cursor-pointer border border-black
              "
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
