import styled from "styled-components";
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
export default StyledContainer;
