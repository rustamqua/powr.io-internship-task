import React from "react";
import { observer } from "mobx-react";
import AppStore from "../Store/AppStore";
import StyledBuildForm from "../StyledComponents/StyledBuildForm";
import { Button } from "./Button";

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
