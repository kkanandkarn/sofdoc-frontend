const Pagination = ({ currentPage, total, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  const getPages = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-white border disabled:opacity-40"
      >
        ‹
      </button>

      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === page
                ? "bg-gray-500 text-white border-gray-500"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-white border disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
