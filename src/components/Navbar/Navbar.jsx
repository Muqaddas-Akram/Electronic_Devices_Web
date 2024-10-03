import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-10 pt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <p className="text-black font-bold text-2xl">Your Logo</p>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4 absolute md:relative left-0 top-16 md:top-auto w-full md:w-auto rounded-2xl lg:bg-transparent bg-white transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Link
                to="/"
                className="text-black hover:font-bold px-3 py-2 text-lg flex items-center justify-between group"
              >
                Home{" "}
                <RiArrowDropDownLine
                  className="group-hover:hidden"
                  size={30}
                />
              </Link>
              <Link
                to="/electronics"
                className="text-black hover:font-bold px-3 py-2 text-lg flex items-center justify-between group"
              >
                Electronics{" "}
                <RiArrowDropDownLine
                  className="group-hover:hidden"
                  size={30}
                />
              </Link>
              <Link
                to="/contact"
                className="text-black hover:font-bold px-3 py-2 text-lg flex items-center justify-between group"
              >
                Contacts{" "}
                <RiArrowDropDownLine
                  className="group-hover:hidden"
                  size={30}
                />
              </Link>
              <Link
                to="/about"
                className="text-black hover:font-bold px-3 py-2 text-lg flex items-center justify-between group"
              >
                About{" "}
                <RiArrowDropDownLine
                  className="group-hover:hidden"
                  size={30}
                />
              </Link>
              <Link
                to="/login"
                className="text-black hover:font-bold px-3 py-2 text-lg flex items-center justify-between group"
              >
                Login{" "}
                <RiArrowDropDownLine
                  className="group-hover:hidden"
                  size={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer Div */}
      <div className="h-10"></div>
    </>
  );
};

export default Navbar;
