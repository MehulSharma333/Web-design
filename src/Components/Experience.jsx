import React from "react";

const Experience = () => {
  return (
    <div className="lg:flex relative w-full h-full block">
      <div className="lg:w-1/2 h-full">
        <img
          className="lg:py-4 lg:px-4 w-full h-full"
          src="section3.jpg"
          alt=""
        />
      </div>
      <div className="lg:h-full lg:w-1/2 mx-auto">
        <div className="lg:mt-20 relative lg:ml-8">
          <h3 className=" font-semibold text-2xl text-color-azure font-pop  w-full  text-center lg:text-left">
            AUTOMATED EXPERIENCE
          </h3>
        </div>
        <div className="relative mt-10 lg:ml-8 ">
          <h1 className="text-4xl  text-center font-extrabold text-color-navyBlue lg:text-left  ">
            Shedule efficiently and save everyone time
          </h1>
        </div>
        <div className="font-pop  mt-10 lg:text-2xl text-lg text-center p-8 lg:p-0 lg:ml-8 lg:text-left">
          <p>
            The faster you connect clients,students or customers to the right
            people and resources, the more time everyone gets back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
