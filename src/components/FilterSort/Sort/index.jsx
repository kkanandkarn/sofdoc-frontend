import React from "react";
import InputBox from "../../Input";

const Sort = ({ sortOptions, sortData, setSortData }) => {
  const handleSort = (value) => {
    setSortData((prev) => ({ ...prev, sort: value }));
  };
  const handleSortBy = (value) => {
    setSortData((prev) => ({ ...prev, sortBy: value }));
  };
  const sortByOptions = [
    {
      value: "asc",
      label: "ASC",
    },
    {
      value: "desc",
      label: "DESC",
    },
  ];
  return (
    <div className="pt-2 pb-4">
      <h1 className="text-gray-600 font-semibold pt-4 pb-2 w-full">
        Sort Options
      </h1>
      <div className="flex items-center justify-between gap-2 w-full bg-gray-50 py-2 px-4 rounded-lg">
        <div className="w-1/2">
          {" "}
          <InputBox
            type="dropdown"
            label={"Sort"}
            options={sortOptions}
            value={sortData.sort}
            onChange={handleSort}
          />
        </div>

        <div className="w-1/2">
          <InputBox
            type="dropdown"
            label={"Sort By"}
            options={sortByOptions}
            value={sortData.sortBy}
            onChange={handleSortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default Sort;
