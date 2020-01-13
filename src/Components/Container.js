import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import AppStore from "../Store/AppStore";
import { observer } from "mobx-react";
import { Button } from "./Button";
import StyledContainer from "../StyledComponents/StyledContainer";

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
