import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination";
import { MdDelete } from "react-icons/md";

const Table = ({
  selectedRows,
  setSelectedRows,
  tableName,
  columns = [],
  rows = [],
  total = 0,
  onPageChange,
  currentPage,
}) => {
  const headerCheckboxRef = useRef(null);
  const [allRowIds, setAllRowIds] = useState([]);

  useEffect(() => {
    const rowIds = rows?.map((row) => row.id);
    setAllRowIds(rowIds);
  }, [rows]);

  // All row IDs on current page

  // Selection states
  const isAllSelected =
    allRowIds?.length > 0 &&
    allRowIds?.every((id) => selectedRows?.includes(id));

  const isIndeterminate = selectedRows?.length > 0 && !isAllSelected;

  // Apply indeterminate UI state
  useEffect(() => {
    if (!headerCheckboxRef.current) return;
    headerCheckboxRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  // Toggle single row
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Toggle header checkbox (Gmail behavior)
  const toggleAll = () => {
    if (isIndeterminate || isAllSelected) {
      setSelectedRows([]); // clear selection
    } else {
      setSelectedRows(allRowIds); // select all
    }
  };

  return (
    <div className="bg-white w-full rounded-lg">
      {/* Header */}
      <div className="h-10 w-full border-t border-b border-gray-300 flex items-center justify-between px-4">
        <div className="text-gray-500 text-base font-semibold">{tableName}</div>

        <button
          className="text-2xl cursor-pointer text-red-500 disabled:text-red-300 disabled:cursor-not-allowed"
          disabled={selectedRows?.length === 0}
        >
          <MdDelete />
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {/* Select All */}
            <th className="px-4 py-3 w-10">
              <label className="flex items-center justify-center cursor-pointer">
                <input
                  ref={headerCheckboxRef}
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={toggleAll}
                  className="
                    h-4 w-4 
                    rounded 
                    border-2 border-gray-300 
                    bg-white 
                    cursor-pointer 
                    transition-all duration-200
                    focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none
                    checked:bg-blue-600 checked:border-blue-600
                    indeterminate:bg-blue-600 indeterminate:border-blue-600
                    hover:border-blue-400
                    disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
                  "
                />
              </label>
            </th>

            {columns?.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-medium text-slate-600"
              >
                {col?.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows?.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-6 text-gray-500"
              >
                No data found
              </td>
            </tr>
          ) : (
            rows?.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-gray-300 ${
                  selectedRows?.includes(row.id) ? "bg-blue-50" : "bg-white"
                }`}
              >
                {/* Row checkbox */}
                <td className="px-4 py-3">
                  <label className="flex items-center justify-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRows?.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="
                        h-4 w-4 
                        rounded 
                        border-2 border-gray-300 
                        bg-white 
                        cursor-pointer 
                        transition-all duration-200
                        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none
                        checked:bg-blue-600 checked:border-blue-600
                        hover:border-blue-400
                        disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
                      "
                    />
                  </label>
                </td>

                {columns.map((col) => {
                  const cell = row.cells.find((item) => item.key === col.key);

                  return (
                    <td
                      key={col.key}
                      className="px-4 py-3 text-sm text-gray-700"
                    >
                      {cell?.data ?? "-"}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-1">
        <p className="text-sm text-slate-600">
          Showing {rows.length} of {total}
        </p>

        <Pagination
          currentPage={currentPage}
          totalItems={total}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
