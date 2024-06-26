import { useHeroConvertForm } from "./useHeroConvertForm";
import { HeroConvertFormListBox } from "./HeroConvertFormListBox";

export const HeroConvertForm: React.FC<{
  baseCur?: string;
  fixedBase?: boolean;
  className?: string;
}> = ({ baseCur, className, fixedBase }) => {
  const {
    base,
    target,
    handleBaseChange,
    handleConvert,
    handleSwap,
    baseCurrency,
    targetCurrency,
    currencyList,
    handleBaseCurrencyChange,
    handleTargetCurrencyChange,
  } = useHeroConvertForm(baseCur);

  return (
    <div className={"heroConvertForm pt-3 " + className}>
      <div className="form">
        <label htmlFor="base" className="base label transition ">
          <input
            type="number"
            min={0}
            maxLength={8}
            placeholder="From"
            value={base}
            onChange={handleBaseChange}
          />

          {currencyList && (
            <HeroConvertFormListBox
              currency={baseCurrency}
              currencyList={currencyList}
              onChange={handleBaseCurrencyChange}
              fixedBase={Boolean(fixedBase)}
            />
          )}
        </label>

        {/* swap */}
        {!fixedBase && (
          <button
            type="button"
            className="swap"
            aria-label="swap conversion"
            onClick={handleSwap}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>
        )}

        <label htmlFor="target" className="target label transition ">
          <input
            type="number"
            placeholder="To"
            value={target ? target.toFixed(2) : ""}
            readOnly
          />

          {currencyList && (
            <HeroConvertFormListBox
              currency={targetCurrency}
              currencyList={currencyList}
              onChange={handleTargetCurrencyChange}
            />
          )}
        </label>
      </div>

      <div className="submit-button-wrapper">
        <button
          type="button"
          className="submit-button transition"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
    </div>
  );
};
