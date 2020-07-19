import React from "react";
import Form from "../components/Form/Form";
import { Wrapper } from "./styles";

const App = () => {
  return (
    <Wrapper>
      <header>
        <h1>A Simple Reusable Form</h1>
      </header>
      <Form>
        <Form.Field name="name" required />
        <Form.Field name="profession" />
        <Form.Field name="email" required />
        <Form.Field type="password" name="password" required />
        <Form.Field name="hobby" label="List your hobbies" />
      </Form>
    </Wrapper>
  );
};

export default App;
