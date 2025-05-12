import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Homepage />
      <Works />
    </div>
  );
}
