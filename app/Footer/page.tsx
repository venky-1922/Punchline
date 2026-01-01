"use client"
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center flex-col px-30  text-black bg-[#00D8FF] pb-20 w-full">
      <h1 className="sm:text-[150px] md:text-[160px] lg:text-[200px] xl:text-[270px] font-extrabold w-fit">Punchline</h1>
      <div className="flex sm:flex-col xl:flex-row sm:justify-center sm:w-[50%] w-full xl:gap-15 justify-between">
        <div className="sm:w-[50%]  xl:w-[10%] sm:h-fit xl:h-[300px] sm:mb-[20px]">
          <div className="flex flex-col h-full justify-between">
            <Image src="/horselogo.png" alt="" height={100} width={120} />
            <Image src="/brand.svg" alt="" height={150} width={150} />
          </div>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] sm:gap-5 xl:gap-7">
          <h1 className="text-4xl font-bold">Contact us</h1>
          <p> info@punchline.be</p>
          <p>+32 456 12 25 12</p>
          <p>Wakkensesteenweg 6 - 8700 Tielt</p>
          <p>BTW BE0649.951.171</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] gap-7 sm:gap-5">
          <h1 className="text-4xl font-bold whitespace-nowrap">
            Work with Punchline
          </h1>
          <p>What we do</p>
          <p>How we do it</p>
          <p>Projects</p>
        </div>
        <div className="flex flex-col sm:h-fit xl:h-[300px] gap-7 sm:gap-5">
          <h1 className="text-4xl font-bold whitespace-nowrap">
            Work at Punchline
          </h1>
          <p>Discover the team</p>
          <p>Jobs</p>
        </div>
      </div>
      <div className="flex sm:flex-col sm:w-[50%] sm:justify-center sm:gap-3 md:flex-row w-full justify-between xl:gap-15 xl:w-full mt-15">
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
