import React from "react";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";

const carList = [
  {
    name: "JEEP Compass",
    price: 200,
    image: car3,
    aosDelay: "0",
  },
  {
    name: "MAHINDRA SCORPIO",
    price: 140,
    image: car4,
    aosDelay: "300",
  },
  {
    name: "SCORPIO",
    price: 100,
    image: car5,
    aosDelay: "600",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold mb-3"
        >
          Choose from below
        </h1>

        <p data-aos="fade-up" aos-delay="300" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nisi a illum magni perspiciatis culpa.
        </p>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) =>(
              <div data-aos="fade-up"
                data-aos-delay={data.aosDelay} className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                <div className="w-full h-[120px]">
                  <img className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700" src={data.image} alt=""  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div  className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">12km</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
