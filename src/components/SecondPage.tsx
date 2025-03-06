"use client";

import { useState } from "react";
import { FaRocket, FaRegFileAlt, FaCogs, FaClipboardList, FaPlay } from "react-icons/fa";

const sections = [
  { name: "Application", img:  "https://framerusercontent.com/images/s7TxeNQQPKzCFTFZSOpNrI3CTnw.png?lossless=1", icon: <FaRegFileAlt /> },
  { name: "Rules", img: "https://framerusercontent.com/images/8zsDGcGCZkFC7Y3UrJvauaTV0bo.png?lossless=1", icon: <FaClipboardList /> },
  { name: "Variables", img: "https://framerusercontent.com/images/3SCZ1DB4H9AMPxgCt91aV4j65U.png?scale-down-to=2048&lossless=1", icon: <FaCogs /> },
  { name: "Integration", img: "https://framerusercontent.com/images/bpcGmCL58H9QLDiVRhbJYBnRiw.png?lossless=1", icon: <FaPlay /> },
  { name: "Launch", img: "https://framerusercontent.com/images/8Nx6r3KaJXlPpYPvZ2gBcOjbgeo.png", icon: <FaRocket /> },
];

export default function SecondPage() {
  const [selected, setSelected] = useState(sections[0]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-200 opacity-50 animate-background"></div>

      {/* Buttons Row */}
      <div className="flex gap-4 mb-6 z-10">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => setSelected(section)}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md cursor-pointer ${
              selected.name === section.name
                ? "bg-purple-600 text-white shadow-lg transform scale-105"
                : "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-purple-500 hover:text-white hover:shadow-lg"
            }`}
          >
            {section.icon} {/* Display the icon */}
            {section.name}
          </button>
        ))}
      </div>

      {/* Display Selected Image */}
      <div className="w-full max-w-4xl h-128 bg-white rounded-lg shadow-lg overflow-hidden z-10">
        <img
          src={selected.img} 
          alt={selected.name} 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
