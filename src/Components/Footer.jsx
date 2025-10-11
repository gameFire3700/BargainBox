import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#28A745] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-xl font-bold mb-4">Local Kirana</h4>
          <p className="text-[#D4EDDA]/90 mb-4">
            Trusted local Kirana store connecting you with fresh products and
            great deals. Shop smart, save more, and support your community!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-[#FF6200] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-[#FF6200] transition">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#FF6200] transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-[#FF6200] transition">
                Login / Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p className="text-[#D4EDDA]/90">📍 123 Local, India</p>
          <p className="text-[#D4EDDA]/90">📞 +91 98765 43210</p>
          <p className="text-[#D4EDDA]/90">✉️ support@localkirana.com</p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-[#FF6200] transition">
              Facebook
            </a>
            <a href="#" className="hover:text-[#FF6200] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[#FF6200] transition">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#1F5C34] text-[#D4EDDA] text-center py-4 mt-6">
        &copy; {new Date().getFullYear()} Local Kirana. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
