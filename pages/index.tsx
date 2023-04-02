import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCurrencies,
  getConvertRate,
  getHistoricalData,
  getLatest,
} from "@/src/api";
import { Layout } from "@/layouts/Layout";
import { Hero } from "@/components/Hero";

export default function Home() {
  // const { data, error } = useQuery({ queryKey: ["todos"], queryFn: getLatest });
  // // console.log("ce: ", { data, error});

  // const { data, error } = useQuery({ queryKey: ["todos"], queryFn:()=> getConvertRate('USD', 'BDT', 12) });
  // console.log("ce: ", data, error);

  return (
    <>
      <Head>
        <title> CE | Currency Exchanger</title>
        <meta name="description" content="currency exchange rates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
