import React from "react";
import AuthorImg from "../../assets/AuthorBio.png";
import Card from "../Card";
const text =
  "В рамках SMM мы выстроили регулярное присутствие бренда в " +
  "Instagram и TikTok, переработали подачу контента и сделали акцент на живые форматы. " +
  "В сентябре, несмотря на просадку охватов относительно предыдущего периода, нам удалось сохранить" +
  " активность аудитории и зафиксировать рост подписчиков на 9% по сравнению с августом. Этот этап ста" +
  "л диагностическим: мы протестировали форматы и в" +
  "ыявили, что наибольшую вовлеченность дают визуальные посты и контент с офлайн-жизнью кофейни .";

const AuthorBio = () => {
  return (
    <div className="flex gap-[24px] px-[80px] items-center ">
      <img
        className="border-card max-w-[519px] w-full"
        src={AuthorImg}
        alt="Author-Image"
      />
      <Card text={text} />
    </div>
  );
};
export default AuthorBio;
