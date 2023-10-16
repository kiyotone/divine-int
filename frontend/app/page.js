"use client"
import { Navigation } from "./componenet/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./componenet/redux/mainSlice";

export default function Home() {
  const main = useSelector((state)=> state.main);
  console.log(main.name)
  const dispatch = useDispatch();
  
  const handleClick = () => {

    // console.log(main.name)
    const na = document.getElementById("name");
    console.log(na.value);
    dispatch(changeName(na.value))
  }

  return (
    <main className="text-white ">
      
      <Navigation />
      <div>
      {main.name}
      </div>
      <input type="text" className="bg-gray-700 h-10 rounded-md" id={"name"}></input>
      <button className="bg-white text-black" onClick={()=>handleClick()}>CLICK</button>

    </main>
  );
}
