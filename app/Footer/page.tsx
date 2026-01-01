"use client"
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center flex-col px-30  text-black bg-[#00D8FF] pb-20 w-full">
      <h1 className="text-[clamp(70px,20vw,270px)] font-extrabold w-fit">Punchline</h1>
      <div className="w-full flex flex-col gap-5 xl:flex-row md:justify-center sm:w-[50%] items-start xl:gap-15 justify-between">
        <div className="flex flex-col sm:h-fit xl:h-[300px] xl:gap-7 gap-2 xl:gap-7">
          <h1 className="text-[clamp(20px,6vw,40px)] font-bold whitespace-nowrap">Contact us</h1>
          <p className="text-[clamp(10px,3vw,16px)]"> info@punchline.be</p>
          <p className="text-[clamp(10px,3vw,16px)]">+32 456 12 25 12</p>
          <p className="text-[clamp(10px,3vw,16px)] whitespace-nowrap">Wakkensesteenweg 6 - 8700 Tielt</p>
          <p className="text-[clamp(10px,3vw,16px)]">BTW BE0649.951.171</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] xl:gap-7 gap-2">
          <h1 className="text-[clamp(20px,6vw,40px)] font-bold whitespace-nowrap">
            Work with Punchline
          </h1>
          <p className="text-[clamp(10px,3vw,16px)]">What we do</p>
          <p className="text-[clamp(10px,3vw,16px)]">How we do it</p>
          <p className="text-[clamp(10px,3vw,16px)]">Projects</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] xl:gap-7 gap-2">
          <h1 className="text-[clamp(20px,6vw,40px)] font-bold whitespace-nowrap">
            Work at Punchline
          </h1>
          <p className="text-[clamp(10px,3vw,16px)]">Discover the team</p>
          <p className="text-[clamp(10px,3vw,16px)]">Jobs</p>
        </div>
      </div>
      <div className="flex flex-col sm:w-[50%] sm:justify-center gap-3 xl:flex-row w-full justify-between xl:gap-15 xl:w-full mt-15">
        <p className="text-[clamp(10px,3vw,16px)]">© 2025 Punchline</p>
        <div className="flex gap-5">
            <FaLinkedin size={25} />
            <AiFillInstagram size={27} />
        </div>
        <p className="underline text-[clamp(10px,3vw,16px)]">Privacy Policy</p>
        <p className="underline text-[clamp(10px,3vw,16px)]">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
