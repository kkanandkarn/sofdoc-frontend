import React from "react";
import RangeFilter from "./RangeFilter";

const Filter = ({ filterOptions, filterData, setFilterData }) => {
  return (
    <div className="w-full">
      <h1 className="text-gray-600 font-semibold pt-4 pb-2 w-full">Filters</h1>
      <div className="flex flex-col items-center justify-start gap-2">
        {filterOptions?.map((filterObj, index) => (
          <div key={index} className="w-full bg-gray-50 py-2 px-4 rounded-lg">
            {(filterObj.dataType === "range-input" ||
              filterObj.dataType === "range-dropdown") && (
              <RangeFilter
                filterObj={filterObj}
                filterData={filterData}
                setFilterData={setFilterData}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
