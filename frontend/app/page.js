"use client";
import { Navigation } from "./componenets/Navigation";
import Hero from "./componenets/Hero";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./componenets/redux/mainSlice";

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
      <Navigation />
      <Hero />
    </main>
  );
}
