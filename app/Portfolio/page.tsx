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
        start: "top 60%",
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
        start: "top 60%",
        scrub: 3,
        end: "top 30%",
      },
    });
  });

  return (
    <div className="bg-white h-fit pb-30 px-40 pt-20">
      <div className="px-5 py-1 bg-amber-100 text-black w-fit rounded-full">
        Portfolio
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-[30%] text-black text-6xl font-bold">
          Tough job? Check! ✅
        </div>
        <div className="text-black w-[40%] text-2xl">
          From telecom operators and car brands to the government, they all
          count on Punchline to use social media successfully.
        </div>
      </div>
      <div className="card1 flex flex-wrap w-full mt-5">
        <div className="main1 flex flex-col gap-7 w-[50%] p-5 text-black">
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
          <h1 className="text-4xl font-bold">Proximus Picks</h1>
          <p>
            We built custom reporting models, set up a direct line with the
            technical team, and tailored content for three audiences:
            informative on Facebook, visual on Instagram, and creative on
            TikTok. Using Emplifi and RingCentral, we monitored and engaged
            continuously, strengthening the bond between Pickx and its
            community.
          </p>
        </div>
        <div className="card2 main2 flex flex-col gap-7 w-[50%] p-1 py-3 text-black">
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
          <h1 className="text-4xl font-bold">Combell</h1>
          <p>
            For Combell, we made Employer Branding tangible through videos
            supported by advertising. The result: wide reach, high engagement,
            and costs well below market averages.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center mt-7">
        <button className="px-10 py-5 bg-[#233333] text-white rounded-full w-fit cursor-pointer">
          See more projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
