import React from "react";
import Image from "../assets/images/banner.png";
import { motion } from "framer-motion";
import { Tag, Truck, Smile } from "lucide-react";
import Card from "../Components/Card";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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

        <img src={Image} className="w-80 md:w-96 rounded-xl mt-8 md:mt-0" alt="Banner" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F8FFF9]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold text-[#28A745] mb-4">
            Why Choose Local Kirana?
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We blend the charm of your local store with the convenience of
            modern shopping — reliable, fast, and friendly.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard icon={<Tag className="w-8 h-8 text-[#28A745]" />} title="Discounted Prices" desc="Unbeatable prices on your favorite items — and yes, you can still bargain!" />
            <FeatureCard icon={<Truck className="w-8 h-8 text-[#28A745]" />} title="Fast Delivery" desc="Your daily essentials, delivered right to your door — always on time." />
            <FeatureCard icon={<Smile className="w-8 h-8 text-[#28A745]" />} title="Verified Seller" desc="Join thousands of happy shoppers who trust Local Kirana every day." />
          </div>
        </div>
      </section>
    </div>
    
  );
  <Card/>
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className="p-8 bg-white border border-[#28A745]/30 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">
      <div className="bg-[#E8F5E9] p-4 rounded-full">{icon}</div>
    </div>
    <h4 className="text-2xl font-semibold mb-2 text-[#28A745]">{title}</h4>
    <p className="text-gray-700 leading-relaxed">{desc}</p>
  </motion.div>

  
);

export default LandingPage;
