import styled from "styled-components";
const StyledBuildForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .formchild {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  textarea {
    margin: 20px;
    width: 400px;
    height: 80px;
    border: none;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(46, 123, 255, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(46, 123, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(46, 123, 255, 1);
    border-radius: 20px;
    padding: 10px;
  }
  .btn {
    margin: 20px;
    font-size: 24px;
    padding: 20px;
    background: hsl(141, 53%, 53%);
  }
  .error {
    color: hsl(348, 100%, 61%);
    font-size: 26px;
    text-align: center;
    margin-top: 20px;
  }
  .json {
    font-size: 18px;
    font-weight: 1000;
    background: white;
    padding: 20px;
    text-align: center;
  }
`;
export default StyledBuildForm;
