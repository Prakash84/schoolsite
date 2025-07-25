"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="hidden md:flex justify-between items-center text-sm text-white px-6 py-2 shadow-sm z-50"
        style={{ backgroundColor: "#c58940" }}
      >
        <div>
          <p className="font-medium">📞 +91-9220961427</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">
            Book Your Appointment : Delhi | Noida | Gurgaon | Ghaziabad
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="http://wa.link/gt55qd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-300 transition"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`w-full py-4 px-6 md:px-16 z-50 sticky top-0 bg-white shadow-md backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-amber-700 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Logo Image */}
            <Image
              src="/Images/logo.png"     // public/logo.png path
              alt="Logo"
              width={150}
              height={150}
              className="rounded-full" // optional styling
            />

            {/* Text */}
            {/* <span className="text-amber-500">Delhi</span> Body Spa */}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[{ name: "Home", href: "/" },{ name: "About", href: "/about" },{ name: "Services", href: "/Services" },{ name: "Pricing", href: "/pricing" },{ name: "Outlet", href: "/outlet" },{ name: "Contact", href: "/contact" }].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="font-medium text-gray-800 hover:text-amber-600 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-600 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Appointment Button */}
          <motion.a
            href="https://api.whatsapp.com/send?phone=918860788415"
            className="hidden md:inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-amber-700 transition-all duration-300 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Book Appointment
          </motion.a>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {[{ name: "Home", href: "/" },{ name: "About", href: "/about" },{ name: "Services", href: "/Services" },{ name: "Pricing", href: "/pricing" },{ name: "Outlet", href: "/outlet" },{ name: "Contact", href: "/contact" }].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block text-gray-800 hover:text-amber-600 text-base"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=918860788415"
              className="block w-full text-center bg-amber-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-amber-700 transition-all duration-300 shadow-md"
            >
              Book Appointment
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
}
