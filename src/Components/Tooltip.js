import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

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
            <button>Box</button>
            <button>Container</button>
          </div>
        </StyledTooltip>
      );
    }
    return <div>{showButtons}</div>;
  }
}
export default Tooltip;
