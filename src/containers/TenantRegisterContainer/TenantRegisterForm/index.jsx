import React, { useState } from "react";
import RegisterHeaderContainer from "../../RegisterHeaderContainer";
import TopHeader from "../../TopHeader";
import { useNavigate } from "react-router-dom";
import TenantDetailsContainer from "../TenantDetailsContainer";
import TenantUserRegistrationContainer from "../TenantUserRegistrationContainer";
import { notifier } from "../../../components/Notifier";
import TenantRegisterSuccess from "../TenantRegisterSuccess";

const TenantRegisterForm = () => {
  const [tab, setTab] = useState("TENANT_REGISTER");
  const [state, setState] = useState({
    organisationName: "",
    organisationType: "",
    industry: "",
    name: "",
    email: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    organisationName: "",
    organisationType: "",
    industry: "",
    name: "",
    email: "",
    username: "",
  });
  const [orgFileData, setOrgFileData] = useState({
    selectedFile: null,
    filePreview: null,
    imageMsg: "Upload Profile Picture",
    imageError: false,
  });
  const [userFileData, setUserFileData] = useState({
    selectedFile: null,
    filePreview: null,
    imageMsg: "Upload Profile Picture",
    imageError: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleOrganisationTypeChange = (value) => {
    setState((prev) => ({ ...prev, organisationType: value }));
    setErrors((prev) => ({ ...prev, organisationType: "" }));
  };
  const handleIndustryChange = (value) => {
    setState((prev) => ({ ...prev, industry: value }));
    setErrors((prev) => ({ ...prev, industry: "" }));
  };
  const handleSubmit = async () => {
    setTab("TENANT_REGISTER_SUCCESS");
  };

  const navigate = useNavigate();

  const tabMap = {
    TENANT_REGISTER: (
      <TenantDetailsContainer
        orgFileData={orgFileData}
        setOrgFileData={setOrgFileData}
        state={state}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
        handleIndustryChange={handleIndustryChange}
        handleOrganisationTypeChange={handleOrganisationTypeChange}
        setTab={setTab}
      />
    ),
    TENANT_USER_REGISTER: (
      <TenantUserRegistrationContainer
        userFileData={userFileData}
        setUserFileData={setUserFileData}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
        state={state}
        setTab={setTab}
        handleSubmit={handleSubmit}
      />
    ),
    TENANT_REGISTER_SUCCESS: <TenantRegisterSuccess />,
  };

  return (
    <div className="mt-2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-4/5 bg-white rounded-3xl shadow-xl overflow-hidden relative">
        <div className="absolute top-2 right-2">
          <RegisterHeaderContainer />
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="py-4 px-10">
          <TopHeader />

          <div className="w-full flex flex-col items-start justify-center">
            {tabMap[tab]}
            <div className="flex items-center justify-end w-full py-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold transition-colors hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantRegisterForm;
