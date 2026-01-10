import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { LuCheck } from "react-icons/lu";

const CheckBoxInput = (props) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxValue = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };
  return (
    <div className="h-14 w-full px-2 flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2">
        <button
          className={`h-6 w-6 rounded-md transition-colors duration-200
              ${
                props.error?.length
                  ? "border-red-400 text-red-400"
                  : checked
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-400 text-gray-600"
              }  
              border-2 flex items-center justify-center cursor-pointer
            `}
          onClick={handleCheckboxValue}
        >
          {checked && <GiCheckMark className="w-3 h-3" />}
        </button>
        <p
          className={`text-sm ${
            props.error?.length ? "text-red-400" : "text-gray-600"
          }`}
        >
          {props.label ?? ""}
        </p>
      </div>

      {props.error?.length > 0 && (
        <p className="text-red-400 text-sm">{props.error}</p>
      )}
    </div>
  );
};

export default CheckBoxInput;
