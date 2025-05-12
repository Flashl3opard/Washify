import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Works from "./components/Works";
import Learn from "./components/Learn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Homepage />
      <Works />
      <Learn />
      <Footer />
    </div>
  );
}
