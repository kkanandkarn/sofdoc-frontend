import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import InputBox from "../../../components/Input";
import Button from "../../../components/Button";
import { validate } from "../../../validations";
import { notifier } from "../../../components/Notifier";
import { useNavigate } from "react-router-dom";

const RegistrationRequest = ({ linkData }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const userName = linkData?.data?.name ?? linkData?.data?.user?.name;
  const tenantName = linkData?.data?.tenant ? linkData.data.tenant.name : null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    const validationErrors = validate("registration_request", state);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    if (state.password !== state.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Confirm Password does not match",
      }));
      return;
    }

    notifier.success("Account Activated Successfully.");
    navigate("/vault");
  };

  return (
    <div className="min-h-screen w-1/2 bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        {/* 🔹 Header (Inside Card) */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white">
              <IoCloudUploadOutline size={18} />
            </div>

            <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
              Sof<span className="text-blue-600">Doc</span>
            </h1>
          </div>

          <p className="mt-2 text-xs text-gray-600 text-center max-w-sm">
            Secure cloud file management and migration
          </p>
          {tenantName && (
            <h2 className="mt-4 text-2xl font-bold text-gray-600">
              {tenantName}
            </h2>
          )}
        </div>

        {/* 🔹 Welcome */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-600">
            Welcome {userName} 👋
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Create a password to activate your account
          </p>
        </div>

        {/* 🔹 Form */}
        <div className=" flex flex-col items-center justify-center">
          <InputBox
            type="password"
            value={state.password}
            error={errors.password}
            name="password"
            label="Password"
            onChange={handleChange}
            placeholder="Enter your password"
            autoFocus
            required
          />

          <InputBox
            type="password"
            value={state.confirmPassword}
            error={errors.confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            onChange={handleChange}
            placeholder="Re-enter your password"
            required
          />

          <Button
            label="Activate Account"
            onClick={handleSubmit}
            additionalClass={"mt-1"}
          />
        </div>

        {/* 🔹 Footer hint */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Make sure your password is strong and secure
        </p>
      </div>
    </div>
  );
};

export default RegistrationRequest;
