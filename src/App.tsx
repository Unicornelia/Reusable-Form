import React from "react";
import useCustomForm from "./hooks/useCustomForm";

const App = () => {
  const initialValues = {
    name: "",
    occupation: "",
    age: 0
  };

  const onSubmit = (values: any) => {
    console.log(values, 'submitting');
  };

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    errors
  } = useCustomForm({ initialValues, onSubmit });

  console.log(values, 'initial')

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <p>A Simple form</p>
      </header>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <label>Occupation</label>
        <input
          type="text"
          name="occupation"
          onChange={handleChange}
          value={values.occupation}
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={values.age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
