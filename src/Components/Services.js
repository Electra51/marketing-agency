import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { services } from "../Shared/JsonData";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to elevate your brand and
            drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveService(idx)}
              className={`p-8 rounded-2xl border-2 transition-all cursor-pointer ${
                activeService === idx
                  ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500"
                  : "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50"
              }`}>
              <div
                className={`inline-flex p-3 rounded-xl mb-4 ${
                  activeService === idx
                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white"
                    : "bg-slate-700 text-cyan-400"
                }`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </div>
                ))}
              </div>
              <button className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
