import Card from "@/components/Card";
import React from "react";

const Approach = () => {
  return (
    <div className="pt-12.5 px-17.5 bg-amber-300 pb-[100px]">
      <div className="flex flex-col gap-10">
        <Card
          src="/clock.png"
          heading="Do you always have the time?"
          matter="The internet doesn't have working hours and your clients expect you to be able to help them in the quickest time possible. If you'd like to successfully roll out your strategy you need to be able to invest your time."
        />
        <Card src="/shoulder.png" heading="Do you have the expertise?" matter="What is a relevant channel one day, belongs in a museum the next day. Having a quick response time to new trends is essential to staying in the game." />
        <Card src="/search.png" heading="Do you have the skills?" matter="Depending on the case you need different skills and even those can change from one day to the next. Do you need all that knowledge internally or is it best to rely on an external partner?" />
      </div>
    </div>
  );
};

export default Approach;
