import React from "react";
import PhoneIcon from "../../assets/icons/Union.svg?react";
import MailIcon from "../../assets/icons/Mail.svg?react";
import LocationIcon from "../../assets/icons/Location.svg?react";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="h7">Контакты</h4>
      <div className="flex gap-[8px]">
        <PhoneIcon />
        <p className="h9 text-[#000000]">+7 708 268 69 82</p>
      </div>
      <div className="flex gap-[8px]">
        <MailIcon />
        <p className="h9 text-[#000000]">ул. Байзакова 280, Алматы</p>
      </div>
      <div className="flex gap-[8px]">
        <LocationIcon />
        <p className="h9 text-[#000000]">info@circleburo.kz</p>
      </div>
    </div>
  );
};
export default Contacts;
