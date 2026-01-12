import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCheckCheck } from "react-icons/lu";

const DropdownInput = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const dropdownRef = useRef(null);

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownValue = (label, value) => {
    props.onChange(value);
    setDropdownLabel(label);
    setDropdownOpen(false);
    setDropdownValue(value);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (props.options.length) {
      let findLabel = props.options.find((v) => v.value === props.value);
      setDropdownLabel(findLabel ? findLabel.label : null);
    }
  }, [props.options, props.value]);
  return (
    <div
      className={`${
        props.label ? "h-28" : "h-18"
      } w-full flex flex-col items-center justify-center gap-2 relative`}
      ref={dropdownRef}
    >
      {props.label && (
        <label className="text-sm text-left font-poppins block mb-1 text-[#1976d2] font-bold dark:font-light dark:text-white">
          {props.label} {props.required && "*"}
        </label>
      )}

      {/* Dropdown Button */}
      <button
        className={`w-full px-4 py-3 border-2 relative ${
          props?.error?.length ? "border-red-400" : "border-[#1976d2]"
        } rounded-md text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6a5af9]  bg-transparent ${
          props.disabled ? "cursor-not-allowed" : "cursor-pointer"
        } flex items-center justify-between`}
        disabled={props.disabled}
        onClick={handleDropDown}
      >
        <p
          className={`${
            dropdownLabel ? "text-black" : "text-gray-500"
          } truncate`}
        >
          {dropdownLabel ?? `Choose ${props.label}`}
        </p>
        <div className="text-gray-600">
          {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown size={15} />}
        </div>
      </button>

      {props.error?.length > 0 && (
        <p className="text-red-400 text-sm">{props.error}</p>
      )}

      {/* Dropdown List */}
      {dropdownOpen && (
        <div
          className={`${
            props.label ? "top-22" : "top-18"
          } absolute  left-0 w-full max-h-44 overflow-y-auto rounded-lg bg-gray-700 shadow-lg z-10`}
        >
          {props.options.length > 0 ? (
            props.options.map((option, index) => (
              <button
                key={index}
                className={`my-1 flex justify-center items-start flex-col w-full text-left px-4 py-2 text-white hover:bg-gray-600 cursor-pointer ${
                  dropdownValue === option.value ? "bg-gray-600" : ""
                }`}
                disabled={props.disabled}
                onClick={() => handleDropdownValue(option.label, option.value)}
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-sm">{option.label}</span>
                </div>
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-400">No options available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
