import React from "react";

const TextAreaInput = (props) => {
  return (
    <div className="h-44  w-full px-2 flex flex-col gap-2 ">
      <label className="text-sm text-left font-poppins block mb-1 text-white">
        {props.label} {props.required && "*"}
      </label>
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        className={`w-full px-4 py-3 font-poppins  border text-white ${
          props.error?.length ? "border-red-400" : "border-white/20"
        } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
          props.disabled ? "bg-gray-900 " : "bg-transparent"
        }`}
        autoFocus={props.autoFocus}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        ref={props.ref}
        disabled={props.disabled}
        rows={4}
      />
      {props.error?.length > 0 && (
        <p className="text-red-400 text-sm">{props.error}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
