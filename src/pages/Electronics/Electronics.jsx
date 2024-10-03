import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

// Categories data
const categories = [
  {
    name: "Iphone",
    image: "/src/assets/Images/images__2_-removebg-preview.png",
  },
  {
    name: "Speaker",
    image: "/src/assets/Images/G03-200x200-removebg-preview.png",
  },
  { name: "Tablet", image: "/src/assets/Images/images-removebg-preview.png" },
  {
    name: "Laptop",
    image: "/src/assets/Images/download__1_-removebg-preview.png",
  },
  { name: "Headphone", image: "/src/assets/Images/headphones.png" },
];

// DealCard component
const DealCard = ({ image, discount, title, subtitle, buttonText, price }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
    <img src={image} alt={title} className="w-80 h-80 object-contain" />
    <div className="flex-1">
      <div className="font-bold text-2xl mb-2">{discount} off</div>
      <h3 className="text-[20px] mb-1">{title}</h3>
      <p className="text-black text-xl font-bold mb-4">{subtitle}</p>
      {buttonText && (
        <button className="bg-[#EC3D2F] font-bold text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
          {buttonText}
        </button>
      )}
      {price && (
        <div className="mt-2 inline-block border text-xl font-bold border-red-500 text-red-500 px-3 py-1 rounded-md">
          ${price}
        </div>
      )}
    </div>
  </div>
);

// Products data
const products = [
  {
    id: 1,
    name: "LED 4k smart TV expo White/Gray/Black",
    price: 499,
    image:
      "/src/assets/Images/png-clipart-dns-led-backlit-lcd-lg-uj630v-lg-full-hd-smart-led-tv-inch-led-tv-television-media-removebg-preview.png",
  },
  {
    id: 2,
    name: "GM-2345 closed back wireless Headphones",
    price: 99,
    image: "/src/assets/Images/download-removebg-preview.png",
  },
  {
    id: 3,
    name: "GM-2345 closed back wireless Headphones",
    price: 99,
    image: "/src/assets/Images/headphones.png",
  },
  {
    id: 4,
    name: "Laptop 4k smart TV expo White/Gray/Black",
    price: 599,
    image: "/src/assets/Images/download__1_-removebg-preview.png",
  },
  {
    id: 5,
    name: "Mobile phone accessories",
    price: 199,
    image: "/src/assets/Images/images-removebg-preview.png",
  },
  {
    id: 6,
    name: "Accessories for mobile phone used USB",
    price: 149,
    image: "/src/assets/Images/images__1_-removebg-preview.png",
  },
  {
    id: 7,
    name: "GM-2345 closed back Camera",
    price: 299,
    image:
      "/src/assets/Images/Realistic-digital-camera-vector-PNG-removebg-preview.png",
  },
  {
    id: 8,
    name: "Mobile 4k smart TV expo White/Gray/Black",
    price: 399,
    image:
      "/src/assets/Images/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png",
  },
];

// ProductCard component
const ProductCard = ({ name, price, image }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex justify-between items-start mb-2">
      <span className="text-sm text-gray-600">Top rated</span>
      <Heart className="w-5 h-5 text-gray-400" />
    </div>
    <img src={image} alt={name} className="w-full h-40 object-contain mb-4" />
    <h5 className="text-[14px] font-medium mb-2 h-10 overflow-hidden">
      {name}
    </h5>
    <p className="text-red-500 text-xl font-bold">${price}</p>
  </div>
);

// Carousel items data
const carouselItems = [
  {
    title: "Define yourself, be different",
    description:
      "These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.",
    image: "/src/assets/Images/1fbe8131b5-removebg-preview.png",
  },
];


const products1 = [
    { id: 1, name: 'James smith', rating: 5.0, description: 'Headphones come with a variety of features.', price: 49, image: 'src/assets/Images/5b95b05d61d9d6c2e055f33b31c1d16d-removebg-preview.png' },
    { id: 2, name: 'John lara', rating: null, description: 'Headphones come with a variety of features.', price: 55, image: 'src/assets/Images/images__2_-removebg-preview.png' },
    { id: 3, name: 'Miss zara', rating: 4.3, description: 'Headphones come with a variety of features.', price: 39, image: 'src/assets/Images/5b95b05d61d9d6c2e055f33b31c1d16d-removebg-preview.png' },
    { id: 4, name: 'Lauren', rating: null, description: 'Headphones come with a variety of features.', price: 69, image: 'src/assets/Images/images__3_-removebg-preview.png' },
  ];
  
  const StarRating = ({ rating }) => (
    rating ? (
      <div className="flex items-center">
        <span className="text-yellow-400 mr-1">★</span>
        <span>{rating.toFixed(1)}</span>
      </div>
    ) : null
  );
  
  const ProductCard1 = ({ name, rating, description, price, image }) => (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
      <img
        src={image}
        alt={name}
        className="w-1/2 h-auto object-cover mb-4 rounded-md" // Adjust the height here
      />
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[20px] font-semibold">{name}</h3>
        <StarRating rating={rating} />
      </div>
      <p className="text-lg text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl text-[#EC3D2F]">{price}$</span>
        <button className="bg-white text-black border border-[#EC3D2F] px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition duration-300">
          Add to cart
        </button>
      </div>
    </div>
  
  );


const Electronics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const newSlide = (prevSlide + 1) % carouselItems.length;
        console.log("Current Slide:", newSlide); // Check if this logs the correct slide index
        return newSlide;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-[32px] font-bold mb-2 text-[#EC3D2F]">
          Category
        </h2>
        <p className="text-center text-lg font-bold mb-6">
          Can we help you pick a headphone
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-24 h-24 object-contain mb-2"
              />
              <span className="text-center font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DealCard
            image="/src/assets/Images/Realistic-digital-camera-vector-PNG-removebg-preview.png"
            discount="25%"
            title="Catch hottest Deals in Cameras"
            subtitle="Category"
            buttonText="Shop now →"
          />
          <DealCard
            image="/src/assets/Images/png-transparent-smartphone-feature-phone-tablet-computer-telephone-mobile-phone-and-tablet-angle-gadget-electronics-thumbnail-removebg-preview.png"
            discount="25%"
            title="Tablets and smartphones"
            subtitle="and more"
            price="799"
          />
        </div>
      </div>
      {/* Top Rated Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-bold text-center mb-6">Top rated products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Shop */}
      <h2 className="text-2xl md:text-3xl lg:text-[32px] lg:ml-32 font-bold mb-6">
        Shop products by
      </h2>
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="relative bg-[#BCCDE0] rounded-3xl overflow-visible p-6 sm:p-8 md:p-12">
          <img
            src={carouselItems[currentSlide].image}
            alt="Carousel Item"
            className="absolute left-1/2 md:left-60 top-[-10%] transform -translate-x-1/2 w-1/2 sm:w-1/3 max-w-none z-10"
          />

          <div className="relative z-20 w-full md:w-1/2 lg:w-1/3 ml-0 md:ml-96  md:pl-8 pt-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4">
              {carouselItems[currentSlide].title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base mb-6">
              {carouselItems[currentSlide].description}
            </p>
            <button className="bg-[#EC3D2F] text-white px-4 py-2 rounded-md font-bold hover:bg-[#EC3D2F] transition duration-300">
              Shop now →
            </button>
          </div>
        </div>
      </div>
      {/* New Arrival Section */}
      <h2 className="text-2xl md:text-3xl lg:text-[32px] lg:ml-32 font-bold mb-6">
        New Arrival{" "}
      </h2>

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products1.map((product) => (
          <ProductCard1 key={product.id} {...product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Electronics;
