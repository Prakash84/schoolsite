
 'use client';
import React from 'react';
import Image from 'next/image';

export default function lajpatnagar() {
  return (
    <div className="bg-rose-50 text-gray-800">
      {/* Hero Banner */}
      <div className="relative h-96 w-full bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-4">Our Spa Outlets in Lajpat Nagar</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover unmatched luxury and holistic wellness in the heart of Lajpat Nagar, Delhi.
          </p>
        </div>
      </div>

      {/* Heading + Short Description */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-amber-700">5 Star Hotels in Lajpat Nagar, Delhi</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lajpat Nagar is home to some of the most luxurious hotels in India. Our spa outlets are located inside and nearby these iconic properties, offering the perfect blend of comfort, ambiance, and world-class wellness services.
        </p>
      </div>

      {/* Hotel Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {[
          {
            name: 'JW Marriott Hotel New Delhi Lajpat Nagar',
            image: '/images/hotels/jw-marriott.jpg',
            desc: 'A symbol of elegance and comfort, JW Marriott offers world-class hospitality with our spa providing the ultimate relaxation experience.'
          },
          {
            name: 'Andaz Delhi – a concept by Hyatt',
            image: '/images/hotels/andaz.jpg',
            desc: 'This lifestyle hotel features creative spaces, and our spa outlet here complements it with healing therapies and signature treatments.'
          },
          {
            name: 'Roseate House New Delhi',
            image: '/images/hotels/roseate.jpg',
            desc: 'Known for its design and luxury, the spa at Roseate House promises a serene atmosphere and rejuvenating therapies.'
          },
          {
            name: 'Pullman New Delhi Lajpat Nagar',
            image: '/images/hotels/pullman.jpg',
            desc: 'Pullman is all about modern luxury. Our spa inside Pullman ensures relaxation meets sophistication.'
          },
          {
            name: 'Novotel New Delhi Lajpat Nagar',
            image: '/images/hotels/novotel.jpg',
            desc: 'Ideal for travelers, Novotel is practical yet luxurious, and our spa delivers the perfect wellness break during your stay.'
          },
          {
            name: 'Holiday Inn New Delhi International Airport',
            image: '/images/hotels/holiday-inn.jpg',
            desc: 'Located close to the airport, this hotel offers comfort and accessibility. Our spa enhances your stay with soothing experiences.'
          }
        ].map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">{hotel.name}</h3>
              <p className="text-gray-600 text-sm">{hotel.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 700+ Words Content Block */}
      <div className="bg-white py-14 px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 text-center">Why Choose Our Spa in Lajpat Nagar?</h2>
          <p>
            Lajpat Nagar is a destination that blends luxury, convenience, and connectivity — and what better way to enhance your stay than with a relaxing spa session designed to soothe your mind and body? Our spa outlets are located in the most prestigious hotels across Lajpat Nagar, giving you access to world-class wellness experiences within arm’s reach.
          </p>
          <p>
            Whether you're a couple looking for a romantic escape, a business traveler seeking stress relief, or a local resident desiring some weekend rejuvenation, our spa services are tailored to meet every need. From couple massages, oil therapy, deep tissue massage to aroma and Swedish therapy — our professionally trained therapists ensure every session is personal, effective, and deeply relaxing.
          </p>
          <p>
            Our outlets follow the highest hygiene and quality standards. Every treatment room is designed to provide peace and privacy, with soothing music, ambient lighting, and a tranquil environment that elevates your entire experience.
          </p>
          <p>
            What sets our Lajpat Nagar spa services apart is our commitment to customization. We understand that every body is different — so we ask the right questions before beginning any session, and we curate treatments based on your lifestyle, tension areas, and wellness goals. You leave feeling refreshed, realigned, and ready to take on the world.
          </p>
          <p>
            With easy access to the IGI Airport, metro, and luxury shopping arcades, our Lajpat Nagar locations are ideal for those short on time but high on expectation. We ensure that even a 60-minute session makes a lasting impact on your mood, energy, and health.
          </p>
          <p>
            Whether you are staying at JW Marriott, Andaz, Roseate House, Pullman, or Novotel — we are just an elevator ride away. Book your couple spa or signature massage session today and unlock the door to pure bliss.
          </p>
          <p className="font-medium text-center text-amber-700">
            Come, experience Lajpat Nagar’s best luxury spa — where wellness meets elegance.
          </p>
        </div>
      </div>
    </div>
  );
}
