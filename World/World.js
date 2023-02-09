import * as THREE from "three";
import Experience from "../Experience/Experience";
import House from "./House";
import Controls from "./Controls";
import Environment from "./Environment";
import Floor from "./Floor";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.theme = this.experience.theme;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.house = new House();
      this.floor = new Floor();
      this.controls = new Controls();
    });
    console.log("created room");

    this.theme.on("switch", (theme) => {
      this.switchTheme(theme);
    });
  }

  switchTheme(theme) {
    if (this.environment) {
      this.environment.switchTheme(theme);
    }
  }

  resize() {}

  update() {
    if (this.house) {
      this.house.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}
