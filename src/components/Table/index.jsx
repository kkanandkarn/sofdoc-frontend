import React from "react";
import ReactPaginate from "react-paginate";
import Pagination from "../Pagination";

const Table = ({
  columns = [],
  rows = [],
  pageSize = 10,
  total = 0,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / pageSize);

  return (
    <div className="bg-white w-full rounded-lg overflow-hidden">
      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-300">
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
            rows.map((row) => (
              <tr
                key={row.id} // ✅ use product id
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
      <div className="flex items-center justify-between px-4 py-2 bg-gray-300">
        <p className="text-sm text-slate-600">
          Showing {rows.length} of {total} products
        </p>

        <Pagination
          currentPage={1}
          total={total}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
