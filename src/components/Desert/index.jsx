import React, { useEffect } from "react";
import Card from "../Card";
import DesertImg2 from "../../assets/Property 1=Group 1.png";
import DesertImg3 from "../../assets/Property 1=Group 2.png";
import DesertImg4 from "../../assets/Property 1=Group 3.png";
import DesertImg5 from "../../assets/Property 1=Group 4.png";

const text =
  "Дополнительно мы занимались дизайном " +
  "печатных материалов и оформлением интерьера, " +
  "чтобы визуальный язык бренда был последовательно " +
  "представлен и в цифровой среде, и в физическом пространстве. " +
  "Это усилило узнаваемость и связало коммуникацию в соцсетях с реальным опытом гостей.";

const images = [DesertImg2, DesertImg3, DesertImg4, DesertImg5];

const Desert = () => {
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row gap-[24px] items-center justify-around   md:px-[80px] px-[20px]  ">
      <div className="w-full xl:max-w-[628px]">
        <Card text={text} />
      </div>

      <div className="relative w-full max-w-[628px]   aspect-[4/5] flex-shrink-0 overflow-hidden ">
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt="image-dessert"
            className={`max-w-[628px] w-full absolute h-full inset-0 object-contain transition-opacity ${i === index ? "opacity-100" : "opacity-0"} duration-1500 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
};
export default Desert;
