import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TenantRegisterContainer from "../../containers/TenantRegisterContainer";
import RegisterHeaderContainer from "../../containers/RegisterHeaderContainer";
import RegisterContainer from "../../containers/RegisterContainer";
import { IoCloudUploadOutline } from "react-icons/io5";

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
    <div className="relative h-screen overflow-y-auto custom-scrollbar bg-gray-50 py-4">
      <div className="absolute top-2 right-2">
        <RegisterHeaderContainer />
      </div>

      {userMap[userType]}
    </div>
  );
};

export default RegisterPage;
