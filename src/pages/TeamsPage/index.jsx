import React from "react";
import Layout from "./../../Layout/Layout";
import { teamsPath } from "../../utils/constant";
import TeamsContainer from "../../containers/TeamsContainer";

const TeamsPage = () => {
  return (
    <Layout path={teamsPath} title="Teams">
      <TeamsContainer />
    </Layout>
  );
};

export default TeamsPage;
