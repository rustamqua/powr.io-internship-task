import styled from "styled-components";
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
export default StyledBox;
