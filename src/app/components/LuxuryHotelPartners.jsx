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



  // const hotels = [
  //   {
  //     id: 1,
  //     name: "The Serenity Resort",
  //     location: "Bali, Indonesia",
  //     rating: 4.9,
  //     description: "A luxurious beachfront retreat with panoramic ocean views and our signature spa treatments.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  //         <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 2,
  //     name: "Azure Heights",
  //     location: "Santorini, Greece",
  //     rating: 4.8,
  //     description: "Stunning cliffside villas with infinity pools and exclusive access to our premium spa services.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V4.064z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 3,
  //     name: "Emerald Bay Resort",
  //     location: "Phuket, Thailand",
  //     rating: 4.7,
  //     description: "Tropical paradise with private villas surrounded by lush gardens and our award-winning spa.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
  //         <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   },
  //   {
  //     id: 4,
  //     name: "Alpine Sanctuary",
  //     location: "Swiss Alps, Switzerland",
  //     rating: 4.9,
  //     description: "Mountain chalet retreat offering panoramic alpine views and our exclusive wellness programs.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-amber-600">
  //         <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
  //       </svg>
  //     )
  //   }
  // ];
  //     <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
  //     <div className="max-w-7xl mx-auto">
  //       <div className="text-center mb-14">
  //         <span className="text-amber-600 font-semibold tracking-wider uppercase">Exclusive Partnerships</span>
  //         <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
  //           Luxury Hotel Partners
  //         </h2>
  //         <p className="text-xl text-gray-700 max-w-2xl mx-auto">
  //           Experience our premium spa services at these exquisite partner locations around the world
  //         </p>
  //       </div>

  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {hotels.map((hotel) => (
  //             <div 
  //               key={hotel.id}
  //               className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 border-2 cursor-pointer ${
  //                 activeHotel === hotel.id 
  //                   ? 'border-amber-500 shadow-xl transform -translate-y-1' 
  //                   : 'border-white'
  //               }`}
  //               onClick={() => setActiveHotel(hotel.id)}
  //             >
  //               <div className="flex items-start gap-4">
  //                 <div className="bg-amber-100 p-3 rounded-xl">
  //                   {hotel.icon}
  //                 </div>
  //                 <div>
  //                   <div className="flex justify-between items-start">
  //                     <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
  //                     <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
  //                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
  //                         <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  //                       </svg>
  //                       {hotel.rating}
  //                     </span>
  //                   </div>
  //                   <p className="text-gray-600 text-sm mt-1">{hotel.location}</p>
  //                   <p className="text-gray-700 mt-3 line-clamp-2">{hotel.description}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
          
  //         <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-3xl overflow-hidden shadow-2xl">
  //           <div className="h-full flex flex-col">
  //             <div className="p-8 flex-1">
  //               <div className="flex justify-between items-start">
  //                 <div>
  //                   <span className="text-amber-300 text-sm font-medium">Featured Location</span>
  //                   <h3 className="text-3xl font-bold text-white mt-1">
  //                     {hotels.find(h => h.id === activeHotel)?.name}
  //                   </h3>
  //                   <p className="text-amber-200 mt-2">
  //                     {hotels.find(h => h.id === activeHotel)?.location}
  //                   </p>
  //                 </div>
  //                 <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-xl font-bold">
  //                   {hotels.find(h => h.id === activeHotel)?.rating}
  //                 </div>
  //               </div>
                
  //               <div className="mt-6 bg-amber-800/30 backdrop-blur-sm rounded-xl p-5">
  //                 <p className="text-amber-100">
  //                   {hotels.find(h => h.id === activeHotel)?.description}
  //                 </p>
                  
  //                 <div className="mt-6 grid grid-cols-2 gap-4">
  //                   {[
  //                     { name: "Spa Packages", value: "12+" },
  //                     { name: "Treatment Rooms", value: "15" },
  //                     { name: "Swimming Pools", value: "3" },
  //                     { name: "Exclusive Offers", value: "Yes" }
  //                   ].map((item, idx) => (
  //                     <div key={idx} className="text-center">
  //                       <div className="text-amber-300 text-2xl font-bold">{item.value}</div>
  //                       <div className="text-amber-100 text-sm">{item.name}</div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
              
  //             <div className="p-8 bg-amber-900/30">
  //               <button className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
  //                 Book Spa Experience
  //               </button>
  //               <div className="mt-4 flex justify-center">
  //                 <span className="text-amber-300 text-sm flex items-center">
  //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
  //                     <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  //                   </svg>
  //                   Complimentary access for hotel guests
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
        
  //       <div className="mt-16 text-center">
  //         <button className="px-8 py-3 bg-white border-2 border-amber-700 text-amber-700 font-bold rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300">
  //           View All Partner Hotels
  //         </button>
  //       </div>
  //     </div>
  //   </section>