import React from "react";

const Button = ({
  variant = "primary",
  onClick,
  label,
  iconPrfix,
  iconSuffix,
  additionalClass,
}) => {
  const baseClasses = ` font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer font-poppins text-sm ${
    additionalClass ? additionalClass : ""
  } `;
  const variantClasses =
    variant === "primary"
      ? "bg-sky-500 hover:bg-sky-600 text-white ease-in-out duration-300"
      : "bg-slate-700 hover:bg-slate-800 text-white ease-in-out duration-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {iconPrfix && <span>{iconPrfix}</span>}
      <span>{label}</span>
      {iconSuffix && <span>{iconSuffix}</span>}
    </button>
  );
};

export default Button;
