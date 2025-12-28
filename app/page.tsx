"use client"
import Approach from "./Approach/page";
import Footer from "./Footer/page";
// import Navbar from "@/components/Navbar";
import HomePage from "./Home/page";
import Partners from "./Partners/page";
import Portfolio from "./Portfolio/page";
import Services from "./Services/page";


export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      {/* <Navbar /> */}
      <HomePage />
      <Partners />
      <Services />
      <Approach />
      <Portfolio />
      <Footer />
    </div>
  );
}
