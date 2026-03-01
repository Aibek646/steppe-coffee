import React from "react";
import InnerInterImg from "../../assets/innerInterimg/Property 1=Component 151.png";
import InnerInterImg2 from "../../assets/innerInterimg/Property 1=Component 152.png";
import InnerInterImg3 from "../../assets/innerInterimg/Property 1=Component 153.png";
import InnerInterImg4 from "../../assets/innerInterimg/Property 1=Component 154.png";
import InnerInterImg5 from "../../assets/innerInterimg/Property 1=Component 155.png";
import InnerInterImg6 from "../../assets/innerInterimg/Property 1=Component 156.png";
import InnerInterImg7 from "../../assets/innerInterimg/Property 1=Component 158.png";
import { useAutoIndex } from "../../customHook/useAutoIndex.js";

const images = [
  InnerInterImg,
  InnerInterImg2,
  InnerInterImg3,
  InnerInterImg4,
  InnerInterImg5,
  InnerInterImg6,
  InnerInterImg7,
];

const InnerInterior = () => {
  const index = useAutoIndex(images.length, 2000);
  return (
    <div className="flex relative w-full aspect-[4/2] flex-shrink-0 mb-[20px] md:mb-[50px]">
      {images.map((img, i) => (
        <img
          src={img}
          key={i}
          alt="img"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? "opacity-1500" : "opacity-0"}`}
        />
      ))}{" "}
    </div>
  );
};
export default InnerInterior;
