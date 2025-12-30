import React, { useState } from "react";
import InputBox from "../../components/Input";
import { sortByOptions, VaultSortOptions } from "../../utils/DropdownOptions";

const VaultHeader = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (value) => {
    setSort(value);
  };
  const handleSortByChange = (value) => {
    setSortBy(value);
  };
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex items-center justify-end">
        <div className="w-3/5 flex items-center justify-end">
          {" "}
          <div className="w-4/5 flex items-center justify-end">
            <InputBox
              type="search"
              value={search}
              name={"search"}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Search"}
              label={"Search"}
            />
          </div>
          <div className="flex items-center justify-center gap-1 w-full">
            <InputBox
              type={"sort"}
              onChange={handleSortChange}
              options={VaultSortOptions}
              label={"Sort"}
              value={sort}
            />

            <InputBox
              type={"sort"}
              onChange={handleSortByChange}
              options={sortByOptions}
              label={"Sort By"}
              dropdownLabel={"Sort By"}
              value={sortBy}
              disabled={!sort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultHeader;
