import { observable, action, computed, autorun } from "mobx";

class AppStore {
  constructor() {
    autorun(() => {
      console.log(this.ObjectStructure);
    });
  }
  @observable BoxesAndContainers = {
    type: "container",
    items: [
      { type: "box" },
      {
        type: "container",
        items: [{ type: "box" }, { type: "box" }]
      }
    ]
  };
  @action build = structure => {
    this.BoxesAndContainers = JSON.parse(structure);
  };
  @action pushContainer = containerId => {
    if (containerId === 0) {
      this.BoxesAndContainers.items.push({ type: "container", items: [] });
    } else {
      let count = 0;
      const findContainer = (items, containerId) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type === "container") {
            count++;
            if (count === containerId) {
              items[i].items.push({ type: "container", items: [] });
              return;
            } else {
              findContainer(items[i].items, containerId);
            }
          }
        }
      };
      findContainer(this.BoxesAndContainers.items, containerId);
    }
  };
  @action deleteBox = containerId => {
    let count = 0;
    let deleted = 0;
    /*const findBox = (items, containerId) => {
      let countInside = -1;
      for (let i = 0; i < items.length; i++) {
        countInside++;
        if (items[i].type === "container") {
          if (findBox(items[i].items, containerId)) {
            break;
          }
        } else if (count === containerId) {
          console.log(count);
          console.log(countInside);
          items.splice(countInside, 1);
          return true;
        } else {
          count++;
        }
      }
    };*/
    const findBox = (items, containerId) => {
      let countInside = -1;

      for (let i = 0; i < items.length; i++) {
        countInside++;
        if (items[i].type === "container") {
          if (findBox(items[i].items, containerId)) {
            deleted++;
            return;
          }
        } else if (count === containerId && deleted === 0) {
          console.log(count);
          console.log(countInside);
          items.splice(countInside, 1);
          return true;
        } else {
          count++;
        }
      }
    };

    if (containerId === 0) {
      this.BoxesAndContainers.items.splice(0, 1);
    } else {
      findBox(this.BoxesAndContainers.items, containerId);
    }
  };

  @action pushBox = containerId => {
    if (containerId === 0) {
      this.BoxesAndContainers.items.push({ type: "box" });
    } else {
      let count = 0;
      const findContainer = (items, containerId) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type === "container") {
            count++;
            if (count === containerId) {
              items[i].items.push({ type: "box" });
              return;
            } else {
              findContainer(items[i].items, containerId);
            }
          }
        }
      };
      findContainer(this.BoxesAndContainers.items, containerId);
    }
  };
  @computed get ObjectStructure() {
    return JSON.parse(JSON.stringify(this.BoxesAndContainers));
  }
}

const store = new AppStore();
export default store;
