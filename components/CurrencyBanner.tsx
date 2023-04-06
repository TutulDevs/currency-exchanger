import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import { HeroConvertForm } from "./HeroConvertForm/HeroConvertForm";

export const CurrencyBanner: React.FC<{ code: string }> = ({ code }) => {
  const { currencyList } = useSelector((state: RootState) => state.appSettings);

  const currencyData = currencyList?.filter((cur) => cur.code === code)[0];

  return (
    <section className="rounded-lg p-4 mt-4 min-h-[300px] bg-[url('/cur-bg.svg')]">
      <h2 className="text-center font-semibold text-3xl md:text-5xl xl:text-7xl mt-4">
        {currencyData && currencyData.title}
      </h2>

      <HeroConvertForm
        baseCur={code}
        fixedBase={true}
        className="heroConvertForm-two"
      />
    </section>
  );
};
