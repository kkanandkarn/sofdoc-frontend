import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import InputBox from "../../components/UI/InputBox/InputBox";
import Button from "../../components/UI/Button/Button";

const LoginContainer = ({ formData, handleChange, errors, handleSubmit }) => {
  return (
    <div className="bg-white w-full max-w-md mx-auto p-8 rounded-xl shadow-md">
      <div className="flex items-center justify-center gap-2">
        <div className="text-4xl text-indigo-700">
          <FaCloudUploadAlt />
        </div>{" "}
        <h1 className="text-3xl font-extrabold tracking-tight text-center">
          <span className="text-indigo-700">Sof</span>
          <span className="text-blue-500">Doc</span>
        </h1>
      </div>

      <InputBox
        error={errors.username}
        required={true}
        label={"Username"}
        autoComplete="off"
        value={formData.username}
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="Enter username"
      />

      <InputBox
        error={errors.password}
        required={true}
        label={"Password"}
        autoComplete="off"
        value={formData.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Enter Password"
      />
      <div className="flex items-center justify-center">
        <Button
          label={"Login"}
          onClick={handleSubmit}
          iconPrfix={<CiLogin size={20} />}
        />
      </div>
    </div>
  );
};

export default LoginContainer;
