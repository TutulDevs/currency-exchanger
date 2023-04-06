import { CurrencyBanner } from "@/components/CurrencyBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

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

          {/* children */}
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};
