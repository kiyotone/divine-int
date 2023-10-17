import Image from "next/image";
import { Navigation } from "./componenet/Navigation";
import Hero from "./componenet/Hero";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
    </main>
  );
}
