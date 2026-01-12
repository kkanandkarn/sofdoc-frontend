import React, { useEffect, useState } from "react";
import MakeModal from "./../../../components/MakeModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputBox from "../../../components/Input";
import { STORAGE_TYPE_OPTIONS } from "../../../utils/constant";
import { notifier } from "./../../../components/Notifier/index";
import Button from "../../../components/Button";
import { FaSave } from "react-icons/fa";

const AddVaultModal = ({ mode, data, setModal }) => {
  const [state, setState] = useState({
    projectName: "",
    storageAllocation: "UNLIMITED",
    totalStorage: "",
  });
  const [errors, setErrors] = useState({
    projectName: "",
    storageAllocation: "",
    totalStorage: "",
  });
  useEffect(() => {
    if (mode === "edit" && data) {
      setState(data);
    }
  }, [mode, data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "totalStorage") {
      // regex for float numbers (e.g. 1, 1.5, 0.25)
      const floatRegex = /^(\d+(\.)?|\d*\.\d+)$/;

      if (!floatRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          totalStorage: "Only numeric decimal values are allowed",
        }));
        return;
      }
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleStorageChange = (value) => {
    setState((prev) => ({
      ...prev,
      storageAllocation: value,
    }));
    setErrors((prev) => ({
      ...prev,
      storageAllocation: "",
    }));
  };
  const handleSubmit = () => {
    notifier.success("Project Added Successfully");
    setModal("");
  };

  return (
    <MakeModal>
      <div className="min-w-[35%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
        <div className="absolute top-3 right-8">
          <button
            onClick={() => {
              setModal("");
            }}
            className="text-3xl cursor-pointer text-red-500"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 py-4">
          <h1 className="text-gray-600 font-semibold ">
            {mode === "edit" ? "Update Project" : "Add project"}
          </h1>
        </div>
        <div className="p-4">
          <InputBox
            type="text"
            value={state.projectName}
            name={"projectName"}
            error={errors.projectName}
            label={"Project Name"}
            onChange={handleChange}
            placeholder={"Sofdoc Bakend"}
            autoFocus={true}
            required={true}
          />
          <div className="text-sm text-left font-poppins block mb-1 text-[#1976d2] font-bold">
            Storage Allocation Type *
          </div>

          <div className="flex items-center justify-between gap-2 py-4">
            <button
              className={`w-1/2 flex items-center justify-center flex-1 py-3 px-4 rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                state.storageAllocation === "UNLIMITED"
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
              onClick={() => handleStorageChange("UNLIMITED")}
            >
              UNLIMITED
            </button>
            <button
              className={`w-1/2 flex items-center justify-center flex-1 py-3 px-4 rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                state.storageAllocation === "LIMITED"
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
              onClick={() => handleStorageChange("LIMITED")}
            >
              LIMITED
            </button>
          </div>
          {state.storageAllocation === "LIMITED" && (
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <InputBox
                  type="text"
                  value={state.totalStorage}
                  name={"totalStorage"}
                  error={errors.totalStorage}
                  label={"Storage Amount"}
                  onChange={handleChange}
                  placeholder={"0.5"}
                  required={true}
                />
                <div className="h-12 px-2 py-1 rounded-lg flex items-center justify-center border-2 border-textPrimary text-textPrimary">
                  GB
                </div>
              </div>
              <div className="flex items-center justify-start text-gray-600 text-sm">
                Enter value in GB. Only numeric decimal values are allowed.
                (e.g. 0.5)
              </div>
            </div>
          )}
          <div className="flex items-center justify-end gap-2 py-4">
            <Button
              label={"Cancel"}
              onClick={() => setModal("")}
              variant="secondry"
            />
            <Button
              label={"Save"}
              iconPrfix={<FaSave size={18} />}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </MakeModal>
  );
};

export default AddVaultModal;
