import React from "react";
import Button from "./Button.jsx";
const Hero = () => {
  return (
    <div className="relative h-full w-full mt-24" id="home">
      <div className="w-full h-full">
        <div className="w-[400px] h-[50px]   mx-auto flex items-center relative justify-center text-center mb-10">
          <h3 className="text-center  font-semibold text-2xl text-color-azure ">
            ROUTING FORMS
          </h3>
        </div>
        <div className="w-full h-[290px]  relative flex flex-col items-start justify-center">
          <div className="w-full h-[150px] text-center mx-auto lg:text-6xl font-extrabold text-color-navyBlue relative font-nun lg:z-10 text-4xl ">
            Make Higher Quality Connections
          </div>
          <div className="w-full h-[180px] border-l-indigo-950 placeholder-opacity-100 relative">
            <p className="opacity-100 text-center  lg:text-2xl text-lg p-8 mb-5 ">
              Request Information from websites visitors or invites and -based
              on <br className="hidden md:block" />
              their responses-route them to the right person or resource.
              <p className="italic">
                <br className="hidden md:block " />
                Available on Professional plans and up
              </p>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 transform left-1/2 -translate-x-1/2 w-[1400px] h-[395px] rounded-t-full bg-color-azure opacity-5 overflow shadow-lg z-0 lg:block hidden  " />
        <div className="relative lg:w-[600px] lg:h-[100px] mx-auto lg:flex justify-center gap-5 block w-full h-full mt-10  ">
          <Button
            title="Get Started"
            className="bg-color-azure text-white text-sm cursor-pointer p-4 lg:w-[150px] lg:h-[55px] mx-auto mb-5 w-[250px]"
          />
          <Button
            title="Get Started"
            className=" text-black text-sm cursor-pointer p-4 lg:w-[150px] lg:h-[55px] border-black border-2 mx-auto w-[250px] "
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
