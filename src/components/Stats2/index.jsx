import React from "react";
import Card from "../Card";
import Views from "../Views";
const text =
  "Мы усилили стратегию и сместили фокус в сторону Reels и сторис, а также более плотной связки онлайна и офлайна. " +
  "Результат – резкий рост ключевых метрик: охваты аккаунта выросли на 125,3%, действия в профиле – на 6,3%, " +
  "посещения профиля – на 8,4%. Прирост подписчиков за месяц составил почти 12% по сравнению с концом сентября. " +
  "Это подтвердило, что выбранная модель контента и темп публикаций начали работать системно .";

const StatsTwo = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[24px] md:px-[80px] px-[20px]">
      <Card text={text} title="В ОКТЯБРЕ" width="max-w-[411px]" />
      <Views
        views={41.982}
        accounts={4.935}
        subQuantity={46.0}
        unsubQuantity={54.0}
        percent={125.3}
      />
    </div>
  );
};
export default StatsTwo;
