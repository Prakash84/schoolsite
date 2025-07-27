"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOutletOpen, setIsOutletOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOutletOpen, setMobileOutletOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let servicesTimeout, outletTimeout;

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setIsServicesOpen(false), 500);
  };

  const handleOutletEnter = () => {
    clearTimeout(outletTimeout);
    setIsOutletOpen(true);
  };

  const handleOutletLeave = () => {
    outletTimeout = setTimeout(() => setIsOutletOpen(false), 500);
  };

  const servicesDropdown = [
    { name: "Sandwich Massage", href: "/Services/sandwichmassage" },
    { name: "Couple Massage", href: "/Services/couplemassage" },
    { name: "B2B Massage", href: "/Services/b2bmassage" },
    { name: "Full Body Massage", href: "/Services/fullbodymassage" },
    { name: "Hot Stone Massage", href: "/Services/hotstonemassage" },
  ];

  const outletDropdown = [
    { name: "Aerocity", href: "/outlet/aerocity" },
    { name: "Connaught Place", href: "/outlet/cp" },
    { name: "Lajpat Nagar", href: "/outlet/lajpatnagar" },
    { name: "Paschim Vihar", href: "/outlet/paschimvihar" },
    { name: "Noida", href: "/outlet/noida" },
  ];

  return (
    <>
      <div className="hidden md:flex justify-between items-center text-sm text-white px-6 py-2 shadow-sm z-50" style={{ backgroundColor: "#c58940" }}>
        <p className="font-medium">📞 +91-9220961427</p>
        <p className="font-semibold">Book Your Appointment : Delhi | Noida | Gurgaon | Ghaziabad</p>
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={20} /></a>
          <a href="http://wa.link/gt55qd" target="_blank"><FaWhatsapp size={20} /></a>
        </div>
      </div>

      <motion.nav
        className={`w-full py-4 px-6 md:px-16 sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-32 h-10 relative">
            <Image src="/images/spadelhilogo22.png" alt="Delhi Body Spa Logo" fill className="object-contain" />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="font-medium text-gray-800 hover:text-amber-600 transition">Home</a>
            <a href="/about" className="font-medium text-gray-800 hover:text-amber-600 transition">About</a>

            <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <button className="font-medium text-gray-800 hover:text-amber-600 transition">Services</button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl z-50 py-2">
                  {servicesDropdown.map((item) => (
                    <a key={item.name} href={item.href} className="block px-5 py-2 text-[15px] font-medium text-gray-800 hover:bg-amber-100 transition">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/pricing" className="font-medium text-gray-800 hover:text-amber-600 transition">Pricing</a>

            <div className="relative" onMouseEnter={handleOutletEnter} onMouseLeave={handleOutletLeave}>
              <button className="font-medium text-gray-800 hover:text-amber-600 transition">Outlet</button>
              {isOutletOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl z-50 py-2">
                  {outletDropdown.map((item) => (
                    <a key={item.name} href={item.href} className="block px-5 py-2 text-[15px] font-medium text-gray-800 hover:bg-amber-100 transition">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/blog" className="font-medium text-gray-800 hover:text-amber-600 transition">Blog</a>
            <a href="/gallery" className="font-medium text-gray-800 hover:text-amber-600 transition">Gallery</a>
            <a href="/contact" className="font-medium text-gray-800 hover:text-amber-600 transition">Contact</a>

            <a href="https://api.whatsapp.com/send?phone=919211059033" className="bg-amber-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-amber-700 transition shadow-md">
              Book Appointment
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-amber-600 focus:outline-none text-2xl">
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="/" className="block text-gray-800 hover:text-amber-600">Home</a>
            <a href="/about" className="block text-gray-800 hover:text-amber-600">About</a>

            <div className="border-t pt-2">
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex justify-between items-center text-gray-800 font-medium">
                Services <span>{mobileServicesOpen ? "▲" : "▼"}</span>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {servicesDropdown.map((item) => (
                    <a key={item.name} href={item.href} className="block text-sm font-medium text-gray-700 hover:text-amber-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/pricing" className="block text-gray-800 hover:text-amber-600">Pricing</a>

            <div className="border-t pt-2">
              <button onClick={() => setMobileOutletOpen(!mobileOutletOpen)} className="w-full flex justify-between items-center text-gray-800 font-medium">
                Outlet <span>{mobileOutletOpen ? "▲" : "▼"}</span>
              </button>
              {mobileOutletOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {outletDropdown.map((item) => (
                    <a key={item.name} href={item.href} className="block text-sm font-medium text-gray-700 hover:text-amber-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/blog" className="block text-gray-800 hover:text-amber-600">Blog</a>
            <a href="/gallery" className="block text-gray-800 hover:text-amber-600">Gallery</a>
            <a href="/contact" className="block text-gray-800 hover:text-amber-600">Contact</a>

            <a href="https://api.whatsapp.com/send?phone=919211059033" className="block text-center bg-amber-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-amber-700 transition shadow-md">
              Book Appointment
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
}
