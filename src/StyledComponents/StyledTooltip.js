import styled from "styled-components";
const StyledTooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 120px;
  .leftTool {
    position: relative;
    z-index: 2;
    left: 17px;
    bottom: 20px;
    background: hsl(141, 53%, 53%);
  }
  .rightTool {
    position: relative;
    z-index: 2;
    right: 17px;
    bottom: 20px;
    background: hsl(141, 53%, 53%);
  }
`;
export default StyledTooltip;
