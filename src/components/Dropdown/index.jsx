import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ label, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-4 flex w-full items-center justify-start text-textPrimary relative">
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center cursor-pointer gap-2 hover:underline focus:outline-none px-2"
        >
          {label}
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white z-20">
          {isOpen &&
            options?.length &&
            options.map((option, index) => (
              <button
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  onChange(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
