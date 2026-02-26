import React from "react";
import InfoCard from "./Info-Card-Hero";
import InfoCardVideo from "./Info-Card-Video";
const Hero = () => {
  return (
    <div className="flex flex-col px-[40px]  2xl:flex-row items-center 2xl:items-start justify-center  md:px-[80px] md:gap-[24px] gap-[250px] pb-[60px]">
      <InfoCard />
      <InfoCardVideo />
    </div>
  );
};
export default Hero;
