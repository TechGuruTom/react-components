import React from "react";
import { FormContainer } from "../components/Form";
import { FormSelect } from "../components/Select/FormSelect";

export const DemoForm = () => {
  return (
    <FormContainer>
      <FormSelect width={"100%"} lable="company" />
      <FormSelect width={"100%"} lable="property" />
    </FormContainer>
  );
};
