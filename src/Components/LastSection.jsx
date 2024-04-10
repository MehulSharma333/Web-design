import React from "react";
import Button from "./Button";
import { HashLink as Link } from "react-router-hash-link";

const LastSection = () => {
  return (
    <div to="home" className="w-full h-full relative" id="last-section">
      <div className="w-full lg:h-[400px] h-[300px] bg-color-navyBlue lg:flex py-10  items-start justify-center ">
        <div className="lg:w-1/2 w-full  text-center flex flex-col lg:gap-10 gap-10">
          <h1 className=" text-white lg:text-4xl text-2xl font-bold">
            Win more business with less work.
          </h1>
          <p className="lg:text-lg text-sm text-white px-8">
            Routing Forms help you screen and qualify website vissitors,
            automate sheduling and offer a seamless customer experience.
          </p>
          <div className="flex w-full justify-center gap-5">
            <Button
              title="Start For Free"
              className="text-white text-sm w-[150px]  lg:w-[200px] lg:h-[65px] rounded-3x lg:px-10 bg-color-azure"
            />
            <Button
              title="Talk to sales"
              className="text-white text-sm border-white w-[150px] border-2 lg:w-[200px] lg:h-[65px] rounded-3x lg:px-10"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full lg:flex">
        <div className="lg:w-2/4 w-full h-full  lg:flex lg:flex-col gap-10 justify-center ">
          <div className="relative mx-autok">
            <h1 className=" text-color-navyBlue text-4xl text-center lg:text-start mt-10 mb-10 lg:ml-10 lg:mt-20 font-bold">
              Easy <br className="hidden lg:flex " />
              <span className=" text-color-azure">ahead</span>
            </h1>
          </div>
          <div className="relative">
            <p className="lg:ml-10 text-lg text-center lg:text-start">
              We take the workout with connecting with others <br /> so you can
              accomplish more.
            </p>
          </div>
          <div className="relative lg:w-[400px] lg:h-[40px] mt-5 w-[350px] mx-auto border-black border-2 rounded-md border-1 lg:ml-10 ">
            <select
              className="w-full h-full border-white border-1 rounded-md text-2xl"
              name=""
              id=""
            >
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Spanish</option>
              <option value="">French</option>
            </select>
          </div>
          <div className="relative w-full">
            <img
              className="lg:w-1/2 w-full  lg:ml-6 object-contain"
              src="google-appstore.jpg"
              alt=""
            />
          </div>
          <div className="w-full mb-10 relative lg:h-full ">
            <ul className="flex gap-4 w-full justify-center items-center lg:justify-start lg:w-1/2 h-full lg:ml-10">
              <li>
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="twitter.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="facebook-app-symbol.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="instagram.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="linkedin.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="youtube.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <Link to="#home" smooth className="lg:w-3/4 w-full h-full  relative">
          <div className="w-full h-full">
            <div className="lg:flex flex-wrap mx-auto  text-center justify-between w-full gap-40 lg:mt-20 lg:justify-start ">
              <div className="flex flex-col h-full gap-5 opacity-95">
                <h1 className=" text-color-navyBlue text-2xl font-bold opacity-80">
                  About
                </h1>
                <h3>About Calendly</h3>
                <h3>Contact Sales</h3>
                <h3>Newsroom</h3>
                <h3>Careers</h3>
                <h3>Security</h3>
              </div>
              <div className="flex flex-col h-full gap-5 ">
                <h1 className="text-color-navyBlue text-2xl font-bold opacity-80">
                  Solutions
                </h1>
                <h3>About Calendly</h3>
                <h3>Contact Sales</h3>
                <h3>Newsroom</h3>
                <h3>Careers</h3>
                <h3>Security</h3>
              </div>
              <div className="flex flex-col h-full gap-5 opacity-95">
                <h1 className="text-color-navyBlue text-2xl font-bold opacity-85">
                  Popular Features
                </h1>
                <h3>About Calendly</h3>
                <h3>Contact Sales</h3>
                <h3>Newsroom</h3>
                <h3>Careers</h3>
                <h3>Security</h3>
              </div>
            </div>
            <div className="lg:flex block text-center mt-10 gap-40 lg:mt-20 justify-start ">
              <div className="flex flex-col h-full gap-5 opacity-95 mt-5">
                <h1 className=" text-color-navyBlue text-2xl font-bold opacity-80">
                  Support
                </h1>
                <h3>Help Centers</h3>
                <h3>Video Tutorial</h3>
                <h3>Cookie Settings</h3>
              </div>
              <div className="flex flex-col h-full gap-5 opacity-95 mt-5">
                <h1 className="text-color-navyBlue text-2xl font-bold opacity-80">
                  Add-Ons
                </h1>
                <h3>Download For Chrome</h3>
                <h3>Download For Firefox</h3>
              </div>
              <div className="flex flex-col h-full gap-5 opacity-95 mt-5">
                <h1 className="text-color-navyBlue text-2xl font-bold opacity-80">
                  Developers
                </h1>
                <h3>Developers Tools</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LastSection;
