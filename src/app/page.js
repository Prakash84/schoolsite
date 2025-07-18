"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FaSpa, FaHotTub, FaBath, FaLeaf, FaHandSparkles, FaHotel, FaCrown, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
];

const outlets = [
  {
    title: 'Aerocity',
    description: 'Experience comfort at Novotel Aerocity, just minutes from the airport, perfect for business stays and spa relaxation nearby.',
    image: '/images/hotel1.jpeg',
    link: 'https://api.whatsapp.com/send?phone=918860788415',
  },
  {
    title: 'New Friends Colony (NFC)',
    description: 'Experience luxury at The Suryaa New Delhi (NFC), a serene escape offering premium spa and wellness services in style.',
    image: '/images/hotel2.jpg',
    link: 'https://api.whatsapp.com/send?phone=918860788415',
  },
  {
    title: 'Connaught Place',
    description: 'Experience luxury at The Park New Delhi, Connaught Place. Relax, rejuvenate, and unwind with premium spa treatments in style.',
    image: '/images/NovotelNewDelhiAerocity.jpeg',
    link: 'https://api.whatsapp.com/send?phone=918860788415',
  },
  {
    title: 'Grand Vasant Kunj',
    description: 'Experience luxury at The Roseate Aerocity, and indulge in relaxing spa therapies with expert care and serene ambiance.',
    image: '/images/IBISNewDelhiAerocity.jpg',
    link: 'https://api.whatsapp.com/send?phone=918860788415',
  },
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

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Female to Male Spa Treatment?",
      answer: "A **female to male spa treatment** is a personalized massage and wellness experience provided by skilled therapists, specifically designed for individuals seeking comfort, relaxation, and therapeutic benefits. It includes techniques tailored to your preferences, helping you unwind and feel rejuvenated.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Are your spa services available in **Aerocity** and **Greater Kailash**?",
      answer: "Yes, our **luxury spa services** are available at prime locations in **Aerocity** and **Greater Kailash**, offering a variety of services such as **full body massage**, **couple massage**, and **deep tissue massage**. We provide top-quality relaxation in a serene, peaceful environment, ideal for unwinding.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "How can I book a spa session?",
      answer: "Booking is easy! Simply click the 'Book Now' button on our website or contact us via WhatsApp for immediate reservations at your preferred outlet. You can choose from a range of treatments to suit your relaxation needs.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Do you offer home spa services?",
      answer: "Yes, we offer **home spa services** in select locations, bringing the relaxation and wellness of our **body spa** directly to your doorstep. Whether you're looking for a **full body massage** or a **deep tissue massage**, we ensure the same luxurious experience at home.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "What are your hygiene and safety standards?",
      answer: "We maintain the highest standards of hygiene and safety. All equipment is sterilized after each use, therapists wear masks and gloves, and treatment rooms are thoroughly sanitized between clients. We follow all health authority guidelines to ensure your wellbeing.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Do you offer gift certificates?",
      answer: "Absolutely! Our spa gift certificates are the perfect present for any occasion. They can be purchased for any amount and redeemed for any of our services. Treat your loved ones to the gift of relaxation and rejuvenation.",
      icon: <FaHandSparkles className="text-teal-600" />
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      title: "Book a Relaxing Spa Session at Lajpat Nagar. Rejuvenate Today!",
      link: "https://api.whatsapp.com/send?phone=918860788415",
      image: "/images/hb1.jpg"
    },
    {
      title: "Luxury Rejuvenation Spa Experience at Delhi’s 5-Star Hotel Retreat",
      link: "https://api.whatsapp.com/send?phone=918860788415",
      image: "/images/hb2.jpg"
    },
    {
      title: "Relaxing Spa Services in Aerocity, NFC & Connaught Place",
      link: "https://api.whatsapp.com/send?phone=918860788415",
      image: "/images/hb3.jpg"
    },
  ];

  const services = [
    {
      title: "Aromatherapy",
      description: "Essential oils for emotional and physical well-being",
      icon: "🌸",
    },
    {
      title: "Deep Tissue",
      description: "Targets chronic muscle tension with slow, deep pressure",
      icon: "💆‍♂️",
    },
    {
      title: "Hot Stone Therapy",
      description: "Warm stones to melt away tension and improve circulation",
      icon: "🪨",
    },
    {
      title: "Couples Massage",
      description: "Shared relaxation experience for two in a private suite",
      icon: "👫",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      comment: "The best spa experience in Delhi! The therapists are highly skilled and the ambiance is so relaxing.",
    },
    {
      name: "Rajiv Mehta",
      role: "Corporate Client",
      comment: "I've been coming here monthly for over a year. The deep tissue massage works wonders for my back pain.",
    },
    {
      name: "Ananya Singh",
      role: "First-time Visitor",
      comment: "Perfect escape from the city chaos. The aromatherapy session transported me to another world!",
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

  const features = [
    "Private Room",
    "Jacuzzi Bath",
    "Steam Bath",
    "Naturally Spa",
    "5 Star Hotels",
    "Female Therapist",
    "Foreigner Therapist",
  ];
  const locations = [
  {
    name: "Lajpat Nagar",
    image: "/images/TheSuryaaNewDelhi(NFC).jpg", // Replace with actual image URL
    description: "Discover the tranquility of our luxurious spa at Lajpat Nagar.",
    link: "https://wa.me/1234567890"
  },
  {
    name: "Aerocity",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description: "Relax and unwind with our premium services at Aerocity.",
    link: "https://wa.me/1234567890"
  },
  {
    name: "Paschim Vihar",
    image: "/images/TheParkConnaughtPlace.jpg",
    description: "Experience rejuvenation at our elegant Paschim Vihar location.",
    link: "https://wa.me/1234567890"
  },
  {
    name: "Rohini",
    image: "/images/TheGrandNewDelhi.jpg",
    description: "Escape to serenity at our luxurious spa in Rohini.",
    link: "https://wa.me/1234567890"
  }
];

  return (
     <div className="font-sans overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-amber-300/15 blur-3xl" />
      </div>

      {/* Hero Slider */}
      <section className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh]">
        <Swiper
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-24 z-10">
                  <motion.h2
                    className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl md:max-w-3xl leading-snug mb-4 font-serif"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a href={slide.link} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-lg hover:shadow-xl">
                      Book a Spa Session Now
                    </a>
                    <a href="#services" className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 border border-white">
                      Explore Our Spa Services
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    
      {/* About Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-amber-100/40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          

          {/* Right Text Section with Enhanced Styling */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="mr-2">✦</span> About Our Luxury Spa
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Experience the <span className="relative">
                <span className="text-amber-600 z-10 relative">Art of Relaxation</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to <strong className="text-amber-600 font-medium">Delhi Body Spa</strong>, where we offer a range of <strong className="text-amber-600 font-medium">luxury spa</strong> treatments including <strong className="text-amber-600 font-medium">female to male spa</strong>, <strong className="text-amber-600 font-medium">couple massages</strong>, and much more. Escape the hustle of Delhi and immerse yourself in rejuvenating treatments tailored to your needs.
                Our expert therapists combine traditional healing methods with modern wellness practices to create custom treatments that will leave you feeling refreshed, balanced, and revitalized.
              </p>
              {/* <p className="text-gray-600 text-lg leading-relaxed">
                Our expert therapists combine traditional healing methods with modern wellness practices to create custom treatments that will leave you feeling refreshed, balanced, and revitalized.
              </p> */}
            </motion.div>

            {/* Feature Grid with Hover Effects */}
          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[ 
                { title: "Foreigner Therapist", icon: "🌏" },
                { title: "Female To Male Massage", icon: "💆‍♂️" },
                { title: "Best Body To Body Spa", icon: "✨" },
                { title: "Couple Massage", icon: "👩‍❤️‍👨" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-50 hover:border-amber-100 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">Luxurious and personalized treatments</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>

            {/* Action Buttons with Animation */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/about"
                className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 transition-all"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-all"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#"
                className="px-8 py-4 rounded-full font-medium border-2 border-amber-500 text-amber-600 hover:bg-amber-50 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#Pricing" className="relative z-10 flex items-center gap-2 cursor-pointer">
                  View Pricing
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 000-1.676.62C6.602" />
                  </svg>
                </a>
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Left Image with Modern Frame & Parallax Effect */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
                  {/* Glass frame effect */}
                  {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] z-20 pointer-events-none"></div> */}
                  
                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-amber-800/10 to-black/25 z-10"></div> */}
                    {/* <div className="bg-gradient-to-tr from-amber-200 to-rose-100 w-full h-full animate-pulse"></div> */}
                    {/* <Image
                      src="/images/b2b_therapy.jpg"
                      alt="Spa Interior"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[2.5rem] z-0"
                    /> */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-0"
                      >
                        <source src="/images/spavideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                  </div>
                  
                  {/* Floating decorative elements */}
                  {/* <motion.div
                    className="absolute top-6 left-6 w-24 h-24 rounded-full bg-amber-500/10 blur-xl z-0"
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  /> */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-rose-300/20 blur-xl z-0"
                    animate={{ 
                      y: [0, 15, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: 0.5 
                    }}
                  />
                </div>
                
                {/* Floating testimonials */}
                {/* <motion.div 
                  className="absolute -bottom-6 right-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 w-64 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">"The most rejuvenating experience in Delhi. Truly exceptional therapists!"</p>
                  <div className="mt-2 flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                    <span className="text-xs font-medium text-amber-700">Priya Sharma</span>
                  </div>
                </motion.div> */}
              </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-white relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <motion.p
        className="text-amber-500 uppercase font-semibold tracking-wider mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Premium Services
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Luxurious <span className="text-amber-500">Spa Experiences</span>
      </motion.h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-50 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -15 }}
        >
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="text-5xl mb-6 text-amber-500">{service.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <a
            href="#"
            className="text-amber-600 font-medium flex items-center gap-2 group-hover:underline"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
       </section>
       {/* End Services Section */}
       {/* Our Process */}
        <section className="w-full py-10 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Heading */}
           <motion.h2
             className="text-4xl md:text-5xl font-serif font-bold text-center text-amber-900 mb-12"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             Our Process
           </motion.h2>
       
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
                 <div className="relative w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden shadow-md">
                   <Image
                     src={step.image}
                     alt={step.title}
                     layout="fill"
                     objectFit="cover"
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
    {/* Locations Section */}
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-amber-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-amber-600">Prime Locations</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Visit us at any of our luxurious outlets, conveniently located across Delhi for your ultimate spa experience.
          </motion.p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Location Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={location.image}
                  alt={location.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-all duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div> */}
              </div>

              {/* Location Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">{location.name}</h3>
                <p className="text-gray-700 text-base mb-4">{location.description}</p>
                <a
                  href={location.link}
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
       {/*End Locations Section */}
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
   


{/* 18+ Section */}
<section
  className="relative py-24 px-6 sm:px-10 lg:px-24 text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/18+bodyspa.avif')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#4B2E18]/60 to-black/80 backdrop-blur-sm z-0" />
  <div className="relative z-10 max-w-6xl mx-auto text-[#FFDFBD]">
    <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-[#FFBF66] drop-shadow">
      24+ Exclusive Body Spa Outlets
    </h2>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#FFDFBD] mb-10 leading-relaxed">
      Indulge in luxury & wellness with our top-tier spa outlets across premium 5-star locations.
    </p>
    <ul className="flex flex-wrap justify-center gap-4">
      {features.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-2 px-5 py-3 rounded-full text-sm text-[#FFD8A9] border border-[#FFD8A9]/30 shadow-lg bg-[#2D1B0F]/30 hover:bg-[#3D2615]/40 backdrop-blur-lg transition"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-[#FFD700]"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
{/* end 18+ section */}
{/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-700 font-serif">
              Our Therapy Experts
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaFacebookF /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* End Our Therapy Experts */}

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-amber-800 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-dots pattern-amber-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.p
              className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Experiences
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Stories of <span className="text-amber-300">Rejuvenation</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-amber-300 mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-amber-50 italic text-lg mb-8">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-amber-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
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
    {/* End F&Q Section */}
{/* CTA Section */}
      <section className="py-24 px-6 md:px-16 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-700 to-amber-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-amber-800/30 backdrop-blur-sm"></div>
          <div className="relative z-10 py-16 px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Experience Ultimate Relaxation?
            </motion.h2>
            <motion.p 
              className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Book your appointment today and receive a complimentary aromatherapy session
            </motion.p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=918860788415"
              className="inline-block bg-white text-amber-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session Now
            </motion.a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
