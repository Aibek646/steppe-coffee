import React from "react";
import BeforeImg from "../../assets/beforeImg.png";
import AfterImg from "../../assets/afterImg.png";

const BeforeAndAfter = () => {
  return (
    <div className="flex gap-[24px] px-[24px]   ">
      <div className="flex items-center justify-center flex-col gap-[23px]">
        <h1 className="h2">ДО</h1>
        <div className="py-[60px] px-[27.5px] border-card">
          <img src={BeforeImg} alt="BeforeImg" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-[23px]">
        <h1 className="h2">ПОСЛЕ</h1>
        <div className="py-[60px] px-[27.5px] border-card">
          <img src={AfterImg} alt="AfterImg" />
        </div>
      </div>
    </div>
  );
};
export default BeforeAndAfter;
