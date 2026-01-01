"use client"
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";
import  "@/styles/Navbar.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        const tl=gsap.timeline()
        tl.from("#heading",{
            y:-20,
            duration:1,
            opacity:0,
            delay:1
        })
        tl.from(".nav-items,.items",{
             y:-5,
            duration:1,
            opacity:0,
            stagger:1
            // delay:1,
        })
    })
  return (
    <div ref={navRef} className="flex justify-between h-25 w-full text-black items-center pt-10">
      <div id="heading" className="flex items-center justify-center">
        <Image
          className=" "
          src="/horseLogo.png"
          alt="heading"
          width={60}
          height={100}
        ></Image>
        <h1 className="text-4xl font-[1000] italic">Punchline</h1>
      </div>
      <div className="flex nav-items bg-[#99EFFF] items-center px-5 py-2 rounded-full ">
        <div className="items flex items-center gap-1 whitespace-nowrap">
          <Link className="text-[clamp(12px,2vw,16px)]" href="">Work with Punchline</Link>
          <IoIosArrowDropdown />
        </div>
        <Link className="items whitespace-nowrap text-[clamp(12px,2vw,16px)]" href="" >Work at Punchline</Link>
        <Link  href="" className="items bg-[#C4A3F6] px-6 py-3 rounded-full whitespace-nowrap">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
