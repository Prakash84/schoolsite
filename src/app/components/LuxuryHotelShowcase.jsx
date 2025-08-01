'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LuxuryHotelShowcase = () => {
  const [activeHotel, setActiveHotel] = useState(0);
  const featuredCardRef = useRef(null);

  const hotels = [
    {
      id: 1,
      name: 'Andaz Delhi',
      location: 'Aerocity, New Delhi',
      rating: 4.9,
      description:
        'Luxurious beachfront retreat with panoramic ocean views and our signature spa treatments.',
      features: ['special B2B Therapy', 'Couple Massage', 'Sandwich Massage', 'Female-to-Male'],
      tags: ['Foreigner Therapist', 'Luxury', 'Russian Model'],
    },
    {
      id: 2,
      name: 'The Park',
      location: 'Connaught Place, New Delhi',
      rating: 4.8,
      description:
        'Stunning cliffside villas with infinity pools and exclusive spa services.',
      features: ['Sandwich Massage', 'Female-to-Male', 'special B2B Therapy', 'Couple Massage'],
      tags: ['Foreigner Therapist', 'Romantic', 'Luxury'],
    },
    {
      id: 3,
      name: 'The Surya in NFC',
      location: 'NFC, New Delhi',
      rating: 4.7,
      description:
        'Tropical paradise with private villas surrounded by lush gardens and award-winning spa.',
      features: ['Full Body Massage', 'Thai Massage', 'Female-to-Male', 'special B2B Therapy'],
      tags: ['Tropical', 'Private', 'Exclusive'],
    },
    {
      id: 4,
      name: 'Welcome by ITC in Dwarka',
      location: 'Dwarka, New Delhi',
      rating: 4.9,
      description:
        'Mountain chalet retreat offering panoramic alpine views and exclusive wellness programs.',
      features: ['special B2B Therapy', 'Couple Massage', 'Sandwich Massage', 'Female-to-Male'],
      tags: ['Mountain', 'Alpine', 'Wellness'],
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Exclusive Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Luxury Hotel Partners
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience our premium spa services at these exquisite partner locations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            ref={featuredCardRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-amber-800 to-amber-900 min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-amber-300 text-sm font-medium mb-2">Featured Location</div>
                    <h3 className="text-3xl font-bold text-white">{hotels[activeHotel].name}</h3>
                    <p className="text-amber-200 mt-1">{hotels[activeHotel].location}</p>
                  </div>
                  <div className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-full">
                    <span className="text-xl font-bold">{hotels[activeHotel].rating}</span>
                  </div>
                </div>
                <p className="text-amber-100 text-lg mb-8">{hotels[activeHotel].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {hotels[activeHotel].tags.map((tag, idx) => (
                    <span key={idx} className="bg-amber-700/50 text-amber-200 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {hotels[activeHotel].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-400 mr-3"></div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-10 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Book Spa Experience
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                className={`relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 cursor-pointer overflow-hidden group ${
                  activeHotel === index ? 'ring-4 ring-amber-500' : 'hover:ring-2 hover:ring-amber-300'
                }`}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setActiveHotel(index);
                  if (window.innerWidth <= 768 && featuredCardRef.current) {
                    setTimeout(() => {
                      featuredCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }
                }}
              >
                {activeHotel === index && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Featured
                  </div>
                )}
                <div className="flex">
                  <div className="bg-amber-100 p-3 rounded-xl mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-700">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                      <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                        {hotel.rating}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 flex items-center">
                      {hotel.location}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {hotel.tags.map((tag, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {hotel.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 text-amber-600">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 group">
            Explore All Partner Hotels
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {['Marriott', 'Hilton', 'Hyatt', 'Four Seasons', 'Ritz-Carlton'].map((brand, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-xl shadow-sm border border-amber-100">
                <span className="text-amber-900 font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHotelShowcase;