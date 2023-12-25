import React from "react";
import car3 from "../assets/car3.png";


const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-200 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1000">
            <img src={car3} className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" alt="car" />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 data-aos="fade-up" className="text-3xl tracking-wide sm:text-4xl font-bold">About us</h1>
              <p data-aos="fade-up" className=" tracking-wide">
                "Discover our commitment to quality service and a fleet tailored
                for your travel needs."
              </p>
              <p  data-aos="fade-up" className=" tracking-wide">
                "Embark on a trust-filled experience where our history meets
                your road ahead."
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;