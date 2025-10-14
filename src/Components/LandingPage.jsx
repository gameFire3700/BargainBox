import React, { useEffect, useState } from "react";
import Image from "../assets/images/banner.png";
import { motion } from "framer-motion";
import { Tag, Truck, Smile, ShoppingCart } from "lucide-react";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const initialProducts = [
        { id: 1, name: "Rice", category: "Grains", price: 500, stock: 10, imagePreview: "" },
        { id: 2, name: "Sugar", category: "Sweeteners", price: 40, stock: 20, imagePreview: "" },
        { id: 3, name: "Oil", category: "Cooking", price: 150, stock: 5, imagePreview: "" },
      ];
      setProducts(initialProducts);
      localStorage.setItem("products", JSON.stringify(initialProducts));
    }
  }, []);

  // Updated addToCart function to handle quantities
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      // Product already in cart → increase quantity
      cart[existingIndex].quantity += 1;
    } else {
      // Add new product with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // update Navbar badge
    alert(`${product.name} added to cart!`);
  };

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
            We blend the charm of your local store with the convenience of modern shopping — reliable, fast, and friendly.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard icon={<Tag className="w-8 h-8 text-[#28A745]" />} title="Discounted Prices" desc="Unbeatable prices on your favorite items — and yes, you can still bargain!" />
            <FeatureCard icon={<Truck className="w-8 h-8 text-[#28A745]" />} title="Fast Delivery" desc="Your daily essentials, delivered right to your door — always on time." />
            <FeatureCard icon={<Smile className="w-8 h-8 text-[#28A745]" />} title="Verified Seller" desc="Join thousands of happy shoppers who trust Local Kirana every day." />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="p-6 bg-[#F0FFF0]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#28A745]">Available Products</h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden w-[260px] mx-auto"
              >
                {product.imagePreview && (
                  <img
                    src={product.imagePreview}
                    alt={product.name}
                    className="w-full h-44 object-contain p-2 bg-[#f8f8f8]"
                  />
                )}

                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="text-md font-semibold text-gray-800 truncate">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#28A745] font-bold text-sm">₹{product.price}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  {product.stock > 0 && (
                    <motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
  onClick={() => addToCart(product)}
  className="mt-2 w-full bg-gradient-to-r from-[#28A745] to-[#FF6200] text-white py-2 rounded-full flex items-center justify-center gap-1 text-sm font-medium hover:opacity-90 transition cursor-pointer"
>
  <ShoppingCart size={16} /> Add to Cart
</motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
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
