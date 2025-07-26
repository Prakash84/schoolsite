"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/9211059033" // <-- apna number yahan daalo
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
