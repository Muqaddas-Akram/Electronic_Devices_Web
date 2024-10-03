import React from "react";
import { ChevronRight } from "lucide-react";
import Electronics from "../../pages/Electronics/Electronics";
import { ArrowRight, Tag } from "lucide-react";

const ProductCard = ({ title, description, image, buttonText }) => (
  <div className="bg-[#BCCDE0] rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between h-full">
    <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left">
      <h2 className="text-[32px] font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex justify-center md:justify-start mt-4">
        <button className="bg-[#EC3D2F] text-white px-4 py-2 rounded-md text-sm hover:bg-[#EC3D2F] transition duration-300 flex items-center">
          {buttonText}
          {buttonText.toLowerCase() === "shop now" && (
            <ArrowRight className="ml-1 w-4 h-4 font-bold" />
          )}
        </button>
      </div>
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <img
        src={image}
        alt={title}
        className="w-full object-contain"
      />
    </div>
  </div>
);

const ProductCard1 = ({ title, description, image, buttonText }) => (
  <div className="bg-[#BCCDE0] rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between h-full">
    <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left">
      <h2 className="text-[32px] font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex justify-center md:justify-start">
        <button className="bg-[#EC3D2F] text-white px-4 py-2 rounded-md text-sm hover:bg-[#EC3D2F] transition duration-300 flex items-center">
          {buttonText}
          {buttonText.toLowerCase() === "shop now" && (
            <ArrowRight className="ml-1 w-4 h-4 font-bold" />
          )}
        </button>
      </div>
    </div>
    <div className="flex-1">
      <img
        src={image}
        alt={title}
        className="w-full object-contain mt-4 md:mt-0"
      />
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-white">
        <header className="py-4 px-6 flex justify-between items-center">
        </header>

        <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-[#BCCDE0] rounded-e-full p-8 md:p-16 mt-10 -ml-28 md:mt-[-9rem]">
              <img
                src="src/assets/Images/headphones.png"
                alt="Black and gold headphones"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-12">
            <p className="text-[#EC3D2F] text-xl mb-2">In the spotlight</p>
            <h1 className="text-[40px] md:text-5xl font-bold mb-4">
              Your sound best for your life
            </h1>
            <p className="text-gray-600 mb-6">
              These have large ear cups that encompass the ears, providing good
              sound isolation and often better sound quality.
            </p>
            <button className="bg-[#EC3D2F] text-white px-6 py-3 rounded-md flex font-semibold items-center">
              Shop now <ChevronRight className="ml-2 font-semibold w-5 h-5" />
            </button>
          </div>
        </main>

        <footer className="text-center py-4">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#EC3D2F] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </footer>
      </div>
      {/* Features */}
      <h2 className="text-[32px] font-bold text-center mt-10  mb-12">
        Feature's
      </h2>

      <div className=" bg-[#BCCDE0]  py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto  ">
          <div className="flex flex-col max-w-5xl md:flex-row items-center justify-between relative">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 relative z-10">
              <img
                src="src/assets/Images/headphone2.png"
                alt="Blue headphones"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className=" flex">
              <div className=" text-4xl font-bold transform lg:-ml-96 -rotate-90  ">
                <p className="text-gray-700">HEADPHONES</p> <br />
                <p className="text-gray-600">HEADPHONES</p> <br />
                <p className="text-gray-500">HEADPHONES</p> <br />
                <p className="text-gray-400">HEADPHONES</p> <br />
                <p className="text-gray-300">HEADPHONES</p> <br />
              </div>
            </div>

            <div className="w-full md:w-1/3 md:pl-12  z-10">
              <h2 className="text-[32px] font-bold mb-6">Amazing feature</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[20px] font-semibold mb-2">
                    Touch Controls
                  </h3>
                  <p className="text-gray-600">
                    Some headphones have touch-sensitive surfaces for
                    controlling playback.
                  </p>
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold mb-2">
                    Sound Quality
                  </h3>
                  <p className="text-gray-600">
                    This includes considerations like bass response, clarity,
                    and overall audio fidelity.
                  </p>
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold mb-2">Microphone</h3>
                  <p className="text-gray-600">
                    Built-in microphones enable hands-free calling and voice
                    commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Electronics />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ProductCard
            title="Awesome Airpods"
            description="These have large ear cups that encompass the ears, providing good sound"
            image="src/assets/Images/G03-200x200-removebg-preview.png"
            buttonText="Shop now"
          />
          <ProductCard1
            title="Smart Watches"
            image="src/assets/Images/2057b76af9ed627-removebg-preview.png"
            buttonText="Shop now"
          />
        </div>
        <div className="bg-[#BCCDE0] rounded-md p-4 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <p className="text-xl font-bold">10% off when playing debit card</p>
          </div>
          <Tag className="w-6 h-6 ml-4" />
        </div>
      </div>
      {/* Bannar */}
      <div className="bg-white">
        <h4 className="text-[#EC3D2F] mb-2 mt-8 text-[16px] lg:ml-28 md:ml-14">
          Comment level
        </h4>
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px] mb-8 font-bold lg:ml-28 md:ml-14">
          A new style in your <br /> Ear
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="grid grid-cols-2 gap-4 h-auto w-full md:w-2/3 lg:w-80 lg:mt-10 lg:ml-28">
            <div className="bg-[#BCCDE0] rounded-2xl text-center shadow-md shadow-slate-200 p-4">
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#EC3D2F]">
                4M+
              </h1>
              <h3 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">
                User's
              </h3>
            </div>
            <div className="bg-[#BCCDE0] rounded-2xl text-center shadow-md shadow-slate-200 p-4">
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#EC3D2F]">
                153k
              </h1>
              <h3 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">
                Purchaser
              </h3>
            </div>
            <div className="bg-[#BCCDE0] rounded-2xl text-center shadow-md shadow-slate-200 p-4">
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#EC3D2F]">
                53k
              </h1>
              <h3 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">
                Gallery
              </h3>
            </div>
            <div className="bg-[#BCCDE0] rounded-2xl text-center shadow-md shadow-slate-200 p-4">
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#EC3D2F]">
                2M+
              </h1>
              <h3 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">
                Feedback
              </h3>
            </div>
          </div>
          <div className="relative flex-shrink-0 w-2/3 md:w-1/2 lg:w-auto mt-8 lg:mt-0 lg:ml-4">
            <img
              src="src/assets/Images/boy.png"
              alt="Man wearing headphones"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
