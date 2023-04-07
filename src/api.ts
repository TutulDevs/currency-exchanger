import { ConvertDataType } from "@/types";
import axios from "axios";
import { getPreviousDay } from "./corefunctions";

export const getAllCurrencies = async () => {
  const url = `${process.env.NEXT_PUBLIC_FREECURRENCYAPI_URL}/currencies?apikey=${process.env.NEXT_PUBLIC_FREECURRENCYAPI_KEY}`;
  const res = await axios.get(url);
  return await res.data;
};

export const getHistoricalData = async (
  base: string,
  targets: string | string[],
  prevDays: number
): Promise<any> => {
  const [date_from, date_to] = [getPreviousDay(prevDays), getPreviousDay(3)];

  const url = `${
    process.env.NEXT_PUBLIC_FREECURRENCYAPI_URL
  }/historical?apikey=${
    process.env.NEXT_PUBLIC_FREECURRENCYAPI_KEY
  }&currencies=${
    typeof targets === "string" ? targets : targets.join(",")
  }&base_currency=${base}&date_from=${date_from}&date_to=${date_to}`;

  const res = await axios.get(url);
  const data = await res.data?.data;

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
