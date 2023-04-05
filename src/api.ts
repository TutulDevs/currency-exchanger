import { ConvertDataType, LatestType } from "@/types";
import customAxios from "./axios";
import axios from "axios";
import { APP_DEFAULTS, DEFAULT_API_SUFFIX } from "./coreconstants";
import { getPreviousDay } from "./corefunctions";

export const getLatest = async (): Promise<LatestType> => {
  const res = await customAxios.get(`/latest.json` + DEFAULT_API_SUFFIX);
  const data = await res.data;
  return { base: data.base, rates: data.rates };
};

export const getAllCurrencies = async () => {
  const res = await customAxios.get(`/currencies.json`);
  return await res.data;
};

export const getHistoricalData = async (days: number): Promise<LatestType> => {
  const date = getPreviousDay(days);

  const res = await customAxios.get(
    `/historical/${date}.json` + DEFAULT_API_SUFFIX
  );
  const data = await res.data;

  return {
    base: data.base,
    rates: data.rates,
  };
};

export const getConvertRate = async (
  from: string,
  to: string,
  value?: string | number
): Promise<ConvertDataType> => {
  const url = value
    ? `/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_KEY}/pair/${from}/${to}/${value}`
    : `/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_KEY}/pair/${from}/${to}`;

  const res = await axios.get(process.env.NEXT_PUBLIC_EXCHANGE_RATE_API + url);
  const data = await res.data;

  return {
    rate: data.conversion_rate,
    result: data.conversion_result,
  };
};
