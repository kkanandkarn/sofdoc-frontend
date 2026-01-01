import React, { useState } from "react";
import Table from "../../components/Table";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import VaultHeader from "./VaultHeader";

const VaultContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const apiProducts = [
    {
      id: 1,
      vaultName: "Xley",
      spaceUsed: "0.8",
      totalSpace: "1",
      collaborators: "4",
      files: "154",
      status: "ACTIVE",
    },
    {
      id: 1,
      vaultName: "Xley-Whitelist",
      spaceUsed: "0.4",
      totalSpace: "1",
      collaborators: "2",
      files: "32",
      status: "ACTIVE",
    },
  ];

  const mapProductsToRows = (vaults) =>
    vaults.map((vault, index) => ({
      id: vault.id,
      cells: [
        {
          key: "sno",
          data: index + 1,
        },
        {
          key: "vaultName",
          data: vault.vaultName,
        },
        {
          key: "size",
          data: `${vault.spaceUsed}/${vault.totalSpace} GB`,
        },
        {
          key: "collaborators",
          data: vault.collaborators,
        },
        {
          key: "files",
          data: vault.files,
        },

        {
          key: "status",
          data: (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                vault.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {vault.status}
            </span>
          ),
        },
        {
          key: "actions",
          data: (
            <div className="flex gap-2">
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
    { key: "vaultName", label: "Project Name" },
    { key: "size", label: "Size" },
    { key: "collaborators", label: "Collaborators" },
    { key: "files", label: "Files" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];
  const rows = mapProductsToRows(apiProducts);

  return (
    <div className="w-full flex flex-col gap-2">
      <VaultHeader />

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

export default VaultContainer;
