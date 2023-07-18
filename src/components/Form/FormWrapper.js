import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 0;
  padding: 0;

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const FormContainer = ({ children }) => {
  return (
    <FormWrapper>
      <form>{children}</form>
    </FormWrapper>
  );
};

export { FormContainer };
