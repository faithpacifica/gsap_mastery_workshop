import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 800,
  rotate: 360,
  duration: 5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box", //We’re telling ScrollTrigger, ‘Watch the .box element to decide when to start the animation.’
    start: "top center", //‘When the top of the .box hits the center of the viewport, that’s the moment to begin the animation.’
    markers: true, //This shows little start and end markers right on the screen, so you can see exactly where your trigger points are. Super helpful for debugging!
  },
});