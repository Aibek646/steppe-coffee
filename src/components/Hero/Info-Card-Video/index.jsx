import React from "react";
import SaigakVideo from "../../../assets/videos/saigak.mp4";

const InfoCardVideo = () => {
  return (
    <div className="mt-[20px] max-w-[420px] min-h-0 w-full">
      <video
        className=" border-card"
        src={SaigakVideo}
        autoPlay={true}
        controls
        loop={true}
      ></video>
    </div>
  );
};
export default InfoCardVideo;
