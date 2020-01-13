import React, { useState } from "react";

import AppStore from "../Store/AppStore";
import { observer } from "mobx-react";
import { TwitterPicker } from "react-color";
import { Button } from "./Button";
import StyledBox from "../StyledComponents/StyledBox";
@observer
class Box extends React.Component {
  state = {
    color: "orange",
    showOptions: false,
    showColorChooser: false
  };
  render() {
    let showOptions;
    let showColor;
    if (this.state.showColorChooser && this.state.showOptions) {
      showColor = (
        <div style={{ position: "absolute" }}>
          <TwitterPicker
            onChangeComplete={color => {
              this.setState({ color: color.hex });
              AppStore.addColor(this.props.id, this.state.color);
            }}
          ></TwitterPicker>
        </div>
      );
    }
    if (this.state.showOptions) {
      showOptions = (
        <div className="delete_changecolor" style={{ position: "absolute" }}>
          <Button
            func={() => {
              this.setState({ showOptions: false });
              AppStore.deleteBox(this.props.id);
            }}
            class="deletebtn"
          >
            Delete
          </Button>
          <Button
            func={() => {
              this.setState({ showColorChooser: !this.state.showColorChooser });
            }}
            class="color"
          >
            Change color
          </Button>
          <Button
            func={() => {
              this.setState({ showOptions: false, showColorChooser: false });
            }}
          >
            Close
          </Button>
        </div>
      );
    }
    return (
      <StyledBox
        color={this.props.color}
        onClick={e => {
          if (e.target.className === "Box") {
            this.setState({ showOptions: !this.state.showOptions });
          }
        }}
      >
        <div className="Box">{showOptions}</div>
        <div>{showColor}</div>
      </StyledBox>
    );
  }
}
export default Box;
