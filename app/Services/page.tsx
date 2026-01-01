"use client"
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Services = () => {
  const services_ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#image", {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#image",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
      },
    });
  });
  return (
    <div
      ref={services_ref}
      className="flex xl:flex-row w-full py-40 sm:flex-col sm:items-center bg-[#FFFFFF] pt-40 px-17.5 text-black justify-between"
    >
      <div className="h-fit lg:w-[40%] sm:w-[80%] ">
        <p className="text-[#888672] bg-[#fbf8eddd] py-1 w-fit px-4 rounded-full whitespace-nowrap">
          Our services
        </p>
        <div className="mt-13 mb-13 text-5xl">
          We&apos;ll help you from 👍 to lead
        </div>
        <div className="text-[20px] text-justify text-[#33737E] mb-7">
          At Punchline we spend countless hours online which allows us to know
          exactly what works... and what doesn&apos;t work.
        </div>
        <div className="flex flex-col sm:items-center xl:items-start gap-2">
          <button className="px-5 py-4 cursor-pointer rounded-full text-white bg-[#223333] whitespace-nowrap">
            Find out what we do
          </button>
          <button className="px-5 py-4 cursor-pointer  rounded-full bg-[#00d8ff] whitespace-nowrap">
            Find out how we do it
          </button>
        </div>
      </div>
      <div className="h-fit w-70%  mt-5"></div>
      <div className="flex flex-wrap gap-8 sm:flex-col sm:items-center lg:flex-row md  justify-end">
        <div className="w-[40%]">
          <Image
            id="image"
            className="object-cover h-96 w-[320px] rounded-[20px] mb-8"
            src="/image1.jpg"
            alt=""
            width={290}
            height={500}
          />
          <p className="mb-8 text-justify w-[80%] text-[#33737E] ">
            We keep our finger on the pulse of your online community to ensure
            that your clients become true fans.
          </p>
          <h2 className="text-4xl font-extrabold">Community management</h2>
        </div>
        <div className="w-[40%]">
          <Image
            id="image"
            className="object-cover h-102.5 w-[320px] rounded-[20px] mb-8"
            src="/image2.jpg"
            alt=""
            width={290}
            height={500}
          />
          <p className="mb-8 text-justify w-[70%] text-[#33737E] ">
            Punchline helps you create a more consistent online storyline.
          </p>
          <h2 className="text-4xl font-extrabold">Manage your social media</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
