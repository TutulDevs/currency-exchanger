import { APP_DEFAULTS } from "@/src/coreconstants";
import { useState } from "react";

export const useHeroConvertForm = () => {
  const [base, setBase] = useState(APP_DEFAULTS.CONVERT_MIN_VALUE);
  const [target, setTarget] = useState<null | number>(null);

  const [baseCurrency, setBaseCurrency] = useState(APP_DEFAULTS.CURRENCY_BASE);
  const [targetCurrency, setTargetCurrency] = useState(
    APP_DEFAULTS.CURRENCY_TARGET
  );

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBase(Number(e.target.value));
    // setTarget(null);
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

  console.log("ce: ", { base, target });

  return {
    base,
    target,
    handleBaseChange,
    handleConvert,
    handleSwap,
    baseCurrency,
    targetCurrency,
  };
};
