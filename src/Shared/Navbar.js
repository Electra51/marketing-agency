import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../Assets/logo.svg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <span className="text-2xl font-bold text-white uppercase pb-0 mb-0 mt-5">
              Adorix
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-white hover:text-cyan-400 transition">
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-cyan-400 transition">
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-cyan-400 transition">
              Portfolio
            </a>
            <a
              href="#team"
              className="text-white hover:text-cyan-400 transition">
              Team
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-400 transition">
              Contact
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#home" className="block text-white hover:text-cyan-400">
              Home
            </a>
            <a
              href="#services"
              className="block text-white hover:text-cyan-400">
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-white hover:text-cyan-400">
              Portfolio
            </a>
            <a href="#team" className="block text-white hover:text-cyan-400">
              Team
            </a>
            <a href="#contact" className="block text-white hover:text-cyan-400">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
