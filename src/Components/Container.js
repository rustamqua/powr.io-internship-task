import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
const StyledContainer = styled.div`
  border: 1px solid black;
  display: inline-block;
  min-width: 100px;
  margin: 20px;
`;
export const Container = props => {
  const [showTooltip, setShowing] = useState(true);
  return (
    <StyledContainer>
      <div>
        <button
          onClick={() => {
            setShowing(!showTooltip);
          }}
        >
          Add
        </button>
        {props.children}
        <Tooltip showTooltip={showTooltip}></Tooltip>
      </div>
    </StyledContainer>
  );
};
