import Image from "next/image";
import React from "react";
import japan from "../../../public/Japan.jpeg";
import korea from "../../../public/Korea.jpeg";
import australia from "../../../public/Australia.jpeg";

const Destination = () => {
  return (
    <div className="bg-[#2844a1] p-big">
      <div className="container flex flex-col py-[32px] gap-[48px]">
        <div className="flex justify-center ">
          <p className="hrline !text-[#eee]">Destinations</p>
        </div>
        <div className="flex items-center text-[#333] justify-between ">
          <div className="bg-[#fafafa] rounded-md ">
            <Image
              src={japan}
              className="h-[400px] scale-100 w-[400px] rounded-t-md"
              alt="Japan"
            />
            <p className="destination-country">Japan</p>
          </div>
          <div className="bg-[#fafafa] rounded-md ">
            <Image
              src={korea}
              className="h-[400px] scale-100 w-[400px] rounded-t-md"
              alt="Korea"
            />
            <p className="p-5 text-center">Korea</p>
          </div>
          <div className="bg-[#fafafa] rounded-md ">
            <Image
              src={australia}
              className="h-[400px] scale-100 w-[400px] rounded-t-md"
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
