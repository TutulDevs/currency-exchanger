import { RootState } from "@/src/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export const FindOtherCurrencies: React.FC<{
  code?: string;
}> = ({ code }) => {
  const { currencyList } = useSelector((state: RootState) => state.appSettings);

  const list = code
    ? currencyList?.filter((el) => el.code !== code)
    : currencyList;

  return (
    <section className="py-4 md:py-20">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-12">
        Find Other Currencies
      </h2>

      <div className="list grid gap-x-8 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {list?.map((x) => (
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
