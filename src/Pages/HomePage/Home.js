import React from "react";
import Hero from "../../Components/Hero";
import Stats from "../../Components/Stats";
import Services from "../../Components/Services";
import PortfolioSection from "../../Components/PortfolioSection";
import Testimonials from "../../Components/Testimonials";
import Team from "../../Components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <PortfolioSection />
      <Testimonials />
      <Team />
    </div>
  );
};

export default Home;
