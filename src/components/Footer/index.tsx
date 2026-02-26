import CircleLogo from "../../assets/icons/logo-circle.svg?react";
import Contacts from "../Contacts";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-[120px] pr-[80px] pl-[80px] pb-[80px] md:gap-[330px] gap-[130px] justify-center bg-[#AC8EEF]">
      <div className="flex flex-col gap-[8px] ">
        <CircleLogo />
        <p className="max-w-[450px] w-full h9 text-[#000000]">
          Circle Creative Buro – креативное бюро и рекламное агентство полного
          цикла в Алматы. Развиваем бренды в цифровом пространстве и за его
          пределами: стратегия, креатив, веб, моушн, интерьеры под ключ.
        </p>
      </div>
      <Contacts />
    </div>
  );
};
export default Footer;
