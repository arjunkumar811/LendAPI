"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "The decision to invest in LendAPI was driven by the founders' deep fintech experience and their visionary technology...",
    name: "Gonzalo Pérez de Barros-Lobo",
    title: "Fintech Investor, Plug and Play Ventures",
    image: "https://framerusercontent.com/images/48BKWMX4Sy0qGojUokWw0GFjq4.png?scale-down-to=1024",
  },
  {
    text: "LendAPI's innovative approach has truly transformed the fintech landscape...",
    name: "Jane Doe",
    title: "CEO, FinTech Global",
    image: "https://framerusercontent.com/images/gKHIOLCPRbEWUNAluHb1QA4PZWI.png?scale-down-to=1024",
  },
  {
    text: "Their platform provides the flexibility to launch diverse products, meeting the ever-changing needs of the market.",
    name: "John Smith",
    title: "CTO, Digital Banking Solutions",
    image: "https://framerusercontent.com/images/pueOL8Y3LWb2LOe6wM9yrMLLqQ.png?scale-down-to=1024",
  },
  {
    text: "Their platform provides the flexibility to launch diverse products, meeting the ever-changing needs of the market.",
    name: "John Smith",
    title: "CTO, Digital Banking Solutions",
    image: "https://framerusercontent.com/images/IOMVay0b6a7gQizNpoXWZp6Tac.png?scale-down-to=1024",
  },
  {
    text: "Their platform provides the flexibility to launch diverse products, meeting the ever-changing needs of the market.",
    name: "John Smith",
    title: "CTO, Digital Banking Solutions",
    image: "https://framerusercontent.com/images/5F4m4XWeatvlAFO85f4f8C7Go.png?scale-down-to=1024",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollTestimonials = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 1,
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(scrollTestimonials, 30); // Adjust the speed of scrolling here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      {/* Background Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-10 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-40"
      ></motion.div>

      {/* Title */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-10"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials */}
      <motion.div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar"
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="min-w-[400px] md:min-w-[500px] bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 flex flex-col items-center"
          >
            <p className="text-lg text-gray-100 italic mb-4">❝ {testimonial.text} ❞</p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100} // Fixed width
                height={100} // Fixed height
                className="rounded-full border-2 border-white" // No blur effect
              />
              <div>
                <p className="font-semibold text-white text-xl">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
