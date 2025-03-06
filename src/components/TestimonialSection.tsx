"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "The decision to invest in LendAPI was driven by the founders' deep fintech experience and their visionary technology, positioning them as leaders in the industry.",
    name: "Gonzalo Pérez de Barros-Lobo",
    title: "Fintech Investor, Plug and Play Ventures",
    image: "https://framerusercontent.com/images/48BKWMX4Sy0qGojUokWw0GFjq4.png?scale-down-to=1024",
  },
  {
    text: "LendAPI's innovative approach has transformed the fintech landscape, delivering unparalleled value to its partners.",
    name: "Jane Doe",
    title: "CEO, FinTech Global",
    image: "https://framerusercontent.com/images/gKHIOLCPRbEWUNAluHb1QA4PZWI.png?scale-down-to=1024",
  },
  {
    text: "Their platform offers unmatched flexibility, enabling us to launch diverse products tailored to evolving market demands.",
    name: "John Smith",
    title: "CTO, Digital Banking Solutions",
    image: "https://framerusercontent.com/images/pueOL8Y3LWb2LOe6wM9yrMLLqQ.png?scale-down-to=1024",
  },
  {
    text: "LendAPI provides a robust, scalable solution that seamlessly adapts to the dynamic needs of modern finance.",
    name: "Sarah Johnson",
    title: "COO, NextGen Finance",
    image: "https://framerusercontent.com/images/IOMVay0b6a7gQizNpoXWZp6Tac.png?scale-down-to=1024",
  },
  {
    text: "The team’s expertise and cutting-edge technology have set a new standard for excellence in fintech innovation.",
    name: "Michael Chen",
    title: "VP of Technology, Innovate Bank",
    image: "https://framerusercontent.com/images/5F4m4XWeatvlAFO85f4f8C7Go.png?scale-down-to=1024",
  },
];

// Triple the testimonials for smoother infinite scroll
const multipliedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2d3b55] text-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl"
      />

      {/* Title */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight"
      >
        Voices of Success
      </motion.h2>

      {/* Testimonials with Infinite Scroll and Drag */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 select-none"
          initial={{ x: "0%" }}
          animate={{ x: "-33.33%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
          dragElastic={0.1}
          whileDrag={{ scale: 1.01 }}
        >
          {multipliedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[420px] md:min-w-[600px] max-w-[420px] md:max-w-[600px] bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center hover:border-blue-500/30 transition-colors duration-300"
            >
              <p className="text-xl md:text-2xl text-gray-100 italic mb-6 leading-relaxed font-light overflow-wrap break-word">
                ❝ {testimonial.text} ❞
              </p>
              <div className="mt-6 flex items-center gap-8 w-full">
                <div className="relative group flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={160}
                    height={160}
                    className="rounded-full border-4 border-blue-600 object-cover shadow-lg group-hover:border-blue-400 transition-colors duration-300"
                    quality={100}
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="font-semibold text-2xl text-white tracking-wide overflow-wrap break-word">
                    {testimonial.name}
                  </p>
                  <p className="text-md text-gray-300 font-medium overflow-wrap break-word">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Gradient fade effects on edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#2d3b55] via-[#2d3b55]/70 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default TestimonialSection;