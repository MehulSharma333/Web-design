import React from "react";

const Summary = () => {
  return (
    <div
      className=" w-full h-full  relative lg:flex lg:flex-wrap block mt-20  items-center  justify-center "
      id="product"
    >
      <div className="lg:h-full lg:w-1/2 mx-auto">
        <div className="lg:mt-10 relative lg:ml-8">
          <h3 className=" font-semibold text-2xl text-color-azure font-pop  text-center lg:text-left">
            BETTER CONVERSIONS
          </h3>
        </div>
        <div className="relative mt-10 lg:ml-8">
          <h1 className="text-4xl  text-center font-extrabold text-color-navyBlue lg:text-left  ">
            Screen and qualify website visitors or invites
          </h1>
        </div>
        <div className="relative">
          <p className=" font-pop  mt-10 text-xl text-center p-8 lg:p-0 lg:ml-8 lg:text-left">
            Priortize sheduling with high-value leads based on industry, company
            sites and other requirements. Send people who aren't{" "}
            <br className="hidden md:block" />a fit to a refrral page or other
            resource.
          </p>
        </div>
      </div>
      <div className="lg:h-full lg:w-1/2  block mx-auto">
        <img
          className="max-w-full max-h-full object-contain overflow-hidden "
          src="section1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Summary;
