"use client"
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center flex-col px-20 lg:px-30  text-black bg-[#00D8FF] pb-20 w-full">
      <h1 className="text-[clamp(70px,15vw,270px)] font-extrabold w-fit">Punchline</h1>
      <div className="flex flex-col sm:flex-col xl:flex-row sm:justify-center sm:w-[50%] w-full xl:gap-15 justify-between">
        <div className="w-[50%] sm:w-[50%]  xl:w-[10%] xl:h-[300px] h-[300px] sm:mb-[20px]">
          <div className="flex flex-col h-[300px] justify-between ">
            <Image src="/horselogo.png" alt="" height={100} width={120} />
            <Image src="/brand.svg" alt="" height={150} width={150} />
          </div>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] gap:3 sm:gap-4 md:gap-5 xl:gap-6">
          <h1 className="text-[clamp(25px,2vw,40px)] font-bold">Contact us</h1>
          <p className="text-[clamp(12px,2vw,16px)]" > info@punchline.be</p>
          <p className="text-[clamp(12px,2vw,16px)]">+32 456 12 25 12</p>
          <p className="text-[clamp(12px,2vw,16px)]">Wakkensesteenweg 6 - 8700 Tielt</p>
          <p className="text-[clamp(12px,2vw,16px)]">BTW BE0649.951.171</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] gap:3 xl:gap-7 sm:gap-5">
          <h1 className="text-[clamp(25px,2vw,40px)] font-bold whitespace-nowrap">
            Work with Punchline
          </h1>
          <p className="text-[clamp(12px,2vw,16px)]">What we do</p>
          <p className="text-[clamp(12px,2vw,16px)]">How we do it</p>
          <p className="text-[clamp(12px,2vw,16px)]">Projects</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] gap:3 xl:gap-7 sm:gap-5">
          <h1 className="text-[clamp(25px,2vw,40px)] font-bold whitespace-nowrap">
            Work at Punchline
          </h1>
          <p className="text-[clamp(12px,2vw,16px)]">Discover the team</p>
          <p className="text-[clamp(12px,2vw,16px)]" >Jobs</p>
        </div>
      </div>
      <div className="flex flex-col gap-[clamp(16px,2vw,60px)] sm:flex-col sm:w-[50%] sm:justify-center md:flex-row w-full justify-between xl:w-full mt-15">
        <p>© 2025 Punchline</p>
        <div className="flex gap-5">
            <FaLinkedin size={25} />
            <AiFillInstagram size={27} />
        </div>
        <p className="underline">Privacy Policy</p>
        <p className="underline">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
