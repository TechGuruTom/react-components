import React from "react";
import styled from "styled-components";

const WithLableWrapper = styled.div`
  background-color: transparent;
  p {
    text-align: left;
    margin: 0;
    padding: 0 0 10px 0;
  }
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
