import React from "react";
import styled from "styled-components";

const WithLableWrapper = styled.div`
  background-color: transparent;
`;

export const WithLable = ({ lable, children }) => {
  console.log(lable);
  if (lable) {
    return (
      <WithLableWrapper>
        <p>{lable}</p>
        {children}
      </WithLableWrapper>
    );
  }
  return { children };
};
