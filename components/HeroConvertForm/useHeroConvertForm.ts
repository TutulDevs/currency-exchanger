import { APP_DEFAULTS } from "@/src/coreconstants";
import { useState } from "react";
import toast from "react-hot-toast";

export const useHeroConvertForm = () => {
  const [base, setBase] = useState(APP_DEFAULTS.CONVERT_MIN_VALUE);
  const [target, setTarget] = useState<null | number>(null);

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBase(Number(e.target.value));
    // setTarget(null);
  };

  // get this list from redux
  const allCurrencies = [
    { code: "USD", title: "United States Dollar" },
    { code: "BDT", title: "Bangladeshi Taka" },
    { code: "AED", title: "United Arab Emirates Dirham" },
  ];

  const filteredBaseCurrency = allCurrencies.filter(
    (el) => el.code === APP_DEFAULTS.CURRENCY_BASE
  )[0];
  // get the target from redux
  const filteredTargetCurrency = allCurrencies.filter(
    (el) => el.code === APP_DEFAULTS.CURRENCY_TARGET
  )[0];

  const [baseCurrency, setBaseCurrency] = useState(
    filteredBaseCurrency ? filteredBaseCurrency.code : allCurrencies[0].code
  );
  const [targetCurrency, setTargetCurrency] = useState(
    filteredTargetCurrency ? filteredTargetCurrency.code : allCurrencies[1].code
  );

  const handleBaseCurrencyChange = (code: string) => {
    if (code === targetCurrency)
      toast.error(`You cannot select "${targetCurrency}"`);
    else setBaseCurrency(code);
  };

  const handleTargetCurrencyChange = (code: string) => {
    if (code === baseCurrency)
      toast.error(`You cannot select "${baseCurrency}"`);
    else setTargetCurrency(code);
  };

  const handleConvert = () => {
    setTarget((base as number) * 10);
  };

  const handleSwap = () => {
    if (target) {
      setTarget(base as number);
      setBase(target);
      setBaseCurrency(targetCurrency);
      setTargetCurrency(baseCurrency);
    }
  };

  // console.log("ce: ", { base, target, baseCurrency, targetCurrency });

  return {
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
  };
};
