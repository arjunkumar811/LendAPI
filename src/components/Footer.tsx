"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Platform Products */}
        <div>
          <h3 className="text-lg font-bold mb-3">PLATFORM PRODUCTS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Decision Engine</Link></li>
            <li><Link href="#">Product Studio</Link></li>
          </ul>
        </div>

        {/* Data Products */}
        <div>
          <h3 className="text-lg font-bold mb-3">DATA PRODUCTS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Know Your Business</Link></li>
            <li><Link href="#">Know Your Customer</Link></li>
          </ul>
        </div>

        {/* Capital Markets */}
        <div>
          <h3 className="text-lg font-bold mb-3">CAPITAL MARKETS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">LendAPI Capital</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-bold mb-3">SOLUTIONS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Embedded Finance</Link></li>
          </ul>
        </div>

        {/* Articles */}
        <div>
          <h3 className="text-lg font-bold mb-3">ARTICLES</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Customer Stories</Link></li>
            <li><Link href="#">Blogs</Link></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-bold mb-3">GUIDES</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Developers</Link></li>
            <li><Link href="#">Academy</Link></li>
            <li><Link href="#">Podcasts</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-gray-400 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 LendAPI. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end mt-4">
          <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-white mx-4">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://github.com" aria-label="GitHub" className="hover:text-white">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
