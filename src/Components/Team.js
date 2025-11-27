import { Linkedin, Twitter } from "lucide-react";
import React from "react";
import { team } from "../Shared/JsonData";

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Team
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Passionate experts driving your success
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                      <Twitter className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-cyan-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
