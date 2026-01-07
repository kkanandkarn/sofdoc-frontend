import React from "react";
import VaultDetailsContainer from "../../containers/VaultDetailsContainer";
import Layout from "./../../Layout/Layout";
import { vaultDetailsPath } from "../../utils/constant";

const VaultDetails = () => {
  return (
    <Layout title="Vault Details" path={vaultDetailsPath}>
      <VaultDetailsContainer />
    </Layout>
  );
};

export default VaultDetails;
