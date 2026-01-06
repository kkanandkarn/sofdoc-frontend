import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import FilterSort from "../../FilterSort";
import Button from "../../Button";
import { CiCircleCheck } from "react-icons/ci";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const FilterSortModal = ({
  sortData,
  filterData,
  setFilterData,
  setSortData,
  filterOptions,
  sortOptions,
  handleSubmit,
}) => {
  const handleClear = () => {
    setSortData({
      sort: "",
      sortBy: "",
    });
    setFilterData({});
    handleSubmit();
  };
  return (
    <div
      className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-end z-999"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-[30%]  h-[100%] rounded-lg shadow-lg flex flex-col bg-white p-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-gray-600 font-semibold">
            {" "}
            Filter & Sort{" "}
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={handleClear}
              className="text-2xl cursor-pointer text-red-500"
            >
              <MdDelete />
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="text-3xl cursor-pointer text-red-500"
            >
              <IoIosCloseCircleOutline />
            </button>
            <button
              onClick={() => {
                handleSubmit({ sortData, filterData });
              }}
              className="text-3xl cursor-pointer text-[#1976d2]"
            >
              <IoCheckmarkCircleOutline />
            </button>
          </div>
        </div>
        <div className="w-full">
          <FilterSort
            setSortData={setSortData}
            sortData={sortData}
            sortOptions={sortOptions}
            filterOptions={filterOptions}
            filterData={filterData}
            setFilterData={setFilterData}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Button
              label={"Clear All"}
              variant="secondry"
              onClick={handleClear}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              label={"Cancel"}
              variant="secondry"
              onClick={() => {
                handleSubmit();
              }}
            />
            <Button
              label={"Apply"}
              onClick={() => {
                handleSubmit({ sortData, filterData });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortModal;
