"use client";
import { Navigation } from "./componenets/Navigation";
import Hero from "./componenets/HomePage/Hero";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./componenets/redux/mainSlice";
import ContactForm from "./componenets/HomePage/ContactForm";

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
      <div>
      <Navigation />      
      <Hero />
      </div>

      <div>

        

      </div>


    <div>
        <ContactForm />
      </div>    

    </main>
  );
}
