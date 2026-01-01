"use client"
import Card from "@/components/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

const Approach = () => {
  useGSAP(
    ()=>{
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".card",{
        x:-200,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".card",
          scroller:"body",
          // markers:true,
          start: "top 70%",
          scrub:3,
          end:"top 30%"
        }
      })
    }
  )
  return (
    <div className="flex flex-col-reverse w-full pt-12.5 sm:px-17.5 bg-white pb-25 justify-between] lg:flex-row">
      <div className="flex flex-col gap-10 w-[80%] pl-5 sm:pl-0">
        <Card
          class="card"
          src="/clock.png"
          heading="Do you always have the time?"
          matter="The internet doesn't have working hours and your clients expect you to be able to help them in the quickest time possible. If you'd like to successfully roll out your strategy you need to be able to invest your time."
        />
        <Card
          class="card"
          src="/shoulder.png"
          heading="Do you have the expertise?"
          matter="What is a relevant channel one day, belongs in a museum the next day. Having a quick response time to new trends is essential to staying in the game."
        />
        <Card
          class="card"
          src="/search.png"
          heading="Do you have the skills?"
          matter="Depending on the case you need different skills and even those can change from one day to the next. Do you need all that knowledge internally or is it best to rely on an external partner?"
        />
      </div>
      <div className="xl:w-[50%] p-10 sm:px-20 text-black flex flex-col gap-8 sm:w-[80%] items-start sm:items-center">
        <p className="p-2 rounded-full bg-amber-100 w-fit whitespace-nowrap">
          Your partner in crime
        </p>
        <h1 className="font-bold text-[clamp(20px,6vw,50px)]">Make it easier for yourself</h1>
        <p className="text-justify text-[#33737E] text-[clamp(14px,4vw,20px)]">
          Monitoring what happens on your various social media channels is an
          important task, however it necessitates a lot of work.
        </p>
        <button className="px-7 py-5 bg-[#233333] text-white rounded-full w-fit cursor-pointer whitespace-nowrap text-[clamp(10px,4vw,16px)]">
          This is how we approach it
        </button>
      </div>
    </div>
  );
};

export default Approach;
