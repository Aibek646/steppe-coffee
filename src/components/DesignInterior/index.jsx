import React from "react";
import IphoneImg from "../../assets/901.png";
import Card from "../DesignInterior/Card";
import { CardConfig } from "../DesignInterior/Config";
import DesignImg from "../../assets/steppe-1.png";

const DesignInterior = () => {
  return (
    <div className="flex gap-[24px] px-[80px] ">
      <img src={IphoneImg} alt="Iphone Image" className="max-w-[519px]" />
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
