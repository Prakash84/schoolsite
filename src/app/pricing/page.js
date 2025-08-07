'use client';

import React, { useState, useEffect } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar,FaHotTub } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import WhatsappFloat from '../components/WhatsappFloat';
  import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { AnimatePresence } from "framer-motion";


// ✅ Load Google Fonts
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
export default function pricing() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
            setIsVisible(true);
          }, []);
        
        const [activeIndex, setActiveIndex] = useState(null);
          const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const faqs = [
      
      {
        question: "What is the cost of a Couple Massage?",
        answer: "The price for a Couple Massage varies depending on the location and duration. Please check our pricing details for specific outlet prices",
        icon: <FaSpa className="text-teal-600" />
      },
      {
        question: "Do you offer discounts or packages?",
        answer: "Yes, we offer special packages and discounts, including a first-visit special at just ₹1999.",
        icon: <FaHandSparkles className="text-teal-600" />
      },
      
      {
        question: "How much does a Full Body Massage cost?",
        answer: "The cost of a Full Body Massage depends on the duration and location. For specific pricing, please refer to the service details on our website.",
        icon: <FaLeaf className="text-teal-600" />
      },
      {
        question: "Are there any hidden fees in your pricing?",
        answer: "No, our pricing is transparent with no hidden fees. The cost mentioned is what you pay.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
            question: "Do you offer membership or loyalty programs?",
            answer: "Yes, we offer membership options with great discounts for regular clients. Contact us for more details",
            icon: <FaHotTub className="text-teal-600" />
          },
          {
                question: "Can I pay online for my services?",
                answer: "Yes, we offer secure online payment options through our website for your convenience.",
                icon: <FaSpa className="text-teal-600" />
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
        price: "₹13999/-",
        description: "Premium experience with luxury amenities",
        features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
        highlight: true,
        ctaLink: "http://wa.link/u061wi",
        icon: <FaHotel className="text-amber-500" />
      },
      {
        title: "Premium Package",
        price: "₹4999/-",
        description: "Comprehensive spa experience with added treatments",
        features: ["Massage + Steam", "Aromatherapy", "Facial Session", "60 min Session"],
        highlight: false,
        ctaLink: "#",
        icon: <FaCrown className="text-amber-500" />
      }
    ];
    const outlets = [
  {
    title: 'Aerocity',
    description: 'Experience comfort at Novotel Aerocity, just minutes from the airport, perfect for business stays and spa relaxation nearby.',
    image: '/images/hotel1.jpeg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'New Friends Colony (NFC)',
    description: 'Experience luxury at The Suryaa New Delhi (NFC), a serene escape offering premium spa and wellness services in style.',
    image: '/images/hotel2.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Connaught Place',
    description: 'Experience luxury at The Park New Delhi, Connaught Place. Relax, rejuvenate, and unwind with premium spa treatments in style.',
    image: '/images/hotel3.webp',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Grand Vasant Kunj',
    description: 'Experience luxury at The Roseate Aerocity, and indulge in relaxing spa therapies with expert care and serene ambiance.',
    image: '/images/hotel4.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];

  return (
    
    <>
    {/* Banner */}
   <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/steptodown.com870307.jpg')"
      }}
    >
      {/* Gradient Overlay with soft blur */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1
          className={`text-1xl md:text-3xl font-bold text-white leading-tight ${playfair.variable} font-serif`}
        >
         Discover Affordable Luxury. Explore Our Spa Service Prices Today!
        </h1>
        <p
          className={`mt-6 text-lg md:text-1xl text-white/90 font-light ${montserrat.variable}`}
        >
          Choose from flexible packages crafted for every need. No hidden fees. Just luxury and comfort, always within reach.
        </p>

        <a
          href="tel:+919211235800"
          className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View Pricing Plans
        </a>
      </div>
    </section>
    <div className="w-full overflow-x-hidden bg-white relative">
      {/* End Banner */}

    <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white" >
      
      {/* Decorative Background (applies to full page) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-amber-300 mix-blend-multiply opacity-40"></div>
      </div>
      {/* Floating ✿ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✿
          </motion.div>
        ))}
      </div>

      {/* Amber Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-700/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-800/5 to-transparent"></div>
      </div>
{/* Section Title */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center text-amber-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Massages & Prices
        </motion.h2>
        <motion.div
          className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: 'center' }}
        ></motion.div>
        <motion.p
          className="mt-10 text-center text-xl md:text-2xl text-amber-800 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.
        </motion.p>
        {/* Price List Section */}
        <section className="relative z-10 mt-16 max-w-3xl mx-auto px-4">
          <motion.ul
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: "B2B Therapy", price: "₹1999", duration: "60 Minutes" },
              { title: "Ayurvedic Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Traditional Thai Massage", price: "₹1499", duration: "60 Minutes" },
              { title: "Sandwich Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Hotel Spa", price: "₹15999", duration: "60 Minutes" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-amber-200 pb-4"
              >
                <div>
                  <h4 className="text-xl font-semibold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-amber-700 font-light mt-1">{item.duration}</p>
                </div>
                <span className="text-amber-600 text-lg font-medium mt-2 md:mt-0">{item.price}</span>
              </li>
            ))}
          </motion.ul>
        </section>
        {/* End Price List Section */}

{/* Pricing Section */}
      <section className="py-1 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden w-full">
        <div className="relative z-10 w-full">
          <div className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <FaStar className="text-amber-500" /> Affordable Luxury
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Our <span className="text-amber-600">Pricing Packages</span>
            </motion.h2>
            <motion.p className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 w-full">
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
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className={`h-full flex flex-col border ${plan.highlight ? "border-amber-500 shadow-xl" : "border-amber-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                  <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-amber-600 to-amber-700" : "bg-amber-800"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{plan.icon}</div>
                      <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-amber-100"}`}>{plan.title}</h3>
                    </div>
                    <p className={`text-lg ${plan.highlight ? "text-amber-100" : "text-amber-200"}`}>{plan.description}</p>
                  </div>
                  <div className="p-8 pt-12 pb-10 -mt-6 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">{plan.price}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                          <span className="text-amber-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={plan.ctaLink} className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${plan.highlight ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:from-amber-600 hover:to-amber-700" : "bg-amber-100 text-amber-800 hover:bg-amber-200"}`}>
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
      {/* About Us Section */}
            <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
                   Delhi body spa — luxury, comfort, and calming visuals in one place.
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Step into a world of peace at our Delhi body spa, where luxury meets comfort. From calming interiors to soothing treatments, every detail is designed to relax your body and refresh your mind.
                  </p>
                  <p className="text-gray-700 text-lg">
                    From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                  </p>
                  <p className="text-gray-700 text-lg">
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
                    <img src="/images/SpecializedTreatments.jpg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/spa-treatments.jpg" alt="Massage Session" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </section>
            {/* outlate */}
            <section className="py-10 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Explore Our <span className="text-amber-600">Luxury Outlets</span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
                  </motion.p>
                </div>
            
                {/* Grid Layout - 2 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {outlets.map((outlet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                    >
                      <div className="relative">
                        <Image
                          src={outlet.image}
                          alt={outlet.title}
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10"></div>
                      </div>
            
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                          {outlet.title}
                        </h3>
                        <p className="text-gray-700 text-base mb-4">
                          {outlet.description}
                        </p>
                        <a
                          href={outlet.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all"
                        >
                          <FaWhatsapp className="text-lg" />
                          Book on WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            {/* End outlate */}


        {/* CTA Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30">
            View All Services
          </button>
          <p className="mt-6 text-amber-700 max-w-xl mx-auto">
            Experience the difference of our premium spa treatments. Book a consultation today and discover your path to wellness.
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-amber-400/50"></div>
      <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-amber-400/50"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-amber-400/50"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-amber-400/50"></div>
    </section>
     
    </div>
     {/* F&Q Section */}
                          <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
                            <div className="max-w-5xl mx-auto px-4">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-14"
                              >
                                <motion.div
                                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                >
                                  <FaStar className="text-amber-500" />
                                  Questions? We’re here to help
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                                  Frequently Asked <span className="text-amber-600">Questions</span>
                                </h2>
                                <p className="text-amber-800 max-w-2xl mx-auto text-lg">
                                  Everything you need to know about our luxurious spa services and how to book them.
                                </p>
                                <div className="flex justify-center mt-6">
                                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                </div>
                              </motion.div>
                    
                              {/* FAQ Accordion */}
                              <div className="space-y-5">
                                {faqs.map((faq, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
                                  >
                                    <button
                                      onClick={() => toggleFAQ(index)}
                                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                      <div className="flex items-start space-x-4">
                                        <div className="mt-1 p-2 bg-amber-50 rounded-lg">
                                          {faq.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">
                                          {faq.question}
                                        </h3>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        <svg
                                          className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </div>
                                    </button>
                    
                                    <AnimatePresence>
                                      {activeIndex === index && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                                            <p className="text-amber-700">
                                              {faq.answer}
                                            </p>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                ))}
                              </div>
                    
                              {/* CTA Box */}
                              {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mt-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
                              >
                                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                                <p className="mb-5 max-w-2xl mx-auto">
                                  Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                    Contact Us
                                  </button>
                                  <button className="px-6 py-3 bg-amber-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                                    Book Appointment
                                  </button>
                                </div>
                              </motion.div> */}
                            </div>
                          </section>
    <WhatsappFloat />
    </>
  );
}