import Link from "next/link";
import { ChevronRightIcon } from "./Icons";
import { POPULAR_CURRENCY_LIST } from "@/src/coreconstants";

export const CurrencySuggestion = () => {
  return (
    <section className="py-4 md:py-20">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-12">
        Popular Currency Pairs
      </h2>

      <div className="list flex gap-4 items-center justify-center flex-wrap">
        {POPULAR_CURRENCY_LIST.map((x) => (
          <Link
            href={`/currency/${x.base}?target=${x.target}`}
            key={x.base + x.target}
            className="suggestion-link"
          >
            <span>
              {x.base} to {x.target}
            </span>

            <ChevronRightIcon className="h-4 stroke-[2px]  ease-in-out duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
};
