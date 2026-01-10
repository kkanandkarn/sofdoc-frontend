import React, { useState } from "react";
import MakeModal from "../../../components/MakeModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../../../components/Button";
import InputBox from "../../../components/Input";
import { notifier } from "../../../components/Notifier";

const AddEnvironmentModal = ({ setModal }) => {
  const [state, setState] = useState({
    environment: "",
    isPrimary: false,
  });
  const [errors, setErrors] = useState({
    environment: "",
    isPrimary: false,
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

  const handlePrimary = (value) => {
    setState((prev) => ({
      ...prev,
      isPrimary: value,
    }));
    setErrors((prev) => ({
      ...prev,
      isPrimary: "",
    }));
  };

  const handleSubmit = () => {
    notifier.success("Environment Added Successfully");
    setModal("");
  };

  return (
    <MakeModal>
      <div className="min-w-[30%]  min-h-[40%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
        <div className="absolute top-3 right-8">
          <button
            onClick={() => {
              setModal("");
            }}
            className="text-3xl cursor-pointer text-red-500"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 py-4">
          <h1 className="text-gray-600 font-semibold ">Add Environment</h1>
        </div>
        <div className="pt-8 pb-2 px-8 flex flex-col justify-center items-center">
          <InputBox
            type="text"
            value={state.environment}
            name={"environment"}
            error={errors.environment}
            label={"Environment Name"}
            onChange={handleChange}
            placeholder={"e.g. Unit Testing Environment"}
            autoFocus={true}
            required={true}
          />
          <InputBox
            type="checkbox"
            value={state.isPrimary}
            name={"isPrimary"}
            error={errors.isPrimary}
            label={"This is Primary Environment"}
            onChange={handlePrimary}
          />

          <div className="flex items-center  w-full justify-end gap-2 py-4">
            <Button
              label={"Cancel"}
              onClick={() => setModal("")}
              variant="secondry"
            />
            <Button label={"Add Environment"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </MakeModal>
  );
};

export default AddEnvironmentModal;
