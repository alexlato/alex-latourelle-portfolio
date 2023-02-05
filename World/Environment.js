import * as THREE from "three";
import Experience from "../Experience/Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunlight();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 1.75);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 16;
    this.sunLight.shadow.mapSize.set(4096, 4096);
    this.sunLight.shadow.normalBias = 0.05;
    // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    // this.scene.add(helper);

    this.sunLight.position.set(0, 4, 4);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
    console.log(this.ambientLight);

    // const spotLightHelper = new THREE.SpotLightHelper(this.spotLight);
    // this.scene.add(spotLightHelper);
  }

  resize() {}

  update() {}
}
