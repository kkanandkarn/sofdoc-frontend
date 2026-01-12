import React, { useEffect, useRef, useState } from "react";
import Table from "../../components/Table";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import VaultHeader from "./VaultHeader";
import { LuEye } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { vaultProjects } from "../../utils/constant";
import { Link } from "react-router-dom";
import AddVaultModal from "../../Modals/Vault/AddVaultModal";
import VaultInfoModal from "../../Modals/Vault/VaultInfoModal";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  PiDotsThreeOutlineFill,
  PiDotsThreeOutlineVerticalFill,
} from "react-icons/pi";
import EnvironmentModal from "../../Modals/Vault/EnvironmentModal";

const VaultContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowData, setRowData] = useState({});
  const [mode, setMode] = useState("add");
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [modal, setModal] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menuKey) => {
    console.log("HANDLE CLICK");
    console.log("MENU KEY: ", menuKey);
    setOpenMenuId(null);

    setModal(menuKey);
  };

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
          data: (
            <Link
              to={`/vault/${vault.id}/files`}
              className=" text-sky-500 cursor-pointer hover:underline"
            >
              {vault.vaultName}
            </Link>
          ),
        },
        {
          key: "storage",
          data: `${vault.storageUsed}/${vault.totalStorage} GB`,
        },
        {
          key: "collaborators",
          data: vault.collaborators,
        },
        {
          key: "files",
          data: vault.fileCount,
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
            <div className="relative" ref={menuRef}>
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === vault.id ? null : vault.id)
                }
                className="text-lg cursor-pointer"
              >
                <PiDotsThreeOutlineVerticalFill />
              </button>

              {openMenuId === vault.id && (
                <ActionMenu vault={vault} onClose={() => setOpenMenuId(null)} />
              )}
            </div>
          ),
        },
      ],
    }));

  const ActionMenu = ({ vault, onClose }) => {
    return (
      <div
        className="absolute top-6 right-0 bg-white shadow-lg border rounded-md z-50 w-44 gap-2 py-2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            console.log("INFO");
            handleMenuClick("VAULT_INFO");
          }}
        >
          Project Info
        </button>

        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            handleMenuClick("PROJECT_ENVIRONMENT");
          }}
        >
          Project Environment
        </button>
      </div>
    );
  };

  const columns = [
    { key: "sno", label: "S No." },
    { key: "vaultName", label: "Project Name" },
    { key: "storage", label: "Storage" },
    { key: "collaborators", label: "Collaborators" },
    { key: "files", label: "Files" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];
  const rows = mapProductsToRows(vaultProjects);

  return (
    <div className="min-h-96 h-full flex flex-col gap-2">
      <VaultHeader
        setMode={setMode}
        setRowData={setRowData}
        setModal={setModal}
      />

      <Table
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        columns={columns}
        rows={rows}
        currentPage={currentPage}
        onPageChange={onPageChange}
        total={250}
        tableName={"Vault Details"}
      />
      {modal === "ADD_PROJECT" && (
        <AddVaultModal data={rowData} setModal={setModal} mode={mode} />
      )}
      {modal === "VAULT_INFO" && (
        <VaultInfoModal
          setMode={setMode}
          setRowData={setRowData}
          setModal={setModal}
        />
      )}
      {modal === "PROJECT_ENVIRONMENT" && (
        <EnvironmentModal setModal={setModal} />
      )}
    </div>
  );
};

export default VaultContainer;
