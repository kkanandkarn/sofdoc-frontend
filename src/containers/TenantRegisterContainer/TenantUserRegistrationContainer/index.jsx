import React from "react";
import InputBox from "../../../components/Input";
import { FiUser, FiUpload, FiCamera } from "react-icons/fi";
import TenantUserRegistrationLeftContainer from "../TenantUserRegistrationLeftContainer";
import TenantUserRegistrationRightContainer from "../TenantUserRegistrationRightContainer";

const TenantUserRegistrationContainer = ({
  userFileData,
  setUserFileData,
  state,
  errors,
  setErrors,
  handleChange,
  handleSubmit,
  setTab,
}) => {
  return (
    <div className="w-full  flex items-start justify-center">
      <div className="w-full  flex items-start justify-center">
        <div className="w-2/5">
          <TenantUserRegistrationLeftContainer
            setUserFileData={setUserFileData}
            userFileData={userFileData}
          />
        </div>
        <div className="w-3/5  flex flex-col items-center justify-start">
          <TenantUserRegistrationRightContainer
            errors={errors}
            setErrors={setErrors}
            handleChange={handleChange}
            state={state}
            handleSubmit={handleSubmit}
            setTab={setTab}
          />
        </div>

        {/* Form Fields */}
      </div>
    </div>
  );
};

export default TenantUserRegistrationContainer;
