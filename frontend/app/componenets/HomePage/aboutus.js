import React from "react";
import aboutus from "../../../public/aboutus.png";
import Image from "next/image";

const AoutUs = () => {
  return (
    <div className="container w-[70rem] h-[40rem]">
      <div className="bg-[#fafafa] text-[#333] p-5 flex justify-center gap-[32px]">
        <div className="">
          <h1 className="hrline">About Us</h1>

          <div className="mt-[24px]">
            <p>
              Aiming for professional study from teen age high school students
              to MBA students in several institutes, colleges and universities.
              Divine International Academy (DIA) Multi Service and Trade P. Ltd.
              is founded in 2017 with the vision of spreading Divine and fresh
              culture in the field of education, society, culture, food and
              drinks, commerce and trade.
            </p>

            <p></p>
          </div>
        </div>

        <div className="pt-[15rem] pl-20">
          <Image src={aboutus} alt="About us" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AoutUs;
