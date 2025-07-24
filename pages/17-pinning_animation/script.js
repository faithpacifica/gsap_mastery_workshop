import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pin-container", // The element that will be pinned
  start: "top center", // Start when the top of the pin-container hits the center of the viewport
  end: "+=500",// 500px past the start point
  pin: ".box",// Pin the .box element
  markers: true,
});
