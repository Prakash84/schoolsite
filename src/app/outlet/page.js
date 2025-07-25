'use client'

import React, { useState } from 'react'
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";


const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

const hotelOutlets = [
  {
    title: "JW Marriott Hotel Aerocity",
    image: "/images/JW Marriott Hotel Aerocity.jpg",
    description:
      "JW Marriott Hotel Aerocity offers luxury stays, fine dining, spa services, and elegant ambiance near Delhi Airport’s business district.",
  },
  {
    title: "Lemon Tree Premier Aerocity",
    image: "/images/LemonTreePremierAerocity.jpg",
    description:
      "Lemon Tree Premier Aerocity is a stylish, upscale hotel in Delhi’s Aerocity offering contemporary rooms and top-notch service.",
  },
  {
    title: "Novotel New Delhi Aerocity",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description:
      "Modern upscale airport hotel with sleek rooms, rooftop pool, spa, and Aerocity connectivity for travelers.",
  },
  {
    title: "The Grand New Delhi",
    image: "/images/TheGrandNewDelhi.jpg",
    description:
      "Elegant urban retreat offering luxurious rooms, dining, fitness center, event spaces, and personalized hospitality.",
  },
  {
    title: "IBIS New Delhi Aerocity",
    image: "/images/IBISNewDelhiAerocity.jpg",
    description:
      "Rejuvenate at Ibis Aerocity’s spa with expert therapists, luxurious treatments, and serene ambience.",
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
  const outlets = [
    {
      id: 1,
      title: "Spa in Lajpat Nagar",
      location: "Central Market, Lajpat Nagar Metro Gate No. 1",
      phone: "+91 9211235800",
       image: "/images/hb3.jpg",
    },
    {
      id: 2,
      title: "Spa in Rajouri Garden",
      location: "Rajouri Garden Metro Gate No. 1",
      phone: "+91 9211235800",
       image: "/images/spa-treatments.jpg",
    },
    {
      id: 3,
      title: "Spa in Connaught Place",
      location: "Connaught Place, Metro Gate No. 1",
      phone: "+91 9211235800",
       image: "/images/steptodown.com800611.jpg",
    },
    {
      id: 4,
      title: "Spa in Noida",
      location: " Noida Sec 18, Noida sec 16, Electronic City, Noida City Center.",
      phone: "+91 9211235800",
      image: "/images/SkincareTreatments.jpg",
    },
    {
      id: 5,
      title: "Spa in Greater Kailash",
      location: "Greater Kailash, New Delhi. ",
      phone: "+91 9211235800",
      image: "/images/pricebanner.jpeg",
    },
    {
      id: 6,
      title: "Spa in Kalka Ji",
      location: "Kalka Ji, New delhi.",
      phone: "+91 9211235800",
      image: "/images/MassageSession.webp",
    }
  ];



  const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair'
  });

  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500'],
    variable: '--font-montserrat'
  });

export default function Outlet() {
  // Features for the 18+ section
  const features = [
    "Private Room",
    "Jacuzzi Bath",
    "Steam Bath",
    "Naturally Spa",
    "5 Star Hotels",
    "Female Therapist",
    "Foreigner Therapist",
  ];
  return (
    <>
     {/* Banner */}
      <section
        className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/spa-treatment_outlet.png')"
        }}
      >
        {/* Gradient Overlay with soft blur */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1
            className={`text-1xl md:text-3xl font-bold text-white leading-tight ${playfair.variable} font-serif`}
          >
            Relax, Rejuvenate & Refresh at Our Premium Spa Outlet Near You
          </h1>
          <p
            className={`mt-6 text-lg md:text-1xl text-white/90 font-light ${montserrat.variable}`}
          >
            Indulge in world-class wellness treatments crafted to soothe your soul and rejuvenate your body.
          </p>

          <a
            href="tel:+919211235800"
            className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Your Session Now
          </a>
        </div>
      </section>
      {/* End Banner */}
      {/* our 5* hoterl outlets */}
       <section className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-amber-900 font-serif mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our 5-Star Hotel Outlets
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-amber-800 max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Discover premium spa experiences at our 5-star hotel outlets. Indulge in luxurious treatments, rejuvenating therapies, and serene environments tailored for relaxation and elegance.
    </motion.p>

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
      {/* 18+ Section */}
{/* 18+ Section */}
          <section 
  className="relative py-20 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/images/18+bodyspa.avif')" }}
>
  {/* Enhanced gradient overlay with subtle grain texture */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3A2415]/80 to-black/90 z-0" />
  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light z-1" />

  <div className="relative z-10 max-w-6xl mx-auto text-[#FAF3E9]">
    {/* Elegant heading with decorative elements */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A866] to-transparent mb-8" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-[#F9D9A9] tracking-wide">
        <span className="block text-xl font-light tracking-widest text-[#D4A866] mb-2">
          PREMIUM WELLNESS DESTINATIONS
        </span>
        24+ Exclusive Body Spa Outlets
      </h2>
      <div className="w-16 h-0.5 bg-[#D4A866] mt-6" />
    </div>

    {/* Refined description */}
    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
      Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide.
    </p>

    {/* Sophisticated features grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {specialFeatures.map((item, index) => (
        <li key={index}>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-[#D4A866]/30 bg-gradient-to-b from-[#2D1B0F]/60 to-[#1A1109]/60 backdrop-blur-sm hover:border-[#D4A866]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-black/20">
            <svg
              className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#D4A866] group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"/>
            </svg>
            <span className="text-left font-light text-[#FAF3E9] group-hover:text-[#F9D9A9] transition-colors">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Decorative corner elements */}
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#D4A866]/50" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#D4A866]/50" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#D4A866]/50" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#D4A866]/50" />
  </div>
      </section>
          {/* end 18+ section */}
{/* end 18+ section */}

{/* Massage center */}
<div className="min-h-screen bg-gradient-to-b from-[#f8f5f2] to-[#faf9f7]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-[#f8f5f2] to-[#f0ede8]">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#2a3b47] leading-tight"
            >
              Premium <span className="font-medium text-[#5d7a68]">Massage Therapy</span> Centers
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-[#5d7a68]/30 via-[#5d7a68] to-[#5d7a68]/30 mx-auto my-8 rounded-full"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-[#4a5a65] max-w-2xl mx-auto leading-relaxed"
            >
              Experience transformative therapy in our serene spaces, where expert therapists blend ancient techniques with modern wellness science.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3.5 bg-[#5d7a68] hover:bg-[#4a6455] text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Book Consultation
                </button>
                <button className="px-8 py-3.5 border border-[#5d7a68] text-[#5d7a68] hover:bg-[#5d7a68]/5 font-medium rounded-full transition-all duration-300">
                  View Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-1/4 left-[10%] w-8 h-8 rounded-full bg-[#5d7a68]/10"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
          className="absolute top-1/3 right-[12%] w-12 h-12 rounded-full bg-[#5d7a68]/10"
        ></motion.div>
      </section>
      
      {/* Centers Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2a3b47] mb-4">
              Our <span className="font-medium text-[#5d7a68]">Premium Locations</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#5d7a68] to-transparent mx-auto mb-8"></div>
            <p className="text-[#4a5a65] max-w-2xl mx-auto">
              Each of our centers is designed as a sanctuary of tranquility, featuring bespoke interiors and expert therapists dedicated to your wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
            {outlets.map((outlet, idx) => (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={outlet.image}
                    alt={outlet.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-4">
                    <div>
                      <span className="text-white text-xl font-serif font-light block">{idx + 1}</span>
                      <h3 className="text-white text-lg font-medium">{outlet.title.split(' ')[0]}</h3>
                    </div>
                  </div>
                </div>

                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-[#2a3b47] mb-3">{outlet.title}</h3>
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-[#5d7a68] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[#4a5a65]">{outlet.location}</p>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <svg className="w-5 h-5 text-[#5d7a68] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-[#4a5a65]">{outlet.phone}</p>
                  </div>
                  
                  <button className="w-full py-3 bg-[#5d7a68] hover:bg-[#4a6455] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      {/* <section className="py-16 md:py-24 px-4 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2a3b47] mb-6">
              Client <span className="font-medium text-[#5d7a68]">Experiences</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#5d7a68] to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-[#4a5a65] italic mb-6">
                  "The therapists at Serenity Spa are true artists. I've never experienced such relief from my chronic back pain. The ambiance transports you to another world of tranquility."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7d9c87] to-[#5d7a68] flex items-center justify-center text-white font-medium text-lg">
                    {item === 1 ? 'S' : item === 2 ? 'M' : 'J'}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#2a3b47]">
                      {item === 1 ? 'Sarah Johnson' : item === 2 ? 'Michael Tan' : 'James Wilson'}
                    </h4>
                    <p className="text-sm text-[#5d7a68]">
                      {item === 1 ? 'Regular Client' : item === 2 ? 'Corporate Member' : 'Wellness Enthusiast'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      {/* <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-r from-[#5d7a68] to-[#7d9c87] rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-6">
              Experience Transformative Wellness
            </h3>
            <p className="text-white/90 mb-8">
              Join thousands who have rediscovered balance and vitality through our therapeutic approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3.5 bg-white text-[#5d7a68] hover:bg-[#f8f5f2] font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Book Your Session
              </button>
              <button className="px-8 py-3.5 border border-white text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
{/* End Massage center */}

<section className="w-full py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text and Icon */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Icon */}
      <div className="flex items-center space-x-4">
        <div className="bg-amber-100 p-3 rounded-full shadow-sm">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-amber-600"
            viewBox="0 0 576 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z" />
          </svg>
        </div>
        <p className="text-lg font-medium text-amber-800">24+ Outlets</p>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
        Best Luxury Spa in Delhi NCR
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Experience the <strong>best luxury spa in Delhi NCR</strong>, where tranquility meets indulgence. Our exclusive spa retreat offers world-class therapies designed to rejuvenate your body, mind, and soul.
      </p>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        From traditional Ayurvedic treatments to modern deep tissue massages, each session is curated by expert therapists using premium essential oils and natural ingredients. <strong>Book your indulgent escape today.</strong>
      </p>
    </motion.div>

    {/* Right: Images */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/luxurySpaRoom.jpg"
          alt="Spa Room"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/MassageSession.webp"
          alt="Massage Therapy"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </div>
</section>

    </>
    
  )
}




























// 'use client'

// import React, { useState } from 'react'
// import { 
//   Star, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Leaf, 
//   Sparkles, 
//   Heart, 
//   Users, 
//   Award, 
//   CheckCircle,
//   ChevronDown,
//   ChevronUp,
//   Calendar,
//   ArrowRight,
//   Facebook,
//   Instagram,
//   Twitter,
//   Crown,
//   Gift,
//   Zap,
//   Shield,
//   Menu,
//   X
// } from 'lucide-react'

// export default function Outlet() {
//   const [openFaq, setOpenFaq] = useState(null);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const services = [
//     {
//       icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
//       title: "Signature Full Body Massage",
//       description: "Experience our world-renowned massage therapy using premium organic oils and ancient healing techniques for complete muscle relaxation.",
//       duration: "60-90 min",
//       price: "From $120"
//     },
//     {
//       icon: <Heart className="w-10 h-10 text-rose-500" />,
//       title: "Luxury Facial Treatments",
//       description: "Rejuvenate your skin with our customized facial treatments featuring the latest skincare technology and premium products.",
//       duration: "45-75 min",
//       price: "From $95"
//     },
//     {
//       icon: <Leaf className="w-10 h-10 text-green-600" />,
//       title: "Detox Body Wraps",
//       description: "Purify and nourish your skin with our organic body wrap treatments using natural ingredients and therapeutic minerals.",
//       duration: "90 min",
//       price: "From $150"
//     },
//     {
//       icon: <Users className="w-10 h-10 text-purple-600" />,
//       title: "Couples Retreat",
//       description: "Share a romantic wellness experience with your partner in our luxurious couples suites with champagne service.",
//       duration: "2-3 hours",
//       price: "From $350"
//     },
//     {
//       icon: <Award className="w-10 h-10 text-amber-600" />,
//       title: "Aromatherapy Sessions",
//       description: "Enhance your wellness journey with therapeutic aromatherapy using premium essential oils for mind-body harmony.",
//       duration: "60 min",
//       price: "From $85"
//     },
//     {
//       icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
//       title: "Reflexology Therapy",
//       description: "Experience healing through specialized pressure point massage focusing on feet, hands, and energy pathways.",
//       duration: "45 min",
//       price: "From $75"
//     }
//   ]

//   const process = [
//     {
//       step: "01",
//       title: "Personal Consultation",
//       description: "Begin with a comprehensive wellness consultation where our experts assess your needs and create a personalized treatment plan.",
//       icon: <Users className="w-8 h-8" />
//     },
//     {
//       step: "02",
//       title: "Treatment Customization",
//       description: "Our specialists recommend the perfect combination of treatments tailored to your specific wellness goals and preferences.",
//       icon: <Heart className="w-8 h-8" />
//     },
//     {
//       step: "03",
//       title: "Luxury Experience",
//       description: "Immerse yourself in our tranquil environment with premium amenities, skilled therapists, and personalized attention.",
//       icon: <Sparkles className="w-8 h-8" />
//     },
//     {
//       step: "04",
//       title: "Wellness Guidance",
//       description: "Receive expert aftercare advice and personalized recommendations to maintain your wellness journey at home.",
//       icon: <Leaf className="w-8 h-8" />
//     }
//   ]

//   const packages = [
//     {
//       name: "Essential Bliss",
//       subtitle: "Perfect for first-time visitors",
//       price: "$199",
//       originalPrice: "$250",
//       duration: "2.5 hours",
//       features: [
//         "60-minute Swedish Massage",
//         "45-minute Hydrating Facial",
//         "Aromatherapy Session",
//         "Relaxation Lounge Access",
//         "Herbal Tea & Healthy Snacks",
//         "Complimentary Robe & Slippers"
//       ],
//       popular: false,
//       color: "from-blue-50 to-indigo-50",
//       borderColor: "border-blue-200"
//     },
//     {
//       name: "Luxury Escape",
//       subtitle: "Our most popular package",
//       price: "$399",
//       originalPrice: "$500",
//       duration: "4.5 hours",
//       features: [
//         "90-minute Deep Tissue Massage",
//         "75-minute Premium Anti-Aging Facial",
//         "Detoxifying Body Wrap",
//         "Private Couples Suite Available",
//         "Gourmet Spa Lunch",
//         "Private Relaxation Suite",
//         "Premium Spa Product Gift Set",
//         "Champagne & Chocolate Service"
//       ],
//       popular: true,
//       color: "from-emerald-50 to-teal-50",
//       borderColor: "border-emerald-300"
//     },
//     {
//       name: "Ultimate Indulgence",
//       subtitle: "The pinnacle of luxury",
//       price: "$699",
//       originalPrice: "$850",
//       duration: "Full Day (7 hours)",
//       features: [
//         "2-hour Signature Massage Journey",
//         "90-minute Platinum Facial Treatment",
//         "Full Body Exfoliation & Wrap",
//         "Reflexology & Aromatherapy",
//         "Private VIP Suite All Day",
//         "Personal Wellness Concierge",
//         "Luxury Spa Products Collection",
//         "Multi-course Gourmet Dining",
//         "Private Transportation Available"
//       ],
//       popular: false,
//       color: "from-amber-50 to-orange-50",
//       borderColor: "border-amber-200"
//     }
//   ]

//   const outlets = [
//     {
//       name: "Serenity Spa Downtown",
//       address: "123 Wellness Boulevard, City Center",
//       phone: "(555) 123-4567",
//       hours: "Mon-Sun: 9:00 AM - 9:00 PM",
//       image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Valet Parking", "Couples Suites", "Rooftop Garden"]
//     },
//     {
//       name: "Tranquil Waters Spa",
//       address: "456 Peaceful Lane, Riverside District",
//       phone: "(555) 234-5678",
//       hours: "Mon-Sun: 8:00 AM - 10:00 PM",
//       image: "https://images.pexels.com/photos/6621166/pexels-photo-6621166.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Waterfront Views", "Outdoor Treatments", "Meditation Garden"]
//     },
//     {
//       name: "Harmony Haven Spa",
//       address: "789 Zen Garden Way, Uptown",
//       phone: "(555) 345-6789",
//       hours: "Mon-Sun: 10:00 AM - 8:00 PM",
//       image: "https://images.pexels.com/photos/3757949/pexels-photo-3757949.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: ["Japanese Gardens", "Hot Stone Therapy", "Yoga Studio"]
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       rating: 5,
//       comment: "Absolutely transformative experience! The attention to detail and level of service exceeded all my expectations. I felt completely renewed.",
//       treatment: "Luxury Escape Package",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "Michael Chen",
//       rating: 5,
//       comment: "My wife and I had the most romantic couples retreat. The private suite was stunning and the treatments were world-class.",
//       treatment: "Ultimate Indulgence",
//       image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "Emily Rodriguez",
//       rating: 5,
//       comment: "The facial treatment was incredible! My skin has never looked better. The therapist was so knowledgeable and professional.",
//       treatment: "Luxury Facial Treatment",
//       image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
//     },
//     {
//       name: "David Thompson",
//       rating: 5,
//       comment: "I've visited spas worldwide, but Serenity Spa is truly exceptional. The ambiance, service, and results are unmatched.",
//       treatment: "Signature Massage",
//       image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
//     }
//   ]

//   const faqs = [
//     {
//       question: "What should I expect during my first visit?",
//       answer: "Your first visit begins with a comprehensive wellness consultation where we discuss your health history, preferences, and goals. We'll provide a tour of our facilities and explain your chosen treatments. Arrive 30 minutes early to complete paperwork and begin relaxing in our tranquil environment."
//     },
//     {
//       question: "What should I wear or bring to my appointment?",
//       answer: "We provide everything you need including luxury robes, slippers, towels, and all amenities. Simply arrive in comfortable clothing. We recommend removing jewelry and leaving valuables at home. Lockers are provided for your personal items."
//     },
//     {
//       question: "Are your products organic and safe for sensitive skin?",
//       answer: "Yes, we exclusively use premium, organic, and hypoallergenic products suitable for all skin types. Our therapists are extensively trained to work with sensitive skin and will customize treatments accordingly. We can provide ingredient lists for any products used."
//     },
//     {
//       question: "Can I customize my treatment package?",
//       answer: "Absolutely! We specialize in creating bespoke experiences. Our packages can be fully customized to meet your specific needs, preferences, and time constraints. Speak with our wellness specialists during booking to design your perfect spa day."
//     },
//     {
//       question: "What is your cancellation and rescheduling policy?",
//       answer: "We require 24-hour notice for cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a 50% charge. Same-day cancellations are charged the full treatment cost. We understand emergencies happen and will work with you when possible."
//     },
//     {
//       question: "Do you offer gift certificates and corporate packages?",
//       answer: "Yes! We offer beautifully presented gift certificates for all treatments and packages. Corporate wellness packages are available for team building and employee appreciation. Gift certificates never expire and can be used for any services or products."
//     }
//   ]

//   const blogPosts = [
//     {
//       title: "The Science Behind Massage Therapy: Health Benefits Explained",
//       excerpt: "Discover the proven health benefits of regular massage therapy, from stress reduction to improved circulation and pain management.",
//       image: "https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 15, 2024",
//       readTime: "8 min read",
//       category: "Wellness"
//     },
//     {
//       title: "Creating Your Personal Spa Sanctuary at Home",
//       excerpt: "Transform your home into a peaceful retreat with expert tips on ambiance, aromatherapy, and self-care rituals from our spa professionals.",
//       image: "https://images.pexels.com/photos/6621176/pexels-photo-6621176.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 12, 2024",
//       readTime: "6 min read",
//       category: "Lifestyle"
//     },
//     {
//       title: "Understanding Skincare: A Complete Guide to Facial Treatments",
//       excerpt: "Learn about different facial treatments, skin types, and how to choose the right skincare regimen for your unique needs.",
//       image: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "March 8, 2024",
//       readTime: "10 min read",
//       category: "Skincare"
//     }
//   ]

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index)
//   }

//   return (
//     <div className="min-h-screen gradient-bg scroll-smooth">
//       {/* Header */}
//       <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center">
//               <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl mr-3">
//                 <Leaf className="w-8 h-8 text-white" />
//               </div>
//               <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-playfair">
//                 Serenity Spa
//               </span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex space-x-8">
//               {['Services', 'Process', 'Pricing', 'Locations', 'About', 'Contact'].map((item) => (
//                 <a 
//                   key={item}
//                   href={`#${item.toLowerCase()}`} 
//                   className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-teal-700 transition duration-300 font-semibold shadow-lg">
//                 Book Now
//               </button>
              
//               {/* Mobile menu button */}
//               <button 
//                 className="lg:hidden p-2"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <div className="lg:hidden py-4 border-t border-white/20">
//               <nav className="flex flex-col space-y-4">
//                 {['Services', 'Process', 'Pricing', 'Locations', 'About', 'Contact'].map((item) => (
//                   <a 
//                     key={item}
//                     href={`#${item.toLowerCase()}`} 
//                     className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-800/20 to-green-900/30 z-10"></div>
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
//             alt="Luxury Spa Experience"
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         {/* Floating Elements */}
//         <div className="absolute top-20 left-10 floating-animation">
//           <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
//         </div>
//         <div className="absolute bottom-32 right-16 floating-animation" style={{animationDelay: '2s'}}>
//           <div className="w-16 h-16 bg-emerald-400/20 rounded-full backdrop-blur-sm"></div>
//         </div>
        
//         <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//           <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight font-playfair">
//             Discover Your Inner 
//             <span className="block text-gradient text-emerald-300">Serenity</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
//             Immerse yourself in luxury wellness treatments designed to restore balance, rejuvenate your spirit, 
//             and awaken your natural radiance in our tranquil sanctuary.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 transform hover:scale-105 shadow-2xl">
//               Book Your Journey
//             </button>
//             <button className="glass-effect text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition duration-300 border border-white/30">
//               Explore Services
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-24 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-50 floating-animation"></div>
//               <img 
//                 src="https://images.pexels.com/photos/3757949/pexels-photo-3757949.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Spa Interior"
//                 className="rounded-3xl shadow-2xl relative z-10"
//               />
//               <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-2xl shadow-xl">
//                 <div className="flex items-center">
//                   <Crown className="w-10 h-10 text-amber-500 mr-4" />
//                   <div>
//                     <div className="font-bold text-gray-900 text-lg">Award Winning</div>
//                     <div className="text-gray-600">Luxury Spa Experience</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h2 className="text-5xl font-bold text-gray-900 mb-8 font-playfair">
//                 About <span className="text-gradient">Serenity Spa</span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 For over a decade, Serenity Spa has been the premier destination for luxury wellness experiences. 
//                 Our mission transcends traditional spa services – we create transformative journeys that nurture your 
//                 body, mind, and spirit in perfect harmony.
//               </p>
//               <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                 Our team of world-class therapists combines ancient healing wisdom with cutting-edge wellness 
//                 techniques, using only the finest organic products and state-of-the-art facilities to deliver 
//                 unparalleled results.
//               </p>
              
//               <div className="grid grid-cols-3 gap-8 mb-10">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">12+</div>
//                   <div className="text-gray-600 font-medium">Years Excellence</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">75K+</div>
//                   <div className="text-gray-600 font-medium">Happy Clients</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-emerald-600 mb-2">35+</div>
//                   <div className="text-gray-600 font-medium">Expert Therapists</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-full">
//                   <Shield className="w-5 h-5 text-emerald-600 mr-2" />
//                   <span className="text-emerald-800 font-medium">Certified Organic</span>
//                 </div>
//                 <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
//                   <Award className="w-5 h-5 text-blue-600 mr-2" />
//                   <span className="text-blue-800 font-medium">Award Winning</span>
//                 </div>
//                 <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
//                   <Heart className="w-5 h-5 text-purple-600 mr-2" />
//                   <span className="text-purple-800 font-medium">Luxury Experience</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-24 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our comprehensive collection of luxury wellness treatments, each designed to provide 
//               transformative experiences that restore, rejuvenate, and revitalize.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group glass-effect p-8 rounded-3xl card-hover border border-white/20">
//                 <div className="mb-6 transform group-hover:scale-110 transition duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="text-sm text-gray-500">{service.duration}</div>
//                     <div className="text-lg font-bold text-emerald-600">{service.price}</div>
//                   </div>
//                   <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-200 transition duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section id="process" className="py-24 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-teal-50/50"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Process</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Experience our meticulously crafted wellness journey, designed to ensure your complete 
//               satisfaction and transformative results.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {process.map((step, index) => (
//               <div key={index} className="text-center group">
//                 <div className="relative mb-8">
//                   <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition duration-300">
//                     {step.step}
//                   </div>
//                   <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
//                     <div className="text-emerald-600">{step.icon}</div>
//                   </div>
//                   {index < process.length - 1 && (
//                     <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300"></div>
//                   )}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Pricing Section */}
//       <section id="pricing" className="py-24 bg-white/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Luxury <span className="text-gradient">Packages</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Indulge in our thoughtfully curated wellness packages, each designed to provide exceptional 
//               value and unforgettable experiences tailored to your needs.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {packages.map((pkg, index) => (
//               <div key={index} className={`relative rounded-3xl p-8 ${pkg.popular ? 'pricing-card-popular transform scale-105' : 'pricing-card'} card-hover`}>
//                 {pkg.popular && (
//                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
//                       <Crown className="w-4 h-4 mr-2" />
//                       Most Popular
//                     </div>
//                   </div>
//                 )}
                
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
//                   <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
//                   <div className="flex items-center justify-center mb-2">
//                     <span className="text-5xl font-bold text-emerald-600">{pkg.price}</span>
//                     <span className="text-lg text-gray-400 line-through ml-3">{pkg.originalPrice}</span>
//                   </div>
//                   <div className="text-gray-600 font-medium">{pkg.duration}</div>
//                   <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mt-2">
//                     <Gift className="w-4 h-4 mr-1" />
//                     Save {Math.round((1 - parseInt(pkg.price.slice(1)) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
//                   </div>
//                 </div>
                
//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start">
//                       <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700 leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <button className={`w-full py-4 rounded-full font-bold text-lg transition duration-300 ${
//                   pkg.popular 
//                     ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg' 
//                     : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                 }`}>
//                   {pkg.popular ? 'Choose Popular' : 'Select Package'}
//                 </button>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-16">
//             <p className="text-gray-600 mb-6">Need a custom package? We're here to help!</p>
//             <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition duration-300 shadow-lg">
//               Create Custom Package
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Outlets Section */}
//       <section id="locations" className="py-24 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Our <span className="text-gradient">Locations</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Visit any of our beautifully designed spa locations, each offering the same exceptional 
//               service and luxury amenities in unique, tranquil settings.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {outlets.map((outlet, index) => (
//               <div key={index} className="glass-effect rounded-3xl overflow-hidden card-hover border border-white/20">
//                 <div className="relative">
//                   <img 
//                     src={outlet.image} 
//                     alt={outlet.name}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-emerald-600">
//                     Premium Location
//                   </div>
//                 </div>
                
//                 <div className="p-8">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">{outlet.name}</h3>
                  
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-start">
//                       <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.address}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Phone className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.phone}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{outlet.hours}</span>
//                     </div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">Special Features:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {outlet.features.map((feature, featureIndex) => (
//                         <span key={featureIndex} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 shadow-lg">
//                     Book at This Location
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Client <span className="text-gradient">Testimonials</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover what our valued clients say about their transformative experiences at Serenity Spa.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="glass-effect p-8 rounded-3xl card-hover border border-white/20">
//                 <div className="flex items-center mb-6">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <div className="font-bold text-gray-900">{testimonial.name}</div>
//                     <div className="flex items-center">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
                
//                 <div className="bg-emerald-50 px-3 py-2 rounded-full text-sm font-medium text-emerald-700">
//                   {testimonial.treatment}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 relative">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Frequently Asked <span className="text-gradient">Questions</span>
//             </h2>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Find answers to common questions about our services, policies, and spa experience.
//             </p>
//           </div>
          
//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="glass-effect rounded-2xl border border-white/20 overflow-hidden">
//                 <button
//                   className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-white/20 transition duration-300"
//                   onClick={() => toggleFaq(index)}
//                 >
//                   <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
//                   <div className="bg-emerald-100 p-2 rounded-full">
//                     {openFaq === index ? (
//                       <ChevronUp className="w-5 h-5 text-emerald-600" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-emerald-600" />
//                     )}
//                   </div>
//                 </button>
//                 {openFaq === index && (
//                   <div className="px-8 pb-6">
//                     <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="py-24 bg-white/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
//               Blog & <span className="text-gradient">Articles</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Stay informed with our latest wellness insights, expert tips, and spa industry knowledge 
//               from our team of professionals.
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <article key={index} className="glass-effect rounded-3xl overflow-hidden card-hover border border-white/20">
//                 <div className="relative">
//                   <img 
//                     src={post.image} 
//                     alt={post.title}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {post.category}
//                   </div>
//                 </div>
                
//                 <div className="p-8">
//                   <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>{post.date}</span>
//                     <span className="mx-2">•</span>
//                     <span>{post.readTime}</span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
//                   <button className="flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition duration-300 group">
//                     Read Full Article 
//                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
          
//           <div className="text-center mt-16">
//             <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition duration-300 shadow-lg">
//               View All Articles
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <div className="lg:col-span-2">
//               <div className="flex items-center mb-8">
//                 <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-xl mr-4">
//                   <Leaf className="w-8 h-8 text-white" />
//                 </div>
//                 <span className="text-3xl font-bold font-playfair">Serenity Spa</span>
//               </div>
//               <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md">
//                 Your premier destination for luxury wellness experiences. Transform your mind, body, 
//                 and spirit in our tranquil sanctuary of healing and rejuvenation.
//               </p>
//               <div className="flex space-x-6">
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Facebook className="w-6 h-6" />
//                 </div>
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Instagram className="w-6 h-6" />
//                 </div>
//                 <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
//                   <Twitter className="w-6 h-6" />
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold mb-8 font-playfair">Services</h4>
//               <ul className="space-y-4">
//                 {['Full Body Massage', 'Luxury Facials', 'Body Treatments', 'Couples Therapy', 'Aromatherapy', 'Reflexology'].map((service) => (
//                   <li key={service}>
//                     <a href="#" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center">
//                       <Sparkles className="w-4 h-4 mr-2" />
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold mb-8 font-playfair">Contact Info</h4>
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <Phone className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Call Us</div>
//                     <div className="font-semibold">(555) 123-4567</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <Mail className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Email Us</div>
//                     <div className="font-semibold">hello@serenityspa.com</div>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
//                     <MapPin className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-300">Visit Us</div>
//                     <div className="font-semibold">123 Wellness Boulevard<br />City Center, State 12345</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-16 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 mb-4 md:mb-0">
//                 © 2024 Serenity Spa. All rights reserved. Crafted with love for wellness.
//               </p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Privacy Policy</a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Terms of Service</a>
//                 <a href="#" className="text-gray-400 hover:text-emerald-400 transition duration-300">Cookie Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }