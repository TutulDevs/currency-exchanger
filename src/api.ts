import { ConvertDataType, LatestType } from "@/types";
import customAxios from "./axios";
import axios from "axios";
import { DEFAULT_API_SUFFIX } from "./coreconstants";
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

export const getHistoricalData = async (
  base: string,
  targets: string[],
  prevDays: number
): Promise<any> => {
  const [date_from, date_to] = [getPreviousDay(prevDays), getPreviousDay(3)];

  const url = `${process.env.NEXT_PUBLIC_HISTORICAL_URL}?apikey=${
    process.env.NEXT_PUBLIC_HISTORICAL_KEY
  }&currencies=${targets.join(
    ","
  )}&base_currency=${base}&date_from=${date_from}&date_to=${date_to}`;

  const res = await axios.get(url);
  const data = await res.data?.data;

  console.log("ce: ", data);

  return data;
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
