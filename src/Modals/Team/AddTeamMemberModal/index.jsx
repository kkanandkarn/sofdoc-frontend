import React, { useEffect, useState } from "react";
import { notifier } from "../../../components/Notifier";
import MakeModal from "../../../components/MakeModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputBox from "../../../components/Input";
import { FaSave } from "react-icons/fa";
import Button from "../../../components/Button";
import { MdEmail } from "react-icons/md";

const AddTeamMemberModal = ({ mode, data, setModal }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });
  useEffect(() => {
    if (mode === "edit" && data) {
      setState(data);
    }
  }, [mode, data]);
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
  const handleStatusChange = (value) => {
    setState((prev) => ({
      ...prev,
      status: value,
    }));
    setErrors((prev) => ({
      ...prev,
      status: "",
    }));
  };
  const handleSubmit = () => {
    notifier.success("Invite Sent Successfully");
    setModal("");
  };
  return (
    <MakeModal>
      <div className="min-w-[20%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
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
          <h1 className="text-gray-600 font-semibold ">
            {mode === "edit" ? "Update Team Member" : "Add Team Member"}
          </h1>
        </div>
        <div className="p-4">
          <InputBox
            type="text"
            value={state.name}
            name={"name"}
            error={errors.name}
            label={"Name"}
            onChange={handleChange}
            placeholder={"John Doe"}
            autoFocus={true}
            required={true}
          />
          <InputBox
            type="text"
            value={state.email}
            name={"email"}
            error={errors.email}
            label={"Email"}
            onChange={handleChange}
            placeholder={"john.doe@test.com"}
            required={true}
          />

          <div className="flex items-center justify-between gap-2 py-4">
            <Button
              label={"Cancel"}
              onClick={() => setModal("")}
              variant="secondry"
            />
            <Button
              label={"Send Invitation"}
              iconPrfix={<MdEmail size={18} />}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </MakeModal>
  );
};

export default AddTeamMemberModal;
