import React, { useState } from "react";
import InputBox from "../../../components/Input";
import FilterButton from "../../../components/FilterButton";
import Button from "../../../components/Button";
import { LuCirclePlus } from "react-icons/lu";

const TeamsHeader = ({ setMode, setRowData, setModal }) => {
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
      key: "role",
      label: "Role",
      dataType: "dropdown",
      options: [
        {
          value: "ADMIN",
          label: "ADMIN",
        },
        {
          value: "COLLABORATOR",
          label: "COLLABORATOR",
        },
      ],
    },
    {
      key: "status",
      label: "Status",
      dataType: "dropdown",
      options: [
        {
          value: "ACTIVE",
          label: "Active",
        },
        {
          value: "INVITE_SENT",
          label: "INVITE_SENT",
        },
        {
          value: "HOLD",
          label: "HOLD",
        },
        {
          value: "SUSPENDED",
          label: "SUSPENDED",
        },
      ],
    },
  ];
  const sortOptions = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "username",
      label: "Username",
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
              label={"Add Member"}
              onClick={() => {
                setRowData({});
                setMode("add");
                setModal("ADD_TEAM_MEMBER");
              }}
              iconPrfix={<LuCirclePlus size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsHeader;
