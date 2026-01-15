import React, { useEffect, useState } from "react";
import { teamsTableData } from "./../../../utils/constant";
import { useParams } from "react-router-dom";
import MakeModal from "../../../components/MakeModal";
import { FiEdit2 } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { notifier } from "../../../components/Notifier";

const TeamInfoModal = ({ userId, setModal, setMode, setRowData }) => {
  const [state, setState] = useState({
    id: null,
    name: "",
    username: "",
    email: "",
    role: "",
    apiKey: "",
    status: "",
  });

  const teamsData = teamsTableData.find((d) => d.id === userId);
  useEffect(() => {
    setState(teamsData);
  }, [teamsData]);

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
    setModal("ADD_MEMBER");
  };
  return (
    <MakeModal>
      <div className="min-w-[50%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
        <div className="absolute top-3 right-8 flex items-center justify-end gap-2">
          <button
            className="p-2 text-xs bg-sky-500 text-white rounded-full cursor-pointer"
            onClick={() => {
              setRowData(state);
              setMode("edit");
              setModal("ADD_TEAM_MEMBER");
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
          <h1 className="text-gray-600 font-semibold ">
            Team Member Information
          </h1>
        </div>

        <div className="px-8 py-4 w-full">
          <div className="grid grid-cols-3 gap-8 ">
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Name</h1>
              <p className="text-gray-700">{state?.name}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Username</h1>
              <p className="text-gray-700">{state?.username}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Email</h1>
              <p className="text-gray-700">{state?.email}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Role</h1>
              <p className="text-gray-700">{state?.role}</p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">Status</h1>
              <p className="text-gray-700">{state?.status}</p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="font-semibold text-textPrimary">API key</h1>
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-700">
                  {hidden ? "XXXXXXXXXX" : state?.apiKey}
                </p>
                <button
                  className="text-textPrimary text-xl cursor-pointer"
                  onClick={() => setHidden(!hidden)}
                >
                  {hidden ? <LuEye /> : <LuEyeOff />}
                </button>
                <button
                  className="text-textPrimary text-lg cursor-pointer"
                  onClick={() => handleCopy(state?.apiKey)}
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

export default TeamInfoModal;
