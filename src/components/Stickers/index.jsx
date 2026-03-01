import React from "react";
import StickersImg from "../../assets/63c06fec-758a-458e-b9b2-62a07a245378.png";
import StickersImages from "../../assets/66 2.png";

const Stickers = () => {
  return (
    <div className="flex gap-[24px] md:pl-[80px] items-center md:items-stretch flex-col md:flex-row px-[20px]">
      <div className="bg-[#ECDA74] px-[13px] py-[61px] border-card">
        <img src={StickersImg} alt="sitckers-img" />
      </div>
      <div className="bg-[#FBE400] max-w-[809px] w-full r flex justify-center items-center border-card ">
        <img src={StickersImages} className="step-spin" alt="StickersImages" />
      </div>
    </div>
  );
};
export default Stickers;
