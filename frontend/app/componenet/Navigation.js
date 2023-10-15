import React from "react";

import Link from "next/link";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";

export const Navigation = () => {
  return (
    <div>
      <div className="p-2 bg-[#2844a1] flex justify-around text-xs">
        <div className="flex gap-5">
          <Link href="https://www.facebook.com/" target="#">
            <BsFacebook className="text-[#fadd88] h-5 w-5" />
          </Link>
          <Link href="https://www.twitter.com/" target="#">
            <RiTwitterXLine className="text-[#fadd88] h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/" target="#">
            <RiInstagramLine className="text-[#fadd88] h-5 w-5" />
          </Link>
        </div>
        <div className="flex">
          <div className="flex gap-2">
            <BsTelephoneFill className="text-[#fadd88] h-4 w-4" />
            <span>Phone No</span>
          </div>
          <div className=""> </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
