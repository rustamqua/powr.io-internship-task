import React, { useState } from "react";
import styled from "styled-components";
import AppStore from "../Store/AppStore";
import { observer } from "mobx-react";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background: orange;
  display: inline-block;
  margin: 20px;
`;
@observer
class Box extends React.Component {
  render() {
    return (
      <StyledBox>
        <div className="Box">
          <div>
            {this.props.id}
            <button
              onClick={() => {
                AppStore.deleteBox(this.props.id);
              }}
            >
              Delete
            </button>
            <button>Change color</button>
          </div>
        </div>
      </StyledBox>
    );
  }
}
export default Box;
