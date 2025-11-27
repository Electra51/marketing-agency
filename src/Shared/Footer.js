import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import logo from "../Assets/logo.svg";
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-end gap-2 mb-3">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <span className="text-2xl font-bold text-white uppercase pb-0 mb-0 mt-5">
                Adorix
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming brands through creative marketing excellence since
              2008.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Digital Marketing</div>
              <div>Brand Strategy</div>
              <div>Web Development</div>
              <div>Growth Marketing</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>About Us</div>
              <div>Careers</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-gray-400 text-sm">
          © 2025 update Adorix Agency. All rights reserved. Made by Safayet Nur.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
