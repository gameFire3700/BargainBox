import React, { useState } from "react";
import Image1 from "../assets/images/Logo.png";
import Image from "../assets/images/banner.png";
import { motion } from "framer-motion";
import { Tag, Truck, Smile } from "lucide-react";
import { Menu, X } from "lucide-react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false); // dropdown state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto w-full flex justify-between items-center px-6 py-3 bg-white rounded-b-lg border-b border-[#D4EDDA] relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Image1} alt="Logo" className="w-14 rounded-lg" />
          <h1 className="text-2xl font-bold text-[#28A745] tracking-wide">
            Local Kirana
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-[#343A40] hover:text-[#28A745] font-medium transition duration-300">
            About Us
          </a>
          <a href="#contact" className="text-[#343A40] hover:text-[#28A745] font-medium transition duration-300">
            Contact Us
          </a>
          <a href="#features" className="text-[#343A40] hover:text-[#28A745] font-medium transition duration-300">
            Features
          </a>
          <a href="Login.jsx" className="text-[#343A40] hover:text-[#28A745] font-medium transition duration-300">
            Login
          </a>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="p-2 rounded-md bg-[#28A745]/10 hover:bg-[#28A745]/20 transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-[#D4EDDA] rounded-lg shadow-lg z-50">
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#F0FFF0]">
                About Us
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#F0FFF0]">
                Contact Us
              </a>
              <a href="#features" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#F0FFF0]">
                Features
              </a>
              <a href="#login" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#F0FFF0]">
                Login
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-grow bg-gradient-to-r from-[#28A745] to-[#D4EDDA] text-[#343A40] p-10">
        <div className="max-w-xl text-center md:text-left md:pr-10">
          <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-sm">
            India’s No.1 Kirana Brand — Shop Smart, Bargain Better!
          </h2>
          <p className="text-lg mb-6 text-[#343A40] font-medium">
            Local savings. Fresh deals. Trustworthy service.
          </p>
          <button className="bg-[#FFF4E0] text-[#FF6200] px-8 py-3 rounded-full font-semibold hover:bg-[#FFEACC] transition">
            Register Your Shop!
          </button>
        </div>

        <img
          src={Image}
          className="w-80 md:w-96 rounded-xl mt-8 md:mt-0"
          alt="BargainBox"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-[#F8FFF9]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold text-[#28A745] mb-4">
            Why Choose Local Kirana?
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We blend the charm of your local store with the convenience of
            modern shopping — reliable, fast, and friendly.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className="p-8 bg-white border border-[#28A745]/30 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-[#E8F5E9] p-4 rounded-full">
                  <Tag className="w-8 h-8 text-[#28A745]" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-[#28A745]">
                Discounted Prices
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Get unbeatable prices on your favorite items — and yes, you can
                still bargain!
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className="p-8 bg-white border border-[#28A745]/30 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-[#E8F5E9] p-4 rounded-full">
                  <Truck className="w-8 h-8 text-[#28A745]" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-[#28A745]">
                Fast Delivery
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Your daily essentials, delivered right to your door — always on
                time.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className="p-8 bg-white border border-[#28A745]/30 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-[#E8F5E9] p-4 rounded-full">
                  <Smile className="w-8 h-8 text-[#28A745]" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-[#28A745]">
                100% Satisfaction
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Join thousands of happy shoppers who trust Local Kirana every
                day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
