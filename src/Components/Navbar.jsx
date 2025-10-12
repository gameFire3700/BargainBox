import React, { useState } from "react";
import Image1 from "../assets/images/Logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Changes:
    // 1. Reduced vertical padding from `py-3` to `py-2`.
    // 2. Replaced the `border-b` with a more modern `shadow-sm` for subtle depth.
    <nav className="w-full bg-white py-2 shadow-sm relative">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* Changes: */}
          {/* 1. Reduced logo width from `w-11` to `w-10`. */}
          <img src={Image1} alt="Logo" className="w-10 rounded-lg" />
          {/* 2. Reduced font size from `text-2xl` to `text-xl`. */}
          <h1 className="text-xl font-bold text-[#28A745] tracking-wide">
            Local Kirana
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-[#28A745] font-medium text-sm">Home</Link>
          <Link to="/aboutus" className="hover:text-[#28A745] font-medium text-sm">About Us</Link>
          <Link to="/features" className="hover:text-[#28A745] font-medium text-sm">Features</Link>
          <Link to="/contact" className="hover:text-[#28A745] font-medium text-sm">Contact</Link>
          <Link to="/login" className="hover:text-[#28A745] font-medium text-sm">Login</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="p-2 bg-[#28A745]/10 rounded-md">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-[#D4EDDA] rounded-lg shadow-lg z-50">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Home</Link>
              <Link to="/aboutus" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">About Us</Link>
              <Link to="/features" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Features</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Contact</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;