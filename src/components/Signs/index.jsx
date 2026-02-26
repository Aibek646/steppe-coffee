import React from "react";
import SignImg from "../../assets/new0sign.png";
import SignBagImg from "../../assets/cfd78dac843301e207cf99e1e614fc8740c76dcd.png";

const Signs = () => {
  return (
    <div className="flex w-full md:flex-row flex-col gap-[20px] md:gap-0 ">
      <img
        className="border-card md:w-1/2  "
        src={SignBagImg}
        alt="Sign-bag-image"
      />
      <img className=" border-card md:w-1/2 " src={SignImg} alt="Sign-image" />
    </div>
  );
};
export default Signs;
