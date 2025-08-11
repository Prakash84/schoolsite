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
import {  FaMapMarkerAlt } from 'react-icons/fa';
import WhatsappFloat from './components/WhatsappFloat';
// import womanImage from '/images/spaExpert4.jpg';
import { FaTelegram } from 'react-icons/fa';


const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

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
    image: '/images/NovotelNewDelhiAerocity.jpeg',

    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'New Friends Colony (NFC)',
    description: 'Experience luxury at The Suryaa New Delhi (NFC), a serene escape offering premium spa and wellness services in style.',
    image: '/images/TheSuryaaNewDelhi(NFC).jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Connaught Place',
    description: 'Experience luxury at The Park New Delhi, Connaught Place. Relax, rejuvenate, and unwind with premium spa treatments in style.',
    image: '/images/TheParkConnaughtPlace.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Grand Vasant Kunj',
    description: 'Experience luxury at The Roseate Aerocity, and indulge in relaxing spa therapies with expert care and serene ambiance.',
    image: '/images/TheGrandNewDelhi.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];
{/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Select Hotel And Spa Outlet',
    description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Appointment',
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Visit',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */}

//   const ProcessSteps = [
//   {
//     number: '01',
//     title: 'Meeting',
//     description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
//     image: '/images/mmeeting.webp',
//   },
//   {
//     number: '02',
//     title: 'Treatment',
//     description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
//     image: '/images/spa-treatments.jpg',
//   },
//   {
//     number: '03',
//     title: 'Finalizing',
//     description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
//     image: '/images/finalizing.avif',
//   },
// ];
{/* End Our Process */}



export default function Home() {
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of massage therapies do you offer?",
      answer: "We offer Couple Massage, Sandwich Massage, B2B Therapy, Full Body Massage, and Female-to-Male treatments.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Where are your spa outlets located in Delhi and Noida?",
      answer: "Our outlets are located in Rajouri Garden, Rohini, Pitampura, Noida, Aerocity, Dwarka, Connaught Place, and Lajpat Nagar.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "What is your first-visit special offer?",
      answer: "Our first-visit special is ₹1999, offering a luxurious experience at an affordable price.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Do you have therapists from different countries?",
      answer: "Yes, we have skilled therapists from Russia, Thailand, Afghanistan, India, and other countries.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Can I book a Couple Massage session?",
      answer: "Yes, we offer Couple Massage sessions for a relaxing and intimate experience.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What is the cost of a Full Body Massage?",
      answer: "The cost varies based on the treatment, with a special ₹1999 offer for first-time visitors.",
      icon: <FaHandSparkles className="text-teal-600" />
    },   
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
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb1.jpg"
      
    },
    {
      title: "Luxury Rejuvenation Spa Experience at Delhi’s 5-Star Hotel Retreat",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb2.jpg"
    },
    {
      title: "Relaxing Spa Services in Aerocity, NFC & Connaught Place",
      link: "https://api.whatsapp.com/send?phone=918826482370",
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

  const testimonials1 = [
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
const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Product Manager, TechCorp",
      content: "This service completely transformed our workflow. The team's attention to detail and innovative approach solved problems we didn't even know we had!",
      date: "April 15, 2023",
      rating: 5,
      initials: "JD",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Sarah Anderson",
      role: "Marketing Director, GrowthLab",
      content: "The results have been outstanding. Our conversion rates increased by 45% in just two months. The platform is intuitive and the support team is incredibly responsive.",
      date: "May 3, 2023",
      rating: 5,
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "Michael Roberts",
      role: "CTO, InnovateX",
      content: "As a tech company, we're always skeptical about new tools. But this solution has exceeded our expectations. The API integration was seamless and performance is rock solid.",
      date: "June 8, 2023",
      rating: 4,
      initials: "MR",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];


  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Consultation", "shower"],
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
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
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
    link: "https://wa.me/8826482370"
  },
  {
    name: "Aerocity",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description: "Relax and unwind with our premium services at Aerocity.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Paschim Vihar",
    image: "/images/TheParkConnaughtPlace.jpg",
    description: "Experience rejuvenation at our elegant Paschim Vihar location.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Rohini",
    image: "/images/TheGrandNewDelhi.jpg",
    description: "Escape to serenity at our luxurious spa in Rohini.",
    link: "https://wa.me/8826482370"
  }
];
const features2 = [
  { 
    title: 'Hotel OutLet', 
    icon: '/images/Group-42-1.png',
    description: 'Premium organic ingredients for radiant, healthy skin'
  },
  { 
    title: '24+ Spa Outlets', 
    icon: '/images/Group-48-1.png',
    description: 'Holistic treatments to melt away stress and tension'
  },
  { 
    title: 'Thai Staff', 
    icon: '/images/Group-47-1.png',
    description: 'Signature therapies tailored to your unique needs'
  },
  { 
    title: '24*7 Service Available', 
    icon: '/images/Group-45-1.png',
    description: 'Tranquil oasis designed for complete serenity'
  },

];
 // Physical Benefits Data
  const physicalBenefits = [
    { 
      id: 1, 
      title: "Pain Relief", 
      description: "Reduce muscle tension and chronic pain with specialized therapies",
      icon: "💆"
    },
    { 
      id: 2, 
      title: "Improved Circulation", 
      description: "Enhance blood flow for better oxygenation and nutrient delivery",
      icon: "❤️"
    },
    { 
      id: 3, 
      title: "Skin Rejuvenation", 
      description: "Detoxify and revitalize your skin for a radiant glow",
      icon: "✨"
    },
    { 
      id: 4, 
      title: "Enhanced Flexibility", 
      description: "Increase joint mobility and range of motion",
      icon: "🧘"
    },
    { 
      id: 5, 
      title: "Boosted Immunity", 
      description: "Stimulate lymphatic system to strengthen your defenses",
      icon: "🛡️"
    }
  ];

  // Spiritual Benefits Data
  const spiritualBenefits = [
    { 
      id: 1, 
      title: "Stress Reduction", 
      description: "Achieve deep relaxation and release daily tensions",
      icon: "🧘‍♀️"
    },
    { 
      id: 2, 
      title: "Emotional Balance", 
      description: "Restore harmony to your emotional wellbeing",
      icon: "⚖️"
    },
    { 
      id: 3, 
      title: "Mental Clarity", 
      description: "Clear your mind and enhance focus and awareness",
      icon: "💡"
    },
    { 
      id: 4, 
      title: "Inner Peace", 
      description: "Connect with your inner self for profound tranquility",
      icon: "🕊️"
    },
    { 
      id: 5, 
      title: "Energy Alignment", 
      description: "Balance your chakras and restore vital energy flow",
      icon: "🌀"
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
                    <a 
                        href="https://t.me/Tanuspa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Join Telegram Channel
                      </a>

                     {/* <a href={slide.link} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-lg hover:shadow-xl">
                      Book a Spa Session Now
                    </a>  */}
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
      {/* <section className="relative w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] overflow-hidden">
      <Swiper
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image 
                src={slide.image}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
                priority={i === 0} 
                loading={i === 0 ? "eager" : "lazy"}
              />

             
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

           
              <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-24 z-10">
                <motion.h2
                  className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl md:max-w-3xl leading-snug mb-4 font-serif"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h2>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href={slide.link}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-md"
                  >
                    Book a Spa Session Now
                  </a>
                  <a
                    href="#services"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base border border-white transition duration-300"
                  >
                    Explore Our Spa Services
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section> */}
      {/* ENd Hero Slider */}
      
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

              {/* <motion.a
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
              </motion.a> */}
              <a 
                        href="https://t.me/Tanuspa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Stay Updated on Telegram
                      </a>
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
                    <Image
                     loading="lazy"
                      src="/images/chatgptspa.png"
                      alt="Spa Interior"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[2.5rem] z-0"
                    />
                    {/* <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-0"
                      >
                        <source src="/images/spavideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video> */}

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

{/* hakjd */}
{/* <section className="bg-[#FFF9F0] py-16 px-4 sm:px-8 lg:px-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
      Experience Ultimate Relaxation 🌿
    </h2>
    <p className="text-gray-600 text-lg mb-6">
      Rejuvenate your body and mind at <span className="font-semibold text-amber-600">SPA DELHI</span>. 
      Discover premium treatments that combine ancient healing traditions with modern luxury.
    </p>

    <ul className="text-left text-gray-700 space-y-3 mb-8">
      <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">💆‍♀️</span> Full Body Massages & Therapies</li>
      <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🌸</span> Organic Oils & Herbal Products</li>
      <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🕯️</span> Peaceful Ambience & Aromatherapy</li>
      <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🏨</span> Available in 5-Star Locations</li>
    </ul>
     <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed">
      <p>
       
        At SPA DELHI, we believe that true wellness begins with deep relaxation and inner harmony. 
        Our body spa is designed to take you on a journey of tranquility, where every therapy is crafted to calm your senses and heal your body. Whether you're dealing with daily stress, body fatigue, or just need a peaceful break, our expert therapists are here to take care of you with natural oils, skilled hands, and warm hospitality.

        Located in the heart of Delhi and spread across our premium outlets in Noida, Gurgaon, and Ghaziabad, SPA DELHI brings a mix of traditional wellness and modern techniques. Our services include full-body massage, deep tissue therapy, hot stone massage, foot reflexology, aromatherapy, and more — all provided in a calm, hygienic, and private setting.

        Our approach is rooted in Ayurvedic philosophy combined with Western spa trends to deliver holistic wellness experiences. We use 100% organic oils, aromatic herbs, and soothing music to create the perfect environment for letting go of tension and recharging your soul.

        From the moment you walk in, you are welcomed into a luxurious ambiance where attention to detail is our signature. Our staff is professionally trained and handpicked for their dedication to guest comfort and excellence in therapy. We ensure personalized care that caters to your unique body type, muscle sensitivity, and personal preferences.

        Whether you are booking a couple’s massage, a relaxing body scrub, or a rejuvenating facial – each service at SPA DELHI is meant to leave you glowing, refreshed, and balanced. We maintain international hygiene standards, use soft towels, disposable kits, and sanitized rooms to ensure safety and cleanliness for every guest.

        Our signature spa packages are popular among corporate professionals, travelers, and local residents who seek premium wellness without the premium price tag. Choose from our daily, weekly, or monthly packages for a consistent wellness routine that supports your health and happiness.

        We also offer special spa therapies designed for women, senior citizens, and athletes — addressing issues like back pain, joint stiffness, poor sleep, and stress-related fatigue. Each session is customized to suit your condition and preference.

        SPA DELHI is more than just a spa — it's your wellness sanctuary. Whether you want to unwind after a busy day, treat a loved one, or take care of your long-term wellness, our doors are always open. Come alone or with friends, enjoy calming herbal tea before your session, and walk out with a lighter body and a peaceful mind.

        We invite you to be a part of the SPA DELHI family and make wellness a lifestyle, not just a luxury. Book your appointment today and give yourself the gift of self-care, because you deserve it.
        
      </p>
    </div>

    <button className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-700 transition">
      Book Your Spa Session
    </button>
  </div>
</section> */}
{/* democontant part */}
{/* <section className="bg-[#FFF9F0] py-16 px-4 sm:px-8 lg:px-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    
    <div className="space-y-6">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/haboutus.jpg"
          alt="Relaxing Spa Massage"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg hidden sm:block">
        <img
          src="/images/hb1.jpg"
          alt="Spa Ambience"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg hidden sm:block">
        <img
          src="/images/steptodown.com870307.jpg"
          alt="Spa Ambience"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
        Experience Ultimate Relaxation🌿
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center md:text-left">
        Rejuvenate your body and mind at <span className="font-semibold text-amber-600">SPA DELHI</span>. 
        Discover premium treatments that combine ancient healing traditions with modern luxury.
      </p>

      <ul className="text-gray-700 space-y-3 mb-8">
        <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">💆‍♀️</span> Full Body Massages & Therapies</li>
        <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🌸</span> Organic Oils & Herbal Products</li>
        <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🕯️</span> Peaceful Ambience & Aromatherapy</li>
        <li className="flex items-start gap-2"><span className="text-amber-500 text-xl">🏨</span> Available in 5-Star Locations</li>
      </ul>

      <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed mb-8">
        <p>
         
         At SPA DELHI, we believe that true wellness begins with deep relaxation and inner harmony. 
        Our body spa is designed to take you on a journey of tranquility, where every therapy is crafted to calm your senses and heal your body. Whether you're dealing with daily stress, body fatigue, or just need a peaceful break, our expert therapists are here to take care of you with natural oils, skilled hands, and warm hospitality.

        Located in the heart of Delhi and spread across our premium outlets in Noida, Gurgaon, and Ghaziabad, SPA DELHI brings a mix of traditional wellness and modern techniques. Our services include full-body massage, deep tissue therapy, hot stone massage, foot reflexology, aromatherapy, and more — all provided in a calm, hygienic, and private setting.

        Our approach is rooted in Ayurvedic philosophy combined with Western spa trends to deliver holistic wellness experiences. We use 100% organic oils, aromatic herbs, and soothing music to create the perfect environment for letting go of tension and recharging your soul.

        From the moment you walk in, you are welcomed into a luxurious ambiance where attention to detail is our signature. Our staff is professionally trained and handpicked for their dedication to guest comfort and excellence in therapy. We ensure personalized care that caters to your unique body type, muscle sensitivity, and personal preferences.

        Whether you are booking a couple’s massage, a relaxing body scrub, or a rejuvenating facial – each service at SPA DELHI is meant to leave you glowing, refreshed, and balanced. We maintain international hygiene standards, use soft towels, disposable kits, and sanitized rooms to ensure safety and cleanliness for every guest.

        Our signature spa packages are popular among corporate professionals, travelers, and local residents who seek premium wellness without the premium price tag. Choose from our daily, weekly, or monthly packages for a consistent wellness routine that supports your health and happiness.
        </p>
      </div>

      <div className="text-center md:text-left">
        <a
          href="https://api.whatsapp.com/send?phone=918826482370"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-700 transition shadow-lg"
        >
          Book Your Spa Session
        </a>
      </div>
    </div>
  </div>
</section> */}
{/* end democontant part */}
{/* end khsd */}

{/* icon section */}
<section className="relative bg-gradient-to-br from-[#fcf7f4] to-[#f8f0eb] py-24 px-6 lg:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5e4d7] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e8d1c5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text and Features */}
          <div className="relative z-10">
            <div className="mb-10">
              <motion.span 
                className="text-lg font-medium text-amber-800 tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                EXPERIENCE THE DIFFERENCE
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-[#3a2e2a] mt-2 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Why Choose <span className="text-amber-700">Luxury Spa</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-[#5c4a42] max-w-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Immerse yourself in an oasis of tranquility and rejuvenation. Our expert therapists and premium organic products create an unparalleled wellness experience.
                Our expert therapists combine traditional healing methods with modern wellness practices to create custom treatments that will leave you feeling refreshed, balanced, and revitalized. Our body spa is designed to take you on a journey of tranquility, where every therapy is crafted to calm your senses and heal your body.
                Our approach is rooted in Ayurvedic philosophy combined with Western spa trends to deliver holistic wellness experiences. We use 100% organic oils, aromatic herbs, and soothing music to create the perfect environment for letting go of tension and recharging your soul. 
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features2.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-5 border border-[#e8d5c9] shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-xl">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={36} 
                        height={36} 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#3a2e2a] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#7d6b62]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                 <a
          href="https://api.whatsapp.com/send?phone=918826482370"
          
        >
          Book Your Spa Session
        </a>
               
              </motion.button>
              <motion.button 
                className="border-2 border-amber-700 text-amber-700 px-8 py-3.5 rounded-full font-medium hover:bg-amber-50 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="/Services" className="flex items-center gap-2">
                   View Treatments
                </a>
                
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/spaExpert4.jpg"
                alt="Luxury Spa Treatment"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute inset-0 border-8 border-white border-opacity-30 rounded-[2.5rem] pointer-events-none"></div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 px-8 rounded-full shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.8,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">500+ 5-Star Reviews</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
{/* ENd icon section */}
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
    
       {/* outlate */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] to-[#FFFAF5]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-100/20 to-transparent rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full filter blur-[100px]"></div>
        
        {/* Floating leaves */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300/30"
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 24}px`,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Luxury Outlets</span>
          </motion.h2>
          
          <motion.p
            className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
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

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-amber-100">
                {/* Image section */}
                <div className="relative h-80 overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-transparent z-10"></div>
                   <Image
                        src={outlet.image} // example: "/images/lajpat-nagar.jpg"
                        alt={outlet.title}
                        fill
                        className="object-cover"
                        priority
                      />
                  
                  {/* Rating badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1.5 rounded-full shadow-lg">
                      <FaStar className="text-amber-200" />
                      <span className="font-bold">{outlet.rating}</span>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="flex items-center text-white">
                      <FaMapMarkerAlt className="mr-2 text-amber-300" />
                      <span className="font-medium">{outlet.location}</span>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl z-10"></div>
                </div>

                {/* Content section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 font-serif group-hover:text-amber-700 transition-colors">
                      {outlet.title}
                    </h3>
                    <p className="text-amber-800/80 mb-8 leading-relaxed">
                      {outlet.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    {/* <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-xl transition-all group-hover:shadow-lg group-hover:scale-[1.02]"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="font-medium tracking-wide">Book on WhatsApp</span>
                    </a> */}
                    <a 
                        href="https://t.me/Tanuspa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                       Book On Telegram 
                      </a>
                    
                    <div className="text-center sm:text-right">
                      <div className="text-amber-700 text-sm font-medium">Starting from</div>
                      <div className="text-amber-900 font-bold text-2xl">₹14,999</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/10 rounded-full z-0 group-hover:bg-amber-500/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>       
        {/* View all button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="relative inline-flex items-center gap-3 group">
            <a href="/outlet"><span className="text-amber-800 font-medium text-lg tracking-wider group-hover:text-amber-900 transition-colors">
              VIEW ALL OUTLETS
            </span></a>
            <div className="relative h-0.5 bg-amber-800/30 overflow-hidden w-24">
              <div className="absolute inset-0 w-0 bg-amber-800 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-amber-700 group-hover:text-amber-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </button>
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
                loading="lazy"
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
                {/* <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all"
                >
                  <FaWhatsapp className="text-lg" />
                  Book on WhatsApp
                </a> */}
                <a 
                        href="https://t.me/Tanuspa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Book On Telegram
                      </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
       {/*End Locations Section */}
    
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
          {/* content section */}
          <section className="relative bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100/30 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-amber-100/30 blur-xl"></div>
      
      {/* Leaf patterns */}
      <div className="absolute top-24 left-12 opacity-20 rotate-12">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
          <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 -rotate-12">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
          <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image Gallery */}
          <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300 group">
              <div className="relative h-96">
                <Image 
                  src="/images/haboutus.jpg" 
                  alt="Relaxing Spa Massage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 text-white font-medium text-lg">Signature Massage</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="relative h-56">
                  <Image 
                    src="/images/hb1.jpg" 
                    alt="Spa Ambience"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="relative h-56">
                  <Image 
                    src="/images/steptodown.com870307.jpg" 
                    alt="Spa Ambience"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                  🌿
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ml-4 font-serif">
                  Experience Ultimate Relaxation
                </h2>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Rejuvenate your body and mind at <span className="font-semibold text-amber-600">SPA DELHI</span>. 
                Discover premium treatments that combine ancient healing traditions with modern luxury.
              </p>

              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">💆‍♀️</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Full Body Massages</h3>
                      <p className="text-gray-600 text-sm">Traditional & modern therapies</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🕯️</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Aromatherapy</h3>
                      <p className="text-gray-600 text-sm">Sensory relaxation experience</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🏨</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Luxury Locations</h3>
                      <p className="text-gray-600 text-sm">5-star facilities across Delhi</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🌱</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Organic Products</h3>
                      <p className="text-gray-600 text-sm">Natural ingredients for your skin</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-amber max-w-none mb-8">
                  <p className="text-gray-700 mb-4">
                    At SPA DELHI, we believe that true wellness begins with deep relaxation and inner harmony. 
                    Our body spa is designed to take you on a journey of tranquility, where every therapy is crafted 
                    to calm your senses and heal your body.
                     Located in the heart of Delhi and spread across our premium outlets in Noida, Gurgaon, and Ghaziabad, 
                    SPA DELHI brings a mix of traditional wellness and modern techniques. Our services include full-body 
                    massage, deep tissue therapy, hot stone massage, foot reflexology, aromatherapy, and more — all 
                    provided in a calm, hygienic, and private setting.
                  </p>
                  
                  <p className="text-gray-700">
                    Our approach is rooted in Ayurvedic philosophy combined with Western spa trends to deliver holistic 
                    wellness experiences. We use 100% organic oils, aromatic herbs, and soothing music to create the 
                    perfect environment for letting go of tension and recharging your soul.
                    At SPA DELHI, we believe that true wellness begins with deep relaxation and inner harmony. 
                    Our body spa is designed to take you on a journey of tranquility, where every therapy is crafted 
                    to calm your senses and heal your body.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=918826482370"
                  className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Via WhatsApp
                </a>
                
                <a
                  href="/pricing"
                  className="flex-1 inline-flex items-center justify-center bg-white border-2 border-amber-500 text-amber-600 px-6 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all duration-300 shadow hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8v2h2v2h2v-2h2v-2h-2V8h-2v2zm7 5h-7v-2h7v2z"/>
                  </svg>
                  
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating testimonials */}
      {/* <div className="mt-16 flex flex-wrap justify-center gap-6">
        {[
          { text: '"The best massage experience in Delhi!"', name: "Priya S." },
          { text: '"Truly rejuvenating - will be back!"', name: "Raj K." },
          { text: '"Professional therapists, amazing ambiance"', name: "Ananya M." }
        ].map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs border border-amber-100 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-1">"{testimonial.text}"</p>
            <p className="text-gray-600 text-sm">- {testimonial.name}</p>
          </div>
        ))}
      </div> */}
          </section>
          {/* end content section */}
{/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experts Therapy
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-amber-600"> Therapy Experts</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
          </motion.p>
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
                  loading="lazy"
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
       {/* Benefits section */}
       <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Holistic Wellbeing
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transformative <span className="text-amber-600">Body & Soul</span> Benefits
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Experience profound improvements in both physical vitality and spiritual harmony through our specialized treatments.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Physical Benefits */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-4 rounded-xl mr-4">
                <div className="text-3xl text-amber-600">🏃‍♂️</div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900">Physical Benefits</h3>
            </div>
            
            <div className="space-y-6">
              {physicalBenefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: benefit.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Spiritual Benefits */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-4 rounded-xl mr-4">
                <div className="text-3xl text-amber-600">🧘</div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900">Spiritual Benefits</h3>
            </div>
            
            <div className="space-y-6">
              {spiritualBenefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: benefit.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Discover Our Treatments
          </button>
        </motion.div>
      </div>
    </div>
       {/* end Benefits section */}

      {/* Testimonials */}
      {/* <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-amber-800 to-amber-600 relative overflow-hidden">
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
            {testimonials1.map((testimonial, index) => (
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
      </section>      */}
      {/* end */}


      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
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
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-amber-600">Clients Say</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             Discover why thousands of customers trust our services and products every day.
          </motion.p>
        </div>
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust our services and products every day
          </p>
        </div> */}
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-4 right-4 text-indigo-100 text-6xl z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.content}
                </p>
                
                {/* Date */}
                <p className="text-xs text-gray-400">Posted on {testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 transition-all duration-300 rounded-full group hover:bg-indigo-500 hover:text-white">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-full bg-indigo-500 rounded-full group-hover:translate-x-0"></span>
            <span className="relative flex items-center text-lg font-medium">
              View More Testimonials
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>
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
      {/* <section className="py-24 px-6 md:px-16 relative">
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
              href="https://api.whatsapp.com/send?phone=918826482370
"
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
      </section> */}
      <WhatsappFloat />
      
    </div>
  );
}
