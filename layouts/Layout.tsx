import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen grid grid-rows-pageWrapper">
        <Header />

        <main className="container mx-auto px-2">{children}</main>

        <Footer />
      </div>
    </>
  );
};
