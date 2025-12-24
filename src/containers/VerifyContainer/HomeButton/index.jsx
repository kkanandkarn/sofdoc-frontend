import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return <Button label={"Home"} onClick={handleClick} />;
};

export default HomeButton;
