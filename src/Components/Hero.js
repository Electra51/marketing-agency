import {
  Award,
  ChevronRight,
  Globe,
  Mail,
  Play,
  Sparkles,
  Target,
} from "lucide-react";
import React from "react";
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">
                WE ARE THE CREATIVE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              MARKETING
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                AGENCY
              </span>
            </h1>

            <p className="text-lg text-gray-300">
              As a marketing professional, you will be in charge of creating and
              executing marketing communications for the agency that drive real
              business results.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center gap-2">
                SEE MORE <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition flex items-center gap-2">
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Professional"
                className="rounded-full w-full max-w-lg mx-auto border-8 border-cyan-500/30 shadow-2xl shadow-cyan-500/50"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
