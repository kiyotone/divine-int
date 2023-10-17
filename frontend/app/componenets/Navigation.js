import React from "react";
import Image from "next/image";
import logo from "../../public/Picture1.png";

import Link from "next/link";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export const Navigation = () => {
  return (
    <div>
      <div className="p-2 bg-[#2844a1] flex justify-around text-xs">
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
          <div className="h-full rounded-md w-[1px] bg-[rgb(238,238,238,0.5)]"></div>
          <div className="flex gap-2 mx-6">
            <HiOutlineMail className="text-[#fadd88] h-4 w-4 " />
            <span>sumanou11@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="navbar bg-[#374250] p-3 flex justify-around">
        <div className="ml-[3rem]">
          <a href="#">
            <Image
              src={logo}
              alt="Divine Logo"
              className="scale-100 h-14 w-80"
            />
          </a>
        </div>
        <div className="flex-none  mr-[3rem]">
          <ul className="menu menu-horizontal px-1 flex items-center">
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
            <li className="ml-1">
              <button className="btn btn-success bg-[#2844a1] text-inherit p-4 border-none">
                Join with us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
