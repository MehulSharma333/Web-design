import React from "react";
import Button from "./Button";

const Slider = () => {
  return (
    <div className="lg:flex relative w-full h-full block bg-sky-50 " id="teams">
      <div className="lg:w-[1000px] block mx-auto w-full   h-full lg:flex lg:justify-center lg:ml-2 lg:mt-20 ">
        <div className="lg:w-1/2 w-full lg:h-full  lg:rounded-3xl">
          <img
            className="w-full h-full overflow-hidden lg:rounded-3xl"
            src="section7.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:h-full lg:w-[1200px]  mx-auto lg:mt-20 lg:px-18 lg:mr-12 ">
        <div className="font-pop  mt-10  p-8 lg:p-0 lg:ml-8 lg:text-left">
          <p className="lg:text-3xl text-center lg:text-start font-bold font-pop opacity-80">
            "Before adding Calendly Routing Forms, 60% of people who started to
            book a meeting on our website did not complete the booking. Now,
            we're automatically sending demos to specific reps based on company
            size, which has created better experiences for both our customers
            and employees. We're winning more business with less work."
          </p>
        </div>
        <div className="relative mb-10">
          <h1 className="mt-10 text-2xl lg:text-start text-center lg:ml-8">
            Keneth Burk
          </h1>
          <p className="mt-4 text-lg text-center lg:text-start lg:ml-8">
            Vice President Of Marketing, Text Request
          </p>
        </div>
        <div className="flex gap-3 lg:justify-between justify-center py-10 lg:ml-8 lg:mb-20">
          <div className="flex gap-3">
            <Button
              className=" bg-gray-500 rounded-full w-[50px] h-[50px]"
              image="left-arrow.png"
            />
            <Button
              className=" bg-color-azure rounded-full w-[50px] h-[50px]"
              image="right-arrow.png"
            />
          </div>
          <div className="w-[300px] h-[10px] gap-3 lg:flex hidden  ">
            <div className="w-[100px] bg-color-azure rounded-2xl"></div>
            <div className="w-[100px] bg-slate-600 rounded-2xl"></div>
            <div className="w-[100px] bg-slate-600 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
