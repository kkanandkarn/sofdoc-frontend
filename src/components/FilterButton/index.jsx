import React from "react";
import { IoFilterSharp } from "react-icons/io5";

const FilterButton = () => {
  return (
    <button className="border-2 rounded-lg border-[#1976d2] flex items-center justify-center gap-2 py-2 px-4">
      <IoFilterSharp />
      Filter
    </button>
  );
};

export default FilterButton;
