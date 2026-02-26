import React from "react";

const Card = ({ text, title, width, center }) => {
  return (
    <div
      className={`py-[40px] px-[24px] border-card flex flex-col gap-[16px] ${title ? "py-[66.5px]" : ""} ${width} ${center ? "text-center" : ""} `}
    >
      <h1 className={`h4 ${width} ${center ? "text-center" : ""}`}>{title}</h1>
      <p className="h9">{text}</p>
    </div>
  );
};
export default Card;
