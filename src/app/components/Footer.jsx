import { WhatsApp } from "@mui/icons-material";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const icons = [
    { name: "facebook", icon: <FaFacebookF className="text-blue-600" />, link: "#" },
    { name: "twitter", icon: <FaTwitter className="text-sky-500" />, link: "#" },
    { name: "instagram", icon: <FaInstagram className="text-pink-500" />, link: "#" },
    { 
    name: "WhatsApp", 
    icon: <WhatsApp className="text-green-500 w-6 h-6" />, 
    link: "https://wa.me/919876543210" // apna number daalna
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin className="text-blue-600 w-6 h-6" />, 
    link: "https://linkedin.com/in/your-profile" // apna profile link
  },
  { 
    name: "YouTube", 
    icon: <Youtube className="text-red-600 w-6 h-6" />, 
    link: "https://youtube.com/@yourchannel" // apna channel link
  }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-16 relative">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
    {/* Brand & Socials */}
    <div className="min-w-0">
      <h3 className="text-2xl font-bold mb-6 text-amber-400 flex items-center">
        <span className="text-amber-500">Delhi</span>
        <span className="ml-2">Body Spa</span>
      </h3>
      <p className="text-gray-400 mb-6">Luxury spa experiences for complete rejuvenation in the heart of Delhi.</p>

      {/* Icons: flex-wrap + gap so they don't overlap */}
      <div className="flex flex-wrap items-center justify-start gap-3">
        {icons.map((item, i) => (
          <a
            key={i}
            href={item.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="inline-flex items-center justify-center w-9 h-9 bg-gray-800 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-700 transition-colors"
          >
            {/* icon wrapper ensures icon is centered and won't overflow */}
            <span className="inline-flex items-center justify-center w-5 h-5">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </div>

    {/* Our Locations Section */}
    <div className="min-w-0">
      <h4 className="text-lg font-semibold mb-6 text-amber-300">Our Locations</h4>
      <ul className="space-y-4 text-gray-400">
        {['Aerocity', 'Connaught Place', 'Noida', 'Gurugram',  'Paschim Vihar'].map((loc, i) => (
          <li key={i} className="flex items-center break-words">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{loc}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 5-Star Hotels Section */}
    <div className="min-w-0">
      <h4 className="text-lg font-semibold mb-6 text-amber-300">5-Star Hotels</h4>
      <ul className="space-y-4 text-gray-400">
        {['Roseate House', 'The Park', 'Radisson Blu MBD', 'The Oberoi', 'Radisson Blu Hotel'].map((hotel, i) => (
          <li key={i}>
            <a
              href={`/hotels/${hotel.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-amber-400 transition-colors text-sm inline-block"
            >
              {hotel}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Us Section */}
    <div className="min-w-0">
      <h4 className="text-lg font-semibold mb-6 text-amber-300">Contact Us</h4>
      <ul className="space-y-4 text-gray-400">
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+918860788415" className="hover:text-amber-400">+91 88607 88415</a>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:info@delhibodyspa.com" className="hover:text-amber-400">info@delhibodyspa.com</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Copyright Section */}
  <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 relative z-10">
    <p>&copy; {new Date().getFullYear()} Delhi Body Spa. All rights reserved.</p>
  </div>
</footer>

  );
}
