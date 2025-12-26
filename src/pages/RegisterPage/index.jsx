import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegisterContainer from "../../containers/RegisterContainer";
import TenantRegisterContainer from "../../containers/TenantRegisterContainer";

const RegisterPage = () => {
  const { userType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handleBackButton = (event) => {
      event.preventDefault();
      navigate("/");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);
  const userMap = {
    individual: <RegisterContainer />,
    organisation: <TenantRegisterContainer />,
  };
  return (
    <div className="h-screen overflow-y-auto custom-scrollbar bg-gray-50">
      {userMap[userType]}
    </div>
  );
};

export default RegisterPage;
