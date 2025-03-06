"use client";

import { useState } from "react";
import { ChevronDown, LayoutGrid, Users, FileText } from "lucide-react";

export default function ProductDrop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Dropdown Button */}
      <button
        className="w-full flex items-center justify-between px-2 py-2 bg-white shadow-md rounded-md border border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">Products</span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-md border border-gray-200 p-4 z-10">
          {/* PLATFORM PRODUCTS */}
          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold text-sm">PLATFORM PRODUCTS</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <LayoutGrid className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Decision Engine</h4>
                <p className="text-xs text-gray-500">Smarter lending, Simplified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <FileText className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Product Studio</h4>
                <p className="text-xs text-gray-500">Build applications in minutes</p>
              </div>
            </div>
          </div>

          {/* DATA PRODUCTS */}
          <div className="mb-3 border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">DATA PRODUCTS</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Users className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Know Your Business</h4>
                <p className="text-xs text-gray-500">Business verification at scale</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Users className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Know Your Customer</h4>
                <p className="text-xs text-gray-500">Understand Customer Risk</p>
              </div>
            </div>
          </div>

          {/* CAPITAL MARKETS */}
          <div className="border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">CAPITAL MARKETS</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <FileText className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">LendAPI Capital</h4>
                <p className="text-xs text-gray-500">Unlock high quality lending opportunities</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
