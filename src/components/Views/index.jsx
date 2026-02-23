import React from "react";
import ViewsImg from "../../assets/Frame 183.png";

const Views = ({ views, percent, accounts, subQuantity, unsubQuantity }) => {
  return (
    <div className="flex flex-col w-full max-w-[845px] border-card gap-[25px] p-[20px]">
      <h1 className="h4 text-center">ПРОСМОТРЫ</h1>
      <p className="h9 text-center">1 Сен - 30 сен</p>
      <div>
        <div className="flex gap-[60px] items-center">
          <div className="w-[260px] ml-[167px] relative flex flex-col aspect-square h-[260px] rounded-full rotate-90  bg-[radial-gradient(circle,_transparent_60%,_#AC8EEF4D_61%)] ">
            <div
              style={{
                background: `conic-gradient(#FF00004D 0deg 200deg, transparent 200deg 360deg)
`,
                mask: "radial-gradient(circle, transparent 60%, black 61%)",
              }}
              className="w-[260px] left-[-167px]  ml-[167px] absolute flex flex-col aspect-square h-[260px] rounded-full rotate-[-88deg]  bg-[radial-gradient(circle,_transparent_60%,_#FF000033_61%)]"
            ></div>
            <p className="rotate-270 absolute top-[115px] left-[97px]  h9">
              Просмотры
            </p>
            <h1 className="rotate-270 top-[100px] left-[54px] absolute h4">
              {views.toLocaleString("ru-RU")}
            </h1>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="relative">
              <span className="w-[24px] h-[24px] absolute left-[-32px] top-[13px] rounded-full bg-[url('./assets/bg-color.png')]"></span>
              <h3>{subQuantity.toLocaleString("ru-RU")}%</h3>
              <p>Неподписчики</p>
            </div>
            <div className="relative">
              <span className="w-[24px] h-[24px] absolute left-[-32px] top-[13px] rounded-full bg-[#AC8EEF4D]"></span>
              <h3>{unsubQuantity.toLocaleString("ru-RU")}%</h3>
              <p>Подписчики</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="h9">Охваченные аккаунты</p>
        <div>
          <p className="h9">{accounts.toLocaleString("ru-RU")}</p>
          <p className="b3">{percent.toLocaleString("ru-RU")}%</p>
        </div>
      </div>
    </div>
  );
};
export default Views;
