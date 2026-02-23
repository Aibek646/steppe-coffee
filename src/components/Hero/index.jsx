import React from "react";
import InfoCard from "./Info-Card-Hero";
import InfoCardVideo from "./Info-Card-Video";
const Hero = () => {
  return (
    <div className="flex justify-center px-[80px] gap-[24px] pb-[60px]">
      <InfoCard />
      <InfoCardVideo />
    </div>
  );
};
export default Hero;
