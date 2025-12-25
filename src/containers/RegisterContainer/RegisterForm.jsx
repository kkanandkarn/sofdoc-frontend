import React, { useState } from "react";
import { validate } from "../../validations";
import { notifier } from "../../components/Notifier";
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/Input";
import Button from "../../components/Button";
import TopHeader from "../TopHeader";
import { FiUpload, FiCamera, FiCheckCircle } from "react-icons/fi";

const RegisterForm = ({ setTab }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [imageMsg, setImageMsg] = useState("Upload Profile Picture");
  const [imageError, setImageError] = useState(false);

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

  const navigate = useNavigate();

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
    notifier.success(
      " We've sent a verification email to your registered email address. Please check your inbox to activate your account."
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const sizeMB = file.size / 1024 / 1024;

    if (!isImage) {
      setImageError(true);
      setImageMsg("Only image files allowed");
      return;
    }

    if (sizeMB > 5) {
      setImageError(true);
      setImageMsg("Max size 5MB");
      return;
    }

    setImageError(false);
    setImageMsg("");
    setSelectedFile(file);
    setFilePreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Top gradient accent */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="p-8 md:p-10">
          <TopHeader />

          {/* Header with better visual hierarchy */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">Fill in your details to get started</p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Profile Picture - Enhanced design */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-4">
              <div
                className={`h-40 w-40 rounded-full border-4 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ${
                  imageError
                    ? "border-red-400 bg-red-50"
                    : filePreview
                    ? "border-blue-100"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {filePreview ? (
                  <>
                    <img
                      src={filePreview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <FiCamera
                      className={`w-12 h-12 mx-auto mb-3 ${
                        imageError ? "text-red-300" : "text-gray-300"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        imageError ? "text-red-500" : "text-gray-400"
                      }`}
                    >
                      {imageError ? imageMsg : "Add Photo"}
                    </span>
                  </div>
                )}

                {/* Upload overlay */}
                {filePreview && (
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiUpload className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>

              {/* Success indicator */}
              {filePreview && !imageError && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
              )}
            </div>

            <button
              className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <FiUpload className="w-4 h-4 group-hover:translate-y-[-1px] transition-transform" />
              {filePreview ? "Change Picture" : "Choose Picture"}
            </button>

            {/* File size hint */}
            <p className="text-xs text-gray-500 mt-3">PNG, JPG up to 5MB</p>

            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Form Fields with improved layout */}
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <InputBox
                  type="text"
                  value={state.name}
                  name="name"
                  error={errors.name}
                  label={
                    <span className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">
                        Full Name
                      </span>
                      {errors.name && (
                        <span className="text-xs text-red-500">• Required</span>
                      )}
                    </span>
                  }
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <InputBox
                  type="text"
                  value={state.username}
                  name="username"
                  error={errors.username}
                  label={
                    <span className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">
                        Username
                      </span>
                      {!errors.username && state.username && (
                        <span className="text-xs text-green-500">
                          ✓ Available
                        </span>
                      )}
                    </span>
                  }
                  onChange={handleChange}
                  placeholder="johndoe"
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <InputBox
                type="email"
                value={state.email}
                name="email"
                error={errors.email}
                label={
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">
                      Email Address
                    </span>
                    {!errors.email && state.email && (
                      <span className="text-xs text-blue-500">
                        ✓ Will be verified
                      </span>
                    )}
                  </span>
                }
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button with improved styling */}
          <div className="space-y-4">
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

            {/* Verification note */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-lg p-2">
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
                    Verification Email Required
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    You'll receive a verification email to activate your
                    account.
                  </p>
                </div>
              </div>
            </div>

            {/* Already have account? */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setTab && setTab("login")}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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

export default RegisterForm;
