import React from "react";
import InputBox from "../../../components/Input";
import Button from "../../../components/Button";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RegisterRightContainer = ({
  state,
  errors,
  handleChange,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  return (
    <div className=" px-6 w-3/5">
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <InputBox
              type="text"
              value={state.name}
              name="name"
              error={errors.name}
              label={"Full Name"}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <InputBox
              type="text"
              value={state.username}
              name="username"
              error={errors.username}
              label={"username"}
              onChange={handleChange}
              placeholder="johndoe"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <InputBox
            type="email"
            value={state.email}
            name="email"
            error={errors.email}
            label={"Email"}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

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

      <div className="mt-2 space-y-2 flex items-center justify-center w-full flex-col">
        <Button
          label={
            <div className="flex items-center justify-center gap-2">
              <span>Create Account</span>
              <FiCheckCircle className="w-4 h-4" />
            </div>
          }
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        />

        <div className="text-center pt-4 border-t border-gray-100">
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
  );
};

export default RegisterRightContainer;
