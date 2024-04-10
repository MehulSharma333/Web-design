import React from "react";

const Button = ({ title, className, image }) => {
  return (
    <div
      className={`w-[130px] h-[50px] rounded-3xl flex justify-center items-center ${
        className ? className : ""
      }`}
    >
      {title || <img src={image} className="w-1/2 h-full object-contain" />}
    </div>
  );
};

export default Button;
