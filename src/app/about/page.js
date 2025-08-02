
'use client';
import React from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display, Raleway } from 'next/font/google'
import WhatsappFloat from '../components/WhatsappFloat';



const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400']
})

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
        {/* <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/aboutusbanner.jpg')", // ✅ Change image as needed
      }}
    >
      
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
      </motion.div>
    </section> */}
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
            <span className="text-amber-600 font-light tracking-widest">ABOUT US</span>
            <div className="w-12 h-px bg-amber-600"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-800">
            <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Serenity</span>
            Crafted with Care, 
            <span className="block mt-2 font-medium">Experience the Essence of <span className="text-rose-600">Wellness</span></span>
          </h1>
          
          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            At LuxeSpa, we believe true wellness is an art. Our master therapists blend ancient wisdom with modern techniques to create transformative experiences that nurture mind, body, and spirit.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
              <span>Our Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-6 py-3 bg-white text-amber-800 rounded-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Meet Our Team</span>
            </button>
          </div>
        </div>

        {/* Image section - more elegant */}
        <div className="relative h-80 md:h-96 lg:h-[450px]">
  <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
    <div className="relative w-full h-full">
      <img
        src="/images/aboutusbanner.jpg" // ✅ Yahan apna image path daal
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
                          <span className="mr-2">✦</span> About Our Luxury Spa
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
                      Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">DelhiBodySpa for Body Spa</span>
                    </motion.h2>
                    
                    <motion.p
                      className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Choose expert therapists, serene ambiance, and premium wellness services. Customized treatments with top hygiene standards in the heart of Delhi.
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

      {/* content */}
      {/* demo 1 */}
      <section className="w-full py-16 bg-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-yellow-100/50 backdrop-blur-sm -z-10" />
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
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
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Sanctuary</span>
                    </motion.h2>
          {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-500">Sanctuary</span> Story
          </h1> */}
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-3xl  font-bold text-amber-800 mb-6">
                Journey to Wellness
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Serenity Body Spa was born from a simple vision: to create an urban oasis where modern wellness meets ancient healing traditions. Founded in 2010 by renowned holistic therapist Elena Rodriguez, our spa began as a single-treatment room with a passionate mission. Today, we've grown into an award-winning sanctuary serving over 5,000 clients annually, yet we've maintained our core commitment to personalized care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our journey mirrors the transformations we facilitate - starting small, nurturing growth, and evolving while staying true to our essence. Each expansion was guided by client feedback and emerging wellness research, resulting in our unique blend of evidence-based therapies and intuitive body wisdom.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Our Healing Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe true wellness emerges from harmony between physical, mental, and energetic dimensions. Unlike conventional spas, our approach integrates three core principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  {title: 'Mindful Presence', desc: 'Therapists trained in meditation techniques to create truly present healing experiences'},
                  {title: 'Biome Intelligence', desc: 'Therapies designed to activate your body\'s innate healing capabilities'},
                  {title: 'Energy Alignment', desc: 'Space designed with sacred geometry to enhance therapeutic benefits'}
                ].map((item, index) => (
                  <div key={index} className="bg-indigo-50 p-4 rounded-xl">
                    <h3 className="font-bold text-amber-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                This holistic framework allows us to create treatments that don't just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Masterful Hands, Compassionate Hearts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of 23 therapists represents the pinnacle of spa craftsmanship. Each practitioner undergoes 500+ hours of training in our proprietary modalities before touching clients. We source talent globally, with specialists in:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'Thai Herbal Compress', 'Shiatsu', 'Lymphatic Drainage', 
                  'Ayurvedic Abhyanga', 'Hot Stone Therapy', 'Aromatherapy',
                  'Deep Tissue Sculpting', 'Craniosacral'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-800 rounded-full mr-3"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">
                Sustainable Wellness
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  {icon: '♻️', text: 'Zero-Waste Policy'},
                  {icon: '🌱', text: 'Organic Linens'},
                  {icon: '💧', text: 'Water Recycling'},
                  {icon: '🌎', text: 'Carbon Offsetting'},
                  {icon: '🏺', text: 'Handcrafted Products'}
                ].map((item, index) => (
                  <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation. When you indulge at Serenity, you're supporting a healthier ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your Transformation Awaits</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8 text-lg">
            We invite you to experience the difference that intention, expertise, and genuine care can make. Whether seeking relief from chronic stress, post-injury recovery, or simply sacred "me time," our doors open to welcome you home to yourself.
          </p>
          <button className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Journey
          </button>
        </div>
      </div>
      
    </section>
      {/* end demo 1 */}
      {/* demo 2 */}
      <section className="bg-gradient-to-b from-[#f9f6f2] to-[#f0eae3] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#c5a491]"></div> */}

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
            <span className="text-amber-700 font-medium tracking-wider">Sanctuary Story</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
           Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Sanctuary Story</span>
          </motion.h2>
          
          <motion.p
            className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
           Discover the journey, philosophy, and passion that created your urban oasis
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
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Journey Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Our Journey</h2>
                </div>
                <p className="text-[#6d5d54] mb-4 leading-relaxed">
                  Serenity Springs was born from a simple vision: to create an urban oasis where modern wellness meets ancient healing traditions. Founded in 2010 by renowned holistic therapist Elena Rodriguez, our spa began as a single-treatment room with a passionate mission. Today, we've grown into an award-winning sanctuary serving over 5,000 clients annually, yet we've maintained our core commitment to personalized care.
                </p>
                <p className="text-[#6d5d54] leading-relaxed">
                  Our journey mirrors the transformations we facilitate - starting small, nurturing growth, and evolving while staying true to our essence. Each expansion was guided by client feedback and emerging wellness research, resulting in our unique blend of evidence-based therapies and intuitive body wisdom.
                </p>
              </div>
              <div className="bg-[#f8f5f2] p-6 border-t border-[#e8e0d9]">
                <div className="flex flex-wrap gap-4 justify-center ">
                  {[2010, 2014, 2018, 2022, 2024].map((year, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-amber-800">{year}</div>
                      <div className="text-sm text-[#6d5d54]">{index === 0 ? 'Founded' : index === 4 ? 'Today' : 'Expansion'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Healing Philosophy</h2>
                </div>
                <p className="text-[#6d5d54] mb-6 leading-relaxed">
                  We believe true wellness emerges from harmony between physical, mental, and energetic dimensions. Unlike conventional spas, our approach integrates three core principles:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    {title: 'Mindful Presence', desc: 'Therapists trained in meditation to create truly present healing experiences'},
                    {title: 'Biome Intelligence', desc: 'Therapies designed to activate your body\'s innate healing capabilities'},
                    {title: 'Energy Alignment', desc: 'Space designed with sacred geometry to enhance therapeutic benefits'}
                  ].map((item, index) => (
                    <div key={index} className="bg-indigo-50 p-5 rounded-xl border border-[#e8e0d9]">
                      <h3 className="font-bold text-lg text-amber-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-[#6d5d54]">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[#6d5d54] leading-relaxed">
                  This holistic framework allows us to create treatments that don't just relax temporarily but catalyze lasting change. Our clients report benefits ranging from improved sleep patterns to reduced chronic pain months after their visits.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Therapists Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Our Healers</h2>
                </div>
                <p className="text-[#6d5d54] mb-6 leading-relaxed">
                  Our team of 23 therapists represents the pinnacle of spa craftsmanship. Each practitioner undergoes 500+ hours of training in our proprietary modalities before touching clients. We source talent globally, with specialists in diverse healing traditions:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    'Thai Herbal Compress', 'Shiatsu', 'Lymphatic Drainage', 
                    'Ayurvedic Abhyanga', 'Hot Stone Therapy', 'Aromatherapy',
                    'Deep Tissue Sculpting', 'Craniosacral Therapy',
                    'Reflexology', 'Prenatal Massage', 'Cupping', 'Reiki'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-800 rounded-full mt-2 mr-3"></div>
                      <span className="text-[#6d5d54]">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#6d5d54] leading-relaxed">
                  Beyond technical excellence, we select therapists for their intuitive healing abilities. Monthly training includes emotional intelligence development and energy work certification. This investment shows in our 98% client retention rate and numerous industry awards.
                </p>
              </div>
            </div>

            {/* Sustainability Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#f0eae3] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d7c6c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-amber-800">Sustainable Wellness</h2>
                </div>
                <p className="text-[#6d5d54] mb-6 leading-relaxed">
                  Our commitment extends beyond individual wellness to planetary health. We're proud to be the first Carbon Neutral spa in our region, with initiatives including:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    {icon: '♻️', text: 'Zero-Waste Policy'},
                    {icon: '🌱', text: 'Organic Linens'},
                    {icon: '💧', text: 'Water Recycling'},
                    {icon: '🌎', text: 'Carbon Offsetting'},
                    {icon: '🏺', text: 'Handcrafted Products'},
                    {icon: '🚫', text: 'Cruelty-Free'}
                  ].map((item, index) => (
                    <span key={index} className="bg-[#f0eae3] text-amber-800 px-4 py-2 rounded-full flex items-center">
                      <span className="mr-2 ">{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>
                <p className="text-[#6d5d54] leading-relaxed">
                  Our product line features sustainably harvested ingredients from ethical cooperatives. We've partnered with local environmental initiatives, donating 5% of profits to wetland conservation. When you indulge at Serenity Springs, you're supporting a healthier ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center ">Voices of Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {name: 'Sarah K.', text: "Serenity Springs changed my relationship with my body. After years of chronic pain, their therapists helped me find relief I thought impossible."},
                {name: 'Michael T.', text: "The attention to detail here is extraordinary. From the moment you enter, you feel transported to a sacred healing space."},
                {name: 'Priya M.', text: "More than a spa - it's a wellness education. I've incorporated techniques learned here into my daily routine with remarkable results."}
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-amber-800 mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-[#6d5d54] max-w-2xl mx-auto mb-8 text-lg">
            We invite you to experience the difference that intention, expertise, and genuine care can make. Whether seeking relief from chronic stress, post-injury recovery, or simply sacred "me time," our doors open to welcome you home to yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 px-8 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Your Sanctuary Experience
            </button>
            <button className="bg-white border-2 border-amber-500 text-amber-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-amber-50 transition-all duration-300 shadow hover:shadow-md">
              Explore Our Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
      {/* end demo 2 */}
      {/* end content */}


      {/* 18+ Exclusive Section */}
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

      {/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaStar className="text-amber-500" />
                  Staff
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Our <span className="text-amber-600">Therapy Experts</span>
                </motion.h2>
                <motion.p
                  className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
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
       <WhatsappFloat />
      
    </>
  );
}
