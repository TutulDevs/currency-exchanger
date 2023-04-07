import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { APP_DEFAULTS, LOCAL_DATA } from "../coreconstants";
import {
  setCurrencyList,
  setTargetCurrency,
} from "../store/slices/applicaton.slice";
import { getAllCurrencies } from "../api";
import { CurrencyListItemType } from "@/types";
import { getLocalData, setLocalData } from "../corefunctions";

export const useAppInitial = () => {
  const dispatch = useDispatch();
  const { targetCurrency } = useSelector(
    (state: RootState) => state.appSettings
  );

  // set base currency
  useEffect(() => {
    const _target = getLocalData(LOCAL_DATA.CURRENCY_TARGET);

    if (!_target || _target == null) {
      setLocalData(LOCAL_DATA.CURRENCY_TARGET, APP_DEFAULTS.CURRENCY_TARGET);
      dispatch(setTargetCurrency(APP_DEFAULTS.CURRENCY_TARGET));
    } else {
      dispatch(setTargetCurrency(_target));
    }
  }, []);

  // set currency list
  const handleList = async () => {
    try {
      const res = await getAllCurrencies();
      const data = await res.data;

      const arr: CurrencyListItemType[] = [];

      for (let key in data) {
        arr.push({
          code: key,
          title: data[key as keyof typeof data].name,
          symbol: data[key as keyof typeof data].symbol,
        });
      }

      setLocalData(LOCAL_DATA.CURRENCY_LIST, arr, true);
      dispatch(setCurrencyList(arr));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const list: any = getLocalData(LOCAL_DATA.CURRENCY_LIST, true);

    if (!list || list == null || list?.length == 0) {
      handleList();
    } else {
      dispatch(setCurrencyList(list));
    }
  }, []);
};
