import { getHistoricalData } from "@/src/api";
import { APP_DEFAULTS } from "@/src/coreconstants";
import { RootState } from "@/src/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCurrencyHistoricalChart = (code: string) => {
  const { currencyList, targetCurrency } = useSelector(
    (state: RootState) => state.appSettings
  );

  const currencyData = currencyList?.filter((cur) => cur.code === code)[0];
  const targetCurrencyData = currencyList?.filter(
    (cur) => cur.code === targetCurrency
  )[0];

  const [seriesData, setSeriesData] = useState([]);
  const [dateTimeList, setDateTimeList] = useState<string[]>([]);

  const { isLoading, refetch } = useQuery(
    ["history-data"],
    () => getHistoricalData(code, targetCurrency, APP_DEFAULTS.HISTORY_IN_DAYS),
    {
      enabled: !!targetCurrency,
      refetchInterval: APP_DEFAULTS.INTERVAL as number,
      onSuccess: async (res) => {
        let arr: any = [];
        for (let key in res) {
          arr.push(res[key as keyof typeof res][targetCurrency]);
        }
        setSeriesData(arr);

        // update date time
        const _h = { ...res };
        setDateTimeList(Object.keys(_h));
      },
    }
  );

  useEffect(() => {
    if (targetCurrency) refetch();
  }, [code, targetCurrency]);

  return {
    currencyData,
    targetCurrencyData,
    seriesData,
    dateTimeList,
  };
};
