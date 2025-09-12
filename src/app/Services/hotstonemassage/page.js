'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Playfair_Display, Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";
  // import WhatsappFloat from '../components/WhatsappFloat';
  import WhatsappFloat from '../../components/WhatsappFloat';
  import { Briefcase, Sparkles, BadgeCheck, MapPin, Building2, IndianRupee, Gift, BusFront, GraduationCap, ShieldCheck } from "lucide-react";
  import { 
  FaSpa, 
  FaHandsHelping, 
  FaUserTie, 
  FaMapMarkerAlt, 
  FaStar,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUsers,
  FaCertificate,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import {  FaHotTub, FaBath, FaLeaf, FaHandSparkles, FaCrown, FaCheckCircle } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { FaHeart, FaHotel, FaFemale } from 'react-icons/fa';
import Head from "next/head";

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

{/* End Our Process */}

  export default function hotstonemassage() {

      <Head>
        <title>Looking for Spa Therapist jobs in Delhi? Part Time & Full Time</title>
        <meta
          name="description"
          content="Get the best Spa Therapist jobs in Delhi. We have part time and full time spa jobs available. Just contact us and get your spa therapist jobs in Delhi, Noida and Gurgaon. Contact Now."
        />
      </Head>
        const [activeIndex, setActiveIndex] = useState(null);
      
        const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        const faqs = [
          {
            question: "Which kinds of massage does Spa Delhi perform?",
            answer: "There is a wide range of massage services to address your wellness needs, and they include aromatherapy, deep tissue, B2B, and couple massages, to name a few. Both therapeutic techniques are designed to relax and heal.",
            icon: <FaSpa className="text-teal-600" />
          },
          {
            question: "Do your therapists have experience, or are they certified?",
            answer: "Yes, all our therapists are professional, fully trained individuals who are certified in their process and want to provide you with the best experience of massage experience.",
            icon: <FaLeaf className="text-teal-600" />
          },
          {
            question: "How do I make a reservation for a massage?",
            answer: "Booking is simple by phone, via Telegram, or online. Pick your service, favorable outlet, and time, and we will confirm.",
            icon: <FaHotTub className="text-teal-600" />
          },
          {
            question: "Do you offer 24/ 7 massage?",
            answer: "Our timings are adaptable; we are available on a late-night and early-morning schedule to accommodate your tight schedule.",
            icon: <FaLeaf className="text-teal-600" />
          },
          {
            question: "What safety and hygiene precautions do you take?",
            answer: "Your safety means everything to us, as we are radically committed to maintaining high standards of cleanliness through the provision of fresh linens, sterilized equipment, and thorough therapist screening.",
            icon: <FaSpa className="text-teal-600" />
          },
          {
            question: "May I ask a male or female therapist to see me?",
            answer: "Absolutely. You may make a therapist preference during the booking and we will take heed of your choice.",
            icon: <FaHandSparkles className="text-teal-600" />
          },   
        ];
    const hotels = [
"Lemon Tree",
"Novotel",
"Roseate House",
"Radisson",
"ITC",
"Taj",
];


const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

    return (
      <main>
      <div className="w-full">
        {/* Banner */}
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
  {/* Floating decorative elements */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
  <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
  <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

  {/* Main content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24  gap-8 items-center">
    
    {/* Text content */}
    <div className="space-y-6 text-center lg:text-left">
      <div className="inline-flex items-center space-x-2 mb-6">
        <div className="w-12 h-px bg-amber-600"></div>
        <span className="text-amber-600 font-light tracking-widest">JOIN OUR TEAM</span>
        <div className="w-12 h-px bg-amber-600"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-light text-gray-800">
        <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">We Are Hiring</span>
        Professional Spa Therapists, 
        <span className="block mt-2 font-medium">Join Our Luxury Spa Network Across <span className="text-rose-600">Delhi NCR</span></span>
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
       Are you passionate about wellness, relaxation, and the art of massage therapy? Do you have a natural ability to provide exceptional spa experiences in a luxury setting? If you are a skilled and dedicated professional, we have an exciting opportunity for you to join our prestigious spa team!
      </p>
      <p>We are currently hiring Therapist Staff for our luxury spa outlets located in 5-star hotels across the Delhi NCR region. This includes renowned establishments such as Lemon Tree, Novotel, Roseate House, and Radisson. Whether you are looking for a full-time or part-time position, we have a variety of roles available to suit your lifestyle and career aspirations.</p>
<p>At our luxury spa, we are committed to providing the highest standard of services to our clients, ensuring that each visit is a transformative experience. If you are looking for a spa job in Delhi or a therapist job that allows you to grow professionally in a luxury environment, this could be the perfect opportunity for you!</p>

      <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Spa Therapist (Female)</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Massage Therapist (Male and Female)</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Body Spa Therapist</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Friendly & Safe Work Environment</span>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
          <span>Explore Locations</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button className="px-6 py-3 bg-white text-amber-800 rounded-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Apply Now</span>
        </button>
      </div>
    </div>

    {/* Image section */}
    {/* <div className="relative h-80 md:h-96 lg:h-[450px]">
      <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
        <img
          src="/images/Hot Stone Massage.jpg"
          alt="Hot Stone Massage Spa"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="absolute -bottom-6 -right-6">
        <svg className="w-24 h-24 text-amber-600/30" viewBox="0 0 100 100">
          <path
            fill="currentColor"
            d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
          />
        </svg>
      </div>

    
      <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
        <div className="text-center">
          <div className="text-2xl font-serif text-amber-800">12+</div>
          <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
        </div>
      </div>
    </div> */}
  </div>

  {/* Minimal wave divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
      <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
    </svg>
  </div>
</div>
      {/* End Banner */}
      {/* //// */}
      

      {/* //// */}
 <div className="bg-white text-gray-800">
      <section className="py-20 px-4">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We Are <span className="text-amber-600">Hiring Spa Therapists</span>
          </motion.h2>
          <motion.p
            className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join our luxurious spa chain and grow your career while offering top-tier wellness experiences to elite clients.
          </motion.p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Responsibilities Card */}
          <motion.div
            className="bg-amber-50 rounded-xl p-6 shadow-lg border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaHandsHelping className="text-amber-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Key Responsibilities</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Perform a variety of treatments including massages, facials, and body wraps</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Provide exceptional customer service and create a soothing atmosphere</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Maintain cleanliness and hygiene of treatment rooms</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Assist clients with product recommendations for home care</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Follow all protocols for safety and sanitation</span>
              </li>
            </ul>
          </motion.div>

          {/* Requirements Card */}
          <motion.div
            className="bg-amber-50 rounded-xl p-6 shadow-lg border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaUserTie className="text-amber-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Requirements</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Experience:</strong> Previous experience in luxury spa preferred</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Skills:</strong> Knowledge of various spa therapies and techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Qualifications:</strong> Certification in spa therapy is a plus</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Gender:</strong> Open to both Male and Female candidates</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Location:</strong> Positions across top hotels in Delhi NCR</span>
              </li>
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            className="bg-amber-50 rounded-xl p-6 shadow-lg border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaStar className="text-amber-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Why Join Us?</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>24+ outlets across Delhi, Noida, and Gurgaon</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Luxurious 5-star hotel spa locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Accommodation & safety assured</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>High income with weekly payouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Professional and friendly team</span>
              </li>
            </ul>
          </motion.div>

          {/* Positions Card */}
          <motion.div
            className="bg-amber-50 rounded-xl p-6 shadow-lg border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaSpa className="text-amber-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Available Positions</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We are hiring <strong>Female Spa Therapists</strong> for full-time roles. 
              Freshers and experienced professionals welcome.
            </p>
            <div className="bg-amber-100 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Therapies We Offer</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span> Couple Massage
                </span>
                <span className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span> Sandwich Massage
                </span>
                <span className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span> Full Body Massage
                </span>
                <span className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span> Female to Male Massage
                </span>
                <span className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span> B2B Therapy
                </span>
              </div>
            </div>
          </motion.div>

          {/* Locations Card */}
          <motion.div
            className="bg-amber-50 rounded-xl p-6 shadow-lg border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-amber-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">Locations</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Positions available in top hotels across Delhi NCR including:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Lemon Tree
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Novotel
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Roseate House
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Radisson
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Aerocity
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> CP
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Dwarka
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">•</span> Noida
              </li>
            </ul>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="bg-amber-800 text-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
            <p className="mb-6">
              Send your resume and photo to start your journey with us
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-amber-700 p-2 rounded-full mr-3">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-amber-200 text-sm">Call or WhatsApp</p>
                  <p className="font-semibold">+91-XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-700 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-amber-200 text-sm">Email us at</p>
                  <p className="font-semibold">info@luxuryspacare.in</p>
                </div>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-white text-amber-800 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    <div className="bg-amber-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-4">
            Apply <span className="text-amber-600">Today</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed">
            If you're looking for a spa job in Delhi, a spa job vacancy, or a therapist job in a luxury environment, we encourage you to apply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-amber-800 text-lg">
              We are particularly looking for dedicated and talented individuals for <span className="font-semibold">spa therapist jobs for females</span>, as well as <span className="font-semibold">male-to-female spa jobs</span> in our hotel spa outlets.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <FaHeart className="text-amber-600 mr-2" /> Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span>Work in premium 5-star hotel environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span>Professional growth and skill development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span>Supportive and respectful work culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span>Competitive compensation with regular incentives</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-amber-100 p-6 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <FaHotel className="text-amber-600 mr-2" /> Hotel Spa Outlets
              </h3>
              <p className="text-amber-800 mb-4">
                Our spa outlets are located within prestigious hotels across Delhi NCR, offering you a premium work environment.
              </p>
              <div className="flex items-center text-sm text-amber-700">
                <FaMapMarkerAlt className="mr-2" />
                <span>Multiple locations including Aerocity, CP, Dwarka, Noida, and more</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <FaFemale className="text-amber-600 mr-2" /> Positions Available
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-amber-800">Female Therapists</h4>
                  <p className="text-sm text-amber-700 mt-2">Full-time & Part-time</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-amber-800">Male to Female</h4>
                  <p className="text-sm text-amber-700 mt-2">Spa Positions</p>
                </div>
              </div>
            </div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <p className="text-amber-700 text-sm mt-4">
                Send your resume to: info@luxuryspacare.in
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
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
        {/* End F&Q Section */}
 <WhatsappFloat />

      </div>
      
      </main>
      
    );
  }


