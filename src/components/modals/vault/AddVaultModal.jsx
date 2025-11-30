import { IoMdCloseCircleOutline } from "react-icons/io";
import { actionNotifier } from "../../Toast";

import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import InputBox from "../../UI/InputBox/InputBox";
import Button from "../../UI/Button/Button";
import { transformVariable } from "../../../utils/helper";

const AddVaultModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
  });

  const [errors, setErrors] = useState({ name: "", service: "" });

  const serviceOptions = [
    { value: "Cloudinary", label: "Cloudinary" },
    { value: "Digital Ocean Spaces", label: "Digital Ocean Spaces" },
    { value: "S3 Bucket", label: "S3 Bucket" },
  ];

  const serviceOptionChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      service: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      service: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    if (!transformVariable(formData.name)) {
      newErrors["name"] = "Vault Name is required";
    }
    if (!transformVariable(formData.service)) {
      newErrors["service"] = "Service is required";
    }

    if (Object.values(newErrors).length > 0) return;

    // success
    actionNotifier.success("Vault added successfully");

    onClose();
  };

  return (
    <div
      className="absolute inset-0 w-full max-h-[100vh] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-[60%] max-h-[70vh] bg-white rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="w-full h-14 py-2 bg-primaryColor flex items-center justify-between px-4">
          <div className="text-xl font-Poppins font-bold text-sky-500">
            Add Vault
          </div>
          <div className="text-red-500 cursor-pointer" onClick={onClose}>
            <IoMdCloseCircleOutline size={30} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <InputBox
              required={true}
              label={"Vault Name"}
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter Vault Name"
            />
            <InputBox
              error={errors.service}
              required={true}
              label={"Service"}
              value={formData.service}
              onChange={serviceOptionChange}
              type="dropdown"
              options={serviceOptions}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <Button label={"Add Vault"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVaultModal;
