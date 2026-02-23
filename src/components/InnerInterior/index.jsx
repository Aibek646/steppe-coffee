import React from "react";
import InnerInterImg from "../../assets/bfe13da34f322b096fd999fb43dbfc0cc17fa34b.png";
import CurvesImg from "../../assets/1c20342b4f4ddd0122d7afef5b13865aefdc0af3.png";

const InnerInterior = () => {
  return (
    <div className="relative flex  min-h-[1018.45px] ">
      <img
        className="absolute z-10 border-card min-h-[1018.45px]"
        src={InnerInterImg}
        alt="firstImage"
      />
      <img
        className="absolute z-20 border-card"
        src={CurvesImg}
        alt="secondImage"
      />
    </div>
  );
};
export default InnerInterior;
