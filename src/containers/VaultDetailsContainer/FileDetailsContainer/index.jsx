import React, { useState } from "react";
import Table from "../../../components/Table";

const FileDetailsContainer = ({ columns, rows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
