import React from "react";
import Image from "next/image";
import logo from "../../public/Picture1.png";

import Link from "next/link";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export const Navigation = () => {
  return (
    <div className="">
      <div className="px-40 py-2 bg-[#2844a1] flex justify-between text-xs">
        <div className="flex gap-5">
          <Link href="https://www.facebook.com/divinediaintl/" target="#">
            <BsFacebook className="text-[#fadd88] h-5 w-5" />
          </Link>
          <Link href="https://www.twitter.com/" target="#">
            <RiTwitterXLine className="text-[#fadd88] h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/" target="#">
            <RiInstagramLine className="text-[#fadd88] h-5 w-5" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex gap-2 mx-6">
            <BsTelephoneFill className="text-[#fadd88] h-4 w-4 " />
            <span>Phone No</span>
          </div>
          <div className="h-full rounded-md w-[1px] bg-[rgb(238,238,238,0.5)] "></div>
          <div className="flex gap-2 ml-3">
            <HiOutlineMail className="text-[#fadd88] h-4 w-4 " />
            <span>sumanou11@gmail.com</span>
          </div>
        </div>
      </div>
      <div className=" px-40 py-7 bg-[#fff] flex justify-between text-[#333]">
        <div className="">
          <a href="#">
            <Image
              src={logo}
              alt="Divine Logo"
              className="scale-100 h-14 w-80"
            />
          </a>
        </div>
        <div className="">
          <ul className="menu menu-horizontal flex items-center ">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Destination</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li className="">
              <button className="btn btn-success button-primary">
                Join with us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
