"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "https://framerusercontent.com/images/YDFolLFzTZTw8FIsiuA1M0ZdldA.png",
  "https://framerusercontent.com/images/2v0R1zfk3gdu1tvV3pwL284diE.png",
  "https://framerusercontent.com/images/Tj8oOJT0dVDv8HXBSlHPYYWYeY.png",
  "https://framerusercontent.com/images/Jk8Z9HGC6BnWgIKOfOOJi5lhNg.png",
  "https://framerusercontent.com/images/9tlK4cAniUvXWt8cVve6YBo6Y.png",
  "https://framerusercontent.com/images/NsYhxV6naUmQ4xOhdliz2Xd0DU.png",
];

const multipliedLogos = [...logos, ...logos, ...logos];

const TrustSection = () => {
  return (
    <div className="bg-gray-900 py-10 overflow-hidden">
      <h2 className="text-white text-center text-3xl font-bold mb-6">BACKED BY</h2>
      <div className="relative">
        {/* Container with gradient mask */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
            }}
          >
            {multipliedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 inline-block">
                <Image
                  src={logo}
                  alt={`Trust Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </motion.div>
          {/* Gradient overlays extended further inside */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default TrustSection;