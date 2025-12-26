import React, { useState } from "react";
import { validate } from "../validations";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/Input";
import Button from "../components/Button";
import TopHeader from "../containers/TopHeader";
import {
  FiUpload,
  FiCamera,
  FiCheckCircle,
  FiGlobe,
  FiBriefcase,
  FiUsers,
  FiMapPin,
} from "react-icons/fi";
import RegisterHeaderContainer from "../containers/RegisterHeaderContainer";
// import Select from "../../components/Select";

const TenantRegisterForm = ({ setTab }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [imageMsg, setImageMsg] = useState("Upload Organization Logo");
  const [imageError, setImageError] = useState(false);

  const [state, setState] = useState({
    organizationName: "",
    email: "",
    website: "",
    organizationType: "",
    industry: "",
    size: "",
    foundedYear: "",
    taxId: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    contactPerson: "",
    contactPosition: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    organizationName: "",
    email: "",
    website: "",
    organizationType: "",
    industry: "",
    size: "",
    foundedYear: "",
    taxId: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    contactPerson: "",
    contactPosition: "",
    description: "",
  });

  const organizationTypes = [
    { value: "", label: "Select Organization Type" },
    { value: "corporation", label: "Corporation" },
    { value: "llc", label: "Limited Liability Company (LLC)" },
    { value: "nonprofit", label: "Non-Profit Organization" },
    { value: "partnership", label: "Partnership" },
    { value: "sole_proprietorship", label: "Sole Proprietorship" },
    { value: "government", label: "Government Agency" },
    { value: "educational", label: "Educational Institution" },
  ];

  const industries = [
    { value: "", label: "Select Industry" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance & Banking" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
    { value: "education", label: "Education" },
    { value: "construction", label: "Construction" },
    { value: "transportation", label: "Transportation & Logistics" },
    { value: "hospitality", label: "Hospitality & Tourism" },
    { value: "entertainment", label: "Entertainment & Media" },
  ];

  const companySizes = [
    { value: "", label: "Select Company Size" },
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const countries = [
    { value: "", label: "Select Country" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "sg", label: "Singapore" },
    { value: "in", label: "India" },
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate("organization_register", state);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    setTab("REGISTER_SUCCESS");
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
    <div className="mt-2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-4/5 bg-white rounded-3xl shadow-xl overflow-hidden relative">
        <div className="absolute top-2 right-2">
          <RegisterHeaderContainer />
        </div>
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="py-4 px-10">
          <TopHeader />

          <div className="flex items-start gap-4 mt-3">
            {/* Left Side - Logo Upload */}
            <div className="flex flex-col justify-center items-center p-4 w-2/5 border-r border-gray-200">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="relative mb-4">
                  <div
                    className={`h-64 w-64 rounded-2xl border-4 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ${
                      imageError
                        ? "border-red-400 bg-red-50"
                        : filePreview
                        ? "border-green-100"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    {filePreview ? (
                      <>
                        <img
                          src={filePreview}
                          alt="Organization Logo Preview"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </>
                    ) : (
                      <div className="text-center p-4">
                        <FiBriefcase
                          className={`w-16 h-16 mx-auto mb-4 ${
                            imageError ? "text-red-300" : "text-gray-300"
                          }`}
                        />
                        <span
                          className={`text-base font-medium ${
                            imageError ? "text-red-500" : "text-gray-400"
                          }`}
                        >
                          {imageError ? imageMsg : "Add Organization Logo"}
                        </span>
                      </div>
                    )}

                    <button
                      className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      <FiUpload className="w-10 h-10 text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 w-full max-w-xs">
                  <button
                    className="group flex items-center justify-center gap-3 w-full px-6 py-3 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white ease-in-out transition-all duration-500 font-medium shadow-sm hover:shadow-md cursor-pointer"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <FiUpload className="w-5 h-5 group-hover:translate-y-[-1px] transition-transform" />
                    {filePreview ? "Change Logo" : "Upload Logo"}
                  </button>

                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />

                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Logo Requirements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>JPG, PNG or SVG format</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Maximum 5MB file size</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Square or rectangular logo (1:1 or 4:3)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>High resolution recommended</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Fields */}
            <div className="px-6 w-3/5">
              <div className="space-y-4">
                {/* Organization Basic Info */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FiBriefcase className="w-5 h-5 text-green-600" />
                    Organization Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.organizationName}
                        name="organizationName"
                        error={errors.organizationName}
                        label={"Organization Name"}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                        required
                        icon={<FiBriefcase className="w-4 h-4" />}
                      />
                    </div>

                    <div className="space-y-2">
                      {/* <Select
                        value={state.organizationType}
                        name="organizationType"
                        error={errors.organizationType}
                        label={"Organization Type"}
                        onChange={(value) =>
                          handleSelectChange("organizationType", value)
                        }
                        options={organizationTypes}
                        required
                      /> */}
                    </div>

                    <div className="space-y-2">
                      {/* <Select
                        value={state.industry}
                        name="industry"
                        error={errors.industry}
                        label={"Industry"}
                        onChange={(value) =>
                          handleSelectChange("industry", value)
                        }
                        options={industries}
                        required
                      /> */}
                    </div>

                    <div className="space-y-2">
                      {/* <Select
                        value={state.size}
                        name="size"
                        error={errors.size}
                        label={"Company Size"}
                        onChange={(value) => handleSelectChange("size", value)}
                        options={companySizes}
                        required
                      /> */}
                    </div>
                  </div>

                  <div className="space-y-2 mt-3">
                    <InputBox
                      type="text"
                      value={state.description}
                      name="description"
                      error={errors.description}
                      label={"Brief Description"}
                      onChange={handleChange}
                      placeholder="Describe your organization's mission and activities"
                      textarea
                      rows={2}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FiUsers className="w-5 h-5 text-blue-600" />
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.contactPerson}
                        name="contactPerson"
                        error={errors.contactPerson}
                        label={"Contact Person"}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        icon={<FiUsers className="w-4 h-4" />}
                      />
                    </div>

                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.contactPosition}
                        name="contactPosition"
                        error={errors.contactPosition}
                        label={"Position"}
                        onChange={handleChange}
                        placeholder="HR Manager"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="space-y-2">
                      <InputBox
                        type="email"
                        value={state.email}
                        name="email"
                        error={errors.email}
                        label={"Official Email"}
                        onChange={handleChange}
                        placeholder="contact@organization.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <InputBox
                        type="tel"
                        value={state.phone}
                        name="phone"
                        error={errors.phone}
                        label={"Phone Number"}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Legal & Address Information */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FiMapPin className="w-5 h-5 text-purple-600" />
                    Legal & Address Details
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.taxId}
                        name="taxId"
                        error={errors.taxId}
                        label={"Tax ID / EIN"}
                        onChange={handleChange}
                        placeholder="XX-XXXXXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <InputBox
                        type="number"
                        value={state.foundedYear}
                        name="foundedYear"
                        error={errors.foundedYear}
                        label={"Year Founded"}
                        onChange={handleChange}
                        placeholder="1990"
                        min="1900"
                        max={new Date().getFullYear()}
                      />
                    </div>

                    <div className="space-y-2">
                      <InputBox
                        type="url"
                        value={state.website}
                        name="website"
                        error={errors.website}
                        label={"Website"}
                        onChange={handleChange}
                        placeholder="https://www.organization.com"
                        icon={<FiGlobe className="w-4 h-4" />}
                      />
                    </div>

                    <div className="space-y-2">
                      {/* <Select
                        value={state.country}
                        name="country"
                        error={errors.country}
                        label={"Country"}
                        onChange={(value) =>
                          handleSelectChange("country", value)
                        }
                        options={countries}
                        required
                      /> */}
                    </div>
                  </div>

                  <div className="space-y-2 mt-3">
                    <InputBox
                      type="text"
                      value={state.address}
                      name="address"
                      error={errors.address}
                      label={"Street Address"}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.city}
                        name="city"
                        error={errors.city}
                        label={"City"}
                        onChange={handleChange}
                        placeholder="New York"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <InputBox
                        type="text"
                        value={state.postalCode}
                        name="postalCode"
                        error={errors.postalCode}
                        label={"Postal Code"}
                        onChange={handleChange}
                        placeholder="10001"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Notice */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Verification Process
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll verify your organization details and send a
                      confirmation email within 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 space-y-2 flex items-center justify-center w-full flex-col">
                <Button
                  label={
                    <div className="flex items-center justify-center gap-2">
                      <span>Register Organization</span>
                      <FiCheckCircle className="w-4 h-4" />
                    </div>
                  }
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                />

                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    Already have an organization account?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/")}
                      className="text-green-600 hover:text-green-700 cursor-pointer font-semibold transition-colors hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantRegisterForm;
