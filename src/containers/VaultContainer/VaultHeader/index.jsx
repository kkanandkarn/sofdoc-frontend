import React, { useState } from "react";
import InputBox from "../../../components/Input";
import FilterButton from "../../../components/FilterButton";
import Button from "../../../components/Button";
import { LuCirclePlus } from "react-icons/lu";

const VaultHeader = ({ setMode, setRowData, setModal }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSubmit = (data) => {
    if (data) {
      console.log("FILTER AND SORT DATA: ", data);
    } else {
      console.log("No filter applied");
    }
  };
  const filterOptions = [
    {
      key: "spaceUsed",
      label: "Space Used",
      dataType: "range-input",
    },
    {
      key: "totalSpace",
      label: "Total Space",
      dataType: "range-dropdown",
      leftOptions: [
        {
          value: "100",
          label: "100",
        },
        {
          value: "500",
          label: "500",
        },
      ],
      rightOptions: [
        {
          value: "1000",
          label: "1000",
        },
        {
          value: "5000",
          label: "5000",
        },
      ],
    },
    {
      key: "collaborators",
      label: "Collaborators",
      dataType: "range-input",
    },
    {
      key: "files",
      label: "Files",
      dataType: "range-input",
    },
  ];
  const sortOptions = [
    {
      value: "spaceUsed",
      label: "Space Used",
    },
    {
      value: "totalSpace",
      label: "Total Space",
    },
  ];
  return (
    <div className="bg-white w-full rounded-lg py-2 ">
      <div className="flex items-center justify-between">
        <div className="w-72 flex items-center justify-end">
          <InputBox
            type="search"
            value={search}
            name={"search"}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Search"}
            label={"Search"}
          />
        </div>
        <div className="w-3/5 flex items-center justify-end gap-2">
          {" "}
          <div>
            <FilterButton
              filterOptions={filterOptions}
              sortOptions={sortOptions}
              handleSubmit={handleSubmit}
            />
          </div>
          <div>
            <Button
              label={"Add Project"}
              onClick={() => {
                setRowData({});
                setMode("add");
                setModal("ADD_PROJECT");
              }}
              iconPrfix={<LuCirclePlus size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultHeader;
