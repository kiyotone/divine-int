"use client";
import { Navigation } from "./componenets/Navigation";
import Hero from "./componenets/HomePage/Hero";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./componenets/redux/mainSlice";
import Footer from "./componenets/HomePage/Footer";
import AboutUs from "./componenets/HomePage/aboutus";
import Tesomonial from "./componenets/HomePage/Tesomonial";
import FromCEO from "./componenets/HomePage/FromCEO";

export default function Home() {
  const main = useSelector((state) => state.main);
  console.log(main.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(main.name)
    const na = document.getElementById("name");
    console.log(na.value);
    dispatch(changeName(na.value));
  };

  return (
    <main className="text-white ">
      <Hero />
      <div className="bg-[#d7d6d6] h-[25vh] w-full mb-[48px]"></div>
      <AboutUs />
      <Tesomonial />
      <FromCEO />
      <Footer />
    </main>
  );
}
