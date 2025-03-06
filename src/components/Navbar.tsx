"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductDrop from "./ProductDrop";
import SolutionsDropdown from "./SolutionsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-white to-purple-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold italic text-purple-700">
        Lend<span className="font-extrabold text-purple-950 text-2xl">API</span>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
       
          <ProductDrop />
          <SolutionsDropdown />
          <ResourcesDropdown />
        <li><a href="#" className="hover:text-purple-700">Marketplace</a></li>
        <li><a href="#" className="hover:text-purple-700">Pricing</a></li>
        <li><a href="#" className="hover:text-purple-700">Contact Us</a></li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-gray-300 px-4 py-2 rounded-md text-black cursor-pointer">Login</button>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold cursor-pointer">Get Started</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full text-black bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <li><a href="#" className="hover:text-purple-700">Product</a></li>
          <li><a href="#" className="hover:text-purple-700">Solutions</a></li>
          <li><a href="#" className="hover:text-purple-700">Resources</a></li>
          <li><a href="#" className="hover:text-purple-700">Marketplace</a></li>
          <li><a href="#" className="hover:text-purple-700">Pricing</a></li>
          <li><a href="#" className="hover:text-purple-700">Contact Us</a></li>
          <button className="border border-gray-300 px-4 py-2 rounded-md cursor-pointer">Login</button>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-md">Get Started</button>
        </ul>
      )}
    </nav>
  );
}
