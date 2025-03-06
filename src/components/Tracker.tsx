"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "https://framerusercontent.com/images/YDFolLFzTZTw8FIsiuA1M0ZdldA.png",
  "https://framerusercontent.com/images/2v0R1zfk3gdu1tvV3pwL284diE.png",
  "https://framerusercontent.com/images/Tj8oOJT0dVDv8HXBSlHPYYWYeY.png",
  "https://framerusercontent.com/images/Jk8Z9HGC6BnWgIKOfOOJi5lhNg.png",
  "https://framerusercontent.com/images/9tlK4cAniUvXWt8cVve6YBo6Y.png",
  "https://framerusercontent.com/images/NsYhxV6naUmQ4xOhdliz2Xd0DU.png"
];

// Duplicate the logos array to create a seamless loop
const duplicatedLogos = [...logos, ...logos];

const TrustSection = () => {
  return (
    <div className="bg-gray-900 py-10 relative overflow-hidden">
      <h2 className="text-white text-center text-3xl font-bold mb-6">
        BACKED BY
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex space-x-16"> {/* Increased gap from space-x-8 to space-x-16 */}
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Trust Logo ${index + 1}`}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
