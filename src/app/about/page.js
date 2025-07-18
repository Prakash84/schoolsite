
'use client';
import React from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';

// All FontAwesome icons from react-icons/fa
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpa,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaHotel,
  FaCrown
} from 'react-icons/fa';





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

const featuresData = [
  {
    title: "Helps to De-Stress",
    description:
      "Soothes your mind and body through calming massage techniques, relaxing aromas, and a peaceful ambiance, leaving you refreshed and tension-free.",
    image: "/images/HelpstoDe-Stress.webp",
  },
  {
    title: "Improves Blood Flow and Circulation",
    description:
      "Relaxes muscles, stimulates lymphatic drainage, and promotes oxygen-rich blood flow for vitality, healing, and deep relaxation.",
    image: "/images/improvebloodflow.webp",
  },
  {
    title: "Makes Skin More Radiant",
    description:
      "Detoxifies, hydrates, and nourishes your skin, leaving it softer, smoother, and naturally radiant.",
    image: "/images/SkinMoreRadiant.jpeg",
  },
];

const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",
  "Naturally Spa",
  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
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

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function About() {
  return (
    <>
      {/* Banner */}
        <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/aboutusbanner.jpg')", // ✅ Change image as needed
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide font-[PlayfairDisplay]">
          Discover Tranquility
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Welcome to our world of calm and luxury. Rejuvenate your body and soul.
        </p>

        {/* Optional Button */}
        {/* <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
          Know More
        </button> */}
      </motion.div>
    </section>
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
              Welcome to Delhi Body Spa
            </h2>
            <p className="text-gray-700 text-lg">
              At Luxury Body Spa, we are dedicated to creating a haven of peace, wellness, and rejuvenation in the heart of Delhi. With a blend of ancient healing traditions and modern techniques, our expert therapists restore balance and vitality.
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
              <img src="/images/luxurySpaRoom.jpg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/MassageSession.webp" alt="Massage Session" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="w-full py-16 bg-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-yellow-100/50 backdrop-blur-sm -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-amber-900 font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose DelhiBodySpa for Body Spa
          </motion.h2>
          <motion.p
            className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose expert therapists, serene ambiance, and premium wellness services. Customized treatments with top hygiene standards in the heart of Delhi.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuresData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-800 font-serif mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 18+ Exclusive Section */}
      <section
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/18+bodyspa.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#4B2E18]/60 to-black/80 backdrop-blur-sm z-0" />
        <div className="relative z-10 max-w-6xl mx-auto text-[#FFDFBD]">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-[#FFBF66] drop-shadow">
            24+ Exclusive Body Spa Outlets
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Indulge in luxury & wellness with our top-tier spa outlets across premium 5-star locations.
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            {specialFeatures.map((item, index) => (
              <li key={index} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm border border-[#FFD8A9]/30 shadow-lg bg-[#2D1B0F]/30 hover:bg-[#3D2615]/40 backdrop-blur-lg transition">
                <svg
                  className="w-4 h-4 text-[#FFD700]"
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
       
      
    </>
  );
}
