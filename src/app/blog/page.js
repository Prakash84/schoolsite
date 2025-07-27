"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "Benefits of Full Body Massage",
    description:
      "Discover how full body massages can relieve stress, enhance blood circulation, and promote better sleep.",
    image: "/images/blog1.jpg",
    link: "/blog/full-body-massage",
  },
  {
    title: "Hot Stone Therapy Explained",
    description:
      "Learn the science and magic behind hot stone treatments and how they soothe your muscles deeply.",
    image: "/images/blog2.jpg",
    link: "/blog/hot-stone-therapy",
  },
  {
    title: "Why Choose a Couple Massage?",
    description:
      "Bonding and wellness go hand in hand with couple massages — here’s why you should try it.",
    image: "/images/blog3.jpg",
    link: "/blog/couple-massage",
  },
];

export default function blog() {
  return (
    <main className="bg-[#FFF9F0] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/steptodown.com870307.jpg"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-wide"
            >
              Spa Blog & Wellness Tips
            </motion.h1>
            <p className="mt-3 text-lg text-amber-100">
              Discover the art of relaxation and body healing
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center max-w-3xl mx-auto px-4 mt-16 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-amber-700 mb-4"
        >
          Rejuvenate Your Mind & Body
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our spa blog, where we share wellness advice, beauty tips, and the science behind relaxation. Our expert therapists share their insights to help you lead a balanced and calm lifestyle.
        </p>
        <p className="mt-4 text-gray-600 italic text-md">
          "Relax your body, renew your mind, and revive your spirit."
        </p>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-amber-700 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA or Quote */}
      <section className="text-center bg-amber-100 py-16 px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-800 mb-4">
          Experience the Art of Healing
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our goal is not just to relax your body, but to bring complete harmony to your life. Explore our blog regularly to stay inspired, informed, and indulged.
        </p>
      </section>
    </main>
  );
}
