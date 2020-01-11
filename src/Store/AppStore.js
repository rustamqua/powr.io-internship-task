import { observable, action, computed, autorun } from "mobx";

class AppStore {
  /*@observable birds = [];
  @action addBird = bird => {
    this.birds.push(bird);
  };

  @computed get birdCount() {
    return this.birds.length;
  }
  @computed get birdsTo() {
    return this.birds.toString();
  }*/
  constructor() {
    autorun(() => {
      console.log(this.BoxesAndContainers);
    });
  }
  @observable BoxesAndContainers = {
    type: "container",
    items: [
      { type: "box" },
      {
        type: "container",
        items: [
          {
            type: "container",
            items: [
              { type: "box" },
              { type: "container", items: [{ type: "box" }] }
            ]
          },
          { type: "container", items: [{ type: "box" }] }
        ]
      }
    ]
  };
  @action pushContainer = () => {};
  @action pushBox = () => {};
  @computed get Structure() {
    if (this.BoxesAndContainers.items) {
      return helper(this.BoxesAndContainers.items, []);
    }
  }
  @computed get ObjectStructure() {
    return JSON.parse(JSON.stringify(this.BoxesAndContainers));
  }
}
const helper = (x, y) => {
  for (let i = 0; i < x.length; i++) {
    y.push(x[i].type);
    if (x[i].items) {
      helper(x[i].items, y);
    }
  }
  return y;
};
const store = new AppStore();
export default store;
