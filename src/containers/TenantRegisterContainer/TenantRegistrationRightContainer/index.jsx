import React from "react";
import InputBox from "../../../components/Input";
import { industry, organisationType } from "../../../utils/DropdownOptions";

const TenantRegistrationRightContainer = ({
  state,
  errors,
  handleChange,
  handleOrganisationTypeChange,
  handleIndustryChange,
}) => {
  return (
    <div className="w-5/6">
      <div className="flex items-center justify-center my-2">
        <h1 className="text-primary font-semibold">Organisation Details</h1>
      </div>
      <div className="w-full">
        <InputBox
          type="text"
          value={state.organisationName}
          name={"organisationName"}
          error={errors.organisationName}
          label={"Organisation Name"}
          onChange={handleChange}
          placeholder={"ABC company Pvt. Ltd."}
          autoFocus={true}
          required={true}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <InputBox
          type="dropdown"
          label={"Organisation Type"}
          required={true}
          error={errors.organisationType}
          options={organisationType}
          value={state.organisationType}
          onChange={handleOrganisationTypeChange}
        />
        <InputBox
          type="dropdown"
          label={"Industry / Sector"}
          required={true}
          error={errors.industry}
          options={industry}
          value={state.industry}
          onChange={handleIndustryChange}
        />
      </div>
      <div className="flex items-center justify-center my-2">
        <h1 className="text-primary font-semibold">Primary User Details</h1>
      </div>
      <div className="w-full">
        <InputBox
          type="text"
          value={state.organisationName}
          name={"organisationName"}
          error={errors.organisationName}
          label={"Organisation Name"}
          onChange={handleChange}
          placeholder={"ABC company Pvt. Ltd."}
          required={true}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <InputBox
          type="dropdown"
          label={"Organisation Type"}
          required={true}
          error={errors.organisationType}
          options={organisationType}
          value={state.organisationType}
          onChange={handleOrganisationTypeChange}
        />
        <InputBox
          type="dropdown"
          label={"Industry / Sector"}
          required={true}
          error={errors.industry}
          options={industry}
          value={state.industry}
          onChange={handleIndustryChange}
        />
      </div>
    </div>
  );
};

export default TenantRegistrationRightContainer;
