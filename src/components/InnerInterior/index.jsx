import React from "react";
import InnerInterImg from "../../assets/bfe13da34f322b096fd999fb43dbfc0cc17fa34b.png";
import CurvesImg from "../../assets/1c20342b4f4ddd0122d7afef5b13865aefdc0af3.png";

const InnerInterior = () => {
  return (
    <div className="relative">
      <img className=" border-card " src={InnerInterImg} alt="firstImage" />
      <img
        className=" border-card absolute top-0 left-0"
        src={CurvesImg}
        alt="secondImage"
      />
    </div>
  );
};
export default InnerInterior;
