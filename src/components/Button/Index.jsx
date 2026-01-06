import React from "react";

const Button = ({
  variant = "primary",
  onClick,
  label,
  iconPrfix,
  iconSuffix,
  additionalClass,
}) => {
  const baseClasses = ` font-medium px-6  rounded-lg flex items-center justify-center gap-2 cursor-pointer font-poppins text-sm py-2 ${
    additionalClass ? additionalClass : ""
  } `;
  const variantClasses =
    variant === "primary"
      ? "bg-sky-500 hover:bg-sky-600 text-white ease-in-out duration-300 border-2 border-sky-500"
      : "border-2 border-gray-400  text-gray-600 ease-in-out duration-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {iconPrfix && <span>{iconPrfix}</span>}
      <span>{label}</span>
      {iconSuffix && <span>{iconSuffix}</span>}
    </button>
  );
};

export default Button;
