import React from "react";
import test from "../../../public/test1.jpg";
import Image from "next/image";

const FromCEO = () => {
  return (
    <div className="p-sections">
      <div className="container">
        <div className="bg-[#fafafa] text-[#333]  p-big grid grid-cols-2 justify-center gap-[32px]">
          <div>
            <h1 className="hrline">From CEO</h1>

            <div className="mt-[24px] ">
              <p className=" text-justify leading-7 tracking-wide">
                Founder had a dream of founding the educational institution and
                abroad consulting office since 2000, tried to found However
                because of entering Korea for work, the project couldn't be
                established only the seeds of the dream be founded inside the
                core of the heart.Finally after having long experience of
                trading, export, import business as a marketing assistant in
                Korean company and long stay in Korea the dream came true in
                2017. Since the establishment Divine DIA served thousands of
                students in teaching Korean, English, German language.
              </p>
              <p></p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={test}
              alt="About us"
              className="rounded-xl h-[300px] w-[300px] scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromCEO;
