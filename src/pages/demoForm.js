import React from "react";
import { FormContainer } from "../components/Form";
import { FormSelect } from "../components/Select/FormSelect";

export const DemoForm = () => {
  return (
    <FormContainer>
      <FormSelect width={"clamp(200px,30%,400px)"} />
      <FormSelect width={"clamp(200px,30%,400px)"} />
    </FormContainer>
  );
};
