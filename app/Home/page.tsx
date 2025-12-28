"use client";
import React, { useRef } from "react";
import "@/styles/HomePage.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomePage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
     homeRef.current,
    {
      clipPath: 'ellipse(0% 0% at 50% 100%)',
    },
    {
      clipPath: 'ellipse(150% 120% at 50% 100%)',
      duration: 1.4,
      ease: 'power3.out',
    }
    )
    gsap.from("#word", {
      x: -30,
      duration: 1.5,
      delay: 1,
      opacity: 0,
      scrub: 2,
    });
    gsap.from(".image", {
      y: 30,
      duration: 1.5,
      delay: 1,
      opacity: 0,
    });
    gsap.from(".matter",{
      y:-50,
      // duration:1,
      // delay:1,
      opacity:0,
      scrollTrigger:{
        trigger:".matter",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        scrub:2,
        end:"top 40%"
      }
    })
    gsap.from(".matter2",{
      x:-70,
      // duration:1,
      // delay:1,
      opacity:0,
      scrollTrigger:{
        trigger:".matter2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        scrub:2,
        end:"top 30%"
      }
    })
    gsap.from(".matter3",{
      x:70,
      // duration:1,
      // delay:1,
      opacity:0,
      scrollTrigger:{
        trigger:".matter3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        scrub:2,
        end:"top 30%"
      }
    })
  });
  return (
    <div ref={homeRef} id="homepage" className="bg-[#00D8FF]">
      <div className="first-half">
        <Navbar />
        <div  className="heading-class">
          <h1 id="word" className={`text-red font-extrabold `}>
            Punchline
          </h1>
          <Image
            className="image z-2"
            src={"/horses.png"}
            alt=""
            height={700}
            width={600}
          ></Image>
        </div>
      </div>
      <div className="second-half">
        <div className="matter">
          <div>Give your social media an extra punch💥</div>
        </div>
        <div className="matter-container flex justify-between">
          <div className="matter2">
            Punchline ensures that your social media works for you, without you
            having to lift a finger. Our experts know how to captivate an online
            audience as well as how to transform your clients into true and real
            fans.
          </div>
          <div className="matter3">
            <button className="button1 rounded-full">How do we do it</button>
            <button className="button2 rounded-full">Our projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
