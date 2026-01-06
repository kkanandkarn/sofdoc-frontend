import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";

const FilterSort = ({
  filterOptions,
  sortOptions,
  sortData,
  setSortData,
  filterData,
  setFilterData,
}) => {
  return (
    <div className="w-full">
      <Filter
        filterOptions={filterOptions}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <Sort
        setSortData={setSortData}
        sortData={sortData}
        sortOptions={sortOptions}
      />
    </div>
  );
};

export default FilterSort;
