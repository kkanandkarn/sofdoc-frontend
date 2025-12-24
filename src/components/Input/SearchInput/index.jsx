import React from "react";

const SearchInput = (props) => {
  return (
    <div className="h-16 w-full px-2 flex flex-col gap-1">
      {props.label && (
        <label className="text-sm text-left font-poppins block text-[#1976d2] font-bold dark:font-light dark:text-white">
          {props.label} {props.required && "*"}
        </label>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`w-full h-full font-poppins px-4 py-1 pr-4 border-2 text-black dark:text-white ${
          props.error?.length
            ? "border-red-400"
            : "border-[#1976d2] dark:border-white/20"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
          props.disabled ? "bg-gray-900" : "bg-transparent"
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
