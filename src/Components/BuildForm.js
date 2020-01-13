import React from "react";
import { observer } from "mobx-react";
import AppStore from "../Store/AppStore";
import styled from "styled-components";
import { Button } from "./Button";
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
@observer
class BuildForm extends React.Component {
  state = {
    structure: "",
    errorData: false,
    jsonCreated: false
  };

  render() {
    let json;
    if (this.state.jsonCreated) {
      json = (
        <div>
          <div id="json" className="json">
            {JSON.stringify(AppStore.ObjectStructure)}
          </div>
          <Button
            class="btnCopy"
            func={e => {
              var textField = document.createElement("textarea");
              textField.innerText = JSON.stringify(AppStore.ObjectStructure);
              document.body.appendChild(textField);
              textField.select();
              document.execCommand("copy");
              textField.remove();
            }}
          >
            Copy
          </Button>
        </div>
      );
    }
    let errorData;
    if (this.state.errorData) {
      errorData = <div className="error">Wrong data assigned</div>;
    }
    return (
      <StyledBuildForm>
        <div className="form">
          <div className="formchild">
            <textarea
              onChange={e => this.setState({ structure: e.target.value })}
              type="text"
              placeholder="JSON data..."
            ></textarea>
            <Button
              class="btn"
              func={() => {
                try {
                  AppStore.build(this.state.structure);
                  this.setState({ errorData: false });
                } catch (e) {
                  this.setState({ errorData: true });
                }
              }}
            >
              Build Container
            </Button>
            {errorData}
            <div className="formchild">
              <Button
                class="btn"
                func={() => {
                  this.setState({ jsonCreated: true });
                }}
              >
                Create JSON
              </Button>
              <div>{json}</div>
            </div>
          </div>
        </div>
      </StyledBuildForm>
    );
  }
}
export default BuildForm;
