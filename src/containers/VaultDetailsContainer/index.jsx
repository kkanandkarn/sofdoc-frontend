import React, { useEffect, useState } from "react";
import {
  vaultEnvironmentOptions,
  vaultFileDetails,
} from "../../utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import FileDetailsContainer from "./FileDetailsContainer";
import { FaEye, FaFileShield } from "react-icons/fa6";
import { LuFiles, LuInfo, LuUsers } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { formatDateTime } from "../../utils/functions";
import { FiTrash2 } from "react-icons/fi";
import InputBox from "../../components/Input";
import Dropdown from "../../components/Dropdown";

const VaultDetailsContainer = () => {
  const { vaultId, tab } = useParams();
  const [env, setEnv] = useState(1);
  const [dropdownWidth, setDropdownWidth] = useState("auto"); // state for width

  const navigate = useNavigate();

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

  const mapFilesToRows = (files) =>
    files?.length &&
    files?.map((file, index) => ({
      id: file.id,
      cells: [
        { key: "sno", data: index + 1 },
        {
          key: "originalFileName",
          data: (
            <a href={file.fileUrl} className={`text-[#1976d2]`} target="_blank">
              {file.originalFileName}
            </a>
          ),
        },
        { key: "fileType", data: file.fileType },
        { key: "sizeInMb", data: `${file.sizeInMb} Mb` },
        { key: "uploadedBy", data: file.uploadedBy.name },
        { key: "uploadedAt", data: formatDateTime(file.uploadedAt) },
        {
          key: "actions",
          data: (
            <div className="flex gap-2">
              <a
                href={file.fileUrl}
                className={`p-2 bg-sky-500 text-white rounded-full cursor-pointer`}
                target="_blank"
              >
                <FaEye size={12} />
              </a>
              <button className="p-2 bg-sky-500 text-white rounded-full cursor-pointer">
                <FiTrash2 size={12} />
              </button>
            </div>
          ),
        },
      ],
    }));

  const columns = [
    { key: "sno", label: "S No." },
    { key: "originalFileName", label: "Name" },
    { key: "fileType", label: "File Type" },
    { key: "sizeInMb", label: "Size" },
    { key: "uploadedBy", label: "Uploaded By" },
    { key: "uploadedAt", label: "Uploaded At" },
    { key: "actions", label: "Actions" },
  ];

  const rows = mapFilesToRows(vaultFileDetails.files[env]);
  console.log("DROPDOWN WIDTH: ", dropdownWidth);

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center">
        <div>
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
          {/* Shield Button */}
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
          >
            <LuInfo />
          </button>

          {/* Tooltips */}
          <Tooltip id="shield-tooltip" place="top" />
          <Tooltip id="users-tooltip" place="top" />
          <Tooltip id="info-tooltip" place="top" />
        </div>
      </div>

      {/* vault details */}
      <div className="w-full">
        {tab === "files" && (
          <FileDetailsContainer columns={columns} rows={rows} />
        )}
      </div>
    </div>
  );
};

export default VaultDetailsContainer;
