import React from "react";
import aboutus from "../../../public/aboutus.png";
import Image from "next/image";

const AoutUs = () => {
  return (
    <div className="mb-[34px] p-sections">
      <div className="container">
        <div className="bg-[#fafafa] text-[#333] mb-[48px] p-big grid grid-cols-2 items-center justify-center gap-[32px]">
          <div>
            <h1 className="hrline">About Us</h1>

            <div className="mt-[32px] leading-7 tracking-wide">
              <p>
                Aiming for professional study from teen age high school students
                to MBA students in several institutes, colleges and
                universities. Divine International Academy (DIA) Multi Service
                and Trade P. Ltd. is founded in 2017 with the vision of
                spreading Divine and fresh culture in the field of education,
                society, culture, food and drinks, commerce and trade. Divine
                DIA is dedicated to connecting national and international
                students, universities, colleges, and institutions through
                professional educational activities. The founder had a dream of
                establishing an educational institution and an overseas
                consulting office since 2000 but couldn't realize it due to work
                commitments in Korea. The seeds of this dream were planted in
                their heart.
              </p>
            </div>
            <div className="button-primary inline-block rounded-lg !p-3 mt-[16px]">
              Learn More &rarr;
            </div>
          </div>

          <div className=" pl-20">
            <Image src={aboutus} alt="About us" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AoutUs;
