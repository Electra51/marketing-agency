import React from "react";
import Hero from "../../Components/Hero";
import Stats from "../../Components/Stats";
import Services from "../../Components/Services";
import PortfolioSection from "../../Components/PortfolioSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <PortfolioSection />
    </div>
  );
};

export default Home;
