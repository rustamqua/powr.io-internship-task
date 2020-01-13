import React, { useState } from "react";
import styled from "styled-components";
import AppStore from "../Store/AppStore";
import { observer } from "mobx-react";
import { TwitterPicker } from "react-color";
import { Button } from "./Button";
const StyledBox = styled.div`
  display: inline-block;
  .Box {
    width: 100px;
    height: 100px;
    background: ${props => props.color || "orange"};
    display: inline-block;
    margin: 20px;
    border-radius: 20px;
  }
  .delete_changecolor {
    width: 100px;
    height: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .deletebtn {
      background: hsl(348, 100%, 61%);
    }
    .color {
      background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    }
  }
`;
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
