import React from "react";
import TenantRegistrationLeftContainer from "../TenantRegistrationLeftContainer";
import TenantRegistrationRightContainer from "../TenantRegistrationRightContainer";
import { FaArrowRight } from "react-icons/fa";
import { validate } from "../../../validations";

const TenantDetailsContainer = ({
  orgFileData,
  setOrgFileData,
  state,
  errors,
  setErrors,
  handleChange,
  handleIndustryChange,
  handleOrganisationTypeChange,
  setTab,
}) => {
  const handleTabChange = () => {
    const validationErrors = validate("auth_tenant_register_org", {
      organisationName: state.organisationName,
      organisationType: state.organisationType,
      industry: state.industry,
    });

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    setTab("TENANT_USER_REGISTER");
  };
  return (
    <div className="w-full  flex items-start justify-center">
      {" "}
      <div className="w-2/5">
        <TenantRegistrationLeftContainer
          orgFileData={orgFileData}
          setOrgFileData={setOrgFileData}
        />
      </div>
      <div className="w-3/5  flex flex-col items-center justify-start">
        <TenantRegistrationRightContainer
          state={state}
          errors={errors}
          setErrors={setErrors}
          handleChange={handleChange}
          handleIndustryChange={handleIndustryChange}
          handleOrganisationTypeChange={handleOrganisationTypeChange}
        />
        <div className="flex items-end justify-end w-4/5">
          <button
            type="button"
            className="flex items-center justify-start gap-2 text-primary cursor-pointer font-semibold"
            onClick={handleTabChange}
          >
            Primary User Details <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantDetailsContainer;
