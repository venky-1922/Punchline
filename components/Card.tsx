import React from "react";
import Image from "next/image";

interface CardProps {
    src : string,
    heading:string,
    matter:string
}

const Card:React.FC<CardProps> = (props) => {
  return (
    <div className="flex bg-[#F9EAF0] w-[60%] h-fit px-10 py-15 rounded-2xl gap-6">
      <div className="flex w-[15%] justify-center pt-7.5">
        <Image className="h-17.5 w-17.5 p-3  bg-[#f29ab9] rounded-full" src={props.src} alt="" width={100} height={100} />
      </div>
      <div className="py-6 px-5 w-[85%] text-black">
        <h1 className="text-5xl font-extrabold pb-7">{props.heading}</h1>
        <p>
          {props.matter}
        </p>
      </div>
    </div>
  );
};

export default Card;
