"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Partners = () => {
  const brand_images = [
    "/brands/agents.png",
    "/brands/Bam.png",
    "/brands/colryut.png",
    "/brands/combell.webp",
    "/brands/duo.png",
    "/brands/falk and ross.png",
    "/brands/hedgren.png",
    "/brands/honda.png",
    "/brands/nato.png",
    "/brands/pickx.webp",
    "/brands/siemans.webp",
    "/brands/zoutman.png",
    "/brands/agents.png",
    "/brands/Bam.png",
    "/brands/colryut.png",
    "/brands/combell.webp",
    "/brands/duo.png",
    "/brands/falk and ross.png",
    "/brands/hedgren.png",
    "/brands/honda.png",
    "/brands/nato.png",
    "/brands/pickx.webp",
    "/brands/siemans.webp",
    "/brands/zoutman.png",
    "/brands/agents.png",
    "/brands/Bam.png",
    "/brands/colryut.png",
    "/brands/combell.webp",
    "/brands/duo.png",
    "/brands/falk and ross.png",
    "/brands/hedgren.png",
    "/brands/honda.png",
    "/brands/nato.png",
    "/brands/pickx.webp",
    "/brands/siemans.webp",
    "/brands/zoutman.png",
    "/brands/agents.png",
    "/brands/Bam.png",
    "/brands/colryut.png",
    "/brands/combell.webp",
    "/brands/duo.png",
    "/brands/falk and ross.png",
    "/brands/hedgren.png",
    "/brands/honda.png",
    "/brands/nato.png",
    "/brands/pickx.webp",
    "/brands/siemans.webp",
    "/brands/zoutman.png",
    "/brands/agents.png",
    "/brands/Bam.png",
    "/brands/colryut.png",
    "/brands/combell.webp",
    "/brands/duo.png",
    "/brands/falk and ross.png",
    "/brands/hedgren.png",
    "/brands/honda.png",
    "/brands/nato.png",
    "/brands/pickx.webp",
    "/brands/siemans.webp",
    "/brands/zoutman.png",
  ];
  const partners_ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    window.addEventListener("wheel", function (dets) {
      const Y = dets.deltaY;
      console.log("y value ", Y);

      if (Y > 0) {
        gsap.to(".image-container", {
          transform: "translateX(-100%)",
          duration: 120,
          repeat: -1,
          delay: 1,
          ease: "none",
          scrub:2,
        });
      }
      if (Y < 0) {
        gsap.to(".image-container", {
          transform: "translateX(100%)",
          duration: 240,
          repeat: -1,
          delay: 1,
          ease: "none",
          scrub:2,
        });
      }
    });
  });
  return (
    <div
      ref={partners_ref}
      className="partners-container pt-35 px-18 h-screen bg-[#FBF8ED]"
    >
      <div className="text-black text-[45px]  font-extrabold">
        They shine 🤩 online thanks to Punchline
      </div>
      <div className="overflow-x-hidden">
        <div className="image-container flex gap-10 w-max mt-15 -translate-x-1/2">
          {brand_images.map((src, index) => (
            <div key={index} className="shrink-0 ">
              <Image
                className="brand-image h-75 w-75 object-cover "
                src={src}
                alt=""
                width={350}
                height={350}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
