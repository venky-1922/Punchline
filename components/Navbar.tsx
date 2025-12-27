import React from "react";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between h-25 w-full text-black px-[100px] items-center pt-10">
      <div
        id="heading"
        className="flex items-center justify-center"
      >
        <img className="h-[70px]" src="./horse.png" alt="" />
        <h1 className="text-4xl font-[1000] font-extrabold italic">Punchline</h1>
      </div>
      <div className="flex nav-items bg-[#99EFFF] text-xl gap-[50px] items-center px-10 py-3 rounded-full ">
        <div className="flex items-center gap-1">
        <Link href="">Work with Punchline</Link>
            <IoIosArrowDropdown />
        </div>
        <Link href="">Work at Punchline</Link>
        <Link href="" className="bg-[#C4A3F6] px-6 py-3 rounded-full">Contact us</Link>
      </div>
    </div>
  );
};

export default Navbar;
