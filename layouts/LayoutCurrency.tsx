import { CurrencyBanner } from "@/components/CurrencyBanner";
import { CurrencyHistoricalChart } from "@/components/CurrencyHistoricalChart/CurrencyHistoricalChart";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const LayoutCurrency: React.FC<{
  code: string;
  children: React.ReactNode;
}> = ({ children, code }) => {
  return (
    <>
      <div className="min-h-screen grid grid-rows-pageWrapper">
        <Header />

        <main className="container mx-auto px-2">
          {/* banner and form */}
          <CurrencyBanner code={code} />
          <CurrencyHistoricalChart code={code} />

          {/* children */}
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
