import React from "react";
import {
  FaLongArrowAltRight,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#BCCDE0] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Your Gateway to Success Start */}
          <div className="col-span-2">
            <h3 className="text-[20px] font-semibold mb-4">
              Your Gateway to Success Start
            </h3>
          </div>

          {/* Pages */}
          <div className="col-span-1">
            <h3 className=" mb-2 text-[20px]">Pages</h3>
          </div>

          {/* Other */}
          <div className="col-span-1">
            <h3 className=" mb-2 text-[20px]">Other</h3>
          </div>

          {/* Utility */}
          <div className="col-span-1">
            <h3 className=" mb-2 text-[20px]">Utility</h3>
          </div>

          {/* Help */}
          <div className="col-span-1">
            <h3 className=" mb-2 text-[20px]">Help</h3>
          </div>

          {/* Horizontal Line - hidden on small screens */}
          <div className="col-span-6 hidden md:block">
            <div className="border-t border-gray-200"></div>
          </div>

          {/* Content under each heading */}
          <div className="col-span-2">
            <p className="mb-2">Here!</p>
            <a
              href="mailto:hello@helloflow.com"
              className="text-orange-500 flex items-center"
            >
              <span className="mr-2 h-8 w-8 flex items-center justify-center bg-orange-500 rounded-full text-white">
                <FaLongArrowAltRight />
              </span>
              hello@helloflow.com
            </a>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Demo (Sales)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  404
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Password
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Work Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Shop Details
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Change log
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Instructions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  All Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Supports
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 mt-10">
          <FaYoutube className="w-6 h-6 text-black" />
          <FaLinkedin className="w-6 h-6 text-black" />
          <FaSquareXTwitter className="w-6 h-6 text-black" />
          <FaFacebook className="w-6 h-6 text-black" />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-[20px] font-bold lg:ml-8">Your logo</h3>
            </div>
            <div className="text-sm text-black text-center md:text-right lg:mr-28">
              © 2024-Powered by Webflow With{" "}
              <span className="text-orange-500">↗</span> Buy this template for
              $69 USD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
