import React from "react";
import StyledButton from "../StyledComponents/StyledButton";
export const Button = props => {
  return (
    <StyledButton onClick={props.func} className={props.class}>
      {props.children}
    </StyledButton>
  );
};
