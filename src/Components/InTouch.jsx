import React from "react";

const InTouch = () => {
  return (
    <div className="w-full h-full relative mt-10 flex flex-col" id="enterprise">
      <div className="lg:h-[600px] w-full lg:bg-color-navyBlue ">
        <div className="mx-auto lg:w-[900px] w-full text-center h-[350px]">
          <h6 className=" lg:text-sky-400 text-color-azure  lg:text-xl text-4xl mt-16">
            Video
          </h6>
          <h1 className="lg:text-white lg:text-6xl text-4xl p-6 mt-6 lg:font-semibold font-extrabold text-color-navyBlue">
            See What Can You Do With Routing Forms
          </h1>
        </div>
      </div>
      <div className="lg:h-[400px] lg:w-[700px] bg-gray-300 z-0 absolute top-80 w-full h-[300px]  transform left-1/2 -translate-x-1/2 ">
        <img
          className="w-full h-full object contain"
          src="section2.jpg"
          alt=""
        />
      </div>
      <div className="lg:h-[600px] lg:w-full h-[250px]  ">hii</div>
    </div>
  );
};

export default InTouch;
