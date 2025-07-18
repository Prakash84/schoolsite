'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LuxurySpaBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const slides = [
    {
      title: "Rejuvenate Your Senses",
      subtitle: "Experience Ultimate Relaxation",
      description: "Indulge in our signature treatments designed to restore balance and harmony to your body and mind.",
      buttonText: "Book Your Escape",
      image: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/pexels-olly-3760262.jpg')"
    },
    {
      title: "Luxury Redefined",
      subtitle: "Premium Spa Experiences",
      description: "Discover our exclusive treatments crafted with the finest natural ingredients for transformative results.",
      buttonText: "Explore Services",
      image: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/female-therapist-rehabilitation-center-giving-back-massage.jpg')"
    },
    {
      title: "Summer Wellness",
      subtitle: "Special Seasonal Packages",
      description: "Refresh and revitalize with our limited-time summer offers designed to beat the heat and restore your glow.",
      buttonText: "View Offers",
      image: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: slide.image,
            zIndex: activeSlide === index ? 10 : 0
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeSlide === index ? 1 : 0,
            scale: activeSlide === index ? 1 : 1.05
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Geometric Overlays */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Decorative Lines */}
        <motion.div 
          className="absolute top-1/3 left-10 w-0.5 h-40 bg-white/30"
          initial={{ height: 0 }}
          animate={{ height: 160 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-12 w-40 h-0.5 bg-white/30"
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          className="max-w-3xl backdrop-blur-sm bg-black/20 rounded-2xl p-8 md:p-12 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/10 backdrop-blur-sm border border-amber-500/30 rounded-full">
              <span className="text-amber-300 font-light tracking-[0.3em] text-xs">
                PREMIUM SPA EXPERIENCE
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="block font-serif italic text-3xl md:text-4xl mb-3 text-amber-300 tracking-wider">
              {slides[activeSlide].subtitle}
            </span>
            <div className="h-0.5 w-20 bg-amber-400 mx-auto my-6"></div>
            {slides[activeSlide].title}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light tracking-wide mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {slides[activeSlide].description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #d4af37, #f9e076)",
                boxShadow: "0 5px 20px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 tracking-wider">{slides[activeSlide].buttonText}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(212, 175, 55, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-medium rounded-full backdrop-blur-sm transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 tracking-wider">Explore Treatments</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveSlide(index)}
            className="relative"
            whileHover={{ scale: 1.2 }}
          >
            <div className={`w-3 h-3 rounded-full transition-all ${
              activeSlide === index 
                ? 'bg-amber-400' 
                : 'bg-white/40'
            }`} />
            {activeSlide === index && (
              <motion.div 
                className="absolute inset-0 border border-amber-400 rounded-full"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Minimal Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-3 h-3 rotate-45 border-r border-b border-amber-400 mb-1"
            animate={{ y: [0, 5] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          />
          <span className="text-xs text-amber-300 tracking-widest">SCROLL</span>
        </div>
      </motion.div>
      
      {/* Modern Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm flex items-center justify-center">
        <div className="flex space-x-10">
          {['Massage', 'Facials', 'Body Treatments', 'Wellness'].map((item, i) => (
            <motion.span 
              key={i}
              className="text-white/70 text-sm tracking-wider cursor-pointer hover:text-amber-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-6 left-6 w-8 h-8 z-20 border-t border-l border-amber-400/50"></div>
      <div className="absolute top-6 right-6 w-8 h-8 z-20 border-t border-r border-amber-400/50"></div>
      <div className="absolute bottom-16 left-6 w-8 h-8 z-20 border-b border-l border-amber-400/50"></div>
      <div className="absolute bottom-16 right-6 w-8 h-8 z-20 border-b border-r border-amber-400/50"></div>
    </div>
  );
}