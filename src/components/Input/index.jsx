import { useSelector } from "react-redux";
import { useEffect } from "react";
import CheckBoxInput from "./CheckBoxInput";
import DocumentInput from "./DocumentInput";
import DropdownInput from "./DropdownInput";
import MobileNumberInput from "./MobileNumberInput";
import NumberInput from "./NumberInput";
import PasswordInput from "./PasswordInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

const COMPONENT_MAP = {
  text: TextInput,
  password: PasswordInput,
  number: NumberInput,
  textarea: TextAreaInput,
  mobileNumber: MobileNumberInput,
  checkbox: CheckBoxInput,
  dropdown: DropdownInput,
  document: DocumentInput,
};

const InputBox = (props) => {
  const authData = useSelector((state) => state.Auth);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      authData.theme === "dark"
    );
  }, [authData.theme]);

  const Component = COMPONENT_MAP[props.type] ?? COMPONENT_MAP.text;

  return Component ? <Component {...props} /> : null;
};

export default InputBox;
