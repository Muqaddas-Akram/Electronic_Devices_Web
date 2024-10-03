import React, { useState, useEffect } from "react";
import { ShoppingCart, Clock, CreditCard, Truck } from "lucide-react";

const About = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      image: "src/assets/Images/c7f542522dc647fdaf348df6ddedc5ad.webp",
      text: " s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      id: 2,
      name: "Monica",
      role: "Student at Finance",
      image: "src/assets/Images/images.jfif",
      text: " s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Product Manager",
      image: "src/assets/Images/compressed_497a75c0637b108f1458cb3225429852.webp",
      text: " s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen mt-10">
        <header className="bg-[#BCCDE0] p-4">
          <p className="text-center text-sm">
            Are you interested in a website for an online partnership?
          </p>
        </header>

        {/* Hero Section */}
        <section className="bg-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-[40px] font-bold mb-4">
              Open a Mobile <br />
              Accessories Store <br />
              Online
            </h1>
            <p className="mb-6 text-[25px] font-semibold">
              Best Tips to Start an Online <br />
              Business
            </p>
            <button className="bg-[#EC3D2F] text-white px-6 py-2 rounded-lg shadow-md shadow-slate-200">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="src/assets/Images/Phone-Accessories-PNG-HD-Image-removebg-preview.png"
              alt="Mobile accessories"
              className="w-full"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#BCCDE0] p-8 flex justify-around text-center">
          <div>
            <h2 className="text-[32px] font-bold">870</h2>
            <p>Shops</p>
          </div>
          <div>
            <h2 className="text-[32px] font-bold">20,000+</h2>
            <p>Items</p>
          </div>
          <div>
            <h2 className="text-[32px] font-bold">260</h2>
            <p>Suppliers</p>
          </div>
          <div>
            <h2 className="text-[32px] font-bold">73,990</h2>
            <p>Active</p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-100 p-8 md:p-16">
          <h3 className="text-[20px] text-center text-[#EC3D2F] font-semibold">
            Why choose us
          </h3>
          <h2 className="text-[32px] font-bold text-center mb-28">
            Benefits of online buying <br />
            service with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<ShoppingCart />}
              title="Choose best fitting"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <BenefitCard
              icon={<Clock />}
              title="24/7 available"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <BenefitCard
              icon={<CreditCard />}
              title="Wholesale"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
            <BenefitCard
              icon={<Truck />}
              title="Affordable price"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
          </div>
        </section>

        {/* Feature Sections */}
        <section className="bg-gray-100 p-8 md:p-16">
          <FeatureCard
            image="src/assets/Images/girl.png"
            title="Personalized professional online buying on your schedule"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            buttonText="Get started"
            imageLeft={true}
          />
          <FeatureCard
            image="src/assets/Images/items.png"
            title="Personalized professional online buying on your schedule"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            buttonText="Get started"
            imageLeft={false}
          />
        </section>
      </div>
      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-[#EC3D2F] text-[32px] font-semibold mb-2">Our testimonial</h2>
        <h1 className="text-[40px] font-bold mb-12">
          What our users say about us
        </h1>
        <div className="flex justify-center">
        <div className="flex justify-center w-20 h-20 rounded-full space-x-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-full h-full rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "ring-4 ring-blue-500 scale-110"
                  : "opacity-50 scale-100"
              }`}
            />
          ))}
        </div>
        </div>

        <div className="mb-6 h-20">
          {" "}
          {/* Fixed height to prevent layout shift */}
          <h3 className="text-[20px] font-semibold">{`About ${testimonials[currentTestimonial].name}`}</h3>
          <p className="text-black">
            {testimonials[currentTestimonial].role}
          </p>
        </div>

        <p className="text-black mx-auto w-80">
          {testimonials[currentTestimonial].text}
        </p>
      </section>
    </>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-200 p-6 shadow-md shadow-slate-400 rounded-lg">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-[20px] font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const FeatureCard = ({ image, title, description, buttonText, imageLeft }) => (
  <div
    className={`flex flex-col ${
      imageLeft ? "md:flex-row" : "md:flex-row-reverse"
    } items-center mb-16`}
  >
    <div className="md:w-1/2 mb-8 md:mb-0">
      <img src={image} alt={title} className="w-64 lg:ml-40" />
    </div>
    <div className="md:w-1/2 md:px-8">
      <h3 className="text-[20px] font-bold mb-4">{title}</h3>
      <p className="mb-6">{description}</p>
      <button className="bg-[#EC3D2F] text-white px-6 py-3 rounded-lg">
        {buttonText}
      </button>
    </div>
  </div>
);

export default About;
