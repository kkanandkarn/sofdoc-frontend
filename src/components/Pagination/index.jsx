import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using Feather Icons

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <nav className="flex items-center space-x-2 bg-transparent py-1 select-none">
      {/* Previous Page */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-gray-600 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Numbers */}
      <ul className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-2 text-gray-500 font-bold">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all cursor-pointer
                  ${
                    currentPage === page
                      ? "bg-sky-400 text-white"
                      : "text-gray-500"
                  }`}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Next Page */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="p-2 text-gray-600 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronRight size={24} />
      </button>
    </nav>
  );
};

export default Pagination;
