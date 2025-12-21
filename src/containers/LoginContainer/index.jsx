import React, { useState } from "react";
import loginBanner from "../../assets/login-banner.png";
import { CiLock } from "react-icons/ci";
import InputBox from "../../components/Input";
import Button from "./../../components/Button";
import { LuLogIn } from "react-icons/lu";
import { validate } from "../../validations";
import { notifier } from "../../components/Notifier";
import { useDispatch } from "react-redux";
import { userLogin } from "./../../store/slices/Auth/AuthThunk";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "anandkrkarn",
    password: "Anayka@2019",
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

    const res = await dispatch(userLogin(state)).unwrap();
    console.log("API RESPONSE: ", res);
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
          />
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
