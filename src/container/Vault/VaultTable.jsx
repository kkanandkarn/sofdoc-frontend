import React, { useState, useRef, useEffect } from "react";
import Table from "../../components/UI/Table/Table";
import { vaultTableColumns } from "./column";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdEdit } from "react-icons/md";
import ViewVaultModal from "../../components/modals/vault/ViewVaultModal";
import AddVaultModal from "../../components/modals/vault/AddVaultModal";
import EditVaultModal from "../../components/modals/vault/EditVaultModal";
import { Confirm } from "notiflix";
import { actionNotifier } from "../../components/Toast";

const VaultTable = ({ rowdata }) => {
  const [modalRow, setModalRow] = useState(null);
  const [modal, setModal] = useState("");
  const [vault, setVault] = useState({});
  const onClose = () => {
    setModal("");
    setVault({});
  };

  const modalRef = useRef(null);

  // CLOSE ON CLICK OUTSIDE
  useEffect(() => {
    function handleClickOutside(e) {
      if (modal && modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
        setModalRow(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modal]);

  const handleModal = (modalName, data) => {
    setModal(modalName);
    setVault(data);
  };

  const handleDelete = () => {
    Confirm.show(
      "Are you sure want to delete?",
      "Deletion of vault will delete all uploaded files in vault",
      "Yes",
      "No",
      () => {
        actionNotifier.success("Vault deleted sucessfully");
      },
      () => {},
      { okButtonBackground: "#3b82f6", titleColor: "#3b82f6" }
    );
  };

  const rows = rowdata.map((data, index) => ({
    sn: index + 1,
    name: data.name,
    service: data.service,
    members: data.members,
    files: data.files,
    storage: data.storage,
    action: (
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-sky-500 text-xs text-white rounded-full p-1 cursor-pointer"
          onClick={() => handleModal("view", data)}
        >
          <FaEye />
        </button>
        <button
          className="bg-sky-500 text-xs text-white rounded-full p-1 cursor-pointer"
          onClick={() => handleModal("edit", data)}
        >
          <MdEdit />
        </button>
        <button
          className="bg-sky-500 text-xs text-white rounded-full p-1 cursor-pointer"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
      </div>
    ),
  }));

  return (
    <div className="mt-4">
      {modal === "view" && <ViewVaultModal onClose={onClose} vault={vault} />}
      {modal === "edit" && <EditVaultModal onClose={onClose} vault={vault} />}

      <Table columns={vaultTableColumns} rows={rows} />
    </div>
  );
};

export default VaultTable;
