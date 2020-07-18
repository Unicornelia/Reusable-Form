import * as React from 'react'
import { useState, useEffect, useRef } from "react";

const useCustomForm = ({ initialValues, onSubmit }) => {
  //set initial state for custom hook
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
  const [onBlur, setOnBlur] = useState<boolean>(false);

  const formRendered = useRef(true);

  //wait until the form is rendered - handle side effects
  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //get the event.target for an element
    const {
      target: { name, value }
    } = event;
    event.persist();
    //set state to take previous values and add this new
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {name}} = event
    setTouched({...touched, [name]: true})
    setErrors({...errors})
  }
};

export default useCustomForm;
