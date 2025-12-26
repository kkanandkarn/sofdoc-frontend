import React, { useState } from "react";
import TenantRegisterForm from "./TenantRegisterForm";

const TenantRegisterContainer = () => {
  const [tab, setTab] = useState("TENANT_REGISTER");

  const tabMap = {
    TENANT_REGISTER: <TenantRegisterForm tab={tab} setTab={setTab} />,
  };

  return <div className="w-full">{tabMap[tab]}</div>;
};

export default TenantRegisterContainer;
