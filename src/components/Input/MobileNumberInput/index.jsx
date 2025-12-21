import React from "react";
import MobileInputBox from "./MobileInputBox";

const MobileNumberInput = () => {
  const handleMobileChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 10) {
      props.onChange(e);
    }
  };

  return (
    <MobileInputBox
      error={props.error}
      required={props.required}
      label={props.label}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      value={props.value}
      name={props.name}
      onChange={handleMobileChange}
      type={props.type}
      ref={props.ref}
      disabled={props.disabled}
      placeholder={props.placeholder}
    />
  );
};

export default MobileNumberInput;
