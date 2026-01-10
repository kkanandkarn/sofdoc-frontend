import React, { useState } from "react";
import MakeModal from "../../../components/MakeModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { notifier } from "../../../components/Notifier";

const VaultInfoModal = ({ setModal }) => {
  const [vaultInfo, setVaultInfo] = useState({
    vaultName: "Eduzenix",
    storageUsed: "0.8",
    totalStorage: "1",
    collaborators: "4",
    fileCount: "154",
    projectKey: "EDU-7K9F2A",
    status: "ACTIVE",
  });
  const [tab, setTab] = useState("PROJECT_INFO");
  const [hidden, setHidden] = useState(true);
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      notifier.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <MakeModal>
      <div className="min-w-[50%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
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
          <h1 className="text-gray-600 font-semibold ">Project Information</h1>
        </div>

        <div className="px-8 py-4 w-full">
          <div className="grid grid-cols-3 gap-8 ">
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Project Name</h1>
              <p className="text-gray-700">{vaultInfo?.vaultName}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Storage Used</h1>
              <p className="text-gray-700">{vaultInfo?.storageUsed} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Total Storage</h1>
              <p className="text-gray-700">{vaultInfo?.totalStorage} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Collaborators</h1>
              <p className="text-gray-700">{vaultInfo?.collaborators} GB</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Files</h1>
              <p className="text-gray-700">{vaultInfo?.fileCount}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Status</h1>
              <p className="text-gray-700">{vaultInfo?.status}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Project key</h1>
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-700">
                  {hidden ? "XXXXXXXXXX" : vaultInfo?.projectKey}
                </p>
                <button
                  className="text-textPrimary text-xl cursor-pointer"
                  onClick={() => setHidden(!hidden)}
                >
                  {hidden ? <LuEye /> : <LuEyeOff />}
                </button>
                <button
                  className="text-textPrimary text-lg cursor-pointer"
                  onClick={() => handleCopy(vaultInfo.projectKey)}
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
