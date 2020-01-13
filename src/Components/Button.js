import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  border: none;
  background: hsl(204, 86%, 53%);
  color: white;
  font-size: 12px;
  &:hover {
    opacity: 0.6;
  }
`;
export const Button = props => {
  return (
    <StyledButton onClick={props.func} className={props.class}>
      {props.children}
    </StyledButton>
  );
};
