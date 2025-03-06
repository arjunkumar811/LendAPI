"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, Briefcase, Globe, TrendingUp } from "lucide-react";

export default function SolutionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Dropdown Button */}
      <button
        className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-md rounded-md border border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">Solutions</span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-200 p-4 z-10">
          {/* RISK MANAGEMENT */}
          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold text-sm">RISK MANAGEMENT</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <ShieldCheck className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Fraud Prevention</h4>
                <p className="text-xs text-gray-500">Identify and mitigate risks effectively</p>
              </div>
            </div>
          </div>

          {/* BUSINESS SOLUTIONS */}
          <div className="mb-3 border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">BUSINESS SOLUTIONS</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Briefcase className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Enterprise Lending</h4>
                <p className="text-xs text-gray-500">Scalable lending solutions for businesses</p>
              </div>
            </div>
          </div>

          {/* GLOBAL EXPANSION */}
          <div className="mb-3 border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">GLOBAL EXPANSION</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Globe className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Cross-Border Payments</h4>
                <p className="text-xs text-gray-500">Seamless international transactions</p>
              </div>
            </div>
          </div>

          {/* GROWTH STRATEGY */}
          <div className="border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">GROWTH STRATEGY</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <TrendingUp className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Revenue Optimization</h4>
                <p className="text-xs text-gray-500">Maximize your business potential</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
