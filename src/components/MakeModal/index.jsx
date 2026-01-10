import React from "react";

const MakeModal = ({ children }) => {
  return (
    <div
      className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-center z-999"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {children}
    </div>
  );
};

export default MakeModal;
