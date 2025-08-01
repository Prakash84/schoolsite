import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hotel, Star, MapPin, Heart, ArrowRight } from 'lucide-react';

const LuxuryHotelPartners = () => {
  const [activeHotel, setActiveHotel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate featured hotels
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveHotel(prev => (prev + 1) % hotels.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const hotels = [
    {
      id: 1,
      name: "The Serenity Resort",
      location: "Bali, Indonesia",
      rating: 4.9,
      description: "A luxurious beachfront retreat with panoramic ocean views and our signature spa treatments.",
      features: ["Infinity Pool", "Private Beach", "Spa Villas", "Fine Dining"]
    },
    {
      id: 2,
      name: "Azure Heights",
      location: "Santorini, Greece",
      rating: 4.8,
      description: "Stunning cliffside villas with infinity pools and exclusive access to our premium spa services.",
      features: ["Caldera Views", "Wine Cellar", "Rooftop Spa", "Helipad"]
    },
    {
      id: 3,
      name: "Emerald Bay Resort",
      location: "Phuket, Thailand",
      rating: 4.7,
      description: "Tropical paradise with private villas surrounded by lush gardens and our award-winning spa.",
      features: ["Lagoon Pool", "Thai Cooking Classes", "Private Yacht", "Jungle Spa"]
    },
    {
      id: 4,
      name: "Alpine Sanctuary",
      location: "Swiss Alps, Switzerland",
      rating: 4.9,
      description: "Mountain chalet retreat offering panoramic alpine views and our exclusive wellness programs.",
      features: ["Ski-in/Ski-out", "Indoor Glacier Pool", "Mountain Spa", "Wine Library"]
    }
  ];

  // Generate random image URLs with nature themes
  const getRandomImage = (seed) => {
    return `https://source.unsplash.com/random/800x600/?luxury-hotel,resort,spa,${seed}`;
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl -z-0"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-amber-600 font-bold tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Exclusive Partnerships
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-amber-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Luxury Hotel Partners
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience our premium spa services at these exquisite partner locations worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hotel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div 
                key={hotel.id}
                className={`relative bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 border-2 cursor-pointer overflow-hidden group ${
                  activeHotel === index 
                    ? 'border-amber-500 shadow-2xl' 
                    : 'border-white hover:border-amber-300'
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveHotel(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Highlight indicator */}
                {activeHotel === index && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl group-hover:bg-amber-200 transition-colors">
                    <Hotel className="w-8 h-8 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                      <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                        <Star className="w-4 h-4 mr-1 fill-amber-500" />
                        {hotel.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                      {hotel.location}
                    </p>
                    <p className="text-gray-700 mt-3 line-clamp-2">{hotel.description}</p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Featured Hotel Showcase */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${getRandomImage(hotels[activeHotel].name)})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[600px]">
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-amber-300 text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
                      Featured Location
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-3">
                      {hotels[activeHotel].name}
                    </h3>
                    <p className="text-amber-200 mt-1 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {hotels[activeHotel].location}
                    </p>
                  </div>
                  <div className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 mr-1 fill-white" />
                    <span className="text-xl font-bold">{hotels[activeHotel].rating}</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-amber-100 text-lg">
                    {hotels[activeHotel].description}
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-amber-300 font-bold mb-3">Resort Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {hotels[activeHotel].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-t from-black/80 to-transparent">
                <motion.button 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Spa Experience
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
                
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                    <span className="text-amber-300 text-sm ml-2">Complimentary spa access</span>
                  </div>
                  <div className="h-4 w-px bg-amber-400/30"></div>
                  <div className="flex items-center">
                    <Hotel className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-300 text-sm ml-2">VIP guest privileges</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-2 mx-auto">
            Explore All Partner Hotels
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {["Marriott", "Hilton", "Hyatt", "Four Seasons", "Ritz-Carlton"].map((brand, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm border border-amber-100">
                <span className="text-amber-900 font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-amber-400/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-amber-500/30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default LuxuryHotelPartners;