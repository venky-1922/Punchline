"use client"
import Approach from "./Approach/page";
// import Navbar from "@/components/Navbar";
import HomePage from "./Home/page";
import Partners from "./Partners/page";
import Services from "./Services/page";


export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      {/* <Navbar /> */}
      <HomePage />
      <Partners />
      <Services />
      <Approach />
    </div>
  );
}
