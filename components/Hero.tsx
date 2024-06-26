import { HeroConvertForm } from "./HeroConvertForm/HeroConvertForm";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="content ">
        <h1 className="content-title">Currency Exchanger</h1>

        <p className="text-indigo-900">
          Your one stop solution to get the best exchange rates.
        </p>

        <HeroConvertForm />
      </div>

      {/* hero banner image */}
      <div className="banner " />
    </section>
  );
};
