import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'


const Signup = () => {
  return (
    <div className="bg-[url('src/assets/Images/bgimage.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center p-20">
      <div className="bg-white relative rounded-3xl p-6 sm:p-12 md:p-16 lg:p-24 w-full max-w-4xl md:max-w-7xl shadow-lg">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <button className="text-xl md:text-2xl font-bold text-[#EC3D2F] mb-2 md:mb-0">
                Sign up
              </button>
              <Link to='/login'><button className="text-xl md:text-2xl font-bold text-gray-500">
                Sign in
              </button></Link>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-[#EC3D2F] rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full border border-[#EC3D2F] rounded-md p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-[#EC3D2F] rounded-md p-2"
              />
              <input
                type="password"
                placeholder=" Confirm Password"

                className="w-full border border-[#EC3D2F] rounded-md p-2"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <button className="bg-[#EC3D2F] text-white px-6 py-2 rounded-md shadow-lg shadow-gray-400">
                  Signup
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-4 sm:space-x-6">
                <button className="p-2 sm:p-3 border rounded-full">
                  <FcGoogle className="text-red-500 w-6 h-6" />
                </button>
                <button className="p-2 sm:p-3 border rounded-full">
                  <FaFacebook className="text-blue-600 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img
              src="src/assets/Images/Phone-Accessories-PNG-HD-Image-removebg-preview.png"
              alt="Electronics"
              className="w-[200%] h-[150%] md:w-[100%] md:h-[80%] max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
