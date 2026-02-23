import React from "react";
import Views from "../Views";
import Card from "../Card";
import IphoneImg from "../../assets/Frame 29 (1).png";
import IphoneVideo from "../../assets/videos/sangwanimation3.mp4";
const text =
  " В рамках SMM мы выстроили регулярное присутствие бренда в Instagram и\n" +
  "        TikTok, переработали подачу контента и сделали акцент на живые форматы.\n" +
  "        В сентябре, несмотря на просадку охватов относительно предыдущего\n" +
  "        периода, нам удалось сохранить активность аудитории и зафиксировать рост\n" +
  "        подписчиков на 9% по сравнению с августом. Этот этап стал\n" +
  "        диагностическим: мы протестировали форматы и выявили, что наибольшую\n" +
  "        вовлеченность дают визуальные посты и контент с офлайн-жизнью кофейни .";

const Stats = () => {
  return (
    <div className="flex gap-[35px] px-[80px]">
      <div className="flex flex-col gap-[20px]">
        <Card text={text} />
        <Views
          views={35.647}
          percent={-65.5}
          unsubQuantity={55.8}
          subQuantity={44.2}
          accounts={2.19}
        />
      </div>
      <div className="relative">
        <img src={IphoneImg} alt="iphone-image" className="max-w-[401px]" />
        <video
          className="max-w-[346px] absolute bottom-[91px] left-[26px]"
          src={IphoneVideo}
          autoPlay={true}
          controls={true}
          loop={true}
        ></video>
      </div>
    </div>
  );
};
export default Stats;
