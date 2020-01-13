import React from "react";
import { observer } from "mobx-react";
import AppStore from "./Store/AppStore";
import Container from "./Components/Container";
import Box from "./Components/Box";
import { Button } from "./Components/Button";
import BuildForm from "./Components/BuildForm";
@observer
class App extends React.Component {
  render() {
    let store = AppStore.ObjectStructure;
    let data = [];
    let containerIds = 1;
    let boxIds = 0;
    const buildData = objectWithBoxesAndContainers => {
      for (let i = 0; i < objectWithBoxesAndContainers.length; i++) {
        if (objectWithBoxesAndContainers[i].type === "box") {
          if (objectWithBoxesAndContainers[i].color) {
            data.push(
              <Box
                color={objectWithBoxesAndContainers[i].color}
                id={boxIds++}
              ></Box>
            );
          } else {
            data.push(<Box id={boxIds++}></Box>);
          }
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
          if (itemsOfContainer[i].color) {
            tempdata.push(
              <Box color={itemsOfContainer[i].color} id={boxIds++}></Box>
            );
          } else {
            tempdata.push(<Box id={boxIds++}></Box>);
          }
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

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Container id={0}>{buildData(store.items)}</Container>
        </div>
        <BuildForm></BuildForm>
      </div>
    );
  }
}

export default App;
