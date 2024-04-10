import React, { useState } from "react";
import Button from "./Button";
import { HashLink as Link } from "react-router-hash-link";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function openToggle() {
    setToggle(true);
    disablePageScroll();
  }

  function closeToggle() {
    setToggle(false);
    enablePageScroll();
  }
  return (
    <nav className=" w-full h-[4rem]">
      <div className="w-full lg:flex hidden h-[3.8rem] justify-between items-center">
        <Link
          to="#home"
          className="flex flex-row gap-2 items-center justify-center ml-5"
        >
          <img className="w-[50px] h-[50px]" src="design-logo.jpg" alt="" />
          <h1 className=" font-ant text-color-azure text-3xl font-semibold">
            Calendly
          </h1>
        </Link>
        <div>
          <ul className="flex flex-row gap-10 items-center justify-center font-pop font-bold ">
            <Link to="#home" smooth>
              Individuals
            </Link>
            <Link to="#teams" smooth>
              Teams
            </Link>
            <Link to="#enterprise" smooth>
              Enterprise
            </Link>
            <Link className="flex items-center gap-2" to="#product" smooth>
              Product
              <img className="w-[10px] h-[10px]" src="down-arrow.png" alt="" />
            </Link>
            <Link to="#pricing" smooth>
              Pricing
            </Link>
            <Link className="flex items-center gap-2" to="#last-section" smooth>
              Resources
              <img className="w-[10px] h-[10px]" src="down-arrow.png" alt="" />
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 mr-5 items-center">
            <li>Sign Up</li>
            <li>
              <Button
                title="Get Started"
                className="bg-color-azure text-white text-sm cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[3rem] flex justify-end">
        {!toggle ? (
          <img
            className="w-[40px] h-[40px] lg:hidden mx-5 mt-5 z-20"
            src="hamburger.png"
            alt=""
            onClick={openToggle}
          />
        ) : (
          <img
            className="w-[40px] h-[40px] lg:hidden mx-5 mt-5 z-20"
            src="close.png"
            alt=""
            onClick={closeToggle}
          />
        )}
      </div>

      {toggle && (
        <div className="lg:hidden h-full w-full bg-slate-700  absolute top-0 right-0 z-10">
          <ul className="w-full h-full flex flex-col gap-8 items-center justify-center text-2xl font-nun text-white">
            <Link onClick={closeToggle} to="#home" smooth>
              Individuals
            </Link>
            <Link onClick={closeToggle} to="#teams" smooth>
              Teams
            </Link>
            <Link onClick={closeToggle} to="#enterprise" smooth>
              Enterprise
            </Link>
            <Link onClick={closeToggle} to="#product" smooth>
              Product
            </Link>
            <Link onClick={closeToggle} to="#pricing" smooth>
              Pricing
            </Link>
            <Link onClick={closeToggle} to="#last-section" smooth>
              Resources
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
