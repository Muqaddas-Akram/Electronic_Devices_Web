import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Navbar from '../../components/Navbar/Navbar';

const Contact = () => {
  return (
    <div className="bg-[url('src/assets/Images/bgimage.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-10 md:py-20">
        <div className="bg-[#BCCDE0] relative rounded-3xl p-6 md:p-12 w-full max-w-7xl flex flex-col md:flex-row shadow-lg">
          <Navbar />
          <div className="md:w-1/2 md:pr-10 lg:pt-32">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact us</p>
            <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
              It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm md:text-base">
                <FaRegEnvelope className="h-5 w-5 mr-2" />
                <span>kashifhurmat893@gmail.com</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <MdOutlineLocalPhone className="h-5 w-5 mr-2" />
                <span>+92 302 5058 413</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 pt-6 md:pt-10 md:mt-0">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
              <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold mb-2 md:mb-1">We'd love to hear from you!</h2>
              <p className="text-lg md:text-xl lg:text-[32px] font-bold mb-4">Let's get in touch</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base" type="text" placeholder="Name" />
                  <input className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base" type="text" placeholder="User" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base" type="email" placeholder="Email" />
                  <input className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base" type="tel" placeholder="Phone number" />
                </div>
                <input className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base w-full" type="password" placeholder="Password" />
                <textarea className="border border-[#EC3D2F] rounded-md p-2 text-sm md:text-base w-full h-24" placeholder="Type here"></textarea>
                <button className="bg-[#EC3D2F] text-white rounded-md py-2 px-4 transition duration-300 w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
