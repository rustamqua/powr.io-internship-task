import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import AppStore from "../Store/AppStore";
import { Button } from "./Button";
import StyledTooltip from "../StyledComponents/StyledTooltip";
@observer
class Tooltip extends React.Component {
  render() {
    let showButtons;
    if (this.props.showTooltip) {
      showButtons = (
        <StyledTooltip>
          <Button func={() => AppStore.pushBox(this.props.id)} class="leftTool">
            Box
          </Button>
          {this.props.children}
          <Button
            func={() => AppStore.pushContainer(this.props.id)}
            class="rightTool"
          >
            Container
          </Button>
        </StyledTooltip>
      );
    } else {
      showButtons = <StyledTooltip>{this.props.children}</StyledTooltip>;
    }
    return <div>{showButtons}</div>;
  }
}
export default Tooltip;
