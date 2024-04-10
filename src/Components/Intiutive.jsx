import React from "react";

const Intiutive = () => {
  return (
    <div className="lg:flex relative block w-full h-full ">
      <div className=" w-full h-full  relative lg:flex lg:flex-wrap block mt-10   items-start  justify-center ">
        <div className="lg:h-full lg:w-1/2 mx-auto py-20">
          <div className="lg:mt-0  relative lg:ml-8">
            <h3 className=" font-semibold text-2xl text-color-azure font-pop  text-center lg:text-left">
              Simple And Intitutive
            </h3>
          </div>
          <div className="relative mt-10 lg:ml-8">
            <h1 className="text-4xl  text-center font-extrabold text-color-navyBlue lg:text-left  ">
              Build and publish a form in minutes
            </h1>
          </div>
          <div className="relative">
            <p className=" font-pop  mt-10 lg:text-xl text-lg text-center p-8 lg:p-0 lg:ml-8 lg:text-left">
              Quickly get started with a straightforward form-building
              experience, which Calendly admins create and manage for teams.
              Share via link or embed on your website.
            </p>
          </div>
        </div>
        <div className="lg:h-full lg:w-1/2  block mx-auto">
          <img
            className="max-w-full max-h-full object-contain overflow-hidden "
            src="section4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intiutive;
