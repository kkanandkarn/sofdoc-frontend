import React, { useEffect, useRef, useState } from "react";
import {
  vaultEnvironmentOptions,
  vaultFileDetails,
} from "../../utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import FileDetailsContainer from "./FileDetailsContainer";
import { FaArrowLeft, FaEye, FaFileShield } from "react-icons/fa6";
import {
  LuCirclePlus,
  LuFiles,
  LuInfo,
  LuUpload,
  LuUsers,
} from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { formatDateTime } from "../../utils/functions";
import { FiTrash2 } from "react-icons/fi";
import InputBox from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import CollaboratorDetailsContainer from "./CollaboratorDetailsContainer";
import AddEnvironmentModal from "../../Modals/Vault/AddEnvironmentModal";
import VaultInfoModal from "../../Modals/Vault/VaultInfoModal";
import AddVaultModal from "../../Modals/Vault/AddVaultModal";
import { MdOutlineCloudUpload } from "react-icons/md";

const VaultDetailsContainer = () => {
  const { vaultId, tab } = useParams();
  const [env, setEnv] = useState(1);
  const [dropdownWidth, setDropdownWidth] = useState("auto"); // state for width
  const [modal, setModal] = useState("");
  const [rowData, setRowData] = useState({});
  const [mode, setMode] = useState("add");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("Selected file:", file);

    // 👉 call API or store file in state
  };

  const handleTabChange = (newTab) => {
    navigate(`/vault/${vaultId}/${newTab}`);
  };

  const handleEnvChange = (value) => {
    setEnv(value);
  };

  const getEnvLabel = (value) => {
    const envData = vaultEnvironmentOptions.find(
      (option) => option.value === value
    );
    return envData.label;
  };

  // Calculate the longest label length for dropdown width
  useEffect(() => {
    if (vaultEnvironmentOptions?.length) {
      const longestLabel = vaultEnvironmentOptions
        .map((opt) => `${opt.label} Environment`)
        .reduce((a, b) => (a.length > b.length ? a : b), "");
      // set width in `ch` units based on longest label
      setDropdownWidth(`${longestLabel.length + 5}ch`);
    }
  }, []);

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-2">
          <button
            className="text-textPrimary border-textPrimary py-1 px-2 border rounded-lg cursor-pointer"
            onClick={() => navigate("/vault")}
          >
            <FaArrowLeft />
          </button>
          <h1 className="text-gray-600 font-semibold">Vault Details</h1>
        </div>
        <div className="flex justify-end items-center gap-2 w-1/2">
          <div className="flex items-center justify-center">
            <Dropdown
              label={`${getEnvLabel(env)} Environment`}
              onChange={handleEnvChange}
              options={vaultEnvironmentOptions}
            />
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Shield Button */}
          {tab === "files" && (
            <button
              data-tooltip-id="upload-file"
              data-tooltip-content="Upload File"
              className={`text-lg text-[#1976d2] border-2 p-2 rounded-lg border-[#1976d2] cursor-pointer `}
              onClick={handleButtonClick}
            >
              <LuUpload />
            </button>
          )}

          {tab === "collaborators" && (
            <button
              data-tooltip-id="add-collaborator"
              data-tooltip-content="Add Collaborator"
              className={`text-lg text-[#1976d2] border-2 p-2 rounded-lg border-[#1976d2] cursor-pointer `}
            >
              <LuCirclePlus />
            </button>
          )}

          <button
            data-tooltip-id="shield-tooltip"
            data-tooltip-content="Files"
            className={`text-lg text-[#1976d2] border-2 p-2 rounded-lg border-[#1976d2] cursor-pointer ${
              tab === "files" ? "bg-[#1976d2] text-white" : ""
            }`}
            disabled={tab === "files"}
            onClick={() => handleTabChange("files")}
          >
            <LuFiles />
          </button>

          {/* Users Button */}
          <button
            data-tooltip-id="users-tooltip"
            data-tooltip-content="Collaborators"
            className={`text-lg text-[#1976d2] border-2 p-2 rounded-lg border-[#1976d2] cursor-pointer ${
              tab === "collaborators" ? "bg-[#1976d2] text-white" : ""
            }`}
            disabled={tab === "collaborators"}
            onClick={() => handleTabChange("collaborators")}
          >
            <LuUsers />
          </button>

          {/* Info Button */}
          <button
            data-tooltip-id="info-tooltip"
            data-tooltip-content="Info"
            className={`text-lg text-[#1976d2] border-2 p-2 rounded-lg border-[#1976d2] cursor-pointer ${
              tab === "info" ? "bg-[#1976d2] text-white" : ""
            }`}
            onClick={() => setModal("VAULT_INFO")}
          >
            <LuInfo />
          </button>

          {/* Tooltips */}
          <Tooltip id="upload-file" place="top" />
          <Tooltip id="add-collaborator" place="top" />
          <Tooltip id="shield-tooltip" place="top" />

          <Tooltip id="users-tooltip" place="top" />
          <Tooltip id="info-tooltip" place="top" />
        </div>
      </div>

      {/* vault details */}
      <div className="w-full">
        {tab === "files" && <FileDetailsContainer env={env} />}
        {tab === "collaborators" && <CollaboratorDetailsContainer env={env} />}
      </div>
      {modal === "ADD_ENVIRONMENT" && (
        <AddEnvironmentModal setModal={setModal} />
      )}
      {modal === "VAULT_INFO" && (
        <VaultInfoModal
          setModal={setModal}
          setMode={setMode}
          setRowData={setRowData}
        />
      )}
      {modal === "ADD_PROJECT" && (
        <AddVaultModal data={rowData} setModal={setModal} mode={mode} />
      )}
    </div>
  );
};

export default VaultDetailsContainer;
