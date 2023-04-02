import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white text-xs">
      <div className="container mx-auto p-2 flex items-center justify-between">
        <p>
          Made by{" "}
          <a
            href="http://github.com/TutulDevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutul
          </a>
        </p>

        <p>Credits</p>
      </div>
    </footer>
  );
};
