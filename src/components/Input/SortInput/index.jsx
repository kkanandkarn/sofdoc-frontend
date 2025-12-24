import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCheckCheck } from "react-icons/lu";

const SortInput = (props) => {
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
      setDropdownLabel(findLabel ? findLabel.label : `Choose ${props.label}`);
    }
  }, [props.options]);
  return (
    <div
      className="h-16  w-full px-2 flex flex-col gap-1 relative"
      ref={dropdownRef}
    >
      {props.label && (
        <label className="text-sm block text-[#1976d2] font-bold">
          {props.label} {props.required && "*"}
        </label>
      )}
      {/* Dropdown Button */}
      <button
        className={`w-full h-full px-4 py-2 border-2 relative ${
          props?.error?.length ? "border-red-400" : "border-[#1976d2]"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] bg-transparent ${
          props.disabled ? "cursor-not-allowed" : "cursor-pointer"
        } flex items-center justify-between`}
        disabled={props.disabled}
        onClick={handleDropDown}
      >
        <p className="text-black truncate">
          {dropdownLabel ?? `Choose ${props.label}`}
        </p>
        <div className="text-gray-300">
          {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown size={15} />}
        </div>
      </button>

      {/* Dropdown List */}
      {dropdownOpen && (
        <div className="absolute top-18 left-0 w-full max-h-60 overflow-y-auto rounded-lg bg-gray-700 shadow-lg">
          {props.options.length > 0 ? (
            props.options.map((option, index) => (
              <button
                key={index}
                className={`flex justify-center items-start flex-col w-full text-left px-4 py-2 mb-1 text-white hover:bg-gray-600 cursor-pointer ${
                  dropdownValue === option.value ? "bg-gray-600" : ""
                }`}
                disabled={props.disabled}
                onClick={() => handleDropdownValue(option.label, option.value)}
              >
                <div className="flex items-center gap-2 w-full">
                  {/* Reserve space for check icon */}
                  {/* <div className="w-4 flex justify-center">
                    {dropdownValue === option.value && (
                      <LuCheckCheck className="text-green-500" />
                    )}
                  </div> */}

                  {/* Label stays fixed/aligned */}
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

export default SortInput;
