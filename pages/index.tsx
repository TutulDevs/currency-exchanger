import Head from "next/head";
import { Layout } from "@/layouts/Layout";
import { Hero } from "@/components/Hero";
import { CurrencySuggestion } from "@/components/CurrencySuggestion";
import { FindOtherCurrencies } from "@/components/FindOtherCurrencies";

export default function Home() {
  return (
    <>
      <Head>
        <title> CE | Currency Exchanger</title>
        <meta name="description" content="currency exchange rates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />

        <CurrencySuggestion />

        <FindOtherCurrencies />
      </Layout>
    </>
  );
}
