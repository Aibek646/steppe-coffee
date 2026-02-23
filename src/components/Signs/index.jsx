import React from "react";
import SignImg from "../../assets/file-007.png";
import SignBagImg from "../../assets/cfd78dac843301e207cf99e1e614fc8740c76dcd.png";

const Signs = () => {
  return (
    <div className="flex justify-between">
      <img
        className="border-card min-w-0  max-w-[702px] h-[708px] w-full "
        src={SignBagImg}
        alt="Sign-bag-image"
      />
      <img
        className=" border-card min-w-0  max-w-[702px] h-[708px] w-full"
        src={SignImg}
        alt="Sign-image"
      />
    </div>
  );
};
export default Signs;
