import * as THREE from "three";
import Experience from "../Experience/Experience";
import House from "./House";
import Controls from "./Controls";
import Environment from "./Environment";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.house = new House();
      this.controls = new Controls();
    });
    console.log("created room");
  }

  resize() {}

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }
}
