import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = (props) => {
  return (
    <div className="w-full px-2 flex flex-col gap-1 relative">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500">
        <CiSearch className="text-xl" />
      </div>

      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`w-full h-full pl-10 pr-3 font-poppins py-2 border-2 text-black dark:text-white ${
          props.error?.length
            ? "border-red-400"
            : "border-[#1976d2] dark:border-white/20"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
          props.disabled ? "bg-gray-100 dark:bg-gray-900" : "bg-transparent"
        }`}
        autoFocus={props.autoFocus}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        ref={props.ref}
        disabled={props.disabled}
      />
    </div>
  );
};

export default SearchInput;
