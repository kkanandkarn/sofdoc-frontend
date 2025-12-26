import React, { useState } from "react";
import { validate } from "../../../validations";
import TopHeader from "../../TopHeader";
import RegisterHeaderContainer from "../../RegisterHeaderContainer";
import RegiserLeftContainer from "../RegiserLeftContainer";
import RegisterRightContainer from "../RegisterRightContainer";

const RegisterForm = ({ setTab }) => {
  const [fileData, setFileData] = useState({
    selectedFile: null,
    filePreview: null,
    imageMsg: "Upload Profile Picture",
    imageError: false,
  });
  const [state, setState] = useState({
    name: "",
    email: "",
    username: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate("auth_register", state);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    setTab("REGISTER_SUCCESS");
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

          <div className="flex items-center gap-4 mt-3">
            <RegiserLeftContainer
              fileData={fileData}
              setFileData={setFileData}
            />
            <RegisterRightContainer
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              state={state}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
