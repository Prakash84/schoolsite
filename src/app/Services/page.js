  'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Playfair_Display, Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";

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

  const services = [
    {
      title: "AromaTherapy",
      image: "/images/aromatherapy-featured-jpg.webp",
      description: "Aromatherapy, available at our body spa in Delhi, dates back to ancient Egypt where people used scented oils for massage and bathing.",
      duration: "60-90 min"
    },
    {
      title: "Stone Therapy",
      image: "/images/19-2-1024x427.png",
      description: "Rebalance your energy with our soothing Stone Therapy. Using heated stones, this therapeutic treatment melts away tension and promotes deep relaxation.",
      duration: "75 min"
    },
    {
      title: "Couple Massage",
      image: "/images/Couple Massage.webp",
      description: "A couples massage at our Delhi luxury spa allows you and your partner or family member to enjoy a relaxing massage together in the same room.",
      duration: "90 min"
    },
    {
      title: "Sandwich Massage",
      image: "/images/Sandwich Massage.jpg",
      description: "Rebalance your energy with our soothing Sandwich Massage therapy. A layered, deeply relaxing treatment for full-body stress relief.",
      duration: "60 min"
    },
    {
      title: "Thai Massage",
      image: "/images/thaimassage.jpg",
      description: "Thai massage is ideal for those seeking an active form of massage to relieve pain and stress, offered at our luxury spa in Delhi. This massage helps with flexibility, circulation, and energy levels.",
      duration: "60 min"
    },
    {
      title: "Potli Massage",
      image: "/images/potliMassage.jpg",
      description: "Our luxury spa in Delhi offers the ancient Indian technique known as Potli massage. This treatment uses herbal pouches, warmed up and filled with spices and herbs,.",
      duration: "60 min"
    },
    {
      title: "Full-body Massage",
      image: "/images/Sandwich Massage.jpg",
      description: "Our full-body massage spa in Delhi offers a complete relaxation experience for both your mind and body. Our massage center in Delhi targets major muscle groups such as your back, shoulders, arms, legs, and neck using techniques like kneading, stroking, and pressure.",
      duration: "60 min"
    },
    {
      title: "Specialized Treatments",
      image: "/images/SpecializedTreatments.jpg",
      description: "While this is not all that can be had, a massage is the crown jewel at Luxury Spa in Delhi where we do have a variety of special treatments that can suit all your wellness needs.",
      duration: "60 min"
    },
    {
      title: "Skincare Treatments",
      image: "/images/SkincareTreatments.jpg",
      description: "High-end spas in Delhi offer a wide range of treatments to enhance the health and beauty of your skin. These treatments often include facials that cleanse, exfoliate, and moisturize your skin.",
      duration: "90-120 min"
    },
    {
      title: "Reflexology",
      image: "/images/Reflexology.jpg",
      description: "Another holistic health practice popularized in the United States around the 1930s is Reflexology, offered by our luxury spa in Delhi. The process involves stimulating acupressure on both hands and feet to promote health and well-being..",
      duration: "60 min"
    }
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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

  export default function Services() {
    const [isVisible, setIsVisible] = useState(false);

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

    const Button = ({ href, children }) => (
      <a
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
      >
        {children}
      </a>
    );

    return (
      <div className="w-full">
        {/* Banner */}
      <section
        className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/PricingBanner.jpg')"
        }}
      >
        {/* Gradient Overlay with soft blur */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          <h4
            className={`text-1xl md:text-3xl font-bold text-white leading-tight ${playfair.variable} font-serif`}
          >
            Experience Luxury, Relaxation & Expert Spa Care
          </h4>
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

      {/* Services Section */}
      <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white">

        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 mix-blend-multiply"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-amber-300 mix-blend-multiply opacity-40"></div>
        </div>
        {/* Floral decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              ✿
            </motion.div>
          ))}
        </div>
        {/* Gold geometric patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-700/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-800/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-light text-center text-amber-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'center' }}
          ></motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-10 text-center text-xl md:text-2xl text-amber-800 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.
          </motion.p>
          
          {/* Services Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Service Card 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Hotel Spa</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Our unique blend of techniques designed to melt away tension and restore balance to your body and mind.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">60-90 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Home Spa</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Rejuvenating treatments using premium organic ingredients to reveal your most radiant complexion.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">75-120 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7l4-4m0 0l4 4m-4-4v18m0 0l-4-4m4 4l4-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Spa OutLet</h3>
                <p className="text-amber-700 mb-6 leading-relaxed">
                  Purify and renew your body with our specialized detox treatments for complete rejuvenation.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-amber-600 font-medium">90-150 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
              {/* Our Signature Treatments */}
              <section className="w-full my-5 py-5 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
            >
              Relax & Rejuvenate
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6"
            >
              Our Signature Treatments
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-amber-800"
            >
              Experience tranquility with our curated selection of premium spa treatments, each designed to transport you to a state of complete relaxation.
            </motion.p>
          </div>

          {/* Services grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`flex flex-col md:flex-row h-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="relative h-64 md:h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                      <Image 
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-8 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-0.5 bg-amber-600"></div>
                        <span className="text-amber-600 font-medium">Treatment</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-amber-800 mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <div>
                      <a 
                        href="tel:+919211235800" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium transition-all duration-300 hover:gap-3 hover:shadow-lg"
                      >
                        <span>BOOK NOW</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
              </section>
              {/* End Our Signature Treatments */}
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


               {/* Testimonials */}
              <section className="mt-20 py-18 px-16 md:px-16 bg-gradient-to-br from-amber-900 to-amber-700 relative overflow-hidden rounded-3xl shadow-xl">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="pattern-dots pattern-amber-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Heading and Subheading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready for Your <span className="text-amber-300">Spa Journey?</span>
            </motion.h2>

            <motion.p
              className="text-amber-300 uppercase font-semibold tracking-wider mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our expert therapists are waiting to guide you through a transformative wellness experience.
            </motion.p>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-3 gap-6 justify-center items-center">
              <a
                href="tel:+919211235800"
                className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-100 transition-all duration-300"
              >
                📞 Call to Book: +91 92112 35800
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-white/10 transition-all duration-300"
              >
                ✉️ Send Inquiry
              </a>
              <a
                href="#services"
                className="bg-amber-300 text-amber-900 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-400 transition-all duration-300"
              >
                💆‍♀️ View Services
              </a>
            </div>
          </div>
              </section>
              {/* end Testimonials */}
              <section className="relative bg-white py-16 px-4 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-20 rounded-xl" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Enjoy 1st Visit Offer at Just ₹1999
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg mb-3">
                    Take advantage of our exclusive first visit offer for only ₹1999! Experience our luxurious treatments and discover ultimate relaxation at an unbeatable price.
                  </p>

                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    Relax and rejuvenate with our tailored spa experiences at the finest 4, 5, and 7-star hotels across Delhi NCR. Indulge in world-class treatments designed to revitalize your mind, body, and soul.
                  </p>

                  <ul className="flex justify-center gap-6 flex-wrap text-gray-800 font-medium text-base mb-10">
                    {["4 Star Hotels", "5 Star Hotels", "7 Star Hotels"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="text-green-500 w-5 h-5" /> {item}
                      </li>
                    ))}
                  </ul>

                  <Button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30" href="tel:+919211235800">Book an Appointment</Button>
                </div>
              </section>

          {/* Call to Action */}
          {/* <motion.div 
            className="text-center mt-16"
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
          </motion.div> */}
        
        
        {/* Corner decorative elements */}
        <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-amber-400/50"></div>
        <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-amber-400/50"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-amber-400/50"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-amber-400/50"></div>
      </section>

      </div>
    );
  }
