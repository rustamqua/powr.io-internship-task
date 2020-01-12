import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

const StyledContainer = styled.div`
  border: 1px solid black;
  display: inline-block;
  min-width: 100px;
  margin: 20px;
`;

class Container extends React.Component {
 
  state = { showTooltip: true };
  render() {
    return (
      <StyledContainer>
        <div className="container">
          <button
            onClick={() => {
              this.setState({ showTooltip: !this.state.showTooltip });
            }}
          >
            Add
          </button>
          {this.props.children}
          <Tooltip
            showTooltip={this.state.showTooltip}
            id={this.props.id}
          ></Tooltip>
        </div>
      </StyledContainer>
    );
  }
}
export default Container;
