import React from "react";
import IphoneImg from "../../assets/901.png";
import Card from "../DesignInterior/Card";
import { CardConfig } from "../DesignInterior/Config";
import DesignImg from "../../assets/steppe-1.png";
// max-w-[519px]

const DesignInterior = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[24px] md:px-[80px] px-[20px] ">
      <img src={IphoneImg} alt="Iphone Image" className=" self-center" />
      <div className="flex gap-[20px] flex-col">
        {CardConfig.map((item) => (
          <Card text={item.text} key={item.id} />
        ))}
        <img src={DesignImg} alt="Design Image" />
      </div>
    </div>
  );
};
export default DesignInterior;
