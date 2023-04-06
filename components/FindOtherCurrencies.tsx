import {
  OTHER_CURRENCIES_CODE,
  POPULAR_CURRENCY_LIST,
} from "@/src/coreconstants";
import { RootState } from "@/src/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export const FindOtherCurrencies = () => {
  const { currencyList } = useSelector((state: RootState) => state.appSettings);

  return (
    <section className="py-4 md:py-20">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-12">
        Find Other Currencies
      </h2>

      <div className="list grid gap-x-8 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currencyList
          ?.filter((el) => OTHER_CURRENCIES_CODE.includes(el.code))
          .map((x) => (
            <Link
              href={`/currency/${x.code}`}
              key={x.code}
              className="suggestion-link-two"
            >
              <span>
                {x.code} - {x.title}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
};
