import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next";
import { LayoutCurrency } from "@/layouts/LayoutCurrency";
import { FindOtherCurrencies } from "@/components/FindOtherCurrencies";

const CurrencyPage: NextPage<{
  code: string;
}> = ({ code }) => {
  const title = `${code} | CE | Currency Exchanger`;
  const description = code + " exchange rates";

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LayoutCurrency code={code}>
        <FindOtherCurrencies code={code} />
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
