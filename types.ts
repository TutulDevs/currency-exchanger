export interface LatestType {
  base: string;
  rates: any[];
}

export interface CurrencyListItemType {
  code: string;
  title: string;
}

export interface IconProps {
  className?: string;
}

export interface HeroConvertFormListBoxProps {
  currency: string;
  currencyList: CurrencyListItemType[];
  onChange: (val: string) => void;
  fixedBase?: boolean;
}

export interface ConvertDataType {
  rate: number;
  result?: number;
}
