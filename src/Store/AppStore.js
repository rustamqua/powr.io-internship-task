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
        items: [
          { type: "box", color: "#f78da7" },
          { type: "box", color: "#9900ef" },
          { type: "container", items: [{ type: "box" }] }
        ]
      },
      {
        type: "container",
        items: [
          { type: "container", items: [{ type: "box", color: "#7bdcb5" }] },
          { type: "box", color: "#ff6900" },
          {
            type: "container",
            items: [
              { type: "box" },
              { type: "container", items: [{ type: "box", color: "#abb8c3" }] }
            ]
          }
        ]
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
  @action addColor = (containerId, color) => {
    let count = 0;
    let deleted = 0;
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
          items[i].color = color;
          return true;
        } else {
          count++;
        }
      }
    };

    findBox(this.BoxesAndContainers.items, containerId);
  };
  @action deleteContainer = containerId => {
    let count = 0;
    let deleted = 0;
    const findContainer = (items, containerId) => {
      let innerCount = -1;
      for (let i = 0; i < items.length; i++) {
        innerCount++;
        if (items[i].type === "container") {
          count++;
          if (count === containerId) {
            items.splice(innerCount, 1);
            return;
          } else {
            findContainer(items[i].items, containerId);
          }
        }
      }
    };
    findContainer(this.BoxesAndContainers.items, containerId);
  };
  @action deleteBox = containerId => {
    let count = 0;
    let deleted = 0;
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
          items.splice(countInside, 1);
          return true;
        } else {
          count++;
        }
      }
    };

    findBox(this.BoxesAndContainers.items, containerId);
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
