import React, { useEffect } from "react";
import AuthorImg from "../../assets/file-007.png";
import MovieNightImg from "../../assets/Property 1=Default.png";
import Card from "../Card";
const text =
  "В рамках SMM мы выстроили регулярное присутствие бренда в " +
  "Instagram и TikTok, переработали подачу контента и сделали акцент на живые форматы. " +
  "В сентябре, несмотря на просадку охватов относительно предыдущего периода, нам удалось сохранить" +
  " активность аудитории и зафиксировать рост подписчиков на 9% по сравнению с августом. Этот этап ста" +
  "л диагностическим: мы протестировали форматы и в" +
  "ыявили, что наибольшую вовлеченность дают визуальные посты и контент с офлайн-жизнью кофейни .";

{
  /*<img*/
}
{
  /*  className="border-card max-w-[519px] w-full object-cover duration-500 transition-all"*/
}
{
  /*  src={images[index]}*/
}
{
  /*  alt="Author-Image"*/
}
{
  /*/>*/
}

const images = [AuthorImg, MovieNightImg];

const AuthorBio = () => {
  const [index1, setIndex] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row gap-[24px] md:px-[80px] px-[20px] items-center ">
      <div className="relative w-full max-w-[519px]  aspect-[4/5] flex-shrink-0 overflow-hidden">
        {images.map((img, i) => (
          <img
            src={img}
            key={i}
            alt="img"
            className={` w-full max-w-[519px] h-full absolute inset-0  object-contain  transition-opacity duration-1000 ease-in-out ${i === index1 ? "opacity-1500" : "opacity-0"}`}
          />
        ))}
      </div>
      <Card text={text} />
    </div>
  );
};
export default AuthorBio;
