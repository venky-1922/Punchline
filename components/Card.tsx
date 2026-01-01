"use client"
import React from "react";
import Image from "next/image";

interface CardProps {
  class: string;
  src: string;
  heading: string;
  matter: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`${props.class} flex flex-col sm:flex-row bg-[#F9EAF0] w-full h-fit sm:px-10 py-5 rounded-2xl gap-6 hover:bg-[#C4A3F6]`}
    >
      <div className="flex w-full sm:w-[30%] justify-center pt-7.5">
        <Image
          className="h-17 w-17 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-3  bg-[#F2C4D4] rounded-full"
          src={props.src}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="py-6 px-2 sm:px-5 sm:w-[70%] text-black">
        <h1 className="text-[clamp(20px,6vw,50px)] font-bold pb-7 ">{props.heading}</h1>
        <p className="w-[90%] sm:w-[80%] text-justify  text-[#33737E] text-[clamp(10px,4vw,16px)]">{props.matter}</p>
      </div>
    </div>
  );
};

export default Card;
