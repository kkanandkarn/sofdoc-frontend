import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  total,
  pageSize,
  onPageChange,
  className = "",
  showBoundaryNumbers = true,
  maxVisiblePages = 5,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're at the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Always show first page
    if (showBoundaryNumbers && startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page
    if (showBoundaryNumbers && endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) onPageChange(page);
  };

  const renderEllipsis = (key) => (
    <span
      key={key}
      className="px-2 text-gray-400 select-none"
      aria-hidden="true"
    >
      …
    </span>
  );

  return (
    <nav
      className={`flex items-center gap-1 ${className}`}
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`cursor-pointer
          flex items-center justify-center
          w-9 h-9 rounded-lg border
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          enabled:hover:bg-gray-50 enabled:hover:border-gray-300
          enabled:active:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
        aria-label="Previous page"
      >
        <IoIosArrowBack className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => {
          const key =
            typeof page === "number" ? `page-${page}` : `ellipsis-${index}`;

          if (page === "...") {
            return renderEllipsis(key);
          }

          const isCurrent = page === currentPage;

          return (
            <button
              key={key}
              onClick={() => handlePageClick(page)}
              className={`cursor-pointer
                flex items-center justify-center
                min-w-9 h-9 px-3 rounded-lg border text-sm font-medium
                transition-all duration-200
                ${
                  isCurrent
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                active:scale-95
              `}
              aria-current={isCurrent ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`cursor-pointer
          flex items-center justify-center
          w-9 h-9 rounded-lg border
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          enabled:hover:bg-gray-50 enabled:hover:border-gray-300
          enabled:active:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
        aria-label="Next page"
      >
        <IoIosArrowForward className="w-4 h-4" />
      </button>

      {/* Optional: Page Info */}
      <div className="ml-4 text-sm text-gray-500 hidden sm:block">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  showBoundaryNumbers: PropTypes.bool,
  maxVisiblePages: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  pageSize: 10,
  showBoundaryNumbers: true,
  maxVisiblePages: 5,
};

export default Pagination;
