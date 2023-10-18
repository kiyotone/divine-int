import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="mt-[48px]">
      <footer className=" footer p-10  text-[#ffe2db] bg-[#2844a1]">
        <aside className="flex h-full items-center">
          <Image src={logo} alt="Divine Logo" className="scale-100 h-15 w-80" />
        </aside>
        <nav className="flex flex-col justify-center h-full">
          <div className="mb-3">
            <p className="font-bold text-lg">
              Divine INt'l Academy Multi Serivce & Trade P. Ltd.
            </p>
            <span className="text-xs">
              Putalisadak,Baagbazar-28, Kathmandu,Nepal
            </span>
          </div>

          <div className="flex gap-2">
            <BsTelephoneFill className="text-[#fadd88] h-4 w-4 " />
            <span>Phone No</span>
          </div>
          <div className="flex gap-2 ">
            <HiOutlineMail className="text-[#fadd88] h-4 w-4 " />
            <span>sumanou11@gmail.com</span>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Links</header>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Servies</a>
          <a className="link link-hover">Destination</a>
          <a className="link link-hover">Contanct Us</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-1 bg-white text-[#333] text-xs">
        <aside>
          <p>
            Copyright © 2023 - All right reserved by Divine INt'l Academy Multi
            Serivce & Trade P. Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
