import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#28A745] text-white mt-auto">
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-xl font-bold mb-4">Local Kirana</h4>
        <p className="text-[#D4EDDA]/90 mb-4">
          Trusted local Kirana store connecting you with fresh products and great deals.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to="/aboutus" className="hover:text-[#FF6200]">About Us</Link></li>
          <li><Link to="/features" className="hover:text-[#FF6200]">Features</Link></li>
          <li><Link to="/contact" className="hover:text-[#FF6200]">Contact Us</Link></li>
          <li><Link to="/login" className="hover:text-[#FF6200]">Login / Register</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-4">Contact</h4>
        <p className="text-[#D4EDDA]/90">📍 123 Local, India</p>
        <p className="text-[#D4EDDA]/90">📞 +91 98765 43210</p>
        <p className="text-[#D4EDDA]/90">✉️ support@localkirana.com</p>
      </div>
    </div>

    <div className="bg-[#1F5C34] text-[#D4EDDA] text-center py-4 mt-6">
      &copy; {new Date().getFullYear()} Local Kirana. All rights reserved.
    </div>
  </footer>
);

export default Footer;
