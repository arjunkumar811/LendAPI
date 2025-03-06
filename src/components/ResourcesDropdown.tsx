"use client";

import { useState } from "react";
import { ChevronDown, BookOpen, FileText, Users, GraduationCap, Code } from "lucide-react";

export default function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Dropdown Button */}
      <button
        className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-md rounded-md border border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">Resources</span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-md border border-gray-200 p-4 z-10">
          {/* ARTICLES */}
          <div className="mb-3">
            <h3 className="text-gray-700 font-semibold text-sm">ARTICLES</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <FileText className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Blogs</h4>
                <p className="text-xs text-gray-500">Insights on future finance</p>
              </div>
            </div>
          </div>

          {/* CUSTOMER STORIES */}
          <div className="mb-3 border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">CUSTOMER STORIES</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Users className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Real Solutions, Real Results</h4>
                <p className="text-xs text-gray-500">Success stories from our customers</p>
              </div>
            </div>
          </div>

          {/* GUIDES */}
          <div className="mb-3 border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">GUIDES</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <GraduationCap className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Academy</h4>
                <p className="text-xs text-gray-500">Master the basics fast</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <BookOpen className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Know Your Customer</h4>
                <p className="text-xs text-gray-500">Conversations with industry pros</p>
              </div>
            </div>
          </div>

          {/* DEVELOPERS */}
          <div className="border-t pt-3">
            <h3 className="text-gray-700 font-semibold text-sm">DEVELOPERS</h3>
            <div className="flex items-center gap-3 mt-2 p-2 hover:bg-gray-100 rounded-md">
              <Code className="text-purple-600" />
              <div>
                <h4 className="text-sm font-medium">Developer Hub</h4>
                <p className="text-xs text-gray-500">Build, test, and integrate faster</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
