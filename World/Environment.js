import * as THREE from "three";
import Experience from "../Experience/Experience";
import gsap from "gsap";
import gui from "lil-gui";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // this.gui = new gui({ container: document.querySelector(".hero-main") });
    this.obj = {
      colorObj: { r: 0, g: 0, b: 0 },
      intensity: 3,
    };

    this.setSunlight();
    // this.setGUI();
  }

  setGUI() {
    this.gui.addColor(this.obj, "colorObj").onChange(() => {
      this.sunLight.color.copy(this.obj.colorObj);
      this.ambientLight.color.copy(this.obj.colorObj);
      console.log(this.obj.colorObj);
    });
    this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
      this.sunLight.intensity = this.obj.intensity;
      this.sunLight.ambientLight = this.obj.intensity;
    });
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

  switchTheme(theme) {
    console.log(this.sunLight);
    if (theme === "dark") {
      gsap.to(this.sunLight.color, {
        r: 0.25882352941176473,
        g: 0.44313725490196076,
        b: 1,
      });
      gsap.to(this.ambientLight.color, {
        r: 0.25882352941176473,
        g: 0.44313725490196076,
        b: 1,
      });
      gsap.to(this.sunLight, {
        intensity: 0.78,
      });
      gsap.to(this.ambientLight, {
        intensity: 0.78,
      });
    } else {
      gsap.to(this.sunLight.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      gsap.to(this.ambientLight.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      gsap.to(this.sunLight, {
        intensity: 3,
      });
      gsap.to(this.ambientLight, {
        intensity: 1,
      });
    }
  }

  resize() {}

  update() {}
}
