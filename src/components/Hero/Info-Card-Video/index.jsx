import React from "react";
import SaigakVideo from "../../../assets/videos/saigak.mp4";

const InfoCardVideo = () => {
  return (
    <div className="mt-[20px]">
      <video
        className="max-h-[671px] border-card"
        src={SaigakVideo}
        autoPlay={true}
        controls
        loop={true}
      ></video>
    </div>
  );
};
export default InfoCardVideo;
