import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import AppStore from "../Store/AppStore";
const StyledTooltip = styled.div`
  display: flex;
`;
@observer
class Tooltip extends React.Component {
  render() {
    let showButtons;
    if (this.props.showTooltip) {
      showButtons = (
        <StyledTooltip>
          <div>
            <button onClick={() => AppStore.pushBox(this.props.id)}>Box</button>
            <button onClick={() => AppStore.pushContainer(this.props.id)}>
              Container
            </button>
            {this.props.id}
          </div>
        </StyledTooltip>
      );
    }
    return <div>{showButtons}</div>;
  }
}
export default Tooltip;
