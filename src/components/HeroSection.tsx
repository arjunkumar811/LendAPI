"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroTexts = [
  "Redefine Underwriting",
  "Onboard Anyone",
  "Supercharge Approvals",
  "Automatic Compliance",
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-70"
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>

      <div className="relative z-10">
        {/* Animated Text */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            style={{ filter: 'blur(2px)' }} // Subtle blur effect
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {heroTexts[index]}
          </motion.h1>
        </AnimatePresence>

        <p className="text-2xl text-black font-semibold italic">
          with <span className="font-bold">LendAPI</span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
            Start for Free
          </button>
          <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
}
