"use client";

import { useState } from "react";
import { FaRocket, FaRegFileAlt, FaCogs, FaClipboardList, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  { name: "Application", img: "https://framerusercontent.com/images/s7TxeNQQPKzCFTFZSOpNrI3CTnw.png?lossless=1", icon: <FaRegFileAlt /> },
  { name: "Rules", img: "https://framerusercontent.com/images/8zsDGcGCZkFC7Y3UrJvauaTV0bo.png?lossless=1", icon: <FaClipboardList /> },
  { name: "Variables", img: "https://framerusercontent.com/images/3SCZ1DB4H9AMPxgCt91aV4j65U.png?scale-down-to=2048&lossless=1", icon: <FaCogs /> },
  { name: "Integration", img: "https://framerusercontent.com/images/bpcGmCL58H9QLDiVRhbJYBnRiw.png?lossless=1", icon: <FaPlay /> },
  { name: "Launch", img: "https://framerusercontent.com/images/8Nx6r3KaJXlPpYPvZ2gBcOjbgeo.png", icon: <FaRocket /> },
];

export default function SecondPage() {
  const [selected, setSelected] = useState(sections[0]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 px-6 relative overflow-hidden">
      {/* Modern Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient opacity-80"></div>
      
      {/* Animated Particle Effects */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-float top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-float-slow bottom-20 right-20"></div>
        <div className="absolute w-48 h-48 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-float-fast top-1/3 right-1/4"></div>
      </motion.div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gray-900/20 pointer-events-none"></div>

      {/* Buttons Row */}
      <motion.div
        className="flex gap-4 mb-8 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {sections.map((section) => (
          <motion.button
            key={section.name}
            onClick={() => setSelected(section)}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer ${
              selected.name === section.name
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl transform scale-105"
                : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.icon}
            {section.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Display Selected Image */}
      <motion.div
        className="w-full max-w-4xl h-[32rem] bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden z-10 border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={selected.img}
          alt={selected.name}
          className="w-full h-full object-contain transition-opacity duration-500"
        />
      </motion.div>

      {/* CSS for Animations */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}