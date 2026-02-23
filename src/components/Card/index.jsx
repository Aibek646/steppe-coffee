import React from "react";
// ("py-[40px] px-[24px] border-card ");
// title ? "py-[66.5px] px-[24px]" : "py-[40px] px-[24px] border-card";

const Card = ({ text, title, width }) => {
  return (
    <div
      className={`py-[40px] px-[24px] border-card flex flex-col gap-[16px] ${title ? "py-[66.5px]" : ""} ${width}`}
    >
      <h1 className="h4">{title}</h1>
      <p className="h9">{text}</p>
    </div>
  );
};
export default Card;
