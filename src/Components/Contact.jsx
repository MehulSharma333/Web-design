import React from "react";

const Contact = () => {
  return (
    <div className=" relative lg:flex block w-full h-full">
      <div className="w-1/2 h-full">
        <div>
          <h1>SIMPLE AND INTITUTIVE</h1>
        </div>
        <div>
          <h1>Build and publish a form in minutes</h1>
        </div>
        <div>
          <p>
            Quickly get started with a straightforward form-building experience,
            which Calendly admins create and manage for teams. Share via link or
            embed on your website
          </p>
        </div>
      </div>

      <div className="w-1/2 h-full">
        <img
          className="w-full h-full object-contain"
          src="section4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
