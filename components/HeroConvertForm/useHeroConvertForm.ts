import { APP_DEFAULTS, LOCAL_DATA } from "@/src/coreconstants";
import { RootState } from "@/src/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setTargetCurrency } from "../../src/store/slices/applicaton.slice";
import { setLocalData } from "@/src/corefunctions";
import { useQuery } from "@tanstack/react-query";
import { getConvertRate } from "@/src/api";

export const useHeroConvertForm = (baseCur?: string) => {
  const dispatch = useDispatch();
  const { targetCurrency, currencyList } = useSelector(
    (state: RootState) => state.appSettings
  );

  const [rate, setRate] = useState(0);
  const [base, setBase] = useState(APP_DEFAULTS.CONVERT_MIN_VALUE);
  const [target, setTarget] = useState(rate * Number(base));

  useEffect(() => {
    setTarget(rate * Number(base));
  }, [rate, base]);

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const base = Number(e.target.value);
    setBase(base);
    setTarget(rate * base);
  };

  const [baseCurrency, setBaseCurrency] = useState(
    baseCur ? baseCur : APP_DEFAULTS.CURRENCY_BASE
  );

  useEffect(() => {
    setBaseCurrency(
      targetCurrency === APP_DEFAULTS.CURRENCY_BASE
        ? APP_DEFAULTS.CURRENCY_TARGET
        : baseCurrency //APP_DEFAULTS.CURRENCY_BASE
    );
  }, [targetCurrency]);

  const handleBaseCurrencyChange = (code: string) => {
    if (code === targetCurrency)
      toast.error(`You cannot select "${targetCurrency}"`);
    else {
      setRate(0);
      setBaseCurrency(code);
    }
  };

  const handleTargetCurrencyChange = (code: string) => {
    if (code === baseCurrency) {
      toast.error(`You cannot select "${baseCurrency}"`);
    } else {
      setRate(0);
      dispatch(setTargetCurrency(code));
      setLocalData(LOCAL_DATA.CURRENCY_TARGET, code);
    }
  };

  const { data, error, refetch } = useQuery(
    ["rate"],
    () => getConvertRate(baseCurrency as string, targetCurrency, base),
    {
      enabled: false,
      onSuccess: async (d) => {
        setRate(Number(d.rate));
      },
    }
  );
  // console.log("ce: ", data, error);

  const handleConvert = async () => {
    refetch();
  };

  const handleSwap = () => {
    setBase(APP_DEFAULTS.CONVERT_MIN_VALUE);
    setRate(0);

    setBaseCurrency(targetCurrency );
    dispatch(setTargetCurrency(baseCurrency as string));
    setLocalData(LOCAL_DATA.CURRENCY_TARGET, baseCurrency as string);
  };

  // console.log("ce: ", { base, target, rate, baseCurrency, targetCurrency });

  return {
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
  };
};
