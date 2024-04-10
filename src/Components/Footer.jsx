import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full lg:flex justify-between">
      <div className="lg:w-1/2 lg:text-start text-center ">
        <h1 className=" text-gray-700 text-sm px-8">Copyright Calendly 2022</h1>
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-gray-700 text-sm px-8 lg:text-right text-center">
          Privacy / Terms and Conditions
        </h1>
      </div>
    </div>
  );
};

export default Footer;
