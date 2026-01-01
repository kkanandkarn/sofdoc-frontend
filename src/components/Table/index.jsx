import React from "react";
import ReactPaginate from "react-paginate";
import Pagination from "../Pagination";

const Table = ({
  columns = [],
  rows = [],
  total = 0,
  onPageChange,
  currentPage,
}) => {
  return (
    <div className="bg-white w-full rounded-lg overflow-hidden">
      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-medium text-slate-600"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No data found
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr
                key={index} // ✅ use product id
                className="bg-white border-b border-gray-300"
              >
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
          totalItems={80}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
