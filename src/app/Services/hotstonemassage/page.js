
    'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Playfair_Display, Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";
  // import WhatsappFloat from '../components/WhatsappFloat';
  import WhatsappFloat from '../../components/WhatsappFloat';




 

 


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
const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = [
      {
        title: "Oil Therapy",
        description1:
          "Oil therapy is a traditional wellness practice that uses warm, herb-infused oils tailored to your skin type and body condition. This technique not only moisturizes and nourishes your skin but also stimulates deep tissue relaxation. The application of gentle pressure with warm oil improves lymphatic drainage, detoxifies the body, and boosts energy flow.",
        description2:
          "Whether you're dealing with fatigue, anxiety, or physical stiffness, oil therapy helps restore balance to your mind and body. It's especially beneficial for those seeking natural healing rooted in ancient Ayurvedic principles. The calming aroma of essential oils adds a therapeutic layer, relieving stress and enhancing your overall sense of well-being.",
        image: "/images/SpecializedTreatments.jpg",
      },
      {
        title: "Ayurvedic Massage",
        description1:
          "Ayurvedic oil massage, also known as Abhyanga, uses herbal oils that balance the body's doshas—Vata, Pitta, and Kapha. The warm oil is massaged into the skin to energize vital points, improve blood circulation, and promote internal healing. This therapy not only revitalizes the skin but also clears toxins stored in deeper tissues.",
        description2:
          "Perfect for individuals suffering from stress, muscle pain, or hormonal imbalance, this massage harmonizes body rhythms and enhances immunity. The continuous motion and warm oil offer a meditative experience, calming the nervous system and stimulating marma points for rejuvenation and internal balance.",
        image: "/images/SpecializedTreatments.jpg",
      },
      {
        title: "Full Body Relief",
        description1:
          "Our full body oil massage is a holistic experience combining techniques like kneading, long strokes, and pressure point activation. It aims to release deep-seated tension, ease joint stiffness, and soothe sore muscles. This deeply immersive treatment melts away physical stress while reviving your body's natural healing process.",
        description2:
          "Whether you’ve had a long week or simply need a reset, this therapy will leave you feeling light, centered, and refreshed. Regular sessions can improve flexibility, deepen sleep, and support emotional stability. It's the ultimate way to recharge your energy and reconnect with inner peace.",
        image: "/images/SpecializedTreatments.jpg",
      },
    ];


    return (
      <div className="w-full">
        {/* Banner */}
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50">
  {/* Floating decorative elements */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
  <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
  <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

  {/* Main content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    {/* Text content */}
    <div className="space-y-6 text-center lg:text-left">
      <div className="inline-flex items-center space-x-2 mb-6">
        <div className="w-12 h-px bg-amber-600"></div>
        <span className="text-amber-600 font-light tracking-widest">SIGNATURE TREATMENT</span>
        <div className="w-12 h-px bg-amber-600"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-light text-gray-800">
        <span className="block font-serif text-5xl md:text-6xl mb-3 text-amber-800">Hot Stone Massage</span>
        Ultimate Relaxation, 
        <span className="block mt-2 font-medium">Top & Bottom <span className="text-rose-600">Therapy Blend</span></span>
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        The Hot Stone Massage is our luxurious, two-therapist experience that pampers you from both sides simultaneously. Warm oil, synchronized strokes, and expert techniques combine to provide deep relaxation and muscle relief, ensuring every inch of tension is gently melted away.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Dual Therapist Touch</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Warm Herbal Oils</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Deep Muscle Relief</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Romantic Spa Ambience</span>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
          <span>Explore Hot Stone Massage</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button className="px-6 py-3 bg-white text-amber-800 rounded-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-300 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Book Now</span>
        </button>
      </div>
    </div>

    {/* Image section */}
    <div className="relative h-80 md:h-96 lg:h-[450px]">
      <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
        <img
          src="/images/Hot Stone Massage.jpg"
          alt="Hot Stone Massage Spa"
          className="w-full h-full object-cover"
        />
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

      {/* End Banner */}

      {/* Services Section */}
      

        {/* About Oil Therapy Section */}
        {sections.map((section, index) => (
  <section
    key={index}
    className="relative py-24 bg-gradient-to-br from-amber-50/70 to-white overflow-hidden"
  >
    {/* Background Blurs */}
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-28 left-1/4 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className={`relative h-96 md:h-[500px] group ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-300/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-500"></div>
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover rounded-3xl shadow-xl relative transform transition-all duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute -inset-4 rounded-3xl border-2 border-amber-200/40 transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className={`relative ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-800 mb-3 relative inline-block">
              {section.title}
              <div className="absolute bottom-2 left-0 w-full h-2 bg-amber-300/40 -z-10"></div>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description1}</p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description2}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] transform">
              Learn More
            </button>
            <button className="px-6 py-3 bg-white text-amber-700 border border-amber-300 font-medium rounded-full shadow-sm hover:shadow transition-all duration-300">
              View Projects
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-white shadow-sm animate-[float_4s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">
              Trusted by over{" "}
              <span className="font-bold text-amber-700 relative">
                5,000 clients in Delhi
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400/50"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
))}


        {/* Benefits Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-amber-800 mb-4">Transformative Benefits</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our signature oil therapy massage offers a holistic approach to wellness that addresses both physical and mental needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Muscle Relief", 
                  description: "Deep tissue manipulation combined with therapeutic oils helps relieve muscle tension and soreness effectively.",
                  icon: "💆‍♀️"
                },
                { 
                  title: "Stress Reduction", 
                  description: "Aromatherapy oils calm the nervous system, reducing anxiety and promoting mental clarity.",
                  icon: "🧘‍♂️"
                },
                { 
                  title: "Improved Circulation", 
                  description: "Massage techniques stimulate blood flow, enhancing oxygen delivery to tissues and organs.",
                  icon: "❤️"
                },
                { 
                  title: "Skin Rejuvenation", 
                  description: "Natural oils nourish and hydrate the skin, leaving it soft, supple, and radiant.",
                  icon: "✨"
                },
                { 
                  title: "Detoxification", 
                  description: "Stimulates the lymphatic system to flush toxins and boost natural immunity.",
                  icon: "🌿"
                },
                { 
                  title: "Better Sleep", 
                  description: "Promotes relaxation that leads to deeper, more restorative sleep patterns.",
                  icon: "😴"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-amber-800 opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-amber-800 mb-4">Why Choose Our Spa in Delhi?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We stand apart through our commitment to authentic techniques, premium ingredients, and personalized care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Expert Therapists</h3>
                <p className="text-gray-700 mb-6">
                  Our therapists are trained in traditional Ayurvedic techniques with over 10 years of experience in therapeutic massage.
                </p>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              </div>
              
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px]" />
                <div className="absolute -top-6 -right-6 bg-amber-100 p-6 rounded-full">
                  <span className="text-amber-800 text-xl font-serif">"</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Premium Oils</h3>
                <p className="text-gray-700 mb-6">
                  We use only cold-pressed, organic oils blended with therapeutic-grade essential oils for maximum benefit.
                </p>
                <div className="flex mt-6">
                  {['Lavender', 'Eucalyptus', 'Rosemary', 'Sandalwood'].map((oil, index) => (
                    <div key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mr-2">
                      {oil}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-amber-800 mb-4">Client Experiences</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Hear from those who have experienced the transformative power of our oil therapy massage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-amber-200 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-amber-800">Priya Sharma</h4>
                      <p className="text-sm text-gray-600">Regular Client</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The oil therapy massage at Serene Spa is transformative. My chronic back pain has significantly reduced after just three sessions. The therapists are truly skilled."
                  </p>
                  <div className="flex text-amber-500">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready for Transformation?</h2>
            <p className="text-amber-100 max-w-2xl mx-auto mb-10 text-lg">
              Book your oil therapy massage today and embark on a journey to complete relaxation and rejuvenation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-amber-800 hover:bg-amber-100 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Book Your Session
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Call: +91 98765 43210
              </button>
            </div>
          </div>
        </section>

 <WhatsappFloat />
      </div>
    );
  }


