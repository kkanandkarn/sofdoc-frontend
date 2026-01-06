import React, { useEffect, useState } from "react";
import InputBox from "../../../Input";

const RangeFilter = ({ filterObj, filterData, setFilterData }) => {
  const objetKey = filterObj.key;
  const [state, setState] = useState({
    leftNumber: "",
    rightNumber: "",
  });
  useEffect(() => {
    if (filterData[objetKey]) {
      setState(filterData[objetKey]);
    }
  }, [filterData]);
  console.log("STATE: ", state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!filterData[objetKey]) {
      filterData[objetKey] = {};
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFilterData((prev) => ({
      ...prev,
      [objetKey]: {
        ...prev[objetKey],
        [name]: value,
      },
    }));
  };
  const handleLeftChange = (value) => {
    setState((prev) => ({
      ...prev,
      leftNumber: value,
    }));
    setFilterData((prev) => ({
      ...prev,
      [objetKey]: {
        ...prev[objetKey],
        leftNumber: value,
      },
    }));
  };
  const handleRightChange = (value) => {
    setState((prev) => ({
      ...prev,
      rightNumber: value,
    }));
    setFilterData((prev) => ({
      ...prev,
      [objetKey]: {
        ...prev[objetKey],
        rightNumber: value,
      },
    }));
  };
  return (
    <div className="w-full">
      <h1 className="mb-1 flex items-center justify-center text-gray-600 ">
        {filterObj.label}
      </h1>
      <div className="flex items-center justify-between w-full gap-2">
        <div className="w-1/2">
          {filterObj.dataType === "range-input" ? (
            <InputBox
              type="text"
              value={state.leftNumber}
              name="leftNumber"
              label={"From"}
              onChange={handleChange}
              placeholder="e.g. 100"
              required
            />
          ) : (
            <InputBox
              type="dropdown"
              label={"From"}
              options={filterObj.leftOptions}
              value={state.leftNumber}
              onChange={handleLeftChange}
            />
          )}
        </div>
        <div className="w-1/2">
          {filterObj.dataType === "range-input" ? (
            <InputBox
              type="text"
              value={state.rightNumber}
              name="rightNumber"
              label={"To"}
              onChange={handleChange}
              placeholder="e.g. 1000"
              required
            />
          ) : (
            <InputBox
              type="dropdown"
              label={"To"}
              options={filterObj.rightOptions}
              value={state.rightNumber}
              onChange={handleRightChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
