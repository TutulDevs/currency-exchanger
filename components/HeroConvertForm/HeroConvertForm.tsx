import { Fragment } from "react";
import { useHeroConvertForm } from "./useHeroConvertForm";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "../Icons";
import { HeroConvertFormListBox } from "./HeroConvertFormListBox";

export const HeroConvertForm = () => {
  const {
    base,
    target,
    handleBaseChange,
    handleConvert,
    handleSwap,
    baseCurrency,
    targetCurrency,
    allCurrencies,
    handleBaseCurrencyChange,
    handleTargetCurrencyChange,
  } = useHeroConvertForm();

  return (
    <div className="heroConvertForm mt-3">
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

          <HeroConvertFormListBox
            currency={baseCurrency}
            currencyList={allCurrencies}
            onChange={handleBaseCurrencyChange}
          />
        </label>

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

        <label htmlFor="target" className="target label transition ">
          <input
            type="number"
            placeholder="To"
            value={target ? target.toFixed(2) : ""}
            readOnly
          />
          
          
          <HeroConvertFormListBox
            currency={targetCurrency}
            currencyList={allCurrencies}
            onChange={handleTargetCurrencyChange}
          />
        </label>
      </div>

      <button
        type="button"
        className="submit-button transition"
        onClick={handleConvert}
      >
        Convert
      </button>
    </div>
  );
};
