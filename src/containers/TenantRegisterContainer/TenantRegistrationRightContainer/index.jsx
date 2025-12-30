import React from "react";
import InputBox from "../../../components/Input";
import { industry, organisationType } from "../../../utils/DropdownOptions";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../../../components/Button";
import { LuArrowRight } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { validate } from "../../../validations";

const TenantRegistrationRightContainer = ({
  state,
  errors,
  handleChange,
  handleOrganisationTypeChange,
  handleIndustryChange,
}) => {
  return (
    <div className=" w-4/5">
      <div className="flex items-center justify-center mt-4 mb-10">
        <h1 className="text-primary font-semibold">Organisation Details</h1>
      </div>
      <div className="mb-10  w-full">
        <div className="w-full ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="w-full">
            {" "}
            <InputBox
              type="dropdown"
              label={"Organisation Type"}
              required={true}
              error={errors.organisationType}
              options={organisationType}
              value={state.organisationType}
              onChange={handleOrganisationTypeChange}
            />
          </div>

          <div className="w-full">
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
      </div>
    </div>
  );
};

export default TenantRegistrationRightContainer;
