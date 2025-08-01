export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-amber-400 flex items-center">
            <span className="text-amber-500">Delhi</span> Body Spa
          </h3>
          <p className="text-gray-400 mb-6">Luxury spa experiences for complete rejuvenation in the heart of Delhi.</p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram'].map((_, i) => (
              <a
                key={i}
                href="#"
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-700 transition-colors"
              >
                <div className="w-5 h-5"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Our Locations Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-amber-300">Our Locations</h4>
          <ul className="space-y-4 text-gray-400">
            {['Aerocity', 'Connaught Place', 'Noida', 'Gurugram',  'Paschim Vihar'].map((loc, i) => (
              <li key={i} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* 5-Star Hotels Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-amber-300">5-Star Hotels</h4>
          <ul className="space-y-4 text-gray-400">
            {['Roseate House', 'The Park', 'Radisson Blu MBD', 'The Oberoi', 'Radisson Blu Hotel'].map((hotel, i) => (
              <li key={i}>
                <a
                  href={`/hotels/${hotel.toLowerCase().replace(" ", "")}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {hotel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-amber-300">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 88607 88415
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@delhibodyspa.com
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
