import React from "react";
import styled from "styled-components";
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background: orange;
  display: inline-block;
  margin: 20px;
`;
export const Box = props => {
  return (
    <StyledBox>
      <div className="Box">{props.id}</div>
    </StyledBox>
  );
};
