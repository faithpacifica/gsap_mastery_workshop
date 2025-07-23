import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  y: 200,
  opacity: 0,
  rotate: 360,
  stagger: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom 10%",
    scrub: 3,
    markers: true,
  },
});
