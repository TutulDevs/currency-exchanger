import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-indigo-500">
      <nav className="container mx-auto p-2 flex items-center gap-2 text-white">
        <Link href="/" className="logo text-3xl font-semibold">
          C{" "}
          <span className="inline-block rotate-180 -ml-2 relative -top-[1.5px]">
            E
          </span>
        </Link>{" "}
        <div>Currency Exchanger</div>
      </nav>
    </header>
  );
};
