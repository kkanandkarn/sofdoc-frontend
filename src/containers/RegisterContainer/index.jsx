import { useState } from "react";
import RegisterForm from "./RegisterForm";
import RegisterSuccess from "./RegisterSuccess";

const RegisterContainer = () => {
  const [tab, setTab] = useState("REGISTER_FORM");

  const tabMap = {
    REGISTER_FORM: <RegisterForm setTab={setTab} />,
    REGISTER_SUCCESS: <RegisterSuccess />,
  };

  return <div className="w-full">{tabMap[tab]}</div>;
};

export default RegisterContainer;
