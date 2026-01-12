import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import InputBox from "../../../../components/Input";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../../../../components/Button";
import { notifier } from "../../../../components/Notifier";
import { statusOptions } from "../../../../utils/constant";

const EnvironmentModalHeader = ({
  mode,
  setMode,
  search,
  setSearch,
  formData,
  setFormData,
  handleFormChange,
}) => {
  return (
    <div className="h-18 px-4">
      {mode === "" && (
        <>
          <div className="w-full h-full flex items-center justify-end py-4 gap-2">
            <button
              className="flex items-center justify-center cursor-pointer border-textPrimary text-textPrimary border-2 rounded-lg p-2"
              onClick={() => setMode("search")}
            >
              {" "}
              <FaSearch />
            </button>
            <button
              className="flex items-center justify-center cursor-pointer border-textPrimary text-textPrimary border-2 rounded-lg p-2"
              onClick={() => setMode("add")}
            >
              {" "}
              <FaPlus />
            </button>
          </div>
        </>
      )}
      {mode === "search" && (
        <div className="flex items-center justify-end py-4">
          <div className="flex items-center justify-center gap-2 w-80">
            <InputBox
              type="search"
              value={search}
              name={"search"}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Search"}
              label={"Search"}
            />
            <button
              onClick={() => {
                setFormData({
                  environment: "",
                  status: "",
                });
                setSearch("");
                setMode("");
              }}
              className="text-3xl cursor-pointer text-red-500"
            >
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
      {(mode === "add" || mode === "edit") && (
        <div className="flex items-center justify-end py-4 h-full">
          <div className="flex items-center justify-center gap-2 w-1/3">
            <InputBox
              type="text"
              value={formData.environment}
              name={"environment"}
              onChange={(e) => handleFormChange("environment", e.target.value)}
              placeholder={"Enter Environment Name...."}
            />
            {mode === "edit" && (
              <InputBox
                type="dropdown"
                options={statusOptions}
                value={formData.status}
                onChange={(value) => handleFormChange("status", value)}
              />
            )}
            <button
              className="text-white px-4 py-2 rounded-lg  bg-textPrimary cursor-pointer"
              onClick={() => {
                setFormData({
                  environment: "",
                  status: "",
                });
                setMode("");
                notifier.success("Environment added successfully");
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setMode("");
                setFormData({
                  environment: "",
                  status: "",
                });
              }}
              className="text-3xl cursor-pointer text-red-500"
            >
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnvironmentModalHeader;
