import Card from "@/components/Card";
import React from "react";

const Approach = () => {
  return (
    <div className="flex w-full pt-12.5 px-17.5 bg-white pb-25 justify-between]">
      <div className="flex flex-col gap-10 w-[80%]">
        <Card
          src="/clock.png"
          heading="Do you always have the time?"
          matter="The internet doesn't have working hours and your clients expect you to be able to help them in the quickest time possible. If you'd like to successfully roll out your strategy you need to be able to invest your time."
        />
        <Card
          src="/shoulder.png"
          heading="Do you have the expertise?"
          matter="What is a relevant channel one day, belongs in a museum the next day. Having a quick response time to new trends is essential to staying in the game."
        />
        <Card
          src="/search.png"
          heading="Do you have the skills?"
          matter="Depending on the case you need different skills and even those can change from one day to the next. Do you need all that knowledge internally or is it best to rely on an external partner?"
        />
      </div>
      <div className=" w-[50%] p-10 px-20 text-black flex flex-col gap-8 ">
        <p className="p-2 rounded-full bg-amber-100 w-fit">Your partner in crime</p>
        <h1 className="text-5xl font-bold">Make it easier for yourself</h1>
        <p className="text-justify text-2xl text-[#33737E]">
          Monitoring what happens on your various social media channels is an
          important task, however it necessitates a lot of work.
        </p>
        <button className="px-10 py-5 bg-[#233333] text-white rounded-full w-fit cursor-pointer">This is how we approach it</button>
      </div>
    </div>
  );
};

export default Approach;
