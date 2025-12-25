import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

const RegisterHeaderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { userType } = useParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center justify-end px-10 py-4 text-sm text-textPrimary"
      ref={dropdownRef}
    >
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none cursor-pointer"
        >
          Sign Up as {userType === "individual" ? "Individual" : "Organisation"}
          <svg
            className={`w-3 h-3 ml-1 transform transition-transform ${
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

        {isOpen && (
          <div className="absolute left-0 mt-1 w-40 rounded border border-gray-200 bg-white shadow-md z-30">
            <div className="flex flex-col py-1">
              <Link
                to="/register/individual"
                className="px-3 py-2 text-xs hover:bg-gray-50 text-gray-700 border-b border-gray-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                Individual
              </Link>
              <Link
                to="/register/organisation"
                className="px-3 py-2 text-xs hover:bg-gray-50 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Organisation
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterHeaderContainer;
