import React from "react";
import Layout from "../../Layout/Layout";
import VaultContainer from "../../containers/VaultContainer";

const VaultPage = () => {
  const path = [{ label: "Vault" }];
  return (
    <Layout title="Vault" path={path}>
      <div className="w-full">
        {" "}
        <VaultContainer />
      </div>
    </Layout>
  );
};

export default VaultPage;
