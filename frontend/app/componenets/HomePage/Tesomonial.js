import React, { useEffect, useState } from "react";
import Image from "next/image";
import test1 from "../../../public/test1.jpg";
import test2 from "../../../public/test2.png";
import test3 from "../../../public/test3.png";
import test4 from "../../../public/test4.png";

const testimonials = [
  {
    id: 1,
    name: "Khem Gyawali",
    text: "As a student, Divine DIA has been a life-changing journey. They turned my dream of studying abroad into a reality. With their guidance, I gained admission to a top Korean university, and the support they provided was invaluable. If you're an aspiring student, Divine DIA is the path to achieving your dreams.",
    image: test2.src,
  },
  {
    id: 2,
    name: "Kiran Dahal",
    text: "Divine DIA has been my guiding light on my educational journey. They transformed my dreams of studying abroad into a reality, and their support made it all possible. If you're a student with big dreams, Divine DIA is the key to unlocking your potential.",
    image: test2.src,
  },
  {
    id: 3,
    name: "Ganesh Khadka",
    text: "As a student, Divine DIA has been my passport to success. They made my dream of studying abroad come true with expert guidance and unwavering support. If you're a student with ambitious aspirations, Divine DIA is your partner on this incredible journey.",
    image: test3.src,
  },
];

const Tesomonial = () => {
  return (
    <div className="bg-[#eee]">
      <div className="container text-[#333] ">
        <div>
          <h1 className="hrline mb-[32px]">From Our Students</h1>
        </div>
        <div className="carousel w-full overflow-y-hidden">
          <div
            id="item1"
            className="carousel-item w-full flex flex-col items-center justify-center "
          >
            <Image
              src={test2.src}
              alt="Testomonial 1"
              width={200}
              height={200}
            />
            <div className="relative mt-[24px] w-1/2 italic testomonial">
              <p>
                As a student, Divine DIA has been a life-changing journey. They
                turned my dream of studying abroad into a reality. With their
                guidance, I gained admission to a top Korean university, and the
                support they provided was invaluable. If you're an aspiring
                student, Divine DIA is the path to achieving your dreams.
              </p>
            </div>
            <div className="w-1/2 text-right">-Khem Gyawali</div>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex flex-col items-center justify-center "
          >
            <Image
              src={test3.src}
              alt="Testomonial 1"
              width={200}
              height={200}
            />
            <div className="relative mt-[24px] w-[50%] italic testomonial">
              <p>
                Divine DIA has been my guiding light on my educational journey.
                They transformed my dreams of studying abroad into a reality,
                and their support made it all possible. If you're a student with
                big dreams, Divine DIA is the key to unlocking your potential.
              </p>
            </div>
            <div className="w-1/2 text-right">-Kiran Dahal</div>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex flex-col items-center justify-center "
          >
            <Image
              src={test4.src}
              alt="Testomonial 1"
              width={200}
              height={200}
            />
            <div className="relative mt-[24px] w-[50%] italic testomonial">
              <p>
                As a student, Divine DIA has been my passport to success. They
                made my dream of studying abroad come true with expert guidance
                and unwavering support. If you're a student with ambitious
                aspirations, Divine DIA is your partner on this incredible
                journey.
              </p>
            </div>
            <div className="w-1/2 text-right">-Ganesh Khadka</div>
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tesomonial;
