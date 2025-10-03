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
import { Building2 } from "lucide-react";
import {  Star, MapPin, Sparkles, Hotel } from 'lucide-react';
import { Clock, CheckCircle2 } from "lucide-react";
import {  Globe } from "lucide-react";
import Head from "next/head";
import { FaChild, FaClock, FaShieldAlt, FaRegCalendarAlt, FaAppleAlt, FaUsers, FaPhoneAlt } from "react-icons/fa";



const specialFeatures = [
  "Secure, Child-Proof Classrooms",
  "Creative Arts & Music Studio",
  "Outdoor Play Area & Obstacle Course",
  "Interactive Storytime & Early Literacy",
  "Nutritious Meals & Snack Time",
  "Small Groups & Individual Attention",
];

{/* Updated teamMembers array for play school teachers */}
const teamMembers = [
  {
    name: "Neha Sharma",
    designation: "Lead Early Years Teacher",
    image: "/images/teacher1.jpg",
    contact: {
      whatsapp: "https://api.whatsapp.com/send?phone=919999999991",
      email: "mailto:neha@littlestars.com",
    },
    profile: "/teachers/neha-sharma",
  },
  {
    name: "Meera Patel",
    designation: "Montessori Guide",
    image: "/images/teacher2.jpg",
    contact: {
      whatsapp: "https://api.whatsapp.com/send?phone=919999999992",
      email: "mailto:meera@littlestars.com",
    },
    profile: "/teachers/meera-patel",
  },
  {
    name: "Riya Kapoor",
    designation: "Music & Movement Teacher",
    image: "/images/teacher3.jpg",
    contact: {
      whatsapp: "https://api.whatsapp.com/send?phone=919999999993",
      email: "mailto:riya@littlestars.com",
    },
    profile: "/teachers/riya-kapoor",
  },
  {
    name: "Ankit Verma",
    designation: "Outdoor & PE Instructor",
    image: "/images/teacher4.jpg",
    contact: {
      whatsapp: "https://api.whatsapp.com/send?phone=919999999994",
      email: "mailto:ankit@littlestars.com",
    },
    profile: "/teachers/ankit-verma",
  },
];

const outlets = [
  {
    title: 'Hotel Spa in Aerocity',
    description: 'Enjoy the best spa in Aerocity with relaxing body massage services at 5-star hotels like Lemon Tree, Andaz, IBIS and more for a truly peaceful experience.',
    image: '/images/NovotelNewDelhiAerocity.jpeg',

    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Hotel Spa in Defence Colony',
    description: 'Relax at our spa in Defence Colony with expert body massage services to refresh your mind and body, serving hotel guests in NFC at places like The Suryaa for complete comfort and relaxation.',
    image: '/images/TheSuryaaNewDelhi(NFC).jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Hotel Spa in Connaught Place',
    description: 'Enjoy a relaxing experience at our spa in Connaught Place with professional body massage services, serving top hotels like Radisson Blu, The Lalit, The Park and more for your complete comfort and relaxation.',
    image: '/images/TheParkConnaughtPlace.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Hotel Spa in Dwarka',
    description: 'Experience the comfort of our spa in Dwarka with expert massage therapists bringing relaxation straight to your hotel room, offering on-demand hotel spa services for a peaceful and refreshing stay.',
    image: '/images/TheGrandNewDelhi.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];
{/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Schedule a Visit & Tour',
    description: 'Book a campus tour or a virtual visit to meet our teachers, see classrooms and observe daily routines. This helps you feel confident about the learning environment and safety measures.',
    image: '/images/visit.jpg', // replace with your play-school tour image
  },
  {
    number: '02',
    title: 'Registration & Documentation',
    description: 'Complete the registration form, submit basic documents (birth certificate, parent ID) and confirm class timing. We will guide you through fees, schedules and available seats.',
    image: '/images/regis.jpg', // replace with your registration image
  },
  {
    number: '03',
    title: 'Welcome Day & Settling In',
    description: 'On the first day, we introduce children to teachers through gentle activities, a parent-teacher meet and a short orientation to make the transition smooth and joyful.',
    image: '/images/hh.jpg', // replace with your welcome/orientation image
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
//     title: 'Finalizignng',
//     description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
//     image: '/images/finalizing.avif',
//   }, 
// ];
{/* End Our Process */}



export default function Home() {
  <Head>
        <title>Get Best Body Massage in Delhi | First Visit Offer 1999</title>
        <meta
          name="description"
          content="Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi. Book Your Session Now."
        />
      </Head>
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
    question: "What age groups do you accept at Little Stars?",
    answer:
      "Little Stars accepts children aged 2 to 6 years. We run age-appropriate groups (toddlers, preschool and pre-primary) so each child learns with peers at the same developmental stage.",
    icon: <FaChild className="text-pink-500" />
  },
  {
    question: "What are your timings and program options?",
    answer:
      "We offer Half-Day (3.5 hrs), Full-Day (8 hrs) and Preschool (term-based) programs. Flexible hours and extended-care options are available at select centres — contact your preferred outlet for exact timing.",
    icon: <FaClock className="text-pink-500" />
  },
  {
    question: "How do you ensure safety and hygiene for children?",
    answer:
      "Safety is our priority. All classrooms are child-proofed, we use CCTV in common areas, staff follow strict hygiene routines, and we maintain clear pick-up/drop-off procedures. Regular sanitisation and health checks are routine.",
    icon: <FaShieldAlt className="text-pink-500" />
  },
  {
    question: "What does a typical day look like?",
    answer:
      "A typical day mixes guided learning (storytime, phonics, counting), creative play (arts & music), outdoor play for motor skills, snack time, and a short nap/rest period for younger children. Activities are short, varied and play-based.",
    icon: <FaRegCalendarAlt className="text-pink-500" />
  },
  {
    question: "Do you provide meals and handle allergies?",
    answer:
      "We provide healthy, child-friendly snacks — and in Full-Day programs we include a nutritious lunch. Parents must share allergy/dietary details during registration; we will follow documented instructions and offer alternatives when needed.",
    icon: <FaAppleAlt className="text-pink-500" />
  },
  {
    question: "How do you communicate progress with parents?",
    answer:
      "Parents get regular updates via photos, short daily notes and periodic parent-teacher meetings. For Preschool and Full-Day children we provide termly progress reports and suggestions to support learning at home.",
    icon: <FaUsers className="text-pink-500" />
  },
  {
    question: "How can I schedule a tour or enroll my child?",
    answer:
      "Click ‘Book a Tour’ on the site or contact the centre directly via WhatsApp/phone to schedule a visit. We walk families through the enrolment form, required documents (birth certificate, parent ID) and available seats.",
    icon: <FaPhoneAlt className="text-pink-500" />
  }
];

 const features3 = [
  {
    icon: (
      // Safe Campus / Secure
      <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Safe & Secure Campus",
    desc: "Child-proofed classrooms, CCTV-monitored spaces and strict pick-up procedures to ensure your child's safety.",
  },
  {
    icon: (
      // Teacher / Caregiver
      <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Experienced Teachers",
    desc: "Warm, certified early-childhood educators who personalise learning and encourage curiosity.",
  },
  {
    icon: (
      // Play / Motor skills
      <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Play-Based Learning",
    desc: "Hands-on activities, outdoor play and obstacle courses that build motor skills and confidence.",
  },
  {
    icon: (
      // Food / Routine
      <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Healthy Meals & Routine",
    desc: "Nutritious snacks, nap-time structure and a consistent daily routine for little learners.",
  },
];

  const features5 = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "24+ Spa Outlets",
      description: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience."
    },
    {
      icon: <Clock className="w-8 h-8 text-white-600" />,
      title: "24/7 Support Available",
      description: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Luxury Massage Available",
      description: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Massage Therapists Across the Globe",
      description: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity."
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
    title: "Welcome to Little Stars – A World of Fun Learning",
    link: "/admissions",
    image: "/images/s8.png" // बच्चों की classroom / play area वाली image
  },
  {
    title: "Creative Activities, Art & Music for Every Child",
    link: "/programs",
    image: "/images/school-4527712.jpg" // kids painting / craft वाली image
  },
  {
    title: "Safe & Nurturing Environment for Ages 2–6",
    link: "/about",
    image: "/images/s10.png" // kids playing safely outdoor वाली image
  }
];

  const services = [
  {
    title: "Early Literacy & Storytime",
    description: "Play-based reading, phonics and storytelling to spark a love for books.",
    icon: "📚",
  },
  {
    title: "Creative Arts & Music",
    description: "Art, craft, sing-alongs and music sessions to encourage expression and imagination.",
    icon: "🎨",
  },
  {
    title: "Motor Skills & Play",
    description: "Gross and fine motor activities, outdoor play and obstacle courses for physical development.",
    icon: "🤸‍♀️",
  },
  {
    title: "Healthy Snacks & Routine",
    description: "Nutritious meals, nap-time structure and positive daily routines for little learners.",
    icon: "🍎",
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
    name: "Sakshi Verma",
    role: "Parent, Age 3",
    initials: "SV",
    gradient: "from-pink-400 to-pink-500",
    rating: 5,
    content:
      "Little Stars has been wonderful for our son. The teachers are warm, the daily updates and photos make me feel connected, and he loves storytime!",
    date: "Aug 12, 2025",
  },
  {
    id: 2,
    name: "Amit Rao",
    role: "Parent, Age 4",
    initials: "AR",
    gradient: "from-pink-300 to-pink-400",
    rating: 5,
    content:
      "Fantastic environment and structured routine. My daughter gained so much confidence in just a few weeks. Highly recommend the play-based learning approach.",
    date: "Sep 03, 2025",
  },
  {
    id: 3,
    name: "Priya K.",
    role: "Parent, Age 2.5",
    initials: "PK",
    gradient: "from-pink-500 to-pink-600",
    rating: 5,
    content:
      "Warm staff, safe campus and nutritious snacks — everything I wanted for my child. The settling-in support made the first week smooth and joyful.",
    date: "Jul 28, 2025",
  },
];
  const pricingPlans = [
  {
    title: "Half-Day Program",
    price: "₹4,999",
    description: "Morning or afternoon sessions — play, stories, snacks & nap routine (3.5 hrs/day).",
    features: ["Small group (max 12)", "Creative play & storytime", "Healthy snack included", "Weekly progress notes"],
    highlight: false,
    ctaLink: "https://api.whatsapp.com/send?phone=919999999991&text=Hi%20Little%20Stars%20-%20I%20want%20to%20enroll%20for%20Half-Day%20Program",
    icon: (<svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zM3 9h2V7H3v2zm4 8h14v-2H7v2zM7 9h14V7H7v2zM7 13h14v-2H7v2z"/></svg>)
  },
  {
    title: "Full-Day Program",
    price: "₹8,499",
    description: "Full-day care with enriching activities, outdoor play, lunch & nap supervision (8 hrs/day).",
    features: ["Structured learning blocks", "Outdoor play & motor skills", "Nutritious lunch & snacks", "Daily updates & photos"],
    highlight: true,
    ctaLink: "https://api.whatsapp.com/send?phone=919999999992&text=Hi%20Little%20Stars%20-%20I%20want%20to%20enroll%20for%20Full-Day%20Program",
    icon: (<svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a9 9 0 100 18 9 9 0 000-18zm1 13h-2V7h2v8z"/></svg>)
  },
  {
    title: "Preschool Program",
    price: "₹12,999",
    description: "Early-literacy focused program preparing children for school readiness (includes assessments & parent meetings).",
    features: ["Phonics & numeracy play", "Individual learning plan", "Parent-teacher meetings", "Termly progress reports"],
    highlight: false,
    ctaLink: "https://api.whatsapp.com/send?phone=919999999993&text=Hi%20Little%20Stars%20-%20I%20want%20to%20enroll%20for%20Preschool%20Program",
    icon: (<svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2L2 7v6c0 5 3.5 9 10 9s10-4 10-9V7l-10-5zM11 14h2v2h-2v-2z"/></svg>)
  },
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
    name: "Noida (Sector 11)",
    image: "/images/TheSuryaaNewDelhi(NFC).jpg",
    description:
      "Bright classrooms, safe outdoor play area and age-appropriate learning zones — ideal for toddlers and preschoolers.",
    link: "https://api.whatsapp.com/send?phone=919999999991&text=Hi%20Little%20Stars%20-%20I%20want%20to%20book%20a%20campus%20tour%20(Noida)",
  },
  {
    name: "Gurgaon (DLF Phase 3)",
    image: "/images/TheParkConnaughtPlace.jpg",
    description:
      "Creative arts & music studio, Montessori corners and small-group learning to boost confidence and creativity.",
    link: "https://api.whatsapp.com/send?phone=919999999992&text=Hi%20Little%20Stars%20-%20I%20want%20to%20book%20a%20campus%20tour%20(Gurgaon)",
  },
  {
    name: "Delhi (Central)",
    image: "/images/TheGrandNewDelhi.jpg",
    description:
      "Storytime, phonics play and early literacy sessions — structured routines that prepare children for school readiness.",
    link: "https://api.whatsapp.com/send?phone=919999999993&text=Hi%20Little%20Stars%20-%20I%20want%20to%20book%20a%20campus%20tour%20(Delhi)",
  },
  {
    name: "Dwarka",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description:
      "Nutritious meals, nap-time routines and gentle settling-in support — perfect for working families.",
    link: "https://api.whatsapp.com/send?phone=919999999994&text=Hi%20Little%20Stars%20-%20I%20want%20to%20book%20a%20campus%20tour%20(Dwarka)",
  },
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
const developmentalBenefits = [
  {
    id: 1,
    title: "Gross Motor Skills",
    description: "Outdoor play, running and obstacle activities that build balance and coordination.",
    icon: "🏃‍♀️",
  },
  {
    id: 2,
    title: "Fine Motor Development",
    description: "Art, puzzles and manipulatives to strengthen hand-eye coordination and writing readiness.",
    icon: "✂️",
  },
  {
    id: 3,
    title: "Language & Early Literacy",
    description: "Storytime, songs and phonics play that spark vocabulary and reading readiness.",
    icon: "📚",
  },
  {
    id: 4,
    title: "Cognitive Skills",
    description: "Problem-solving games, counting and pattern play that encourage thinking and curiosity.",
    icon: "🧩",
  },
  {
    id: 5,
    title: "Healthy Habits",
    description: "Structured routines, hygiene habits and nutritious snack time for growing bodies.",
    icon: "🍎",
  },
];

const socialBenefits = [
  {
    id: 1,
    title: "Emotional Regulation",
    description: "Guided activities to help children recognise and manage feelings.",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Social Skills",
    description: "Group play and collaborative tasks that teach sharing, waiting and cooperation.",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Confidence & Independence",
    description: "Choice-based learning and gentle encouragement that build self-esteem.",
    icon: "🌟",
  },
  {
    id: 4,
    title: "Empathy & Respect",
    description: "Circle-time conversations and role-play to foster kindness and understanding.",
    icon: "💛",
  },
  {
    id: 5,
    title: "Focus & Attention",
    description: "Short, engaging activities that strengthen concentration and classroom readiness.",
    icon: "🎯",
  },
];


 const outlets2 = [
  {
    name: "The Grand Plaza",
    desc: "Luxury spa at the heart of downtown with panoramic city views",
    rating: 5,
    tag: "Exclusive",
    icon: <Sparkles className="w-6 h-6 text-pink-600" />
  },
  {
    name: "Marina Bay Resort",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 4.9,
    tag: "Waterfront",
    icon: <Hotel className="w-6 h-6 text-pink-600" />
  },
  {
    name: "Skyline Tower",
    desc: "Rooftop wellness center with city skyline views",
    rating: 4.8,
    tag: "Panoramic",
    icon: <Building2 className="w-6 h-6 text-pink-600" />
  },
  {
    name: "Royal Gardens",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Heritage",
    icon: <MapPin className="w-6 h-6 text-pink-600" />
  },
];



  return (
    <main>
    <div className="font-sans overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-pink-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-pink-600/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-300/15 blur-3xl" />
      </div>
      {/* //// */}
      


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
                {/* <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" /> */}
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-24 z-10">
                  <motion.h2
                    className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl md:max-w-3xl leading-snug mb-4 font-serif"
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

                     {/* <a href={slide.link} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-lg hover:shadow-xl">
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
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-md"
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
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fff7eb] to-[#fffaf0] relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-50 to-transparent opacity-70"></div>
  <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-pink-200/30 blur-3xl"></div>
  <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-sky-100/40 blur-3xl"></div>

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
        className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="mr-2">✦</span> Welcome to Little Stars Play School
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Safe, Fun & Nurturing <span className="relative">
          <span className="text-pink-600 z-10 relative">Play School for Kids (2–6 yrs)</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-pink-200/60 z-0"></span>
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
          At <strong className="text-pink-600 font-medium">Little Stars</strong>, we blend playful learning with safety and loving care. Our curriculum focuses on early literacy, creative play, motor skills, and social development — all delivered by warm, qualified teachers in a bright, secure environment.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Flexible timings, nutritious snacks, and small class sizes ensure every child gets attention while having lots of fun.
        </p>
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
          { title: "Experienced Teachers", icon: "👩‍🏫", desc: "Warm, certified early-childhood educators" },
          { title: "Safe Play Areas", icon: "🛡️", desc: "Child-proofed indoor & outdoor spaces" },
          { title: "Creative Curriculum", icon: "🎨", desc: "Art, music, storytime & hands-on learning" },
          { title: "Flexible Timings", icon: "⏰", desc: "Morning, half-day and full-day options" }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-50 hover:border-pink-100 group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-pink-100 text-pink-800 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-pink-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-xs">{feature.desc}</p>
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
          href="/admissions"
          className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 group-hover:from-pink-600 group-hover:to-pink-700 transition-all"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-all"></div>
          <span className="relative z-10 flex items-center gap-2">
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </motion.a>

        <a
          href="/virtual-tour"
          className="px-8 py-4 rounded-full font-medium border-2 border-pink-500 text-pink-600 hover:bg-pink-50 transition-colors flex items-center gap-2"
        >
          Take a Virtual Tour
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v2h-4v4h-2v-4H7v-2h4V9h2v4z"/>
          </svg>
        </a>

        <a
          href="tel:+911234567890"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
        >
          {/* Simple phone icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.49.59 3.68a1 1 0 01-.24 1.01l-2.23 2.1z"/>
          </svg>
          Call Admissions
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
        <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
          <Image
            loading="lazy"
            src="/images/s3.jpg"
            alt="Play School - Kids Playing"
            layout="fill"
            objectFit="cover"
            className="rounded-[2.5rem] z-0"
          />
        </div>

        <motion.div
          className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-pink-300/30 blur-xl z-0"
          animate={{
            y: [0, 12, 0],
            scale: [1, 1.08, 1],
            rotate: [0, -6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Floating info card (optional) */}
      <motion.div 
        className="absolute -bottom-6 right-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 w-72 border border-white/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-2">
          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mr-2">Open Seats</span>
          <span className="text-xs font-medium text-gray-700">Ages 2 to 6</span>
        </div>
        <p className="text-gray-700 text-sm font-medium">Join our fun-filled learning community — small groups, wholesome meals, and loving caregivers.</p>
      </motion.div>
    </motion.div>
  </div>
</section>
{/* hero content */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Left: Text */}
    <div className="order-2 lg:order-1 text-center lg:text-left">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Trusted Play School — <span className="relative">
          <span className="text-pink-600 z-10 relative">Safe, Caring & Development-focused</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-pink-100/60 z-0"></span>
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
          Welcome to <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-700 font-medium">
            Little Stars Play School
          </strong>, where joyful learning meets safety and care. We offer play-based programs for children ages 2–6 that build communication, motor skills, creativity and emotional confidence.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our experienced, certified teachers use stories, arts, music and structured routines to support each child's growth. Small groups, nutritious snacks and regular parent updates make Little Stars a trusted choice for families across Delhi NCR.
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center lg:justify-start gap-4">
        <a
          href="/admissions"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
          aria-label="Apply for Admissions"
        >
          Apply for Admissions
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=919999999999"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-pink-500 text-pink-600 font-medium shadow hover:shadow-md transition-all duration-200"
          aria-label="Book a Campus Tour via WhatsApp"
        >
          Book a Campus Tour
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Right: Polaroid-ish images (play-school visuals) */}
    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-2xl relative">
        {/* Top image */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0 -top-12 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2"
          style={{ transformOrigin: "right center" }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src="/images/girl1.jpg"
              alt="Kids playing at Little Stars"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Bottom image */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-52 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2 mx-auto"
          style={{ transformOrigin: "left center" }}
        >
          <div className="rounded-md overflow-hidden border-1 border-white">
            <Image
              src="/images/girl2.jpg"
              alt="Classroom activity at Little Stars"
              width={900}
              height={600}
              className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Decorative subtle background circle */}
        <div className="hidden lg:block absolute -left-28 top-28 w-56 h-56 bg-white rounded-full opacity-30 filter blur-xl" />
      </div>
    </div>
  </div>
</section>

      {/* End About Section */}
      {/* Services Section */}
      <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-pink-50 to-white relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <motion.p
        className="text-pink-600 uppercase font-semibold tracking-wider mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Play School Programs
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Nurturing Growth for <span className="text-pink-600">Ages 2 - 6</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Fun-filled learning activities designed to build confidence, creativity and motor skills — guided by experienced, caring teachers in a safe environment.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-50 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
        >
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

          <div className="text-5xl mb-6 text-pink-500">{service.icon}</div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
          <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

          <a
            href="#admissions"
            className="text-pink-600 font-medium flex items-center gap-2 group-hover:underline"
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
       {/* why choice Us */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#fffaf0] to-[#fff]">
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-200/30 to-pink-200/10 border border-pink-200/30 px-5 py-2 rounded-full mb-6 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
      <span className="text-pink-700 font-medium tracking-wider text-sm">EARLY YEARS PROGRAM</span>
    </div>

    <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-serif">
      Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Little Stars</span> for
      <span className="block text-xl md:inline ml-2 text-gray-700 font-medium">Fun, Safety & Early Learning</span>
    </h2>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8">
      <p className="text-pink-900/90 text-lg md:text-xl leading-relaxed">
        Little Stars provides a nurturing and joyful environment where children (ages 2–6) learn through play, songs, stories and hands-on activities.
        Our experienced teachers focus on social, emotional and cognitive development while ensuring a secure, clean space for each child to thrive.
      </p>
    </div>

    <div className="flex justify-center mt-6">
      <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {features3.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.18 }}
        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
      >
        <div className="flex justify-center mb-6">{feature.icon}</div>
        <h3 className="text-xl font-semibold text-pink-800 mb-3">{feature.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

    
    {/* //// */}
     {/* <section className="w-full py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-pink-500/5 border border-pink-500/20 px-5 py-2 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <span className="text-pink-700 font-medium tracking-wider text-sm">PREMIUM SPA SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-serif">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800">Spa Delhi</span> for a Massage in Delhi?
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8">
            <p className="text-pink-800/80 text-lg md:text-xl leading-relaxed">
              Spa Delhi is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. 
              At Spa Delhi, we combine professionalism and indulgence to present the most reliable full-body massage in Delhi. 
              Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features5.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-pink-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-3 rounded-lg w-fit text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-pink-900 mb-3 group-hover:text-pink-800 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-6 h-6 bg-pink-500 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-pink-900 mb-2">Ready to Experience Luxury?</h3>
              <p className="text-pink-700">Book your massage session today and feel the difference</p>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2">
              <span>Book Your Massage Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section> */}
      {/* end why choice Us */}


{/* hakjd */}
{/* <section className="bg-[#FFF9F0] py-16 px-4 sm:px-8 lg:px-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
      Experience Ultimate Relaxation 🌿
    </h2>
    <p className="text-gray-600 text-lg mb-6">
      Rejuvenate your body and mind at <span className="font-semibold text-pink-600">SPA DELHI</span>. 
      Discover premium treatments that combine ancient healing traditions with modern luxury.
    </p>

    <ul className="text-left text-gray-700 space-y-3 mb-8">
      <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">💆‍♀️</span> Full Body Massages & Therapies</li>
      <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🌸</span> Organic Oils & Herbal Products</li>
      <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🕯️</span> Peaceful Ambience & Aromatherapy</li>
      <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🏨</span> Available in 5-Star Locations</li>
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

    <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition">
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
        Rejuvenate your body and mind at <span className="font-semibold text-pink-600">SPA DELHI</span>. 
        Discover premium treatments that combine ancient healing traditions with modern luxury.
      </p>

      <ul className="text-gray-700 space-y-3 mb-8">
        <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">💆‍♀️</span> Full Body Massages & Therapies</li>
        <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🌸</span> Organic Oils & Herbal Products</li>
        <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🕯️</span> Peaceful Ambience & Aromatherapy</li>
        <li className="flex items-start gap-2"><span className="text-pink-500 text-xl">🏨</span> Available in 5-Star Locations</li>
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
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition shadow-lg"
        >
          Book Your Spa Session
        </a>
      </div>
    </div>
  </div>
</section> */}
{/* end democontant part */}
{/* end khsd */}



       {/* Our Process */}
               <section className="w-full py-10 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
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
        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-200/30 to-pink-200/10 border border-pink-200/30 px-5 py-2 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
        <span className="text-pink-700 font-medium tracking-wider">Enrollment Process</span>
      </motion.div>
      
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-900 mb-6 font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Enrollment Process</span>
      </motion.h2>
      
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
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
          <div className="absolute top-4 left-4 text-3xl font-bold text-pink-300 opacity-30 z-0">
            {step.number}
          </div>

          {/* Image */}
          <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-amber-100 via-pink-100 to-amber-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Title */}
          <h4 className="text-2xl font-semibold text-pink-800 mb-4 font-serif">
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
         

      {/* Pricing Section */}
      <section id="Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-pink-100 opacity-20 blur-3xl" />
  <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-pink-200 opacity-15 blur-3xl" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <div className="text-center mb-16">
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-pink-100 rounded-full text-pink-800 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.7 5.5L20 9l-4 3.6L17 20l-5-2.6L7 20l1-7.4L4 9l5.3-1.5L12 2z"/>
        </svg>
        Affordable Early Years Plans
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Flexible <span className="text-pink-600">Play School Programs</span> for Busy Families
      </motion.h2>

      <motion.p
        className="text-pink-800 max-w-3xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Choose from half-day, full-day or preschool programs — designed to nurture curiosity, motor skills and early literacy with small groups and certified teachers.
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
            <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
              BEST VALUE
            </div>
          )}

          <div className={`h-full flex flex-col border ${plan.highlight ? "border-pink-500 shadow-xl" : "border-pink-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
            <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-pink-600 to-pink-700" : "bg-pink-800"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">
                  {plan.icon}
                </div>
                <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-pink-100"}`}>
                  {plan.title}
                </h3>
              </div>
              <p className={`text-lg ${plan.highlight ? "text-pink-100" : "text-pink-200"}`}>
                {plan.description}
              </p>
            </div>

            <div className="p-8 pt-12 pb-10 -mt-6 relative">
              {/* Price circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-pink-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:shadow-xl hover:from-pink-600 hover:to-pink-700"
                    : "bg-pink-100 text-pink-800 hover:bg-pink-200"
                }`}
              >
                Enroll Now
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Optional extra info (commented) */}
    {/* <motion.div className="mt-16 ..." /> */}
  </div>
</section>
    {/* End Pricing Section */}
    {/* luxury spa content section */}
        <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    {/* First Row */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/girl3.jpg"
          alt="Happy kids playing at play school"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg p-8 rounded-xl"
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Best Rated Play School for <span className="relative">
            <span className="text-pink-600 z-10 relative">Early Childhood Development</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-pink-100/60 z-0"></span>
          </span>
        </motion.h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Little Stars is a nurturing early-years centre where expert caregivers, playful learning and a safe environment come together to help each child flourish.
          Our curriculum combines storytime, creative arts, and motor-skill activities that build confidence and curiosity. With small class sizes and warm, certified teachers, every child receives individual attention and joyful learning experiences.
        </p>
      </motion.div>
    </div>

    {/* Second Row */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg p-8 rounded-xl order-2 md:order-1"
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Play School Outlets in <span className="relative">
            <span className="text-pink-600 z-10 relative">Delhi, Noida & Gurgaon</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-pink-100/60 z-0"></span>
          </span>
        </motion.h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our centres across Delhi, Noida and Gurgaon offer bright, child-friendly classrooms and secure outdoor play areas. Each outlet follows the same high standards for hygiene, safety and curriculum — making transitions easy for families who move between locations.
          We offer flexible timings, nutritious snack options, and regular parent-teacher updates so you always know how your little one is learning and growing.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="order-1 md:order-2"
      >
        <Image
          src="/images/girl21.jpg"
          alt="Play school classroom and activities"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>
    </div>
  </div>
</section>

    {/* end luxury spa content section */}
    {/* Locations Section */}
     <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-pink-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Play School <span className="text-pink-600">Locations</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Find the nearest Little Stars centre for easy access to joyful early-years learning and safe, nurturing care.
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
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
              </div>

              {/* Location Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-pink-900 mb-2 font-serif">{location.name}</h3>
                <p className="text-gray-700 text-base mb-4">{location.description}</p>

                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all shadow"
                >
                  Book a Tour on WhatsApp
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
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
  style={{ backgroundImage: "url('/images/s1.jpg')" }}
>
  {/* Stronger dark overlay for better contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#7a5a28]/40 to-black/60 z-0" />
  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-soft-light z-1" />

  <div className="relative z-10 max-w-6xl mx-auto text-pink-900">
    {/* Heading */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-600 to-transparent mb-8" />
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-pink-900 tracking-wide"
        style={{ textShadow: "0 8px 24px rgba(0,0,0,0.65)" }}
      >
        <span
          className="block text-lg font-light tracking-widest text-pink-600 mb-2"
          style={{ textShadow: "0 6px 18px rgba(0,0,0,0.6)" }}
        >
          EARLY YEARS LEARNING
        </span>
        Little Stars — Creative Play & Learning
      </h2>
      <div className="w-16 h-0.5 bg-pink-600 mt-6" />
    </div>

    {/* Short description */}
    <p
      className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-pink-900/90"
      style={{ textShadow: "0 6px 18px rgba(0,0,0,0.55)" }}
    >
      A warm, safe and joyful space where children aged 2–6 develop confidence, curiosity
      and foundational skills through play, stories and hands-on activities.
    </p>

    {/* Feature grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {specialFeatures.map((item, index) => (
        <li key={index}>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-pink-100 bg-gradient-to-b from-white to-pink-50 backdrop-blur-sm hover:border-pink-600 transition-all duration-300 group hover:-translate-y-1 shadow-md">
            <svg
              className="flex-shrink-0 w-6 h-6 mt-0.5 text-pink-600 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M12 2L3 7v7c0 5 3.5 9 9 9s9-4 9-9V7l-9-5zM12 4.2l6 3.2v5.6c0 4.1-2.8 7.8-6 7.8s-6-3.7-6-7.8V7.4l6-3.2z" />
            </svg>
            <span className="text-left font-medium text-pink-900 group-hover:text-pink-900 transition-colors">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Decorative corners */}
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-pink-600/40" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-pink-600/40" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-pink-600/40" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-pink-600/40" />
  </div>
</section>


          {/* end 18+ section */}
          {/* content section */}
          <section className="relative bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-pink-100/30 blur-xl"></div>
  <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-pink-100/30 blur-xl"></div>

  {/* Leaf patterns (kept subtle for a playful look) */}
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
              src="/images/kids.jpg" 
              alt="Play school children playing"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent"></div>
          </div>
          <div className="absolute bottom-4 left-4 text-white font-medium text-lg">Creative Play & Learning</div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
            <div className="relative h-56">
              <Image 
                src="/images/kids2.jpg" 
                alt="Play school classroom"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
            <div className="relative h-56">
              <Image 
                src="/images/kidss.jpg" 
                alt="Outdoor play area"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-50">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white text-xl">
              🌟
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ml-4 font-serif">
              Little Stars Play School — Safe, Joyful & Learning-first
            </h2>
          </div>

          <span className="font-semibold text-pink-600">Multiple Outlets Across Delhi NCR</span>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We create a warm, stimulating environment where children (ages 2–6) learn through play, stories and creative activities.
            Our certified teachers focus on early literacy, motor skills, social development and emotional confidence while maintaining the highest standards of safety and hygiene.
          </p>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-50/50 p-4 rounded-xl flex items-start">
                <div className="text-pink-500 text-2xl mr-3 mt-1">🏫</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Noida</h3>
                  <p className="text-gray-600 text-sm">Bright classrooms & outdoor play</p>
                </div>
              </div>

              <div className="bg-pink-50/50 p-4 rounded-xl flex items-start">
                <div className="text-pink-500 text-2xl mr-3 mt-1">🎨</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Gurgaon</h3>
                  <p className="text-gray-600 text-sm">Creative arts & music sessions</p>
                </div>
              </div>

              <div className="bg-pink-50/50 p-4 rounded-xl flex items-start">
                <div className="text-pink-500 text-2xl mr-3 mt-1">📚</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Delhi (Central)</h3>
                  <p className="text-gray-600 text-sm">Storytime & pre-literacy</p>
                </div>
              </div>

              <div className="bg-pink-50/50 p-4 rounded-xl flex items-start">
                <div className="text-pink-500 text-2xl mr-3 mt-1">🍎</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Dwarka</h3>
                  <p className="text-gray-600 text-sm">Nutritious meals & care</p>
                </div>
              </div>
            </div>

            <div className="prose prose-pink max-w-none mb-8">
              <p className="text-gray-700 mb-4">
                Our teachers blend structured activities with free play to build confidence, curiosity and foundational skills. We maintain small class sizes so each child receives personalised attention.
              </p>

              <p className="text-gray-700 mb-4">
                Families receive regular updates, photos and progress notes — because partnership with parents is essential for every child's early success.
              </p>

              <p className="text-gray-700">
                Cleanliness, safety and gentle transition support are built into every day at Little Stars — from arrival routines to nap time and pick-up.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=919999999999"
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
              </svg>
              Book a Campus Tour
            </a>

            <a
              href="/admissions"
              className="flex-1 inline-flex items-center justify-center bg-white border-2 border-pink-500 text-pink-600 px-6 py-4 rounded-full text-lg font-medium hover:bg-pink-50 transition-all duration-300 shadow hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10..."/>
              </svg>
              Apply for Admissions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Optional: Floating testimonials (commented out) */}
  {/*
  <div className="mt-16 flex flex-wrap justify-center gap-6">
    ...
  </div>
  */}
</section>

          {/* end content section */}
{/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.p
        className="text-pink-300 uppercase font-semibold tracking-wider mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Best <span className="text-pink-600">Early Years Teachers</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Warm, certified and creative educators who bring play-based learning to life — nurturing every child’s curiosity and confidence.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-pink-300">{member.designation}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4 pb-6">
            {/* Inline SVG icons for consistent availability */}
            <a href={member.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-700 text-xl" aria-label="WhatsApp">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382a7.95 7.95 0 01-1.03 1.031c-.257.236-.6.4-.97.47-.206.039-.407.06-.6.06-.34 0-.673-.06-.98-.18-.3-.12-.58-.29-.83-.5-.24-.21-.45-.45-.62-.72-.17-.27-.3-.57-.39-.88-.08-.33-.12-.67-.12-1.01 0-.38.06-.76.17-1.12.11-.36.27-.69.48-.98.21-.29.45-.55.73-.76.28-.21.59-.38.92-.51.33-.13.68-.21 1.03-.25.35-.04.71-.06 1.07-.06h.03c.36 0 .72.03 1.07.08.35.05.7.14 1.03.27.33.13.64.3.92.51.28.21.52.47.73.76.21.29.37.62.48.98.11.36.17.74.17 1.12 0 .34-.04.68-.12 1.01-.09.31-.22.61-.39.88-.17.27-.38.51-.62.72-.25.21-.53.38-.83.5-.31.12-.64.18-.98.18-.19 0-.38-.01-.57-.04z"/>
              </svg>
            </a>

            <a href={member.contact.email} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-700 text-xl" aria-label="Email">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            <a href={member.profile || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-700 text-xl" aria-label="Profile">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
       {/* End Our Therapy Experts */}
       {/* Benefits section */}
       <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <motion.p
        className="text-pink-300 uppercase font-semibold tracking-wider mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Early Years Benefits
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Physical & Social Growth <span className="text-pink-600">for Ages 2–6</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our play-based curriculum supports every child's physical development, curiosity, and emotional confidence through guided activities and caring teachers.
      </motion.p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Developmental Benefits */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <div className="bg-pink-100 p-4 rounded-xl mr-4">
            <div className="text-3xl text-pink-600">🤸‍♀️</div>
          </div>
          <h3 className="text-3xl font-bold text-pink-900">Developmental Benefits</h3>
        </div>

        <div className="space-y-6">
          {developmentalBenefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: benefit.id * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="bg-pink-50 p-3 rounded-lg mr-4 mt-1">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-800">{benefit.title}</h4>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social & Emotional Benefits */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <div className="bg-pink-100 p-4 rounded-xl mr-4">
            <div className="text-3xl text-pink-600">🤝</div>
          </div>
          <h3 className="text-3xl font-bold text-pink-900">Social & Emotional Benefits</h3>
        </div>

        <div className="space-y-6">
          {socialBenefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: benefit.id * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="bg-pink-50 p-3 rounded-lg mr-4 mt-1">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-800">{benefit.title}</h4>
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
      <a
        href="/programs"
        className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        Explore Our Programs
      </a>
    </motion.div>
  </div>
</section>

       {/* end Benefits section */}

      {/* Testimonials */}
      {/* <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-pink-800 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-dots pattern-pink-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.p
              className="text-pink-300 uppercase font-semibold tracking-wider mb-4"
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
              Stories of <span className="text-pink-300">Rejuvenation</span>
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
                <div className="text-pink-300 mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-pink-50 italic text-lg mb-8">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-pink-200 text-sm">{testimonial.role}</p>
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
            className="text-pink-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Parent Experiences
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Parents<span className="text-pink-600"> Say About Little Stars</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Read why families trust Little Stars for safe, playful and meaningful early learning experiences.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-4 right-4 text-pink-50 text-6xl z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2z"/>
                </svg>
              </div>

              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${t.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {t.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < t.rating ? "text-pink-400" : "text-gray-300"} mr-1`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-4 leading-relaxed">{t.content}</p>

                {/* Date */}
                <p className="text-xs text-gray-400">Posted on {t.date}</p>
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
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-pink-100 rounded-full text-pink-800 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-pink-500" />
              Questions? We’re here to help
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-pink-900 font-serif mb-4">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>
            <p className="text-pink-800 max-w-2xl mx-auto text-lg">
              Everything you need to know about our luxurious spa services and how to book them.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-pink-50 rounded-lg">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-pink-900 group-hover:text-pink-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
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
                      <div className="px-6 pb-6 pt-2 border-t border-pink-50">
                        <p className="text-pink-700">
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
            className="mt-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-5 max-w-2xl mx-auto">
              Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-pink-700 font-medium rounded-full shadow-md hover:bg-pink-100 transition-colors">
                Contact Us
              </button>
              <button className="px-6 py-3 bg-pink-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                Book Appointment
              </button>
            </div>
          </motion.div> */}
        </div>
      </section>
    {/* End F&Q Section */}
    {/* CTA Section */}
      {/* <section className="py-24 px-6 md:px-16 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-700 to-pink-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-pink-800/30 backdrop-blur-sm"></div>
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
              className="text-pink-100 text-xl mb-10 max-w-2xl mx-auto"
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
              className="inline-block bg-white text-pink-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
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
    </main>
     
  );
}
