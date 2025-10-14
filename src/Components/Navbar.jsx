import React, { useState, useEffect } from "react";
import Image1 from "../assets/images/Logo.png";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  // Update count when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="w-full bg-white py-2 shadow-sm relative">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Image1} alt="Logo" className="w-10 rounded-lg" />
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

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-[#28A745]">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="p-2 bg-[#28A745]/10 rounded-md">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-[#D4EDDA] rounded-lg shadow-lg z-50">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Home</Link>
              <Link to="/aboutus" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">About Us</Link>
              <Link to="/features" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Features</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Contact</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0]">Login</Link>
              <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-[#F0FFF0] flex items-center">
                <ShoppingBag size={18} className="mr-2" /> Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
