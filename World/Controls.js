import * as THREE from "three";
import Experience from "../Experience/Experience";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.house = this.experience.world.house.actualHouse;
    gsap.registerPlugin(ScrollTrigger);

    this.setPath();
  }

  setPath() {
    this.timeline = new gsap.timeline();
    this.timeline.to(this.house.position, {
      x: () => {
        return this.sizes.width * 0.0012;
      },
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
  }

  resize() {}

  update() {}
}
