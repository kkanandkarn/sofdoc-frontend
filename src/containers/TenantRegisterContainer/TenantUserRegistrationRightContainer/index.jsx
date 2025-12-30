import React from "react";
import InputBox from "../../../components/Input";
import Button from "../../../components/Button";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { validate } from "../../../validations";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TenantUserRegistrationRightContainer = ({
  state,
  errors,
  setErrors,
  handleChange,
  handleSubmit,
  setTab,
}) => {
  const handleFormSubmit = () => {
    const validationErrors = validate("auth_tenant_register_user", {
      name: state.name,
      username: state.username,
      email: state.email,
    });

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    handleSubmit();
  };
  return (
    <div className="w-4/5">
      <div className="flex items-center justify-center my-2 mb-6">
        <h1 className="text-primary font-semibold text-xl">
          Primary User Details
        </h1>
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <InputBox
            type="text"
            value={state.name}
            name="name"
            error={errors.name}
            label="Full Name"
            onChange={handleChange}
            placeholder="John Doe"
            required={true}
          />
          <InputBox
            type="text"
            value={state.username}
            name="username"
            error={errors.username}
            label="Username"
            onChange={handleChange}
            placeholder="johndoe"
            required={true}
          />
        </div>

        <InputBox
          type="email"
          value={state.email}
          name="email"
          error={errors.email}
          label="Email Address"
          onChange={handleChange}
          placeholder="john@example.com"
          required={true}
        />

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-2">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-lg p-2 ">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                Verification Required
              </p>
              <p className="text-sm text-gray-600 mt-1">
                We'll send a verification email to activate your account.
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 text-gray-600 text-sm">
          By clicking{" "}
          <span className="text-blue-600 font-medium">Create Account</span>, you
          acknowledge that you have read and agree to our{" "}
          <a
            href="/terms"
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium cursor-pointer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium cursor-pointer"
          >
            Privacy Policy
          </a>
          .
        </div>

        <div className="mt-8  flex items-center justify-between w-full">
          <button
            type="button"
            className="flex items-center justify-start gap-2 text-primary cursor-pointer font-semibold"
            onClick={() => setTab("TENANT_REGISTER")}
          >
            <FaArrowLeft /> Organisation Details
          </button>
          <Button
            label={"Create Account"}
            iconSuffix={<FiCheckCircle className="w-4 h-4" />}
            onClick={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default TenantUserRegistrationRightContainer;
