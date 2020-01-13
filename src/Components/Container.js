import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import AppStore from "../Store/AppStore";
import { observer } from "mobx-react";
import { Button } from "./Button";

const StyledContainer = styled.div`
  -webkit-box-shadow: 0px 0px 24px -5px rgba(0, 0, 0, 0.96);
  -moz-box-shadow: 0px 0px 24px -5px rgba(0, 0, 0, 0.96);
  box-shadow: 0px 0px 24px -5px rgba(0, 0, 0, 0.96);
  border-radius: 5px;
  display: inline-block;

  background: white;
  margin: 20px;
  .container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    justify-items: center;
  }
  .container2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .delbtn {
    background: hsl(348, 100%, 61%);
  }
`;

@observer
class Container extends React.Component {
  state = { showTooltip: false };

  render() {
    let delButton;
    if (this.props.id !== 0) {
      delButton = (
        <Button
          func={() => {
            this.setState({ showTooltip: false });
            AppStore.deleteContainer(this.props.id);
          }}
          class="delbtn"
        >
          Delete
        </Button>
      );
    }
    return (
      <StyledContainer>
        <div className="container">{this.props.children}</div>
        <div className="container2">
          <Tooltip showTooltip={this.state.showTooltip} id={this.props.id}>
            <Button
              func={() => {
                this.setState({ showTooltip: !this.state.showTooltip });
              }}
            >
              Add
            </Button>
          </Tooltip>
          {delButton}
        </div>
      </StyledContainer>
    );
  }
}
export default Container;
