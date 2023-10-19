import React, { useEffect, useState } from "react";
import Image from "next/image";
import test1 from "../../../public/test1.jpg";
import test2 from "../../../public/test2.png";
import test3 from "../../../public/test3.png";
import test4 from "../../../public/test4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    image: test3.src,
  },
  {
    id: 3,
    name: "Ganesh Khadka",
    text: "As a student, Divine DIA has been my passport to success. They made my dream of studying abroad come true with expert guidance and unwavering support. If you're a student with ambitious aspirations, Divine DIA is your partner on this incredible journey.",
    image: test4.src,
  },
];

const Tesomonial = () => {
  return (
    <div className="bg-[#eee] p-big ">
      <div className="container text-[#333] p-48px">
        <div className=" w-[70rem]">
          <h1 className="hrline mb-[32px] pl-[10rem] after:h-[2px]">
            From Our Students
          </h1>
        </div>
        <Swiper
          rewind={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((state) => {
            return (
              <SwiperSlide className="bg-green-400 text-black" key={state.id}>
                <div className="carousel-item w-full flex flex-col items-center justify-center text-base text-justify mb-10">
                  <Image
                    src={state.image}
                    alt="Testomonial 1"
                    width={200}
                    height={200}
                  />
                  <div className="relative mt-[24px] w-[50%] italic testomonial ">
                    <p>{state.text}</p>
                  </div>
                  <div className="w-1/2 text-right">-{state.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Tesomonial;
