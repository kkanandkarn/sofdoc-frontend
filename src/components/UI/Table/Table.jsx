const Table = ({ columns, rows, secondClass }) => {
  return (
    <table className={`w-full h-auto  ${secondClass}`}>
      <thead className="border-collapse">
        <tr className="bg-sky-400">
          {columns.map((column, index) => (
            <th
              key={index}
              className="text-center text-gray-800 px-4 py-2 font-semibold
                           border-y border-gray-300
                           first:border-l-0 last:border-r-0 "
            >
              {column?.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => (
          <tr key={index} className="bg-transparent">
            {columns?.map((column, index) => (
              <td
                key={index}
                className="text-center text-gray-600 px-4 py-2 border-y border-gray-200
                             first:border-l-0 last:border-r-0"
              >
                {row[column?.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
