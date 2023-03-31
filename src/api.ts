import { LatestType } from "@/types";
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
  value: string | number
) => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_EXCHANGE_RATE_API +
      `/convert?access_key=${process.env.NEXT_PUBLIC_EXCHANGE_RATE_KEY}&from=${from}&to=${to}&amount=${value}`
  );
  const data = await res.data;

  return data;
};
