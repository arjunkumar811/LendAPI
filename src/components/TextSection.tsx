"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://framerusercontent.com/images/TVqUwSuJ5UVYYgxNH20bHY5Zmd0.png?scale-down-to=1024&lossless=1",
  "https://framerusercontent.com/images/I4LDqFAnupyqxRuMbXfdxBZXrU8.png?lossless=1",
  "https://framerusercontent.com/images/fiDlYwgn5kE0Q2MrOOxVo8BBR18.png?lossless=1",
  "https://framerusercontent.com/images/TVqUwSuJ5UVYYgxNH20bHY5Zmd0.png?scale-down-to=1024&lossless=1",
];

const TextWithImages = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-between bg-[#0f172a] text-white px-6 md:px-12">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Design seamless onboarding applications, integrate with services – all in one platform
        </motion.h1>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-blue-400"
        >
          Smarter Lending Logic
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg text-gray-300 max-w-xl"
        >
          Use real-time data checks and dynamic rules to automatically approve, decline, or escalate applications—so you can streamline your workflow without compromising on accuracy.
        </motion.p>
      </div>

      {/* Right Side - Large Images Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-6 w-full lg:w-1/2 h-[80vh] rounded-3xl overflow-hidden"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full h-full"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TextWithImages;
