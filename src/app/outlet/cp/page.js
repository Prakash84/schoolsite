'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSpa, FaHotel, FaCrown } from 'react-icons/fa';
import { FaStar, FaCheckCircle } from 'react-icons/fa';


export default function cp() {
  const hotelOutlets = [
  {
    title: "JW Marriott Hotel Connaught Place",
    image: "/images/JW Marriott Hotel Connaught Place.jpg",
    description:
      "JW Marriott Hotel Connaught Place offers luxury stays, fine dining, spa services, and elegant ambiance near Delhi Airport’s business district.",
  },
  {
    title: "Lemon Tree Premier Connaught Place",
    image: "/images/LemonTreePremierConnaught Place.jpg",
    description:
      "Lemon Tree Premier Connaught Place is a stylish, upscale hotel in Delhi’s Connaught Place offering contemporary rooms and top-notch service.",
  },
  {
    title: "Novotel New Delhi Connaught Place",
    image: "/images/NovotelNewDelhiConnaught Place.jpeg",
    description:
      "Modern upscale airport hotel with sleek rooms, rooftop pool, spa, and Connaught Place connectivity for travelers.",
  },
  {
    title: "The Grand New Delhi",
    image: "/images/TheGrandNewDelhi.jpg",
    description:
      "Elegant urban retreat offering luxurious rooms, dining, fitness center, event spaces, and personalized hospitality.",
  },
  {
    title: "IBIS New Delhi Connaught Place",
    image: "/images/IBISNewDelhiConnaught Place.jpg",
    description:
      "Rejuvenate at Ibis Connaught Place’s spa with expert therapists, luxurious treatments, and serene ambience.",
  },
  {
    title: "The Park Connaught Place",
    image: "/images/TheParkConnaughtPlace.jpg",
    description:
      "Experience rejuvenating spa services at The Park Connaught Place – where luxury meets wellness.",
  },
  {
    title: "The Suryaa New Delhi (NFC)",
    image: "/images/TheSuryaaNewDelhi(NFC).jpg",
    description:
      "Indulge at The Suryaa with massages, therapies, serene ambiance, and personalized wellness.",
  },
  {
    title: "The Ashok (Chanakyapuri)",
    image: "/images/TheAshok(Chanakyapuri).webp",
    description:
      "Rejuvenate at The Ashok’s luxury spa in Chanakyapuri—experience ultimate relaxation and wellness.",
  },
];
  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
      highlight: false,
      ctaLink: "http://wa.link/njldxn",
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "http://wa.link/u061wi",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "Facial Session", "120 min Session"],
      highlight: false,
      ctaLink: "#",
      icon: <FaCrown className="text-amber-500" />
    }
  ];
   {/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Meeting',
    description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Treatment',
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Finalizing',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */}
  return (
    <div className="bg-rose-50 text-gray-800">
      {/* Banner */}         
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - more minimal */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-amber-600"></div>
              <span className="text-amber-600 font-light tracking-widest">OUR OUTLETS</span>
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
              <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Connaught Place</span>
            Tailored Experiences,
              <span className="block mt-2 font-medium">Journey to <span className="text-rose-600">Tranquility</span></span>
            </h1>
            
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            At LuxeSpa, we offer a sanctuary where each treatment is a journey. Our expert therapists craft personalized experiences using premium products and techniques that honor both tradition and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Guided Meditation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Aromatherapy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Personal Consultations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Holistic Treatments</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                <span>View All Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-6 py-3 bg-white text-amber-800 rounded-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Image section - more elegant */}
          <div className="relative h-80 md:h-96 lg:h-[450px]">
            <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  src="/images/TheParkConnaughtPlace.jpg" // ✅ Yahan apna image path daal
                  alt="Spa Environment"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>

          {/* Floating leaf decoration */}
          <div className="absolute -bottom-6 -right-6">
            <svg className="w-24 h-24 text-amber-600/30" viewBox="0 0 100 100">
              <path
                fill="currentColor"
                d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
              />
            </svg>
          </div>

            {/* Minimalist stats */}
            <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
              <div className="text-center">
                <div className="text-2xl font-serif text-amber-800">12+</div>
                <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Minimal wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
            <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
          </svg>
        </div>
      </div>
      {/* End Banner */}
      {/* content */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M50,15 C65,15 80,25 85,40 C90,55 85,70 70,85 C55,90 40,85 25,70 C15,55 15,40 25,25 C30,20 40,15 50,15 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path d="M40,10 C50,10 60,15 65,25 C70,35 65,45 55,55 C45,60 35,65 25,55 C15,45 15,35 25,25 C30,20 35,15 40,10 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="max-w-[95%] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                      <span className="text-amber-700 font-medium tracking-wider">PREMIUM EXPERIENCE</span>
                    </motion.div>
                    
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Top Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Outlets in Connaught Delhi</span>
                    </motion.h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
        

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Image & Content */}
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl z-10">
              <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-1 rounded-2xl">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                    <img
                        src="/images/hb2.jpg" // Change path accordingly
                        alt="Premium Body Spa"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    <div className="absolute top-4 right-4 bg-amber-700 text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-serif font-bold text-stone-800">Premium Body Spa</h3>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                        <span className="font-bold">₹1999</span> First Visit
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span className="text-stone-700">Couple Massage</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span className="text-stone-700">Jacuzzi Bath</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span className="text-stone-700">Private Room</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span className="text-stone-700">Oil & Cream Massage</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span className="text-stone-700">Aromatherapy</span>
                      </li>
                    </ul>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-lg">
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Escape the city's hustle and indulge in a tranquil haven where serenity meets sophistication. 
                Our premium spa is nestled within Connaught Place's most luxurious 5-star hotels, offering an oasis 
                of calm in the heart of Delhi.We specialize in world-class therapies including <span className="font-medium text-stone-800">hot stone massage</span>, 
                <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                designed private sanctuaries.
              </p>
              
              
              
              <p className="text-stone-600 mb-6 leading-relaxed">
                We specialize in world-class therapies including <span className="font-medium text-stone-800">hot stone massage</span>, 
                <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                designed private sanctuaries.Escape the city's hustle and indulge in a tranquil haven where serenity meets sophistication. 
                Our premium spa is nestled within Connaught Place's most luxurious 5-star hotels, offering an oasis 
                of calm in the heart of Delhi.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <div className="text-amber-600 text-2xl mb-2">★</div>
                  <h4 className="font-medium text-stone-800">Award-Winning</h4>
                  <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <div className="text-amber-600 text-2xl mb-2">♨</div>
                  <h4 className="font-medium text-stone-800">Thermal Suite</h4>
                  <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <div className="text-amber-600 text-2xl mb-2">👨‍👩‍👧</div>
                  <h4 className="font-medium text-stone-800">Couples Welcome</h4>
                  <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <div className="text-amber-600 text-2xl mb-2">🌿</div>
                  <h4 className="font-medium text-stone-800">Organic Products</h4>
                  <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  View Treatments
                </button>
                <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Book Appointment
                </button>
              </div>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
      {/* end content */}

      
      {/* our 5* hoterl outlets */}
             <section className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                      <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
                    </motion.div>
                    
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-5xl font-bold text-amber-900 mb-6 font-serif"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">5-Star Hotel Outlets</span>
                    </motion.h2>
                    
                    <motion.p
                      className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Discover premium spa experiences at our 5-star hotel outlets. Indulge in luxurious treatments, rejuvenating therapies, and serene environments tailored for relaxation and elegance.
                    </motion.p>
                    
                    <motion.div
                      className="flex justify-center mt-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    </motion.div>
                  </motion.div>
      
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelOutlets.map((hotel, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover"
                  />
                </div>
      
                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-amber-800 font-serif mb-2">
                    {hotel.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    {hotel.description}
                  </p>
      
                  {/* Book Now Button */}
                  <a
                    href="http://wa.link/njldxn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto px-5 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                  >
                    BOOK NOW
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
            {/* End outlets */}

      {/* About Us Section */}
            <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <motion.div
                                className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                              >
                                <span className="mr-2">✦</span> About Our Connaught Place Spa Outlets
                              </motion.div>
                  
                              <motion.h2
                                className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                              >
                                Welcome to <span className="relative">
                                  <span className="text-amber-600 z-10 relative">Delhi Body Spa</span>
                                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                                </span>
                              </motion.h2>
                  <p className="text-gray-700 text-lg">
                    At Luxury Body Spa, we are dedicated to creating a haven of peace, wellness, and rejuvenation in the heart of Delhi. With a blend of ancient healing traditions and modern techniques, our expert therapists restore balance and vitality. From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                    Located in the heart of Delhi’s bustling Connaught Place, our spa is surrounded by some of the city’s most prestigious hotels, making it the perfect destination for travelers and locals alike. Connaught Place is renowned for its world-class hospitality, modern infrastructure, and seamless connectivity to IGI Airport and central Delhi.
                  </p>
                  <p className="text-gray-700 text-lg">
                    Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                     Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                  </p>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/luxurySpaRoom.jpg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/spamodel.jpg" alt="Massage Session" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </section>
{/* Pricing Section */}
            <section id= "Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-15 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Heading */}
              <div className="text-center mb-16">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaStar className="text-amber-500" />
                  Affordable Luxury
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Our <span className="text-amber-600">Pricing Packages</span>
                </motion.h2>
                <motion.p
                  className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
                </motion.p>
                <motion.div
                   className="flex justify-center mt-10"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5, duration: 0.5 }}
                 >
                   <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                 </motion.div>
              </div>
      
              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Featured badge */}
                    {plan.highlight && (
                      <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className={`h-full flex flex-col border ${plan.highlight ? "border-amber-500 shadow-xl" : "border-amber-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                      <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-amber-600 to-amber-700" : "bg-amber-800"}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">
                            {plan.icon}
                          </div>
                          <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-amber-100"}`}>
                            {plan.title}
                          </h3>
                        </div>
                        <p className={`text-lg ${plan.highlight ? "text-amber-100" : "text-amber-200"}`}>
                          {plan.description}
                        </p>
                      </div>
                      
                      <div className="p-8 pt-12 pb-10 -mt-6 relative">
                        {/* Price circle */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">
                            {plan.price}
                          </span>
                        </div>
                        
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                              <span className="text-amber-800">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <a
                          href={plan.ctaLink}
                          className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                            plan.highlight 
                              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:from-amber-600 hover:to-amber-700"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          }`}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
      
              {/* Additional information */}
              {/* <motion.div 
                className="mt-16 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 md:p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Flexible Booking Options</h3>
                    <p className="text-amber-800 max-w-2xl">
                      All packages include free rescheduling up to 24 hours before your appointment. 
                      <span className="font-semibold"> Group discounts available for 3+ bookings!</span>
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </section>
          {/* End Pricing Section */}
          {/* Our Process */}
                                <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
                                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                   {/* Section Header */}
                         <motion.div 
                           className="text-center mb-20"
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-100px" }}
                           transition={{ duration: 0.8 }}
                         >
                           <motion.div
                             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                             initial={{ opacity: 0, scale: 0.9 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 0.2, duration: 0.5 }}
                           >
                             <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                             <span className="text-amber-700 font-medium tracking-wider">Process</span>
                           </motion.div>
                           
                           <motion.h2
                             className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.3, duration: 0.6 }}
                           >
                             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Process</span>
                           </motion.h2>
                           
                           {/* <motion.p
                             className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.4, duration: 0.5 }}
                           >
                             Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
                           </motion.p> */}
                           
                           <motion.div
                             className="flex justify-center mt-10"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5, duration: 0.5 }}
                           >
                             <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                           </motion.div>
                         </motion.div>
                               
                                   {/* Process Steps */}
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                     {processSteps.map((step, index) => (
                                       <motion.div
                                         key={index}
                                         className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                                         initial={{ opacity: 0, y: 40 }}
                                         whileInView={{ opacity: 1, y: 0 }}
                                         viewport={{ once: true }}
                                         transition={{ duration: 0.5, delay: index * 0.2 }}
                                       >
                                         {/* Step Number */}
                                         <div className="absolute top-4 left-4 text-3xl font-bold text-amber-300 opacity-30 z-0">
                                           {step.number}
                                         </div>
                               
                                         {/* Image */}
                                         <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-amber-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                           <Image
                                             src={step.image}
                                             alt={step.title}
                                             layout="fill"
                                             objectFit="cover"
                                             className="rounded-full"
                                           />
                                         </div>
                 
                               
                                         {/* Title */}
                                         <h4 className="text-2xl font-semibold text-amber-800 mb-4 font-serif">
                                           {step.title}
                                         </h4>
                               
                                         {/* Description */}
                                         <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                                       </motion.div>
                                     ))}
                                   </div>
                                 </div>
                                </section>
                              {/* End Our Process */}
      {/* 700+ Words Content Block */}
      <div className="bg-white py-14 px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 text-center">Why Choose Our Spa in Connaught Place?</h2>
          <p>
            Connaught Place is a destination that blends luxury, convenience, and connectivity — and what better way to enhance your stay than with a relaxing spa session designed to soothe your mind and body? Our spa outlets are located in the most prestigious hotels across Connaught Place, giving you access to world-class wellness experiences within arm’s reach.
          </p>
          <p>
            Whether you're a couple looking for a romantic escape, a business traveler seeking stress relief, or a local resident desiring some weekend rejuvenation, our spa services are tailored to meet every need. From couple massages, oil therapy, deep tissue massage to aroma and Swedish therapy — our professionally trained therapists ensure every session is personal, effective, and deeply relaxing.
          </p>
          <p>
            Our outlets follow the highest hygiene and quality standards. Every treatment room is designed to provide peace and privacy, with soothing music, ambient lighting, and a tranquil environment that elevates your entire experience.
          </p>
          <p>
            What sets our Connaught Place spa services apart is our commitment to customization. We understand that every body is different — so we ask the right questions before beginning any session, and we curate treatments based on your lifestyle, tension areas, and wellness goals. You leave feeling refreshed, realigned, and ready to take on the world.
          </p>
          <p>
            With easy access to the IGI Airport, metro, and luxury shopping arcades, our Connaught Place locations are ideal for those short on time but high on expectation. We ensure that even a 60-minute session makes a lasting impact on your mood, energy, and health.
          </p>
          <p>
            Whether you are staying at JW Marriott, Andaz, Roseate House, Pullman, or Novotel — we are just an elevator ride away. Book your couple spa or signature massage session today and unlock the door to pure bliss.
          </p>
          <p className="font-medium text-center text-amber-700">
            Come, experience Connaught Place’s best luxury spa — where wellness meets elegance.
          </p>
        </div>
      </div>
    </div>
  );
}
