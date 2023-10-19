import React from "react";
import Image from "next/image";
import hu from "../../../public/universities/hu.jpeg";
import kc from "../../../public/universities/kc.jpeg";
import nu from "../../../public/universities/nu.png";
import su from "../../../public/universities/su.jpg";

const Uni = () => {
  return (
    <div className="bg-white w-full pb-[48px]">
      <div className="container flex justify-between">
        <Image src={hu} alt="HU" className="h-[100px] w-[100px] scale-100" />
        <Image src={kc} alt="KC" className="h-[100px] w-[100px] scale-100" />
        <Image src={nu} alt="NU" className="h-[100px] w-[300px] scale-100" />
        <Image src={su} alt="SU" className="h-[100px] w-[100px] scale-100" />
      </div>
    </div>
  );
};

export default Uni;
