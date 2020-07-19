import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { isValidEmail } from "../../helpers/isValidEmail";
import { isValidPassword } from "../../helpers/isValidPassword";
import { isNotEmptyString } from "../../helpers/isNotEmptyString";
import { capitalize } from "../../helpers/capitalize";
import { Input, LabelTitle, ValidationWrapper } from "./styles";

export type FieldProps = {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
};

const FormField = (props: FieldProps) => {
  const { name, label, required, type } = props;
  let validateRule: any;

  switch (name) {
    case "email":
      validateRule = isValidEmail;
      break;
    case "password":
      validateRule = isValidPassword;
      break;
    default:
      validateRule = isNotEmptyString;
      break;
  }

  const [value, setValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (!inputRef.current) {
      setValue("");
      setValidationMessage("");
    }
  }, [inputRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const capturedValue = event.target.value;
    setValue(capturedValue);

    if (required) {
      validateRule(capturedValue)
        ? setValidationMessage("")
        : setValidationMessage(`Invalid ${name}/ Field cannot be empty`);
    }
  };

  return (
    <div ref={inputRef}>
      <label>
        <LabelTitle>{label ? label : capitalize(name)}</LabelTitle>
        <Input
          type={!type ? `text` : type}
          value={value}
          onChange={handleChange}
          name={name}
        />
      </label>
      <ValidationWrapper>{validationMessage}</ValidationWrapper>
    </div>
  );
};

export default FormField;
