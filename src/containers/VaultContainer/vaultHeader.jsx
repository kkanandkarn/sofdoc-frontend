import React, { useState } from "react";
import InputBox from "../../components/Input";

const VaultHeader = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex items-center justify-end">
        <div className="w-3/5 flex items-center justify-end">
          {" "}
          <div className="w-1/2 flex items-center justify-end">
            <InputBox
              type="text"
              value={search}
              name={"search"}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Search"}
              hideError={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultHeader;
