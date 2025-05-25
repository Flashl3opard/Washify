import Footer from "../components/Footer";
import Homepage from "../components/Homepage";
import Learn from "../components/Learn";
import Navbar from "../components/Navbar";
import Works from "../components/Works";

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
