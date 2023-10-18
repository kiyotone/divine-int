import React from "react";
import hero from "../../../public/hero.jpeg";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[75vh]"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl text-[#ddd]">
            <h1 className="mb-5 text-5xl font-bold ">
              Via Divine Make a global line
            </h1>
            <p className="mb-5">
              Become A Medium Of Multi Things From The Base Of Agriculture To
              The High Point Of Science And Technology.
            </p>
            <button className="btn  button-primary">Join With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
