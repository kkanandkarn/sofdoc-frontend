import React, { useState } from "react";
import { vaultCollaborators } from "../../../utils/constant";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Table from "../../../components/Table";

const CollaboratorDetailsContainer = ({ env }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const mapDataToRows = (vaults) =>
    vaults.map((collaborator, index) => ({
      id: collaborator.id,
      cells: [
        {
          key: "sno",
          data: index + 1,
        },
        {
          key: "name",
          data: collaborator.name,
        },
        {
          key: "storage",
          data:
            collaborator.storageAllocation === "UNLIMITED" ? (
              <div className="flex items-center justify-start gap-1">
                <span>{collaborator.storageUsed} GB / </span>
                <span
                  className={`px-2 py-1 text-xs rounded-full bg-green-100 text-green-700`}
                >
                  {collaborator.storageAllocation}
                </span>
              </div>
            ) : (
              <span>
                {collaborator.storageUsed} / {collaborator.totalStorage} GB
              </span>
            ),
        },

        {
          key: "files",
          data: collaborator.fileCount,
        },

        {
          key: "status",
          data: (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                collaborator.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {collaborator.status}
            </span>
          ),
        },
        {
          key: "actions",
          data: (
            <div className="flex gap-2">
              <button className="p-2 bg-sky-500 text-white rounded-full cursor-pointer">
                <FaEye size={12} />
              </button>
              <button className="p-2 bg-sky-500 text-white rounded-full cursor-pointer">
                <FiEdit2 size={12} />
              </button>
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
    { key: "name", label: "Name" },
    { key: "storage", label: "Storage" },
    { key: "files", label: "Files" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];
  const rows = mapDataToRows(vaultCollaborators.collaborators[env]);
  return (
    <div className="w-full py-4">
      {" "}
      <Table
        columns={columns}
        rows={rows}
        currentPage={currentPage}
        onPageChange={onPageChange}
        total={250}
      />
    </div>
  );
};

export default CollaboratorDetailsContainer;
