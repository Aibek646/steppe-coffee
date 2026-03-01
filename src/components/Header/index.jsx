import React from "react";
import Logo from "../../assets/icons/Logo.svg?react";
import BurgerIcon from "../../assets/icons/Navigation-Menu-1--Streamline-Ultimate.svg?react";

const Links = () => {
  return (
    <>
      <span>О нас</span>
      <span>Услугу</span>
      <spa1n>Проекты</spa1n>
      <span>Шоу кейсы</span>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-[16px]  px-[60px] absolute top-[20px] max-w-[1400px] w-full mx-auto bg-background-header sticky top-0 z-50 rounded-[40px]">
      <div className="lg:hidden">
        <button className="hover:cursor-pointer" onClick={toggleNavbar}>
          <BurgerIcon />
        </button>
      </div>
      {isOpen && (
        <div className="flex lg:hidden flex-col items-center justify-center">
          <Links />
        </div>
      )}
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="hidden lg:flex justify-between gap-[24px]">
        <Links />
      </div>

      <div className="flex gap-[24px]">
        <select
          className="border border-gray-600 rounded-2xl py-[4px] px-[16px] hover:cursor-pointer"
          name=""
          id=""
        >
          <option className="hover:cursor-pointer" value="">
            рус
          </option>
          <option className="hover:cursor-pointer" value="">
            eng
          </option>
        </select>
        <button className="bg-[#FA4C19] py-[8px] px-[20px]  text-[#FFFCF0] font-normal rounded-[20px] hover:cursor-pointer ">
          Связаться с нами
        </button>
      </div>
    </nav>
  );
};
export default Header;
