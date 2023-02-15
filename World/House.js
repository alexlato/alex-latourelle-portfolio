import * as THREE from "three";
import Experience from "../Experience/Experience";
import gsap from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class House {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.house = this.resources.items.house;
    this.actualHouse = this.house.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.04,
    };

    this.setModel();
    this.onMouseMove();
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

      // console.log(child);
    });

    this.scene.add(this.actualHouse);
    this.actualHouse.scale.set(0.006, 0.006, 0.006);
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.08;
    });
  }

  resize() {}

  update() {
    this.lerp.current = gsap.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.actualHouse.rotation.y = this.lerp.current;
  }
}
