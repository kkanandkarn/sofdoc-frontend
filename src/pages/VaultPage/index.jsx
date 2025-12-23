import React from "react";
import Layout from "../../Layout/Layout";
import VaultContainer from "../../containers/VaultContainer";

const VaultPage = () => {
  return (
    <Layout title="Vault">
      <div className="w-full">
        {" "}
        <VaultContainer />
      </div>
    </Layout>
  );
};

export default VaultPage;
