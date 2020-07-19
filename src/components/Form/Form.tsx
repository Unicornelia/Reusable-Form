import React, { SyntheticEvent, FC, CSSProperties } from "react";
import FormField, { FieldProps } from "../FormField/FormField";
import { Button } from "./styles";

type FormProps = {
  style?: CSSProperties;
};

const Form: FC<FormProps> & { Field: FC<FieldProps> } = props => {
  const { children } = props;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("submitting");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

Form.Field = FormField;

export default Form;
