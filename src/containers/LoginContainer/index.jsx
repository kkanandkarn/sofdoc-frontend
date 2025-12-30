import React, { useState } from "react";
import loginBanner from "../../assets/login-banner.png";
import { CiLock } from "react-icons/ci";
import InputBox from "../../components/Input";
import Button from "../../components/Button";
import { LuLogIn } from "react-icons/lu";
import { validate } from "../../validations";
import { notifier } from "../../components/Notifier";
import { useDispatch } from "react-redux";
import { userLogin } from "./../../store/slices/Auth/AuthThunk";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import SignUpDropdownContainer from "../SignUpDropdownContainer";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
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

  const handleSubmit = async () => {
    console.log("state: ", state);
    const validationErrors = validate("auth_login", state);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    notifier.success("Login Successfull.");
    navigate("/vault");

    // const res = await dispatch(userLogin(state)).unwrap();
    // console.log("API RESPONSE: ", res);
  };

  return (
    <div className="h-screen flex items-center justify-between font-poppins">
      <div className="w-2/5 h-full">
        <img src={loginBanner} className="w-full h-full" />
      </div>
      <div className="w-3/5 h-full flex flex-col items-center justify-center">
        <div className="text-4xl bg-blue-500 text-white p-2 rounded-full">
          <CiLock />
        </div>
        <div className="py-4">
          <h1 className="text-textPrimary text-2xl font-semibold">Login</h1>
        </div>
        <div className="py-4 w-1/2 flex flex-col items-center justify-center">
          <InputBox
            type="text"
            value={state.username}
            name={"username"}
            error={errors.username}
            label={"Username"}
            onChange={handleChange}
            placeholder={"Enter Your Username"}
            autoFocus={true}
            required={true}
          />
          <InputBox
            type="password"
            value={state.password}
            name={"password"}
            error={errors.password}
            label={"Password"}
            onChange={handleChange}
            placeholder={"Enter Your Password"}
            required={true}
          />

          <Button
            label={"Login"}
            iconPrfix={<LuLogIn size={20} />}
            onClick={handleSubmit}
            additionalClass={"w-full"}
          />
        </div>
        <SignUpDropdownContainer />
        <div className="w-1/2 flex items-center gap-4">
          <div className="flex-1 border-b border-gray-400"></div>
          <span className="text-gray-600 text-sm font-medium">OR</span>
          <div className="flex-1 border-b border-gray-400"></div>
        </div>

        <div className="py-4 flex items-center justify-center w-full">
          <button className="flex items-center justify-center gap-4 cursor-pointer rounded-full bg-gray-600 text-white px-4 py-2">
            <FaGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
