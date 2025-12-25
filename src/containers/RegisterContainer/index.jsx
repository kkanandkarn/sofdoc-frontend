import { useState } from "react";
import RegisterForm from "./RegisterForm";

const RegisterContainer = () => {
  const [tab, setTab] = useState("REGISTER_FORM");

  const tabMap = {
    REGISTER_FORM: <RegisterForm setTab={setTab} />,
  };

  return <div className="w-full">{tabMap[tab]}</div>;
};

export default RegisterContainer;
