import Image from "next/image";
import React from "react";
import japan from "../../../public/Japan.jpeg";
import korea from "../../../public/Korea.jpeg";
import australia from "../../../public/Australia.jpeg";

const Destination = () => {
  return (
    <div className="bg-[#2844a1] h-[50rem] flex flex-col items-center p-[24px] pb-[38px]">
      <div className="w-[77rem] items-center pt-[5rem]">
        <div className="flex pt-[38px]  justify-center">
          <p className="hrline !text-[#eee]">Destinations</p>
        </div>
        <div className="container flex items-center text-[#333] justify-between">
          <div className="bg-orange-400 ">
            <Image
              src={japan}
              className="h-[400px] scale-100 w-[400px]"
              alt="Japan"
            />
            <p className="p-5 text-center">Japan</p>
          </div>
          <div className="bg-orange-400 ">
            <Image
              src={korea}
              className="h-[400px] scale-100 w-[400px]"
              alt="Korea"
            />
            <p className="p-5 text-center">Korea</p>
          </div>
          <div className="bg-orange-400 ">
            <Image
              src={australia}
              className="h-[400px] scale-100 w-[400px]"
              alt="Australia"
            />
            <p className="p-5 text-center">Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
