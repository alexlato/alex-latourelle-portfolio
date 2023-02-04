import * as THREE from "three";
import Experience from "../Experience/Experience";

export default class House {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;
    this.house = this.resources.items.house;
    this.actualHouse = this.house.scene;

    this.setModel();
  }

  setModel() {
    this.actualHouse.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Object3D) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      console.log(child);
    });

    this.scene.add(this.actualHouse);
    this.actualHouse.scale.set(0.005, 0.005, 0.005);
  }

  resize() {}

  update() {}
}
