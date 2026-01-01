"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "@/styles/Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#heading", {
      y: -20,
      duration: 1,
      opacity: 0,
      delay: 1,
    });
    tl.from(".nav-items,.items", {
      y: -5,
      duration: 1,
      opacity: 0,
      stagger: 1,
      // delay:1,
    });
  });
  const handleOpen = ()=>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <div
      ref={navRef}
      className="flex justify-between lg:h-25 w-full text-black lg:items-center pt-10 items-start"
    >
      <div
        id="heading"
        className="flex items-center justify-center lg:ml-[50px]"
      >
        <Image
          className=" "
          src="/horseLogo.png"
          alt="heading"
          width={60}
          height={100}
        ></Image>
        <h1 className="text-4xl font-[1000] italic">Punchline</h1>
      </div>
      {!open && (
        <div className="flex bg-amber-200 h-full lg:hidden items-center">
          <MdMenuOpen size={30} onClick={()=>
            handleOpen()
          }/>
        </div>
      )}
      <div className={`flex nav-items absolute right-[-30px] z-10 bg-[#99EFFF]  right-0 ${open?"flex-col":"hidden"} lg:flex lg:items-center px-5 py-2 lg:rounded-full `}>
        <div className="flex w-full justify-end lg:hidden">
          <RxCross2 size={27} 
          onClick={()=>{
            handleClose();
          }}
          />
        </div>
        <div className="items flex items-center gap-1 whitespace-nowrap">
          <Link href="">Work with Punchline</Link>
          <IoIosArrowDropdown />
        </div>
        <Link className="items whitespace-nowrap" href="">
          Work at Punchline
        </Link>
        <Link
          href=""
          className="items bg-[#C4A3F6] px-6 py-3 rounded-full whitespace-nowrap w-fit"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
