import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next";
import { LayoutCurrency } from "@/layouts/LayoutCurrency";
import { CurrencySuggestion } from "@/components/CurrencySuggestion";

const CurrencyPage: NextPage<{
  code: string;
}> = ({ code }) => {
  return (
    <>
      <Head>
        <title> {code} | CE | Currency Exchanger</title>
        <meta name="description" content="currency exchange rates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
