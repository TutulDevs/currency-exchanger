import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next";
import { LayoutCurrency } from "@/layouts/LayoutCurrency";
import { CurrencySuggestion } from "@/components/CurrencySuggestion";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { useEffect } from "react";
import { getHistoricalData } from "@/src/api";
import { getPreviousDay } from "@/src/corefunctions";

const CurrencyPage: NextPage<{
  code: string;
}> = ({ code }) => {
  const { currencyList } = useSelector((state: RootState) => state.appSettings);

  const currencyData = currencyList?.filter((cur) => cur.code === code)[0];
  const title =
    (currencyData ? `${currencyData.code} - ${currencyData.title}` : code) +
    " | CE | Currency Exchanger";
  const description = currencyData
    ? `convert ${currencyData.title}(${currencyData.code}) in other currencies`
    : code + " exchange rates";


    useEffect(() => {
      
      // (getHistoricalData(code, ['EUR'], 33))
      
 
    }, [])


   
    

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LayoutCurrency code={code}>
        <CurrencySuggestion />
      </LayoutCurrency>
    </>
  );
};

export default CurrencyPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const code = ctx.params?.code;

  return {
    props: {
      code: code ? String(code) : null,
    },
  };
};
