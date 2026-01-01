"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Portfolio = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("useGSAP running");
    const main = document.querySelector(".main1");
    if (main) {
      main.addEventListener("mouseenter", (dets) => {
        console.log("Mouse entered:", dets);
        gsap.to(".main1", {
          backgroundColor: "#99EFFF",
          borderRadius: "20px",
          scale: 0.9,
        });
      });
      main.addEventListener("mouseleave", (dets) => {
        console.log("Mouse entered:", dets);
        gsap.to(".main1", {
          backgroundColor: "inherit",
          scale: 1,
        });
      });
    }
    const main2 = document.querySelector(".main2");
    if (main2) {
      main2.addEventListener("mouseenter", (dets) => {
        console.log("Mouse entered:", dets);
        gsap.to(".main2", {
          backgroundColor: "#99EFFF",
          borderRadius: "20px",
          scale: 0.9,
        });
      });
      main2.addEventListener("mouseleave", (dets) => {
        console.log("Mouse entered:", dets);
        gsap.to(".main2", {
          backgroundColor: "inherit",
          scale: 1,
        });
      });
    }
    gsap.from(".card1", {
      x: -200,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".card1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        scrub: 3,
        end: "top 30%",
      },
    });
    gsap.from(".card2", {
      x: 400,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".card2",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        scrub: 3,
        end: "top 30%",
      },
    });
  });

  return (
    <div className="bg-white h-fit pb-30 sm:px-40 px-5 pt-20">
      <div className="px-5 py-1 bg-amber-100 text-black w-fit rounded-full">
        Portfolio
      </div>
      <div className="flex-col justify-between mt-5 sm:flex-col sm:gap-10 xl:flex-row">
        <div className="xl:w-[30%] w-[100%]  text-black text-[clamp(30px,2vw,60px)] font-bold sm:w-[100%]">
          Tough job? Check! ✅
        </div>
        <div className="text-black sm:w-[100%] xl:w-[40%] text-[clamp(14px,2vw,20px)] ">
          From telecom operators and car brands to the government, they all
          count on Punchline to use social media successfully.
        </div>
      </div>
      <div className="card1 flex flex-wrap w-full mt-5 sm:flex-col sm: xl:flex-row sm:items-center">
        <div className="main1 sm:w-[100%] lg:w-[100%] xl:w-[50%] flex flex-col gap-7 p-5 text-black">
          <p className="px-5 py-1 text-[#33737E] bg-white w-fit rounded-full items-start shrink-0 whitespace-nowrap">
            Community management
          </p>
          <Image
            className="rounded-2xl w-[100%]"
            src="/portfolio1.png"
            alt=""
            height={400}
            width={500}
          ></Image>
          <h1 className="text-[clamp(25px,2vw,40px)] font-bold">Proximus Picks</h1>
          <p className="text-[clamp(12px,2vw,16px)]">
            We built custom reporting models, set up a direct line with the
            technical team, and tailored content for three audiences:
            informative on Facebook, visual on Instagram, and creative on
            TikTok. Using Emplifi and RingCentral, we monitored and engaged
            continuously, strengthening the bond between Pickx and its
            community.
          </p>
        </div>
        <div className="card2 sm:w-[100%] xl:w-[50%] main2 flex flex-col gap-7 lg:w-[100%] p-1 py-3 text-black">
          <div className="flex gap-3 text-[#33737E] px-5 flex-wrap">
            <p className="px-5 py-1 bg-white w-fit rounded-full items-start whitespace-nowrap">
              Advertising
            </p>
            <p className="px-5 py-1 bg-white w-fit rounded-full items-start whitespace-nowrap">
              Content creation
            </p>
            <p className="px-5 py-1 bg-white w-fit rounded-full items-start whitespace-nowrap">
              Strategy
            </p>
          </div>

          <Image
            className="rounded-2xl w-[100%]"
            src="/portfolio2.gif"
            alt=""
            height={500}
            width={500}
          ></Image>
          <h1 className="text-[clamp(25px,2vw,40px)] font-bold">Combell</h1>
          <p className="text-[clamp(12px,2vw,16px)]">
            For Combell, we made Employer Branding tangible through videos
            supported by advertising. The result: wide reach, high engagement,
            and costs well below market averages.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center mt-7">
        <button className="px-[clamp(24px,2.5vw,40px)] text-[clamp(12px,2vw,16px)] py-[clamp(12px,2.5vw,20px)] bg-[#233333] text-white rounded-full w-fit cursor-pointer">
          See more projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
