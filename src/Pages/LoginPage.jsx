import React, { useState } from "react";
import { actionNotifier } from "../components/Toast";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../container/Login/LoginContainer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    const userData = {
      username: "Anand Kumar Karn",
      userId: 1,
      role: "Admin",
      token: "token",
    };
    dispatch(login(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/vault");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="w-full bg-white py-4 shadow-sm flex items-center px-6 relative">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-indigo-700">Sof</span>
          <span className="text-blue-500">Zenix</span>
        </h1>

        <p className="absolute left-1/2 transform -translate-x-1/2 text-gray-600 text-sm md:text-base font-medium">
          Transform Your <span className="text-indigo-700">Business</span> with
          <span className="text-indigo-700"> AI-Driven Platform</span>
        </p>
      </div>

      {/* Center Login Box */}
      <div className="flex justify-center items-center mt-24 px-4">
        <LoginContainer
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
