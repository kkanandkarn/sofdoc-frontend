import React, { useState } from "react";
import { validate } from "../../../validations";
import RegisterHeaderContainer from "../../RegisterHeaderContainer";
import TopHeader from "../../TopHeader";
import TenantRegistrationLeftContainer from "../TenantRegistrationLeftContainer";

const TenantRegisterForm = ({ tab, setTab }) => {
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
  const [fileData, setFileData] = useState({
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
  const handleSubmit = async () => {
    // const validationErrors = validate("auth_register", state);
    // if (validationErrors) {
    //   setErrors(validationErrors);
    //   return;
    // }
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
          <div className="flex items-center justify-center my-2">
            <h1 className="text-primary font-semibold">Organisation Details</h1>
          </div>
          <TenantRegistrationLeftContainer
            orgFileData={orgFileData}
            setOrgFileData={setOrgFileData}
          />
        </div>
      </div>
    </div>
  );
};

export default TenantRegisterForm;
