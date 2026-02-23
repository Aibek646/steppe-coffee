import React from "react";

const Card = ({ text }) => {
  return (
    <div className="px-[24px] py-[40px] border-card">
      <p className="h9">{text}</p>
    </div>
  );
};
export default Card;
