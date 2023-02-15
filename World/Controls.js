import * as THREE from "three";
import Experience from "../Experience/Experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ASScroll from "@ashthornton/asscroll";

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
    this.setScrollTrigger();
  }

  setPath() {
    this.timeline = new gsap.timeline();
    this.timeline.to(this.house.position, {
      x: () => {
        return this.sizes.width * 0.0012;
      },
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    this.timeline.to(this.house.position, {
      x: () => {
        return this.sizes.width * -0.0012;
      },
      scrollTrigger: {
        trigger: ".second-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    this.timeline.to(this.house.position, {
      x: () => {
        return this.sizes.width * 0.0012;
      },
      scrollTrigger: {
        trigger: ".third-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 969px)": () => {
        console.log("fired desktop");

        this.house.scale.set(0.006, 0.006, 0.006);
      },

      //Mobile
      "(max-width: 968px)": () => {
        console.log("fired mobile");

        this.house.scale.set(0.003, 0.003, 0.003);
      },

      all: () => {
        this.sections = document.querySelectorAll(".section");
        this.sections.forEach((section) => {
          this.progressWrapper = section.querySelector(".progress-wrapper");
          this.progressBar = section.querySelector(".progress-bar");

          if (section.classList.contains("right")) {
            gsap.to(section, {
              borderTopLeftRadius: 10,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomLeftRadius: 700,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          } else {
            gsap.to(section, {
              borderTopRightRadius: 10,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomRightRadius: 700,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }
          gsap.from(this.progressBar, {
            scaleY: 0,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.4,
              pin: this.progressWrapper,
              pinSpacing: false,
            },
          });
        });
      },
    });
  }

  resize() {}

  update() {}
}
