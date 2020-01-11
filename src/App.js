import React from "react";
import { observer } from "mobx-react";
import AppStore from "./Store/AppStore";
import { Container } from "./Components/Container";
import { Box } from "./Components/Box";
@observer
class App extends React.Component {
  render() {
    let a = AppStore.ObjectStructure;
    let data = [];
    const buildData = x => {
      for (let i = 0; i < x.length; i++) {
        if (x[i].type === "box") {
          data.push(<Box></Box>);
        }
        if (x[i].type === "container") {
          data.push(
            <Container children={buildContainer(x[i].items)}></Container>
          );
        }
      }
      return data;
    };
    const buildContainer = x => {
      let tempdata = [];
      for (let i = 0; i < x.length; i++) {
        if (x[i].type === "box") {
          tempdata.push(<Box></Box>);
        }
        if (x[i].type === "container") {
          tempdata.push(
            <Container children={buildContainer(x[i].items)}></Container>
          );
        }
      }
      return tempdata;
    };
    return (
      <div>
        <Container>{buildData(a.items)}</Container>
      </div>
    );
  }
}

export default App;
