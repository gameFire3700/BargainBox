import React, { useState } from 'react';
import Image1 from "../assets/images/login_background.jpg";

export const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${Image1})`,
      }}
    >
      {/* Overlay for low-contrast effect */}
      <div className="absolute inset-0 bg-[#F5FFF8] bg-opacity-40"></div>

      {/* Form container */}
      <div className="relative w-[430px] bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg border border-[#A3D9A5] z-10">
        {/* Header title */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center text-[#2E8B57]">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </h2>
        </div>

        {/* Tab control */}
        <div className="relative flex h-12 mb-6 border border-[#A3D9A5] rounded-full overflow-hidden">
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? 'text-white' : 'text-[#333]'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? 'text-white' : 'text-[#333]'
            }`}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF7A00] transition-all duration-300 ${
              isLoginMode ? 'left-0' : 'left-1/2'
            }`}
          ></div>
        </div>

        {/* Form section */}
        <form className="space-y-5">
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border-b-2 border-[#A3D9A5] outline-none focus:border-[#FF7A00] placeholder-gray-500"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border-b-2 border-[#A3D9A5] outline-none focus:border-[#FF7A00] placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border-b-2 border-[#A3D9A5] outline-none focus:border-[#FF7A00] placeholder-gray-500"
          />

          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border-b-2 border-[#A3D9A5] outline-none focus:border-[#FF7A00] placeholder-gray-500"
            />
          )}

          {isLoginMode && (
            <div className="text-right">
              <p className="text-[#2E8B57] hover:underline cursor-pointer text-sm">
                Forgot Password?
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#2E8B57] to-[#FF7A00] text-white rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-md"
          >
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>

          <p className="text-center text-[#333] text-sm">
            {isLoginMode ? "Don't have an account?" : 'Already have an account? '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-[#FF7A00] font-medium hover:underline"
            >
              {isLoginMode ? 'Sign Up Now' : 'Login'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
