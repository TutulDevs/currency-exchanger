import React from "react";

export const Hero = () => {
  return (
    <div className="hero flex flex-col sm:flex-row min-h-[400px]">
      <div className="content flex-1 flex flex-col justify-center gap-2 md:gap-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
          Currency Exchanger
        </h1>
        <p>Your one stop solution to get the exchange rates.</p>
      </div>

      {/* hero banner image */}
      <div className="banner flex-1">banner here</div>
    </div>
  );
};
