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
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // motion state
  let position = 0;
  let scrollForce = 0;
  let direction = 1;

  const baseSpeed = 1.5;
  const friction = 0.4;

  useGSAP(() => {
    const container = containerRef.current!;
    let wrapWidth = 0;

    // measure width after render
    requestAnimationFrame(() => {
      wrapWidth = container.scrollWidth / 2;
    });

    const onWheel = (e: WheelEvent) => {
      // eslint-disable-next-line react-hooks/immutability
      direction = e.deltaY >= 0 ? 1 : -1;
      console.log(e.deltaY);
      scrollForce += Math.abs(e.deltaY) * 0.004;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    gsap.ticker.add(() => {
      scrollForce *= friction;
      position += (baseSpeed + scrollForce) * direction;

      // 🔁 circular wrap logic
      if (position > wrapWidth) position -= wrapWidth;
      if (position < 0) position += wrapWidth;

      gsap.set(container, {
        x: -position,
      });
    });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="partners-container pt-25 px-18 sm:h-screen h-fit pb-25 sm:pb-0 bg-[#FBF8ED] ">
      <div className="text-black text-[clamp(10px,10vw,45px)] font-extrabold">
        They shine 🤩 online thanks to Punchline
      </div>

      <div className="overflow-hidden mt-30">
        <div
          ref={containerRef}
          className="image-container flex gap-5 w-max will-change-transform"
        >
          {/* 🔥 DUPLICATED CONTENT */}
          {[...brand_images, ...brand_images].map((src, index) => (
            <div key={index} className="shrink-0">
              <Image
                src={src}
                alt=""
                width={450}
                height={450}
                className="h-50 w-50 xl:h-100 xl:w-100 lg:h-90 lg:w-90 md:h-80 md:w-80 sm:h-70 sm:w-70 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
