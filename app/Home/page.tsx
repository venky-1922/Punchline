"use client";
import React, { useRef } from "react";
import "@/styles/HomePage.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from("#word", {
      x: -30,
      duration: 1.5,
      delay: 1,
      opacity: 0,
      scrub: 2,
    });
    gsap.from(".image", {
      y: 30,
      duration: 1.5,
      delay: 1,
      opacity: 0,
    });
  });
  return (
    <div id="homepage" className="bg-[#00D8FF]">
      <div className="first-half">
        <Navbar />
        <div ref={homeRef} className="heading-class">
          <h1 id="word" className={`text-red font-extrabold `}>
            Punchline
          </h1>
          <Image
            className="image z-2"
            src={"/horses.png"}
            alt=""
            height={700}
            width={600}
          ></Image>
        </div>
      </div>
      <div className="second-half">
        <div className="matter">
          <div>Give your social media an extra punch</div>
          <Image
            className="image2 z-2"
            src={"/punch.png"}
            alt=""
            height={80}
            width={100}
          ></Image>
        </div>
        <div className="matter-container flex justify-between">
          <div className=" matter2">
            Punchline ensures that your social media works for you, without you
            having to lift a finger. Our experts know how to captivate an online
            audience as well as how to transform your clients into true and real
            fans.
          </div>
          <div className="matter3">
            <button className="button1 rounded-full">How do we do it</button>
            <button className="button2 rounded-full">Our projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
