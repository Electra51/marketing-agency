import { TrendingUp } from "lucide-react";
import React from "react";
import { portfolio } from "../Shared/JsonData";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-8 w-full">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {project.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
