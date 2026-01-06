import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import FilterSortModal from "../Modal/FilterSortModal";
import { MdDelete } from "react-icons/md";

const FilterButton = ({ filterOptions, sortOptions, handleSubmit }) => {
  const [modal, setModal] = useState(false);
  const handleClose = (data) => {
    setModal(false);

    handleSubmit(data ?? null);
  };
  const [sortData, setSortData] = useState({
    sort: "",
    sortBy: "",
  });
  const [filterData, setFilterData] = useState({});

  return (
    <div>
      <button
        className="border-2 rounded-lg border-[#1976d2] flex items-center justify-center gap-2 py-2 px-4 text-xl text-[#1976d2] cursor-pointer"
        onClick={() => setModal(true)}
      >
        <IoFilterSharp /> <LuArrowDownUp />
      </button>

      {modal && (
        <FilterSortModal
          filterOptions={filterOptions}
          handleSubmit={handleClose}
          sortOptions={sortOptions}
          filterData={filterData}
          sortData={sortData}
          setFilterData={setFilterData}
          setSortData={setSortData}
        />
      )}
    </div>
  );
};

export default FilterButton;
