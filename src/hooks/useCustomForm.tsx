import { useState, useEffect, useRef } from "react";

const useCustomForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmittinng] = useState<boolean>(false);
  const [onBlur, setOnBlur] = useState<boolean>(false);
};

export default useCustomForm;
