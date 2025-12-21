import React from "react";

const NumberInput = (props) => {
  const handleNumberChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      props.onChange(e);
    }
  };
  return (
    <div className="h-28 w-full px-2 flex flex-col gap-2">
      <label className="text-sm text-left font-poppins block mb-1 text-[#1976d2] font-bold dark:font-light dark:text-white">
        {props.label} {props.required && "*"}
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className={`w-full font-poppins px-4 py-3 border-2 dark:border text-black dark:text-white ${
          props.error?.length
            ? "border-red-400"
            : "border-[#1976d2] dark:border-white/20"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none dark:focus:ring-2 dark:focus:ring-[#6a5af9] ${
          props.disabled ? "bg-gray-900 " : "bg-transparent"
        }`}
        autoFocus={props.autoFocus}
        name={props.name}
        value={props.value}
        onChange={handleNumberChange}
        required={props.required}
        ref={props.ref}
        disabled={props.disabled}
      />
      {props.error?.length > 0 && (
        <p className="text-red-400 text-sm">{props.error}</p>
      )}
    </div>
  );
};

export default NumberInput;
