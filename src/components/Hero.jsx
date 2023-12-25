import React from "react";
import car2 from "../assets/car2.png";
import car1 from "../assets/car1.png";
// import AOS from "aos";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-200 relative -z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? car2 : car1}
              alt="car"
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-33">
            <p data-aos="fade-up" className="text-primary text-2xl">Effortless</p>
            <h1 data-aos="fade-up" data-delay="600" className="text-5xl lg:text-7xl font-semibold">Car Rental</h1>
            <p data-aos="fade-up" className="mr-20" data-delay="600">
              "Book now for unforgettable journeys and unparalleled road
              adventures."
            </p>
            <button data-aos="fade-up"  data-delay="600" className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/75 duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
