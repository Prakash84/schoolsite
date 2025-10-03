import { WhatsApp } from "@mui/icons-material";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const icons = [
    { name: "facebook", icon: <FaFacebookF className="text-red-400" />, link: "#" },
    { name: "twitter", icon: <FaTwitter className="text-sky-400" />, link: "#" },
    { name: "instagram", icon: <FaInstagram className="text-red-400" />, link: "#" },
    {
      name: "WhatsApp",
      icon: <WhatsApp className="text-green-400 w-6 h-6" />,
      link: "https://wa.me/918409744055"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="text-blue-400 w-6 h-6" />,
      link: "https://linkedin.com/in/your-profile"
    },
    {
      name: "YouTube",
      icon: <Youtube className="text-red-500 w-6 h-6" />,
      link: "https://youtube.com/@yourchannel"
    }
  ];

  const locations = ["Noida (Sector 11)", "Gurgaon (DLF Phase 3)", "Delhi Central", "Dwarka"];

  const quickLinks = [
    { label: "Admissions", href: "/admissions" },
    { label: "Programs", href: "/programs" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {/* Brand & Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-400">
            Little <span className="text-yellow-400">Stars</span>
          </h3>
          <p className="text-gray-400 mb-6">
            A warm, playful space for ages 2–6 — learning through play, art & stories.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {icons.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="inline-flex items-center justify-center w-9 h-9 bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-yellow-400">Our Centres</h4>
          <ul className="space-y-3 text-gray-400">
            {locations.map((loc, i) => (
              <li key={i} className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-red-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="tel:+918409744055" className="hover:text-red-400">📞 +91 84097 44055</a>
            </li>
            <li>
              <a href="mailto:prakastiwarichs@gmail.com" className="hover:text-red-400">✉️ prakastiwarichs@gmail.com</a>
            </li>
            <li>
              <a href="/admissions" className="hover:text-red-400">📅 Schedule a Tour</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} BibiNogs Play School. All rights reserved.</p>
      </div>
    </footer>
  );
}
