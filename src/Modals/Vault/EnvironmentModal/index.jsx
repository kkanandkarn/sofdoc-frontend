import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaPlus, FaSearch } from "react-icons/fa";
import MakeModal from "../../../components/MakeModal";
import Table from "../../../components/Table";
import { environmentsTableData } from "../../../utils/constant";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputBox from "../../../components/Input";
import { CiSearch } from "react-icons/ci";
import EnvironmentModalHeader from "./EnvironmentModalHeader";

const EnvironmentModal = ({ setModal }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowData, setRowData] = useState({});
  const [mode, setMode] = useState("");
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [environments, setEnvironments] = useState([]);
  const [formData, setFormData] = useState({
    environment: "",
    status: "",
  });
  const [envSource, setEnvSource] = useState(environmentsTableData);

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

  const handlePrimary = (id) => {
    setEnvSource((prev) =>
      prev.map((env) => ({
        ...env,
        isPrimary: env.id === id,
      }))
    );
  };

  const handleFormChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mapDataToRows = (data) =>
    data.map((d, index) => ({
      id: d.id,
      isPrimary: d.isPrimary,
      cells: [
        {
          key: "sno",
          data: index + 1,
        },
        {
          key: "name",
          data: d.name,
        },
        {
          key: "isPrimary",
          data: (
            <>
              {" "}
              <InputBox
                type="checkbox"
                value={d.isPrimary}
                checked={d.isPrimary}
                name={"isPrimary"}
                label={""}
                onChange={() => handlePrimary(d.id)}
              />
            </>
          ),
        },

        {
          key: "status",
          data: (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                d.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {d.status}
            </span>
          ),
        },
        {
          key: "actions",
          data: (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setFormData({
                    environment: d.name,
                    status: d.status,
                  });
                  setMode("edit");
                }}
                className={`p-2 bg-sky-500 text-white rounded-full cursor-pointer`}
              >
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
    { key: "isPrimary", label: "Primary" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];

  useEffect(() => {
    setEnvironments(mapDataToRows(envSource));
  }, [envSource]);

  return (
    <MakeModal>
      <div className="min-w-[90%]  min-h-[90%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
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
          <h1 className="text-gray-600 font-semibold ">Environments</h1>
        </div>
        <div>
          <EnvironmentModalHeader
            mode={mode}
            search={search}
            setMode={setMode}
            setSearch={setSearch}
            formData={formData}
            setFormData={setFormData}
            handleFormChange={handleFormChange}
          />
        </div>

        <div className="px-4">
          <Table
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            columns={columns}
            rows={environments}
            currentPage={currentPage}
            onPageChange={onPageChange}
            total={250}
            tableName={"Environment Details"}
          />
        </div>
      </div>
    </MakeModal>
  );
};

export default EnvironmentModal;
