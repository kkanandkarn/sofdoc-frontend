import React, { useEffect, useRef, useState } from "react";
import { teamsTableData } from "../../utils/constant";
import { FaEye } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Table from "../../components/Table";
import TeamsHeader from "./TeamsHeader";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import TeamInfoModal from "../../Modals/Team/TeamInfoModal";
import AddTeamMemberModal from "../../Modals/Team/AddTeamMemberModal";
import TeamMemberPermissions from "../../Modals/Team/TeamMemberPermissions";

const TeamsContainer = () => {
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
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menuKey, userId) => {
    setUserId(userId ?? null);
    setOpenMenuId(null);

    setModal(menuKey);
  };
  const mapDataToRows = (teams) =>
    teams.map((team, index) => ({
      id: team.id,
      cells: [
        {
          key: "sno",
          data: index + 1,
        },
        {
          key: "name",
          data: team.name,
        },

        {
          key: "username",
          data: team.username,
        },

        {
          key: "role",
          data: team.role,
        },

        {
          key: "status",
          data: (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                team.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {team.status}
            </span>
          ),
        },
        {
          key: "actions",
          data: (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => {
                  console.log("OPEN MENU ID INSIDE: ", openMenuId);
                  setOpenMenuId(openMenuId === team.id ? null : team.id);
                }}
                className="text-lg cursor-pointer"
              >
                <PiDotsThreeOutlineVerticalFill />
              </button>

              {openMenuId === team.id && <ActionMenu userId={openMenuId} />}
            </div>
          ),
        },
      ],
    }));

  const ActionMenu = ({ userId }) => {
    return (
      <div
        className="absolute top-6 right-0 bg-white shadow-lg border rounded-md z-50 w-44 gap-2 py-2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            handleMenuClick("TEAM_INFO", userId);
          }}
        >
          Member Details
        </button>

        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            handleMenuClick("PERMISSIONS", userId);
          }}
        >
          Permissions
        </button>
        <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
          Delete
        </button>
      </div>
    );
  };

  const columns = [
    { key: "sno", label: "S No." },
    { key: "name", label: "Name" },
    { key: "username", label: "Username" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];
  const rows = mapDataToRows(teamsTableData);
  return (
    <div className="min-h-96 h-full flex flex-col gap-2">
      <TeamsHeader
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
        tableName={"Teams"}
      />
      {modal === "TEAM_INFO" && (
        <TeamInfoModal
          userId={userId}
          setMode={setMode}
          setRowData={setRowData}
          setModal={setModal}
        />
      )}
      {modal === "ADD_TEAM_MEMBER" && (
        <AddTeamMemberModal data={rowData} setModal={setModal} mode={mode} />
      )}
      {modal === "PERMISSIONS" && (
        <TeamMemberPermissions
          mode={mode}
          setModal={setModal}
          setMode={setMode}
          setRowData={setRowData}
          userId={userId}
        />
      )}
      {/* 
    
      {modal === "PROJECT_ENVIRONMENT" && (
        <EnvironmentModal setModal={setModal} />
      )} */}
    </div>
  );
};

export default TeamsContainer;
