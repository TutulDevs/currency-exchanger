import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APP_DEFAULTS } from "../../coreconstants";
import { CurrencyListItemType } from "@/types";

interface initialStateType {
  targetCurrency: string;
  currencyList: null | CurrencyListItemType[];
}

const initialState: initialStateType = {
  targetCurrency: "", //APP_DEFAULTS.CURRENCY_TARGET as string,
  currencyList: null,
};

export const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setTargetCurrency: (state, action: PayloadAction<string>) => {
      return { ...state, targetCurrency: action.payload };
    },
    setCurrencyList: (
      state,
      action: PayloadAction<null | CurrencyListItemType[]>
    ) => {
      return { ...state, currencyList: action.payload };
    },
  },
});

export const { setTargetCurrency, setCurrencyList } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
