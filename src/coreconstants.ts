export enum APP_DEFAULTS {
  CURRENCY_BASE = "USD",
  CURRENCY_TARGET = "EUR",
  CONVERT_MIN_VALUE = 1,
  INTERVAL = 10000,
  HISTORY_IN_DAYS = 33,
}

export enum LOCAL_DATA {
  CURRENCY_TARGET = "CURRENCY_TARGET",
  CURRENCY_LIST = "CURRENCY_LIST",
}

export const POPULAR_CURRENCY_LIST = [
  { base: "USD", target: "EUR" },
  { base: "USD", target: "GBP" },
  { base: "EUR", target: "JPY" },
  { base: "AUD", target: "USD" },
  { base: "USD", target: "CHF" },
];
