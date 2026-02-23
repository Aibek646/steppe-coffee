import React from "react";
import Logo from "../../assets/icons/Logo.svg?react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-[16px]  px-[60px] absolute top-[20px] max-w-[1400px] w-full mx-auto bg-background-header sticky top-0 z-50 rounded-[40px]  ">
      <div>
        <Logo />
      </div>
      <div className="flex justify-between gap-[24px]">
        <span>О нас</span>
        <span>Услугу</span>
        <span>Проекты</span>
        <span>Шоу кейсы</span>
      </div>
      <div className="flex gap-[24px]">
        <select
          className="border border-gray-600 rounded-2xl py-[4px] px-[16px]"
          name=""
          id=""
        >
          <option value="">рус</option>
          <option value="">eng</option>
        </select>
        <button className="bg-[#FA4C19] py-[8px] px-[20px]  text-[#FFFCF0] font-normal rounded-[20px] ">
          Связаться с нами
        </button>
      </div>
    </div>
  );
};
export default Header;
