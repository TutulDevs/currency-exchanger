export const DEFAULT_API_SUFFIX = `?app_id=${process.env.NEXT_PUBLIC_API_APP_ID}`;

export enum APP_DEFAULTS {
  CURRENCY_BASE = "USD",
  CURRENCY_TARGET = "BDT",
  CONVERT_MIN_VALUE = 1,
  INTERVAL = 10000,
  HISTORY_IN_DAYS = 90,
}

export enum LOCAL_DATA {
  CURRENCY_TARGET = "CURRENCY_TARGET",
  CURRENCY_LIST = "CURRENCY_LIST",
}

export const SELECTED_SYMBOLS = ["USD", "EUR", "GBP", "BDT", "AUD"];

export const DUMMY_LIST = [
  { code: "USD", title: "United States Dollar" },
  { code: "BDT", title: "Bangladeshi Taka" },
];

export const POPULAR_CURRENCY_LIST = [
  { base: "USD", target: "EUR" },
  { base: "USD", target: "GBP" },
  { base: "EUR", target: "JPY" },
  { base: "AUD", target: "USD" },
  { base: "USD", target: "CHF" },
];

export const OTHER_CURRENCIES_CODE = [
  "AED",
  "AUD",
  "BRL",
  "CHF",
  "CNY",
  "EUR",
  "GBP",
  "HKD",
  "INR",
  "JPY",
  "MXN",
  "MYR",
  "PHP",
  "SAR",
  "SEK",
  "BDT",
  "SGD",
  "THB",
  "USD",
  "ZAR",
  'RUB'
];
