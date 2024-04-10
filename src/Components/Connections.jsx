import React from "react";

const Connections = () => {
  return (
    <div className="lg:flex relative w-full h-full block" id="pricing">
      <div className="lg:w-1/2 h-full">
        <img
          className="lg:py-4 lg:px-4 w-full h-full"
          src="section6.jpg"
          alt=""
        />
      </div>
      <div className="lg:h-full lg:w-1/2 mx-auto lg:mt-20">
        <div className="lg:mt-20 relative lg:ml-8">
          <h3 className=" font-semibold text-2xl text-color-azure font-pop  w-full  text-center lg:text-left">
            Faster Connections
          </h3>
        </div>
        <div className="relative mt-10 lg:ml-8 ">
          <h1 className="text-4xl  text-center font-extrabold text-color-navyBlue lg:text-left  ">
            No More Missed Oppurtunities
          </h1>
        </div>
        <div className="font-pop  mt-10 lg:text-2xl text-lg text-center p-8 lg:p-0 lg:ml-8 lg:text-left">
          <p>
            Embed Routing Forms to your website and eliminate the booking delays
            and customer drop off typically caused by manual follow up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connections;
