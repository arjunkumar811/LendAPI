"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, LayoutGrid, Users, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Ref to detect clicks outside the dropdown
  const productDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productDropdownRef.current && !(productDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
      if (solutionsDropdownRef.current && !(solutionsDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsSolutionsDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !(resourcesDropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      className={`flex justify-between items-center py-4 px-8 bg-white/50 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ y: 0 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold italic text-purple-700 cursor-pointer">
        Lend<span className="font-extrabold text-purple-900">API</span>
      </Link>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
        {/* Product Dropdown */}
        <li className="relative" ref={productDropdownRef}>
          <button
            className="flex items-center hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
          >
            Products <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300" />
          </button>
          <AnimatePresence>
            {isProductDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-80 bg-white/80 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden border border-gray-200 p-4 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                {/* PLATFORM PRODUCTS */}
                <div className="mb-3">
                  <h3 className="text-gray-700 font-semibold text-sm">PLATFORM PRODUCTS</h3>
                  <Link href="/products/decision-engine" className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                    <LayoutGrid className="text-purple-600 w-5 h-5" />
                    <div>
                      <h4 className="text-sm font-medium">Decision Engine</h4>
                      <p className="text-xs text-gray-500">Smarter lending, Simplified</p>
                    </div>
                  </Link>
                  <Link href="/products/product-studio" className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                    <FileText className="text-purple-600 w-5 h-5" />
                    <div>
                      <h4 className="text-sm font-medium">Product Studio</h4>
                      <p className="text-xs text-gray-500">Build applications in minutes</p>
                    </div>
                  </Link>
                </div>

                {/* DATA PRODUCTS */}
                <div className="mb-3 border-t pt-3">
                  <h3 className="text-gray-700 font-semibold text-sm">DATA PRODUCTS</h3>
                  <Link href="/products/know-your-business" className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                    <Users className="text-purple-600 w-5 h-5" />
                    <div>
                      <h4 className="text-sm font-medium">Know Your Business</h4>
                      <p className="text-xs text-gray-500">Business verification at scale</p>
                    </div>
                  </Link>
                  <Link href="/products/know-your-customer" className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                    <Users className="text-purple-600 w-5 h-5" />
                    <div>
                      <h4 className="text-sm font-medium">Know Your Customer</h4>
                      <p className="text-xs text-gray-500">Understand Customer Risk</p>
                    </div>
                  </Link>
                </div>

                {/* CAPITAL MARKETS */}
                <div className="border-t pt-3">
                  <h3 className="text-gray-700 font-semibold text-sm">CAPITAL MARKETS</h3>
                  <Link href="/products/lendapi-capital" className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                    <FileText className="text-purple-600 w-5 h-5" />
                    <div>
                      <h4 className="text-sm font-medium">LendAPI Capital</h4>
                      <p className="text-xs text-gray-500">Unlock high quality lending opportunities</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Solutions Dropdown */}
        <li className="relative" ref={solutionsDropdownRef}>
          <button
            className="flex items-center hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
          >
            Solutions <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300" />
          </button>
          <AnimatePresence>
            {isSolutionsDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-80 bg-white/80 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden border border-gray-200 p-4 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                <Link href="/solutions/business" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Business</span>
                  <span className="text-xs text-gray-500">Tailored for small to medium businesses</span>
                </Link>
                <Link href="/solutions/enterprise" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Enterprise</span>
                  <span className="text-xs text-gray-500">Scalable solutions for large organizations</span>
                </Link>
                <Link href="/solutions/startups" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Startups</span>
                  <span className="text-xs text-gray-500">Fast onboarding for new ventures</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Resources Dropdown */}
        <li className="relative" ref={resourcesDropdownRef}>
          <button
            className="flex items-center hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
          >
            Resources <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300" />
          </button>
          <AnimatePresence>
            {isResourcesDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-80 bg-white/80 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden border border-gray-200 p-4 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                <Link href="/resources/blog" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Blog</span>
                  <span className="text-xs text-gray-500">Latest fintech insights</span>
                </Link>
                <Link href="/resources/guides" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Guides</span>
                  <span className="text-xs text-gray-500">In-depth tutorials and tips</span>
                </Link>
                <Link href="/resources/webinars" className="flex flex-col mt-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-medium">Webinars</span>
                  <span className="text-xs text-gray-500">Expert-led sessions</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Static Links */}
        <li>
          <Link href="/marketplace" className="hover:text-purple-700 transition-colors duration-200 cursor-pointer">
            Marketplace
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:text-purple-700 transition-colors duration-200 cursor-pointer">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-purple-700 transition-colors duration-200 cursor-pointer">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <motion.button
          className="border border-gray-300 px-4 py-2 rounded-md text-gray-800 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/login"}
        >
          Login
        </motion.button>
        <motion.button
          className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/get-started"}
        >
          Get Started
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-2xl cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-white/80 backdrop-blur-lg shadow-xl flex flex-col items-center py-6 space-y-6 text-gray-800 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <li><Link href="/products" className="hover:text-purple-700 text-lg cursor-pointer">Products</Link></li>
            <li><Link href="/solutions" className="hover:text-purple-700 text-lg cursor-pointer">Solutions</Link></li>
            <li><Link href="/resources" className="hover:text-purple-700 text-lg cursor-pointer">Resources</Link></li>
            <li><Link href="/marketplace" className="hover:text-purple-700 text-lg cursor-pointer">Marketplace</Link></li>
            <li><Link href="/pricing" className="hover:text-purple-700 text-lg cursor-pointer">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-purple-700 text-lg cursor-pointer">Contact Us</Link></li>
            <motion.button
              className="border border-gray-300 px-4 py-2 rounded-md text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/login"}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-purple-700 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/get-started"}
            >
              Get Started
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}