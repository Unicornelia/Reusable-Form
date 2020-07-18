import React from "react";
import useCustomForm from "../hooks/useCustomForm";

const Form = () => {
  const initialValues = {
    name: "",
    occupation: "",
    age: 0
  };

  const onSubmit = (values: any) => {
    console.log(values, "submitting");
  };

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    errors
  } = useCustomForm({ initialValues, onSubmit });

  return (
    <div style={{ display: "grid" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ padding: "20px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            onChange={handleChange}
            value={values.occupation}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={values.age}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
