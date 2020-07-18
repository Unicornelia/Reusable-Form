import * as React from "react";
import { useState } from "react";

const useCustomForm = ({ initialValues, onSubmit }: any) => {
  //set initial state for custom hook
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //get the event.target for an element
    const { target } = event;
    const { name, value } = target;
    event.persist();
    //set state to take previous values and add this new
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = (event: any) => {
    //handling submit event, take values and errors and pas it to the onSubmit event that got passed down
    if (event) {
      event.preventDefault();
    }
    setErrors({ ...errors });
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useCustomForm;
