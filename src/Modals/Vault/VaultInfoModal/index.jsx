import React, { useState } from "react";
import MakeModal from "../../../components/MakeModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { notifier } from "../../../components/Notifier";
import InputBox from "../../../components/Input";
import { FiEdit2 } from "react-icons/fi";

const VaultInfoModal = ({ setModal, setMode, setRowData }) => {
  const [state, setState] = useState({
    vaultName: "Eduzenix",
    storageUsed: "0.8",
    totalStorage: "1",
    collaborators: "4",
    fileCount: "154",
    projectKey: "EDU-7K9F2A",
    status: "ACTIVE",
  });
  const [errors, setErrors] = useState({
    vaultName: "",
    storageUsed: "",
    totalStorage: "",
    collaborators: "",
    fileCount: "",
    projectKey: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const [hidden, setHidden] = useState(true);
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      notifier.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEdit = () => {
    setModal("ADD_PROJECT");
  };

  return (
    <MakeModal>
      <div className="min-w-[50%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
        <div className="absolute top-3 right-8 flex items-center justify-end gap-2">
          <button
            className="p-2 text-xs bg-sky-500 text-white rounded-full cursor-pointer"
            onClick={() => {
              setRowData({
                projectName: "SofDoc",
                storageAllocation: "UNLIMITED",
                totalStorage: "",
              });
              setMode("edit");
              setModal("ADD_PROJECT");
            }}
          >
            {" "}
            <FiEdit2 />
          </button>
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
          <h1 className="text-gray-600 font-semibold ">Project Information</h1>
        </div>

        <div className="px-8 py-4 w-full">
          <div className="grid grid-cols-3 gap-8 ">
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Project Name</h1>
              <p className="text-gray-700">{state?.vaultName}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Storage Used</h1>
              <p className="text-gray-700">{state?.storageUsed} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Total Storage</h1>
              <p className="text-gray-700">{state?.totalStorage} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Collaborators</h1>
              <p className="text-gray-700">{state?.collaborators} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Files</h1>
              <p className="text-gray-700">{state?.fileCount}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Status</h1>
              <p className="text-gray-700">{state?.status}</p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Project key</h1>
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-700">
                  {hidden ? "XXXXXXXXXX" : state?.projectKey}
                </p>
                <button
                  className="text-textPrimary text-xl cursor-pointer"
                  onClick={() => setHidden(!hidden)}
                >
                  {hidden ? <LuEye /> : <LuEyeOff />}
                </button>
                <button
                  className="text-textPrimary text-lg cursor-pointer"
                  onClick={() => handleCopy(state.projectKey)}
                >
                  <MdContentCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MakeModal>
  );
};

export default VaultInfoModal;
