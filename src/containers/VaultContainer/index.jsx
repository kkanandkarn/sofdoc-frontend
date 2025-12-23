import React from "react";
import Table from "../../components/Table";
import VaultHeader from "./VaultHeader";

const VaultContainer = () => {
  const apiProducts = [
    {
      id: 1,
      vaultName: "Xley",
      spaceUsed: "0.8",
      totalSpace: "1",
      collaborators: "4",
      projectId: "proj_e4nuy6",
      status: "ACTIVE",
    },
    {
      id: 1,
      vaultName: "Xley-Whitelist",
      spaceUsed: "0.4",
      totalSpace: "1",
      collaborators: "2",
      projectId: "proj_p5876ej",
      status: "ACTIVE",
    },
  ];

  const mapProductsToRows = (vaults) =>
    vaults.map((vault, index) => ({
      id: vault.id, // 👈 preserve product id here
      cells: [
        {
          key: "sno",
          data: index + 1,
        },
        {
          key: "vaultName",
          data: vault.vaultName,
        },
        {
          key: "size",
          data: `${vault.spaceUsed}/${vault.totalSpace} GB`,
        },
        {
          key: "collaborators",
          data: vault.collaborators,
        },
        {
          key: "projectId",
          data: vault.projectId,
        },

        {
          key: "status",
          data: (
            <span
              className={`px-2 py-1 text-xs rounded ${
                vault.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {vault.status}
            </span>
          ),
        },
        {
          key: "actions",
          data: (
            <div className="flex gap-2">
              <button
                //   onClick={() => handleEdit(product.id)}
                className="px-2 py-1 text-xs bg-gray-200 rounded"
              >
                Edit
              </button>
              <button
                //   onClick={() => handleDelete(product.id)}
                className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded"
              >
                Delete
              </button>
            </div>
          ),
        },
      ],
    }));

  const columns = [
    { key: "sno", label: "S No." },
    { key: "vaultName", label: "Project Name" },
    { key: "size", label: "Size" },
    { key: "collaborators", label: "Collaborators" },
    { key: "projectId", label: "Project Id" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];
  const rows = mapProductsToRows(apiProducts);

  return (
    <div className="w-full flex flex-col gap-2">
      <VaultHeader />

      <Table
        columns={columns}
        rows={rows}
        pageSize={10}
        total={150}
        onPageChange={(page) => {
          // fetch data for this page
          console.log("Page:", page);
        }}
      />
    </div>
  );
};

export default VaultContainer;
