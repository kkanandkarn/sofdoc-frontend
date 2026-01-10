import React, { useState } from "react";
import Table from "../../../components/Table";
import { vaultFileDetails } from "../../../utils/constant";
import { formatDateTime } from "../../../utils/functions";
import { FaEye } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

const FileDetailsContainer = ({ env }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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

export default FileDetailsContainer;
