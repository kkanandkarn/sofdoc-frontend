import React, { useEffect, useState } from "react";
import InputBox from "../../../Input";

const DropdownFilter = ({ filterObj, filterData, setFilterData }) => {
  const objetKey = filterObj.key;
  const [state, setState] = useState({
    value: "",
  });
  useEffect(() => {
    if (filterData[objetKey]) {
      setState(filterData[objetKey]);
    }
  }, [filterData]);

  const handleDropdownChange = (value) => {
    setState((prev) => ({
      ...prev,
      value: value,
    }));
    setFilterData((prev) => ({
      ...prev,
      [objetKey]: {
        ...prev[objetKey],
        value: value,
      },
    }));
  };

  return (
    <div className="w-full">
      <h1 className="mb-1 flex items-center justify-center text-gray-600 ">
        {filterObj.label}
      </h1>
      <div className="flex items-center justify-between w-full gap-2">
        <InputBox
          type="dropdown"
          label={filterObj.label}
          options={filterObj.options}
          value={state.value}
          onChange={handleDropdownChange}
        />
      </div>
    </div>
  );
};

export default DropdownFilter;
