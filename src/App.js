import React from "react";
import { observer } from "mobx-react";
import AppStore from "./Store/AppStore";
import Container from "./Components/Container";
import Box from "./Components/Box";
@observer
class App extends React.Component {
  state = {
    structure: "",
    errorData: false
  };
  render() {
    let store = AppStore.ObjectStructure;
    let data = [];
    let containerIds = 1;
    let boxIds = 0;
    const buildData = objectWithBoxesAndContainers => {
      for (let i = 0; i < objectWithBoxesAndContainers.length; i++) {
        if (objectWithBoxesAndContainers[i].type === "box") {
          data.push(<Box id={boxIds++}></Box>);
        }
        if (objectWithBoxesAndContainers[i].type === "container") {
          data.push(
            <Container
              id={containerIds++}
              children={buildContainer(objectWithBoxesAndContainers[i].items)}
            ></Container>
          );
        }
      }
      return data;
    };
    const buildContainer = itemsOfContainer => {
      let tempdata = [];
      for (let i = 0; i < itemsOfContainer.length; i++) {
        if (itemsOfContainer[i].type === "box") {
          tempdata.push(<Box id={boxIds++}></Box>);
        }
        if (itemsOfContainer[i].type === "container") {
          tempdata.push(
            <Container
              id={containerIds++}
              children={buildContainer(itemsOfContainer[i].items)}
            ></Container>
          );
        }
      }
      return tempdata;
    };
    let showError;
    if (this.state.errorData) {
      showError = <div>WrongData</div>;
    }
    return (
      <div>
        <Container id={0}>{buildData(store.items)}</Container>
        <input
          onChange={e => this.setState({ structure: e.target.value })}
        ></input>
        <button
          onClick={() => {
            try {
              AppStore.build(this.state.structure);
              this.setState({ errorData: false });
            } catch (e) {
              this.setState({ errorData: true });
            }
          }}
        >
          Build
        </button>
        {JSON.stringify(AppStore.ObjectStructure)}
        <div></div>
        {showError}
      </div>
    );
  }
}

export default App;
