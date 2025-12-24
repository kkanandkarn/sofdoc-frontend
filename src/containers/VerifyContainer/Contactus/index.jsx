import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return <Button label={"Contact"} onClick={handleClick} variant="secondry" />;
};

export default ContactUs;
