import React from "react";
import Card from "../Card";
const text =
  "Итог работы с Steppe Coffee: Социальные сети " +
  "стали отражением жизни кофейни, офлайн-мероприятия начали работать как инструмент привлечения и удержания " +
  "аудитории, а бренд получил понятную и устойчивую " +
  "коммуникационную модель, которую можно масштабировать дальше.";

const Results = () => {
  return (
    <div className="flex justify-center flex-col gap-[16px] items-center border-card max-w-[845px] self-center px-[47px] py-[60px]">
      {/*<Card width="max-w-[845px]" center={true} text={text} title="ИТОГИ" />*/}
      <h1 className="h4">ИТОГИ</h1>
      <p className="h9">{text}</p>
    </div>
  );
};
export default Results;
