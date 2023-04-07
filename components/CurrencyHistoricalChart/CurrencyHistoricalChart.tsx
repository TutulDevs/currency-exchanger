import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useCurrencyHistoricalChart } from "./useCurrencyHistoricalChart";

const ChartNoSSR = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CurrencyHistoricalChart: React.FC<{ code: string }> = ({
  code,
}) => {
  const { currencyData, targetCurrencyData, seriesData, dateTimeList } =
    useCurrencyHistoricalChart(code);

  const series: ApexOptions["series"] = [
    {
      name: `${targetCurrencyData?.symbol}`,
      data: seriesData,
    },
  ];

  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      // categories: dateTimeList,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
    labels: dateTimeList,
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <section className="mt- 6 mb-12 min-h-[300px]">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-12">
        Historical Chart of the last 30 days of {targetCurrencyData?.code}
      </h2>

      <ChartNoSSR options={options} series={series} type="area" height={300} />
    </section>
  );
};
